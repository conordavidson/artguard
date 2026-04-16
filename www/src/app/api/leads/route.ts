import * as Mailchimp from '@/lib/mailchimp';
import * as Zod from 'zod';

export const LeadsCreateRequest = Zod.object({
  email: Zod.email(),
  firstName: Zod.string().min(1).optional(),
  lastName: Zod.string().min(1).optional(),
});

export const POST = async (request: Request) => {
  const body = await request.json();
  const validated = LeadsCreateRequest.safeParse(body);

  if (!validated.success) {
    return Response.json({ error: validated.error.message }, { status: 400 });
  }

  const result = await Mailchimp.upsert(validated.data);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: 400 });
  }

  return Response.json({ lead: result.member }, { status: 201 });
};
