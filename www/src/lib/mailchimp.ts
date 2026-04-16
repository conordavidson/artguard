import { createHash } from 'node:crypto';

const API_KEY = process.env.MAILCHIMP_API_KEY!;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;

if (!API_KEY) throw new Error('MAILCHIMP_API_KEY is not set');
if (!AUDIENCE_ID) throw new Error('MAILCHIMP_AUDIENCE_ID is not set');

const DATA_CENTER = API_KEY.split('-').at(1);

if (!DATA_CENTER) {
  throw new Error('MAILCHIMP_API_KEY is missing the Mailchimp data center suffix');
}

type UpsertParams = {
  email: string;
  firstName?: string;
  lastName?: string;
};

const getSubscriberHash = (email: string) => {
  return createHash('md5').update(email.trim().toLowerCase()).digest('hex');
};

export const upsert = async (params: UpsertParams) => {
  const email = params.email.trim().toLowerCase();

  const response = await fetch(
    `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${getSubscriberHash(email)}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: 'subscribed',
        merge_fields: {
          ...(params.firstName ? { FNAME: params.firstName } : {}),
          ...(params.lastName ? { LNAME: params.lastName } : {}),
        },
      }),
    }
  );

  const data = await response.json();

  if (response.ok) {
    return {
      success: true as const,
      member: data,
    };
  }

  console.error('Mailchimp upsert failed', {
    status: response.status,
    title: data?.title,
    detail: data?.detail,
  });

  return {
    success: false as const,
    error: data?.detail || 'unknown_error',
  };
};
