'use client';

import * as Quiz from '@/lib/quiz';
import * as React from 'react';
import * as Text from '@/ui/text';
import * as Types from '@/lib/types';
import * as Utils from '@/lib/utils';

import AnimatedHeight from '@/ui/animatedHeight';
import Icon from '@/ui/icon';
import Link from 'next/link';

import LeadForm, { type Lead } from './leadForm';

type PanelProps = {
  quiz: Types.Quiz;
  // Index of the question on screen. Past the last question, the result is shown.
  step: number;
  answers: Types.QuizAnswers;
  lead: Lead;
  onAnswer: (questionId: string, optionId: string) => void;
  onBack: () => void;
  onRestart: () => void;
  onLeadChange: (lead: Lead) => void;
};

// How long a picked answer stays highlighted before the quiz moves on.
const SELECTION_HOLD_IN_MS = 250;

// How long the outgoing step takes to leave. Matches `.quiz-step-out` in globals.css.
const STEP_EXIT_IN_MS = 120;

type Direction = 'forward' | 'back';

// The step on screen is either settled, leaving, or has just arrived.
type Motion = { phase: 'idle' } | { phase: 'out' | 'in'; direction: Direction };

const FOCUS_RING =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground';

const TextButton: React.FC<React.PropsWithChildren<{ onClick: () => void }>> = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={Utils.cx(
        'interface-14-bold cursor-pointer py-2 underline underline-offset-2 transition-colors hover:text-brand',
        FOCUS_RING
      )}
    >
      {props.children}
    </button>
  );
};

type OptionCardProps = {
  option: Types.QuizOption;
  selected: boolean;
  onClick: () => void;
};

const OptionCard: React.FC<OptionCardProps> = (props) => {
  return (
    <button
      type="button"
      aria-pressed={props.selected}
      onClick={props.onClick}
      className={Utils.cx(
        'flex w-full cursor-pointer flex-col justify-center gap-y-0.5 rounded-xl px-4 py-[18px] text-left transition-colors',
        FOCUS_RING,
        {
          'bg-shim hover:bg-outline': !props.selected,
          'bg-emphasis text-white': props.selected,
        }
      )}
    >
      <Text.Interface16 bold as="span">
        {props.option.label}
      </Text.Interface16>
      {props.option.sub && (
        <Text.Interface16
          as="span"
          className={Utils.cx({
            'text-subtle': !props.selected,
            'text-white/70': props.selected,
          })}
        >
          {props.option.sub}
        </Text.Interface16>
      )}
    </button>
  );
};

const ProgressBar: React.FC<{ value: number; max: number; label: string }> = (props) => {
  return (
    <div
      role="progressbar"
      aria-label={props.label}
      aria-valuemin={0}
      aria-valuemax={props.max}
      aria-valuenow={props.value}
      className="h-[5px] overflow-hidden rounded-full bg-shim"
    >
      <div
        className="h-full rounded-full bg-brand transition-[width] duration-300"
        style={{ width: `${(props.value / props.max) * 100}%` }}
      />
    </div>
  );
};

const Panel: React.FC<PanelProps> = (props) => {
  const { quiz, step, answers } = props;

  const total = quiz.questions.length;
  const isDone = step >= total;

  // Move focus to the new heading on each step, so keyboard and screen reader users follow along.
  const headingRef = React.useRef<HTMLHeadingElement | null>(null);
  const previousStepRef = React.useRef(step);

  React.useEffect(() => {
    if (previousStepRef.current === step) return;
    previousStepRef.current = step;
    headingRef.current?.focus({ preventScroll: true });
  }, [step]);

  // The answer being held on screen before the quiz moves on.
  const [held, setHeld] = React.useState<{ questionId: string; optionId: string } | null>(null);
  const [motion, setMotion] = React.useState<Motion>({ phase: 'idle' });
  const timeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const isBusy = held !== null || motion.phase === 'out';

  // Slides the current step out, applies the change, then lets the next step slide in.
  const go = (direction: Direction, change: () => void) => {
    setMotion({ phase: 'out', direction });

    timeoutRef.current = window.setTimeout(() => {
      timeoutRef.current = null;
      change();
      setHeld(null);
      setMotion({ phase: 'in', direction });
    }, STEP_EXIT_IN_MS);
  };

  const onSelect = (questionId: string, optionId: string) => {
    if (isBusy) return;

    setHeld({ questionId, optionId });

    timeoutRef.current = window.setTimeout(() => {
      go('forward', () => props.onAnswer(questionId, optionId));
    }, SELECTION_HOLD_IN_MS);
  };

  const onBack = () => {
    if (isBusy) return;
    go('back', props.onBack);
  };

  const onRestart = () => {
    if (isBusy) return;
    go('back', props.onRestart);
  };

  const body = (() => {
    if (!isDone) {
      const question = quiz.questions[step];
      const content = Quiz.questionFor(question, answers);
      const selectedOptionId =
        held?.questionId === question.id ? held.optionId : answers[question.id];

      return (
        <>
          <Text.Display24 as="h2" ref={headingRef} tabIndex={-1} className="text-pretty outline-none">
            {content.prompt}
          </Text.Display24>
          <div className="mt-4 flex flex-col gap-y-2.5 md:mt-5">
            {content.options.map((option) => (
              <OptionCard
                key={option.id}
                option={option}
                selected={selectedOptionId === option.id}
                onClick={() => onSelect(question.id, option.id)}
              />
            ))}
          </div>
          <div className="mt-3 flex min-h-9 items-center">
            {step === 0 ? (
              <Text.Interface12 className="ml-auto text-right text-subtle">
                {quiz.copy.footnote}
              </Text.Interface12>
            ) : (
              <TextButton onClick={onBack}>Back</TextButton>
            )}
          </div>
        </>
      );
    }

    const result = Quiz.resolve(quiz, answers);
    if (!result) return null;

    return (
      <>
        <Text.Display32 as="h2" ref={headingRef} tabIndex={-1} className="text-pretty outline-none">
          {result.outcome.title}
        </Text.Display32>
        <Text.Interface16 className="mt-3 text-subtle">{result.outcome.summary}</Text.Interface16>
        <ul className="mt-4 flex list-none! flex-col gap-y-2">
          {result.outcome.bullets.map((bullet) => (
            <li key={bullet} className="mb-0! flex items-start gap-x-2.5">
              <Icon icon="CheckCircle" size={20} className="shrink-0 text-brand" />
              <Text.Interface16 as="span">{bullet}</Text.Interface16>
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-lg bg-shim px-4 py-3">
          <Text.Interface16 className="text-muted">
            <strong className="text-foreground">{result.outcome.note.label}.</strong>{' '}
            {result.outcome.note.body}
          </Text.Interface16>
        </div>
        <div className="mt-5">
          <LeadForm
            quiz={quiz}
            answers={answers}
            lead={props.lead}
            onLeadChange={props.onLeadChange}
          />
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-x-5">
          <TextButton onClick={onRestart}>Retake the quiz</TextButton>
          {result.outcome.cta && (
            <Link
              href={result.outcome.cta.href}
              className={Utils.cx(
                'interface-14-bold ml-auto py-2 text-brand underline underline-offset-2 transition-opacity hover:opacity-70',
                FOCUS_RING
              )}
            >
              {result.outcome.cta.label}
            </Link>
          )}
        </div>
      </>
    );
  })();

  return (
    <div>
      <div className="flex items-center justify-between gap-x-4">
        <Text.Interface14 bold className="text-brand">
          {quiz.copy.eyebrow}
        </Text.Interface14>
        <Text.Interface14 className="text-subtle">
          {isDone ? quiz.copy.matchLabel : `Question ${step + 1} of ${total}`}
        </Text.Interface14>
      </div>
      <div className="mt-3">
        <ProgressBar value={Math.min(step + 1, total)} max={total} label={quiz.copy.eyebrow} />
      </div>
      {/* The padding and negative margin leave room for focus rings inside the clipped area. */}
      <AnimatedHeight className="-m-1 mt-3 md:mt-5">
        <div
          key={step}
          className={Utils.cx('p-1', {
            'quiz-step-out': motion.phase === 'out',
            'quiz-step-in': motion.phase === 'in',
            'quiz-step-back': motion.phase !== 'idle' && motion.direction === 'back',
          })}
        >
          {body}
        </div>
      </AnimatedHeight>
    </div>
  );
};

export default Panel;
