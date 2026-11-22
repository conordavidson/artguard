import * as Cloudflare from '@/lib/cloudflare';
import * as Content from '@/lib/content/quiz';
import * as Quiz from '@/lib/quiz';
import * as Resend from '@/lib/resend';
import * as Utils from '@/lib/utils';
import * as Z from 'zod';

// Set QUIZ_LEADS_TO to send leads somewhere other than the team inbox, e.g. when testing.
const LEADS_TO = process.env.QUIZ_LEADS_TO || 'info@artguard.net';

const quizSubmissionsCreateBody = Z.object({
  name: Z.string().trim().min(1).max(200),
  email: Z.email(),
  answers: Z.record(Z.string(), Z.string()),
  pageUrl: Z.string().max(2000).nullable().optional(),
  cloudflareTurnstileToken: Z.string().min(1),
});

export const POST = async (request: Request) => {
  const body = await request.json().catch(() => null);

  const submission = quizSubmissionsCreateBody.safeParse(body);

  if (!submission.success) {
    return Response.json({ error: submission.error.issues }, { status: 400 });
  }

  const quiz = Content.PROTECTION_QUIZ;

  // The outcome is worked out here from the answers, never taken from the browser.
  const result = Quiz.resolve(quiz, submission.data.answers);

  if (!result) return Response.json({ error: 'Invalid quiz answers' }, { status: 400 });

  const cloudflareTurnstileResponse = await Cloudflare.Turnstile.verify(
    submission.data.cloudflareTurnstileToken
  );

  if (!cloudflareTurnstileResponse.success) {
    return Response.json({ error: 'Failed to verify Cloudflare Turnstile token' }, { status: 400 });
  }

  const segment = result.steps.find((step) => step.questionId === quiz.segmentQuestionId);

  const lines = [
    ['Name', submission.data.name],
    ['Email', submission.data.email],
    ['Recommendation', result.outcome.label],
    ['Score', String(result.score)],
    ...result.steps.map((step) => [step.prompt, step.option.label]),
    ['Page', submission.data.pageUrl || 'Empty'],
  ];

  const html = lines
    .map(([label, value]) => `<p>${Utils.escapeHtml(label)}: ${Utils.escapeHtml(value)}</p>`)
    .join('\n');

  const subject = segment
    ? `New Protection Quiz Lead: ${result.outcome.label} (${segment.option.label})`
    : `New Protection Quiz Lead: ${result.outcome.label}`;

  const { error } = await Resend.client.emails.send({
    from: 'Art Guard <info@artguard.net>',
    to: [LEADS_TO],
    replyTo: submission.data.email,
    subject,
    html,
  });

  if (error) {
    console.error('Error sending email', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return Response.json({ message: 'Quiz submission created successfully.' }, { status: 200 });
};
