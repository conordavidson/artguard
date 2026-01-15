const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const SECRET_KEY = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY!;

if (!SECRET_KEY) throw new Error('CLOUDFLARE_TURNSTILE_SECRET_KEY is not set');

export const Turnstile = {
  verify: (token: string) => {
    return fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: SECRET_KEY,
        response: token,
      }),
    })
      .then(async (response) => {
        return response.json();
      })
      .then((json) => {
        if (json.success === true) return { success: true, data: json };
        return { success: false, error: json.error_codes };
      })
      .catch((error) => {
        console.error('Error verifying Cloudflare Turnstile token', error.message);
        return { success: false, error: error.message };
      });
  },
};
