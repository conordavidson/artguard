'use client';

import * as Analytics from '@/lib/analytics';
import * as Button from '@/ui/button';
import * as Inputs from '@/ui/inputs';
import * as Quiz from '@/lib/quiz';
import * as React from 'react';
import * as Text from '@/ui/text';
import * as Turnstile from '@/ui/turnstile';
import * as Types from '@/lib/types';

import Icon from '@/ui/icon';

type Contact = {
  name: string;
  email: string;
};

export type Lead =
  | {
      status: 'IDLE' | 'PENDING' | 'SUCCESS';
      contact: Contact;
    }
  | {
      status: 'ERROR';
      error: string;
      contact: Contact;
    };

type LeadFormProps = {
  quiz: Types.Quiz;
  answers: Types.QuizAnswers;
  lead: Lead;
  onLeadChange: (lead: Lead) => void;
};

const SUBMIT_ERROR = 'Failed to send. Please try again.';
const SECURITY_CHECK_ERROR = 'Please complete the security check, then try again.';

// 16px text on small screens stops iOS zooming the page when a field is focused.
const INPUT_CLASSNAME = 'h-12! max-md:text-[16px]!';

const LeadForm: React.FC<LeadFormProps> = (props) => {
  const { lead, onLeadChange } = props;
  const {
    containerRef: turnstileRef,
    isVisible: isTurnstileVisible,
    waitForToken: waitForTurnstileToken,
    reset: resetTurnstile,
  } = Turnstile.useTurnstile({ appearance: 'interaction-only' });

  const onChange = (key: keyof Contact, value: string) => {
    onLeadChange({ status: 'IDLE', contact: { ...lead.contact, [key]: value } });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (lead.status === 'PENDING') return;

    const fail = (error: string, reason: 'security_check' | 'request_failed') => {
      Analytics.track('quiz_lead_failed', { quiz_id: props.quiz.id, reason });
      onLeadChange({ status: 'ERROR', error, contact: lead.contact });
    };

    onLeadChange({ status: 'PENDING', contact: lead.contact });

    const cloudflareTurnstileToken = await waitForTurnstileToken();
    if (!cloudflareTurnstileToken) return fail(SECURITY_CHECK_ERROR, 'security_check');

    const response = await fetch('/api/quiz-submissions', {
      method: 'POST',
      body: JSON.stringify({
        name: lead.contact.name,
        email: lead.contact.email,
        answers: props.answers,
        pageUrl: window.location.href,
        cloudflareTurnstileToken,
      }),
    }).catch(() => null);

    if (!response?.ok) {
      // The token is spent once the server has checked it, so get a fresh one for the retry.
      resetTurnstile();
      return fail(SUBMIT_ERROR, 'request_failed');
    }

    const result = Quiz.resolve(props.quiz, props.answers);

    if (result) {
      Analytics.track(
        'quiz_lead_submitted',
        Analytics.quizResultProperties(props.quiz, props.answers, result)
      );
    }

    onLeadChange({ status: 'SUCCESS', contact: lead.contact });
  };

  if (lead.status === 'SUCCESS') {
    return (
      <div role="status">
        <Text.Interface18 bold>{props.quiz.copy.successHeading}</Text.Interface18>
        <Text.Interface14 className="mt-1 text-subtle">{props.quiz.copy.successBody}</Text.Interface14>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-2.5">
      <Text.Interface14 bold>{props.quiz.copy.leadHeading}</Text.Interface14>
      <Inputs.Text
        id="quiz-lead-name"
        ariaLabel="Name"
        placeholder="Your name"
        autoComplete="name"
        className={INPUT_CLASSNAME}
        value={lead.contact.name}
        onChange={(value) => onChange('name', value)}
        required
      />
      <Inputs.Text
        id="quiz-lead-email"
        type="email"
        ariaLabel="Email"
        placeholder="you@example.com"
        autoComplete="email"
        className={INPUT_CLASSNAME}
        value={lead.contact.email}
        onChange={(value) => onChange('email', value)}
        required
      />
      {/* While the widget is hidden, pull the button up so the empty slot adds no extra gap. */}
      <div ref={turnstileRef} className={isTurnstileVisible ? undefined : '-mt-2.5'}></div>
      <Button.Primary type="submit" disabled={lead.status === 'PENDING'} className="h-12!">
        {lead.status === 'PENDING' ? 'Sending...' : props.quiz.copy.leadCta}
      </Button.Primary>
      {lead.status === 'ERROR' && (
        <div role="alert" className="flex items-center gap-x-2 text-red-500">
          <Icon icon="Alert" size={20} />
          <Text.Interface14 bold>{lead.error}</Text.Interface14>
        </div>
      )}
    </form>
  );
};

export default LeadForm;
