'use client';

import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import * as Button from '@/ui/button';
import * as NewsletterContext from '@/lib/newsletterContext';
import * as React from 'react';
import * as Text from '@/ui/text';
import * as Utils from '@/lib/utils';

import NewsletterSignup from '@/ui/newsletterSignup';

export type DialogProps = {
  heading: string;
  onClose: () => void;
  description: string | React.ReactNode;
  actions?: Button.VariantProps[];
  children?: React.ReactNode;
  disableBackgroundClose?: boolean;
};

const CloseIcon = () => {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33398 3.33337L12.6673 12.6667M12.6673 3.33337L3.33398 12.6667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

const Dialog: React.FC<DialogProps> = ({
  actions,
  children,
  description,
  disableBackgroundClose,
  heading,
  onClose,
}) => {
  return (
    <BaseDialog.Root
      open
      disablePointerDismissal={disableBackgroundClose}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <BaseDialog.Portal>
        <BaseDialog.Backdrop className="dialog-backdrop fixed inset-0 z-[60] bg-black/65 backdrop-blur-[2px]" />
        <BaseDialog.Viewport className="fixed inset-0 z-[61] flex items-center justify-center overflow-y-auto p-4 sm:p-6">
          <BaseDialog.Popup className="dialog-popup pointer-events-none relative w-full max-w-[560px]">
            <div className="dark-theme pointer-events-auto relative overflow-hidden rounded-[28px] border border-outline bg-emphasis/95 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-md">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/15 blur-3xl"
              />
              <div className="relative p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 sm:gap-6">
                  <BaseDialog.Title
                    render={
                      <Text.Display32 as="h2" className="mt-1 min-w-0 text-pretty text-foreground" />
                    }
                  >
                    {heading}
                  </BaseDialog.Title>
                  <BaseDialog.Close
                    aria-label="Close dialog"
                    className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-outline bg-white/[0.06] text-foreground outline-none transition-opacity hover:opacity-70"
                  >
                    <CloseIcon />
                  </BaseDialog.Close>
                </div>
                <div className="mt-4">
                  {typeof description === 'string' ? (
                    <BaseDialog.Description
                      render={<Text.Interface16 as="p" className="text-pretty text-muted" />}
                    >
                      {description}
                    </BaseDialog.Description>
                  ) : (
                    <BaseDialog.Description
                      render={<Text.Interface16 as="div" className="space-y-3 text-pretty text-muted" />}
                    >
                      {description}
                    </BaseDialog.Description>
                  )}
                </div>
                {children && <div className="mt-6 w-full">{children}</div>}
              </div>
              {!!actions?.length && (
                <div className="relative flex flex-col-reverse gap-3 border-t border-outline bg-white/[0.03] px-6 py-5 sm:flex-row sm:justify-end sm:px-8">
                  {actions.map((action, index) => {
                    const key =
                      typeof action.label === 'string'
                        ? `${action.variant}-${action.label}`
                        : `${action.variant}-${index}`;

                    return (
                      <Button.Variant
                        key={key}
                        {...action}
                        inline
                        className={Utils.cx(
                          {
                            'border border-outline bg-white/[0.06]':
                              action.variant === 'secondary',
                          },
                          action.className
                        )}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </BaseDialog.Popup>
        </BaseDialog.Viewport>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
};

export const DialogPreview: React.FC = () => {
  const { isNewsletterDialogVisible, onDismiss } = NewsletterContext.useContext();

  if (!isNewsletterDialogVisible) return null;

  return (
    <Dialog
      heading="Stay Informed. Stay Protected."
      description="Sign up for our general newsletter to learn about Art Guard and the latest in Art Security Technology"
      disableBackgroundClose
      onClose={onDismiss}
    >
      <NewsletterSignup
        heading={null}
        variant="light"
        formClassName="max-w-none mx-0 items-stretch justify-start md:flex-col md:items-stretch md:justify-start"
        statusClassName="justify-start text-left"
      />
    </Dialog>
  );
};

export default Dialog;
