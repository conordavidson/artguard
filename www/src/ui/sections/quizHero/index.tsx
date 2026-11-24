'use client';

import * as Analytics from '@/lib/analytics';
import * as Button from '@/ui/button';
import * as Quiz from '@/lib/quiz';
import * as React from 'react';
import * as Text from '@/ui/text';
import * as Types from '@/lib/types';
import * as Utils from '@/lib/utils';

import HomepageHero from '@/ui/homepageHero';
import Image from 'next/image';
import Link from 'next/link';

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
  const compact = !!props.section.compact;

  const [state, setState] = React.useState<State>(INITIAL_STATE);

  const isDone = state.step >= Quiz.askedQuestions(quiz, state.answers).length;

  // On small screens, when a step leaves part of the card off screen, scroll just far enough to
  // show it. This waits for the card to finish easing to its new height. Wider screens don't
  // follow the card as it grows through the questions: its top stays put and only its bottom
  // edge moves. They do bring the result to the middle of the screen.
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

      const { top, height } = card.getBoundingClientRect();

      if (isDone) {
        // Centre the result on screen. Where it's too tall for that, its top sits just under
        // the nav, at the card's scroll margin. At the top of the page there may be nowhere to
        // scroll to, and the card stays where it is.
        const clearOfNav = parseFloat(window.getComputedStyle(card).scrollMarginTop) || 0;
        const centred = (window.innerHeight - height) / 2;

        window.scrollBy({ top: top - Math.max(clearOfNav, centred), behavior });
        return;
      }

      // Only bring the card back if its top has ended up above the screen, e.g. after retaking
      // the quiz from the bottom of a long result.
      if (top < 0) card.scrollIntoView({ block: 'start', behavior });
    }, CARD_RESIZE_IN_MS);

    return () => window.clearTimeout(timeoutId);
  }, [state.step, isDone]);

  const onAnswer = (questionId: string, optionId: string) => {
    const questions = Quiz.askedQuestions(quiz, state.answers);
    const index = questions.findIndex((question) => question.id === questionId);
    const step = index + 1;

    // Re-picking the same answer keeps what follows. A new answer can change the later
    // questions, so their answers are dropped.
    const answers =
      state.answers[questionId] === optionId
        ? state.answers
        : {
            ...Object.fromEntries(
              questions
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

    // The answer just given decides whether another question follows.
    if (step < Quiz.askedQuestions(quiz, answers).length) return;

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
  const scene = sceneId ? props.section.scenes?.[sceneId] : null;

  return (
    <section
      className={Utils.cx(
        'section quiz-hero-section col-span-full grid grid-cols-subgrid',
        props.section.className
      )}
    >
      {/*
        From `md` up the section is tall enough for the longest result, so the card can grow
        without moving anything below it.

        A compact section instead stops short of the bottom of the screen, and grows with the
        card when a result needs the room.
      */}
      <div
        className={Utils.cx(
          'relative col-span-full grid grid-cols-subgrid gap-y-5 pb-10 pt-[calc(var(--nav-height)+0.5rem)] md:pb-16 md:pt-32',
          {
            'md:min-h-[1076px] lg:min-h-[920px]': !compact,
            'md:min-h-[min(1076px,calc(100svh_-_10.5rem))] lg:min-h-[min(920px,calc(100svh_-_10.5rem))]':
              compact,
          }
        )}
      >
        {/*
          The photo has a fixed height from `md` up, so it never re-crops. This frame shows as
          much of it as the section is tall, and the fades at its edges follow.
        */}
        <div
          aria-hidden
          className="absolute inset-0 overflow-hidden md:left-[30%] md:max-h-[1076px] lg:max-h-[920px]"
        >
          <div className="absolute inset-x-0 top-0 h-full md:h-[1076px] lg:h-[920px]">
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
          </div>
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
          {/* Stacked, the buttons sit right above the quiz card, so they get extra room below. */}
          {props.section.ctas && (
            <div className="mt-6 flex flex-wrap gap-3 max-md:mb-5">
              {props.section.ctas.map((cta) => {
                if (cta.type === 'button') return <Button.Variant key={cta.label} inline {...cta} />;

                return (
                  <Link key={cta.label} href={cta.href}>
                    <Text.Interface16
                      bold
                      className="text-foreground underline decoration-dotted transition-opacity hover:opacity-70"
                    >
                      {cta.label}
                    </Text.Interface16>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/*
          A compact section shares out the height the card doesn't use: one part above the card
          to two below. The part above stops at the heading's own offset, so on a tall screen the
          card lines up with the heading, and it rises to the top as the card fills up.
        */}
        <div
          className={Utils.cx(
            'relative z-10 col-start-2 col-end-14 flex flex-col md:col-start-8 md:row-start-1 lg:col-start-2 lg:col-end-15',
            { 'md:before:max-h-20 md:before:flex-1 md:after:flex-[2]': compact }
          )}
        >
          <div
            id="quiz"
            ref={cardRef}
            className="quiz-hero-card w-full scroll-mb-4 scroll-mt-24 gradient-power-light rounded-[20px] px-6 py-5 shadow-[0_28px_70px_rgba(0,0,0,0.16)] backdrop-blur-md md:max-w-[500px] md:self-end md:p-8 lg:max-w-none lg:self-start"
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
