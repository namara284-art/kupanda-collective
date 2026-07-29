// Documented adapter for outbound form notifications.
//
// No email or database provider is configured in this build (see README.md
// "Configure contact forms"). This function currently only logs that a
// submission was RECEIVED. It never logs the submission's content, since
// form bodies may contain personal data and must not end up in application
// logs or source control.
//
// To go live, implement one of:
//   - Transactional email (Resend, Postmark, SendGrid): POST the payload to
//     their API using a server-only API key from an environment variable.
//   - A form backend (Formspree, Basin): POST the payload to their endpoint.
//   - A database (Supabase, Postgres): insert the row via a server-only
//     client, then trigger your own notification.
//
// Whichever you choose, keep the provider call inside this file so the API
// routes in app/api/* do not need to change.

export type NotifyPayload = Record<string, unknown>;

export async function notify(formName: string, _payload: NotifyPayload): Promise<{ delivered: boolean }> {
  const configured = Boolean(process.env.FORM_NOTIFY_WEBHOOK_URL || process.env.RESEND_API_KEY);

  if (!configured) {
    console.info(`[demo mode] "${formName}" form submission received (no destination configured).`);
    return { delivered: false };
  }

  const webhookUrl = process.env.FORM_NOTIFY_WEBHOOK_URL;
  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ form: formName, submittedAt: new Date().toISOString(), ..._payload }),
    });
    return { delivered: true };
  }

  return { delivered: false };
}
