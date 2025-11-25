const BASE_URL = 'https://api.wishpond.com/api/v1';

const API_KEY = 'b9bb7f0a0e2f4e58b43434f60eb8bf2f';

export const Leads = {
  create: async (params: { email: string; firstName?: string; lastName?: string }) => {
    const response = await fetch(`${BASE_URL}/leads`, {
      method: 'POST',
      body: JSON.stringify({
        email: params.email,
        first_name: params.firstName,
        last_name: params.lastName,
      }),
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Token': API_KEY,
      },
    });

    const data = await response.json();

    console.log('data', data);

    if (!data.errors) return { success: true, lead: data.lead };

    if (data.errors?.email?.[0] === 'is already taken') {
      return { success: false, error: 'email_already_subscribed' };
    }

    return { success: false, error: 'unknown_error' };
  },
};
