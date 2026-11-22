import * as Types from '@/lib/types';

const matches = (when: Types.QuizAnswers, answers: Types.QuizAnswers) => {
  return Object.entries(when).every(([questionId, optionId]) => answers[questionId] === optionId);
};

/*
The prompt and options to show for a question, given the answers so far.
*/
export const questionFor = (
  question: Types.QuizQuestion,
  answers: Types.QuizAnswers
): Types.QuizQuestionContent => {
  const variant = question.variants?.find((variant) => matches(variant.when, answers));
  return variant ?? question;
};

export type Step = {
  questionId: string;
  prompt: string;
  option: Types.QuizOption;
};

export type Result = {
  steps: Step[];
  score: number;
  outcome: Types.QuizOutcomeCopy & Pick<Types.QuizOutcome, 'id' | 'label' | 'cta'>;
};

const outcomeMatches = (outcome: Types.QuizOutcome, score: number, flags: Set<string>) => {
  if (!outcome.when) return true;
  if (outcome.when.maxScore !== undefined && score > outcome.when.maxScore) return false;
  if (outcome.when.flags && !outcome.when.flags.every((flag) => flags.has(flag))) return false;
  return true;
};

/*
Resolves a full set of answers to an outcome.
Returns null when a question is unanswered or an answer isn't one of that question's options.
*/
export const resolve = (quiz: Types.Quiz, answers: Types.QuizAnswers): Result | null => {
  const steps: Step[] = [];

  for (const question of quiz.questions) {
    const content = questionFor(question, answers);
    const option = content.options.find((option) => option.id === answers[question.id]);
    if (!option) return null;
    steps.push({ questionId: question.id, prompt: content.prompt, option });
  }

  const score = steps.reduce((total, step) => total + step.option.points, 0);
  const flags = new Set(steps.flatMap((step) => step.option.flags ?? []));

  const outcome = quiz.outcomes.find((outcome) => outcomeMatches(outcome, score, flags));
  if (!outcome) return null;

  const variant = outcome.variants?.find((variant) => matches(variant.when, answers));

  return {
    steps,
    score,
    outcome: {
      id: outcome.id,
      label: outcome.label,
      cta: outcome.cta,
      title: variant?.title ?? outcome.title,
      summary: variant?.summary ?? outcome.summary,
      bullets: variant?.bullets ?? outcome.bullets,
      note: variant?.note ?? outcome.note,
    },
  };
};

const everyPath = (quiz: Types.Quiz): Types.QuizAnswers[] => {
  return quiz.questions.reduce<Types.QuizAnswers[]>(
    (paths, question) =>
      paths.flatMap((answers) =>
        questionFor(question, answers).options.map((option) => ({
          ...answers,
          [question.id]: option.id,
        }))
      ),
    [{}]
  );
};

/*
Counts how many answer paths reach each outcome, grouped by the answer to the segment question.
*/
export const tally = (quiz: Types.Quiz) => {
  const counts: Record<string, Record<string, number>> = {};

  for (const answers of everyPath(quiz)) {
    const result = resolve(quiz, answers);
    if (!result) throw new Error(`Quiz "${quiz.id}": no outcome for ${JSON.stringify(answers)}`);
    const segment = answers[quiz.segmentQuestionId];
    counts[segment] = counts[segment] ?? {};
    counts[segment][result.outcome.id] = (counts[segment][result.outcome.id] ?? 0) + 1;
  }

  return counts;
};

const duplicates = (ids: string[]) => ids.filter((id, index) => ids.indexOf(id) !== index);

/*
Throws if a quiz definition is inconsistent: duplicate ids, a `when` that points at an unknown
or later answer, or an answer path that reaches no outcome.
*/
export const assertValid = (quiz: Types.Quiz) => {
  const fail = (message: string) => {
    throw new Error(`Quiz "${quiz.id}": ${message}`);
  };

  const questionIds = quiz.questions.map((question) => question.id);
  if (duplicates(questionIds).length) fail(`duplicate question ids ${duplicates(questionIds)}`);
  if (!questionIds.includes(quiz.segmentQuestionId)) fail('unknown segmentQuestionId');

  const optionIdsFor = (question: Types.QuizQuestion) => {
    return [question, ...(question.variants ?? [])].flatMap((content) =>
      content.options.map((option) => option.id)
    );
  };

  const assertWhen = (when: Types.QuizAnswers, allowedQuestionIds: string[], where: string) => {
    for (const [questionId, optionId] of Object.entries(when)) {
      const question = quiz.questions.find((question) => question.id === questionId);
      if (!question || !allowedQuestionIds.includes(questionId)) {
        fail(`${where} depends on "${questionId}", which isn't answered by then`);
      } else if (!optionIdsFor(question).includes(optionId)) {
        fail(`${where} depends on unknown answer "${questionId}: ${optionId}"`);
      }
    }
  };

  quiz.questions.forEach((question, index) => {
    for (const content of [question, ...(question.variants ?? [])]) {
      const optionIds = content.options.map((option) => option.id);
      if (duplicates(optionIds).length) fail(`duplicate option ids in "${question.id}"`);
    }
    for (const variant of question.variants ?? []) {
      assertWhen(variant.when, questionIds.slice(0, index), `a variant of "${question.id}"`);
    }
  });

  const outcomeIds = quiz.outcomes.map((outcome) => outcome.id);
  if (duplicates(outcomeIds).length) fail(`duplicate outcome ids ${duplicates(outcomeIds)}`);

  for (const outcome of quiz.outcomes) {
    for (const variant of outcome.variants ?? []) {
      assertWhen(variant.when, questionIds, `a variant of outcome "${outcome.id}"`);
    }
  }

  tally(quiz);
};
