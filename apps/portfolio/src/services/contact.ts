import { siteConfig } from "../app/config";
import { profile } from "../content/profile";

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactMessage(message: ContactMessage) {
  if (!siteConfig.contactEndpoint) {
    const body = `From: ${message.name} (${message.email})\n\n${message.message}`;
    const mailto = new URL(`mailto:${profile.email}`);
    mailto.searchParams.set("subject", message.subject);
    mailto.searchParams.set("body", body);
    return { kind: "mailto" as const, href: mailto.toString() };
  }

  const response = await fetch(siteConfig.contactEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(message),
  });
  if (!response.ok)
    throw new Error("The contact service could not accept this message.");
  return { kind: "sent" as const };
}
