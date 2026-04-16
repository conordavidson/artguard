'use client';

import * as React from 'react';
import * as Button from '@/ui/button';
import * as Inputs from '@/ui/inputs';
import * as Text from '@/ui/text';
import * as Utils from '@/lib/utils';

import Icon from '@/ui/icon';

type State =
  | {
      status: 'IDLE';
      email: string;
    }
  | {
      status: 'PENDING';
      email: string;
    }
  | {
      status: 'SUCCESS';
      email: string;
    }
  | {
      status: 'ERROR';
      error: string;
      email: string;
    };

type Props = {
  heading?: React.ReactNode;
  className?: string;
  headingClassName?: string;
  formClassName?: string;
  statusClassName?: string;
  variant?: 'default' | 'light';
};

const NewsletterSignup: React.FC<Props> = ({
  className,
  formClassName,
  heading = 'Subscribe to learn about the latest in Art Security Technology',
  headingClassName,
  statusClassName,
  variant = 'default',
}) => {
  const [state, setState] = React.useState<State>({
    status: 'IDLE',
    email: '',
  });

  const onChangeEmail = (email: string) => {
    if (state.status === 'PENDING') return;

    setState({
      status: 'IDLE',
      email,
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (state.email.trim() === '') return;
    if (state.status === 'PENDING') return;

    setState({
      status: 'PENDING',
      email: state.email,
    });

    const response = await fetch('/api/leads', {
      method: 'POST',
      body: JSON.stringify({
        email: state.email,
      }),
    });

    if (!response.ok) {
      const data = await response.json();
      if (data.error === 'email_already_subscribed') {
        setState({
          status: 'ERROR',
          email: state.email,
          error: 'email_already_subscribed',
        });
        return;
      }
      setState({
        status: 'ERROR',
        error: 'unknown_error',
        email: state.email,
      });
      return;
    }

    setState({
      status: 'SUCCESS',
      email: state.email,
    });
  };

  const buttonLabel = () => {
    if (state.status === 'PENDING') return 'Submitting...';
    if (state.status === 'SUCCESS') return 'Subscribed!';
    if (state.status === 'ERROR') return 'Error';
    return 'Sign Up';
  };

  return (
    <div className={Utils.cx('relative z-10', className)}>
      {heading && (
        <Text.Interface20
          className={Utils.cx('text-foreground text-center text-balance', headingClassName)}
        >
          {heading}
        </Text.Interface20>
      )}
      <form
        onSubmit={onSubmit}
        className={Utils.cx(
          'flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-3 max-w-[450px] mx-auto',
          {
            'pt-6': !!heading,
          },
          formClassName,
        )}
      >
        <div className="flex-2 w-full">
          <Inputs.Text
            id="email"
            autoComplete="email"
            placeholder="Enter your email"
            value={state.email}
            onChange={onChangeEmail}
            required
            variant={variant}
          />
        </div>
        <div className="flex-1">
          <Button.Primary type="submit">{buttonLabel()}</Button.Primary>
        </div>
      </form>
      {state.status === 'SUCCESS' && (
        <div
          className={Utils.cx(
            'text-green-500 text-center mt-4 flex justify-center items-center gap-x-2',
            statusClassName,
          )}
        >
          <Icon icon="CheckCircle" size={20} />
          <Text.Interface14 bold>Thanks for subscribing!</Text.Interface14>
        </div>
      )}
      {state.status === 'ERROR' && (
        <div
          className={Utils.cx(
            'text-red-500 text-center mt-4 flex justify-center items-center gap-x-2',
            statusClassName,
          )}
        >
          <Icon icon="Alert" size={20} />
          <Text.Interface14 bold>
            {state.error === 'email_already_subscribed'
              ? 'Email already subscribed'
              : 'Failed to subscribe. Please try again.'}
          </Text.Interface14>
        </div>
      )}
    </div>
  );
};

export default NewsletterSignup;
