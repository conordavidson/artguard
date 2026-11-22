import * as Quiz from '@/lib/quiz';
import * as Types from '@/lib/types';

import posthog from 'posthog-js';

// One property per answered question, e.g. `answer_location: 'private'`.
type QuizAnswerProperties = Record<`answer_${string}`, string>;

type QuizResultProperties = QuizAnswerProperties & {
  quiz_id: string;
  outcome_id: string;
  outcome_label: string;
};

type FailureReason = 'security_check' | 'request_failed';

/*
Every event the site sends to PostHog.
Names, emails and other contact details never go in event properties.
*/
type Events = {
  quiz_question_answered: QuizAnswerProperties & {
    quiz_id: string;
    question_id: string;
    question_number: number;
    option_id: string;
  };
  quiz_completed: QuizResultProperties;
  quiz_lead_submitted: QuizResultProperties;
  quiz_lead_failed: { quiz_id: string; reason: FailureReason };
  contact_form_submitted: {
    type_of_facility: string | null;
    response: string | null;
    timeline: string | null;
  };
  contact_form_failed: { reason: FailureReason };
};

export const track = <Name extends keyof Events>(name: Name, properties: Events[Name]) => {
  // PostHog is set up in instrumentation-client.ts. Without a key it never loads.
  if (!posthog.__loaded) return;
  posthog.capture(name, properties);
};

export const quizAnswerProperties = (answers: Types.QuizAnswers): QuizAnswerProperties => {
  return Object.fromEntries(
    Object.entries(answers).map(([questionId, optionId]) => [`answer_${questionId}`, optionId])
  );
};

export const quizResultProperties = (
  quiz: Types.Quiz,
  answers: Types.QuizAnswers,
  result: Quiz.Result
): QuizResultProperties => {
  return {
    quiz_id: quiz.id,
    outcome_id: result.outcome.id,
    outcome_label: result.outcome.label,
    ...quizAnswerProperties(answers),
  };
};
