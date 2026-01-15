import * as Cloudflare from '@/lib/cloudflare';
import * as Resend from '@/lib/resend';
import * as Z from 'zod';

const contactSubmissionsCreateBody = Z.object({
  name: Z.string().min(1),
  email: Z.email(),
  phone: Z.string().min(1).nullable(),
  typeOfAsset: Z.string().min(1).nullable(),
  typeOfFacility: Z.string().min(1).nullable(),
  response: Z.string().min(1).nullable(),
  timeline: Z.string().min(1).nullable(),
  additionalComments: Z.string().min(1).nullable(),
  cloudflareTurnstileToken: Z.string().min(1),
});

export const POST = async (request: Request) => {
  const body = await request.json();

  const contact = contactSubmissionsCreateBody.safeParse(body);

  if (!contact.success) return Response.json({ error: contact.error.issues }, { status: 400 });

  const cloudflareTurnstileResponse = await Cloudflare.Turnstile.verify(
    contact.data.cloudflareTurnstileToken
  );

  if (!cloudflareTurnstileResponse.success) {
    return Response.json({ error: 'Failed to verify Cloudflare Turnstile token' }, { status: 400 });
  }

  const formattedName = contact.data.name || 'Empty';
  const formattedEmail = contact.data.email || 'Empty';
  const formattedPhone = contact.data.phone || 'Empty';
  const formattedTypeOfAsset = contact.data.typeOfAsset || 'Empty';
  const formattedTypeOfFacility = contact.data.typeOfFacility || 'Empty';
  const formattedResponse = contact.data.response || 'Empty';
  const formattedTimeline = contact.data.timeline || 'Empty';
  const formattedAdditionalComments = contact.data.additionalComments || 'Empty';

  const html = `
    <p>Name: ${formattedName}</p>
    <p>Email: ${formattedEmail}</p>
    <p>Phone: ${formattedPhone}</p>
    <p>Type of Asset: ${formattedTypeOfAsset}</p>
    <p>Type of Facility: ${formattedTypeOfFacility}</p>
    <p>Response: ${formattedResponse}</p>
    <p>Timeline: ${formattedTimeline}</p>
    <p>Additional Comments: ${formattedAdditionalComments}</p>
  `;

  const { error } = await Resend.client.emails.send({
    from: 'Art Guard <info@artguard.net>',
    to: ['info@artguard.net'],
    subject: 'New Contact Form Submission',
    html,
  });

  if (error) {
    console.error('Error sending email', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return Response.json({ message: 'Contact submission created successfully.' }, { status: 200 });
};
