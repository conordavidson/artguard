import * as React from 'react';
import * as Button from '@/ui/button';
import * as Inputs from '@/ui/inputs';
import * as Page from '@/ui/page';
import * as Text from '@/ui/text';

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

const NewsletterSignup = () => {
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

    setTimeout(() => {
      setState({
        status: 'SUCCESS',
        email: state.email,
      });
    }, 1000);
  };

  const buttonLabel = () => {
    if (state.status === 'PENDING') return 'Submitting...';
    if (state.status === 'SUCCESS') return 'Subscribed!';
    if (state.status === 'ERROR') return 'Error';
    return 'Sign Up';
  };

  return (
    <div className="relative z-10 grid grid-cols-subgrid col-span-full">
      <Page.Container>
        <Text.Interface20 className="text-foreground text-center text-balance">
          Subscribe to learn about the latest in Art Security Technology
        </Text.Interface20>
        <form
          onSubmit={onSubmit}
          className="pt-6 flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-3 max-w-[500px] mx-auto"
        >
          <div className="flex-2 w-full">
            <Inputs.Text
              id="email"
              autoComplete="email"
              placeholder="Enter your email"
              value={state.email}
              onChange={onChangeEmail}
              required
            />
          </div>
          <div className="flex-1">
            <Button.Primary type="submit">{buttonLabel()}</Button.Primary>
          </div>
        </form>
      </Page.Container>
    </div>
  );
};

export default NewsletterSignup;
