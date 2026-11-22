'use client';

import * as Analytics from '@/lib/analytics';
import * as Quiz from '@/lib/quiz';
import * as React from 'react';
import * as Text from '@/ui/text';
import * as Types from '@/lib/types';
import * as Utils from '@/lib/utils';

import HomepageHero from '@/ui/homepageHero';
import Image from 'next/image';

import Panel from './panel';
import { type Lead } from './leadForm';

type QuizHeroProps = {
  section: Types.QuizHeroSection;
};

type State = {
  step: number;
  answers: Types.QuizAnswers;
  lead: Lead;
};

const INITIAL_STATE: State = {
  step: 0,
  answers: {},
  lead: { status: 'IDLE', contact: { name: '', email: '' } },
};

// A little longer than the card's height transition.
const CARD_RESIZE_IN_MS = 280;

// Below Tailwind's `md` breakpoint, where the quiz is stacked under the heading.
const STACKED_QUERY = '(max-width: 767px)';

const QuizHero: React.FC<QuizHeroProps> = (props) => {
  const { quiz } = props.section;

  const [state, setState] = React.useState<State>(INITIAL_STATE);

  // On small screens, when a step leaves part of the card off screen, scroll just far enough to
  // show it. This waits for the card to finish easing to its new height. Wider screens don't
  // follow the card as it grows: its top stays put and only its bottom edge moves.
  const cardRef = React.useRef<HTMLDivElement | null>(null);
  const previousStepRef = React.useRef(state.step);

  React.useEffect(() => {
    if (previousStepRef.current === state.step) return;
    previousStepRef.current = state.step;

    const timeoutId = window.setTimeout(() => {
      const card = cardRef.current;
      if (!card) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const behavior = prefersReducedMotion ? 'auto' : 'smooth';

      if (window.matchMedia(STACKED_QUERY).matches) {
        card.scrollIntoView({ block: 'nearest', behavior });
        return;
      }

      // Only bring the card back if its top has ended up above the screen, e.g. after retaking
      // the quiz from the bottom of a long result.
      if (card.getBoundingClientRect().top < 0) card.scrollIntoView({ block: 'start', behavior });
    }, CARD_RESIZE_IN_MS);

    return () => window.clearTimeout(timeoutId);
  }, [state.step]);

  const onAnswer = (questionId: string, optionId: string) => {
    const index = quiz.questions.findIndex((question) => question.id === questionId);
    const step = index + 1;

    // Re-picking the same answer keeps what follows. A new answer can change the later
    // questions, so their answers are dropped.
    const answers =
      state.answers[questionId] === optionId
        ? state.answers
        : {
            ...Object.fromEntries(
              quiz.questions
                .slice(0, index)
                .map((question) => [question.id, state.answers[question.id]])
            ),
            [questionId]: optionId,
          };

    setState((prevState) => ({ ...prevState, step, answers }));

    Analytics.track('quiz_question_answered', {
      quiz_id: quiz.id,
      question_id: questionId,
      question_number: step,
      option_id: optionId,
      ...Analytics.quizAnswerProperties(answers),
    });

    if (step < quiz.questions.length) return;

    const result = Quiz.resolve(quiz, answers);
    if (result) Analytics.track('quiz_completed', Analytics.quizResultProperties(quiz, answers, result));
  };

  const onBack = () => {
    setState((prevState) => ({ ...prevState, step: Math.max(0, prevState.step - 1) }));
  };

  const onRestart = () => {
    setState((prevState) => ({
      ...INITIAL_STATE,
      lead: { status: 'IDLE', contact: prevState.lead.contact },
    }));
  };

  const onLeadChange = (lead: Lead) => {
    setState((prevState) => ({ ...prevState, lead }));
  };

  const segmentIndex = quiz.questions.findIndex(
    (question) => question.id === quiz.segmentQuestionId
  );
  const sceneId = state.step > segmentIndex ? state.answers[quiz.segmentQuestionId] : null;
  const scene = sceneId ? props.section.scenes[sceneId] : null;

  return (
    <section
      className={Utils.cx(
        'section quiz-hero-section col-span-full grid grid-cols-subgrid',
        props.section.className
      )}
    >
      <div className="relative col-span-full grid grid-cols-subgrid gap-y-5 pb-10 pt-[calc(var(--nav-height)+0.5rem)] md:min-h-[1096px] md:pb-16 md:pt-32 lg:min-h-[950px]">
        {/*
          From `md` up the section is tall enough for the longest result, so the card can grow
          without moving anything below it. The photo has the same fixed height, so it never
          re-crops.
        */}
        <div
          aria-hidden
          className="absolute inset-0 overflow-hidden md:bottom-auto md:left-[30%] md:h-[1096px] lg:h-[950px]"
        >
          <div className="absolute inset-0 isolate">
            <HomepageHero />
          </div>
          {scene && (
            <Image
              key={sceneId}
              src={scene}
              alt=""
              sizes="(min-width: 768px) 75vw, 100vw"
              placeholder="blur"
              className="fadeIn absolute inset-0 h-full w-full object-cover"
            />
          )}
          <div className="gradient-white-scrim absolute inset-0 md:hidden"></div>
          <div className="gradient-white-horizontal absolute inset-0 hidden md:block"></div>
          <div className="gradient-white-vertical absolute inset-0 hidden md:block"></div>
        </div>

        <div className="relative z-10 col-start-2 col-end-14 md:col-end-7 md:row-start-1 md:mt-20 md:max-w-[430px] md:self-start">
          <Text.Display32 as="h1" className="text-pretty">
            {props.section.heading}
          </Text.Display32>
          {props.section.subheading && (
            <Text.Interface18 className="mt-3 text-subtle md:mt-4 max-md:[@media(max-height:700px)]:hidden">
              {props.section.subheading}
            </Text.Interface18>
          )}
          {props.section.body && (
            <Text.Interface16 className="mt-6 hidden text-muted md:block">
              {props.section.body}
            </Text.Interface16>
          )}
        </div>

        <div
          id="quiz"
          ref={cardRef}
          className="quiz-hero-card relative z-10 col-start-2 col-end-14 w-full scroll-mb-4 scroll-mt-24 rounded-[20px] bg-background/95 p-4 shadow-[0_28px_70px_rgba(0,0,0,0.16)] backdrop-blur-md md:col-start-8 md:row-start-1 md:max-w-[500px] md:self-start md:justify-self-end md:p-8 lg:col-start-2 lg:col-end-15 lg:max-w-none lg:justify-self-start"
        >
          <Panel
            quiz={quiz}
            step={state.step}
            answers={state.answers}
            lead={state.lead}
            onAnswer={onAnswer}
            onBack={onBack}
            onRestart={onRestart}
            onLeadChange={onLeadChange}
          />
        </div>

        {props.section.body && (
          <Text.Interface16 className="relative z-10 col-start-2 col-end-14 text-muted md:hidden">
            {props.section.body}
          </Text.Interface16>
        )}
      </div>

    </section>
  );
};

export default QuizHero;
