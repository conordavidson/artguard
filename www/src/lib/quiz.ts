import * as Types from '@/lib/types';

const matches = (when: Types.QuizAnswers, answers: Types.QuizAnswers) => {
  return Object.entries(when).every(([questionId, optionId]) => answers[questionId] === optionId);
};

const matchesAny = (alternatives: Types.QuizAnswers[] | undefined, answers: Types.QuizAnswers) => {
  return !alternatives || alternatives.some((when) => matches(when, answers));
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

/*
The questions a visitor with these answers is asked, in order.
A question that depends on an earlier answer only appears once that answer is given.
*/
export const askedQuestions = (quiz: Types.Quiz, answers: Types.QuizAnswers) => {
  return quiz.questions.filter((question) => matchesAny(question.when, answers));
};

export type Step = {
  questionId: string;
  prompt: string;
  option: Types.QuizOption;
};

export type Result = {
  steps: Step[];
  outcome: Types.QuizOutcomeCopy & Pick<Types.QuizOutcome, 'id' | 'label' | 'cta'>;
};

/*
Resolves a full set of answers to an outcome.
Returns null when a question on the visitor's path is unanswered or an answer isn't one of that
question's options. Answers to questions that aren't on the path are ignored.
*/
export const resolve = (quiz: Types.Quiz, answers: Types.QuizAnswers): Result | null => {
  const steps: Step[] = [];
  const given: Types.QuizAnswers = {};

  for (const question of quiz.questions) {
    if (!matchesAny(question.when, given)) continue;

    const content = questionFor(question, given);
    const option = content.options.find((option) => option.id === answers[question.id]);
    if (!option) return null;

    given[question.id] = option.id;
    steps.push({ questionId: question.id, prompt: content.prompt, option });
  }

  const outcome = quiz.outcomes.find((outcome) => matchesAny(outcome.when, given));
  if (!outcome) return null;

  const variant = outcome.variants?.find((variant) => matches(variant.when, given));

  return {
    steps,
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

/*
Every complete set of answers that continues from the answers given.
*/
const completions = (quiz: Types.Quiz, answers: Types.QuizAnswers): Types.QuizAnswers[] => {
  return quiz.questions.reduce<Types.QuizAnswers[]>(
    (paths, question) =>
      paths.flatMap((path) => {
        if (!matchesAny(question.when, path)) return [path];
        if (path[question.id] !== undefined) return [path];

        return questionFor(question, path).options.map((option) => ({
          ...path,
          [question.id]: option.id,
        }));
      }),
    [answers]
  );
};

/*
The most questions a visitor with these answers could still be asked in total.
Paths differ in length, so this is what progress is measured against.
*/
export const longestPath = (quiz: Types.Quiz, answers: Types.QuizAnswers) => {
  return Math.max(
    ...completions(quiz, answers).map((path) => askedQuestions(quiz, path).length)
  );
};

/*
Counts how many answer paths reach each outcome, grouped by the answer to the segment question.
*/
export const tally = (quiz: Types.Quiz) => {
  const counts: Record<string, Record<string, number>> = {};

  for (const answers of completions(quiz, {})) {
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
    const earlierQuestionIds = questionIds.slice(0, index);

    for (const content of [question, ...(question.variants ?? [])]) {
      const optionIds = content.options.map((option) => option.id);
      if (duplicates(optionIds).length) fail(`duplicate option ids in "${question.id}"`);
    }
    for (const when of question.when ?? []) {
      assertWhen(when, earlierQuestionIds, `question "${question.id}"`);
    }
    for (const variant of question.variants ?? []) {
      assertWhen(variant.when, earlierQuestionIds, `a variant of "${question.id}"`);
    }
  });

  const outcomeIds = quiz.outcomes.map((outcome) => outcome.id);
  if (duplicates(outcomeIds).length) fail(`duplicate outcome ids ${duplicates(outcomeIds)}`);

  for (const outcome of quiz.outcomes) {
    for (const when of outcome.when ?? []) {
      assertWhen(when, questionIds, `outcome "${outcome.id}"`);
    }
    for (const variant of outcome.variants ?? []) {
      assertWhen(variant.when, questionIds, `a variant of outcome "${outcome.id}"`);
    }
  }

  tally(quiz);
};
