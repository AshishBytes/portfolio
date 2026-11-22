import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile } from "../content/profile";
import { siteConfig } from "../app/config";
import { sendContactMessage } from "../services/contact";
import { PageHeader } from "../components/sections/PageHeader";
import { Button, ButtonLink } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Container } from "../components/ui/Container";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your name.")
    .max(100, "Name must be 100 characters or fewer."),
  email: z.email("Enter a valid email address."),
  subject: z
    .string()
    .trim()
    .min(3, "Add a short subject.")
    .max(150, "Subject must be 150 characters or fewer."),
  message: z
    .string()
    .trim()
    .min(10, "Write at least 10 characters.")
    .max(5000, "Message must be 5,000 characters or fewer."),
  company: z.string().max(200).optional(),
});

type ContactValues = z.infer<typeof contactSchema>;
type SubmitState = {
  kind: "idle" | "sending" | "sent" | "mailto" | "error";
  message?: string;
  href?: string;
};

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-page px-4 py-3 text-sm text-ink placeholder:text-subtle focus:border-accent focus:outline-none";

export function ContactPage() {
  const [submitState, setSubmitState] = useState<SubmitState>({ kind: "idle" });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      company: "",
    },
  });

  const onSubmit = async (values: ContactValues) => {
    if (values.company?.trim()) {
      setSubmitState({
        kind: "error",
        message:
          "This message could not be prepared. Please email directly instead.",
      });
      return;
    }
    setSubmitState({ kind: "sending", message: "Preparing your message…" });
    try {
      const { name, email, subject, message } = values;
      const result = await sendContactMessage({
        name,
        email,
        subject,
        message,
      });
      if (result.kind === "mailto") {
        setSubmitState({
          kind: "mailto",
          message: "Your email app can open a draft with these details.",
          href: result.href,
        });
      } else {
        setSubmitState({ kind: "sent", message: "Your message was sent." });
      }
    } catch {
      setSubmitState({
        kind: "error",
        message:
          "The contact service is unavailable. Please email directly instead.",
      });
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start a conversation."
        description="For engineering opportunities, project discussions, or thoughtful collaboration."
      />
      <Container className="grid gap-5 pb-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)]">
        <Card>
          {siteConfig.contactEndpoint ? (
            <form
              className="space-y-5"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <div
                className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="company">Company</label>
                <input
                  autoComplete="off"
                  id="company"
                  tabIndex={-1}
                  {...register("company")}
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium" htmlFor="name">
                    Name
                  </label>
                  <input
                    autoComplete="name"
                    className={fieldClass}
                    id="name"
                    {...register("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p
                      className="mt-1 text-xs text-red-700"
                      id="name-error"
                      role="alert"
                    >
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    autoComplete="email"
                    className={fieldClass}
                    id="email"
                    type="email"
                    {...register("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p
                      className="mt-1 text-xs text-red-700"
                      id="email-error"
                      role="alert"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="subject">
                  Subject
                </label>
                <input
                  className={fieldClass}
                  id="subject"
                  {...register("subject")}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                />
                {errors.subject && (
                  <p
                    className="mt-1 text-xs text-red-700"
                    id="subject-error"
                    role="alert"
                  >
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  className={`${fieldClass} min-h-40 resize-y`}
                  id="message"
                  {...register("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <p
                    className="mt-1 text-xs text-red-700"
                    id="message-error"
                    role="alert"
                  >
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button disabled={isSubmitting} type="submit">
                  {isSubmitting ? "Preparing…" : "Prepare message"}{" "}
                  <ArrowUpRight aria-hidden="true" size={15} />
                </Button>
                <a
                  className="text-sm font-medium text-muted underline decoration-line underline-offset-4 hover:text-accent"
                  href={`mailto:${profile.email}`}
                >
                  Email directly
                </a>
              </div>
              {submitState.message && (
                <p
                  aria-live="polite"
                  className={`m-0 text-sm ${submitState.kind === "error" ? "text-red-700" : "text-muted"}`}
                  role={submitState.kind === "error" ? "alert" : "status"}
                >
                  {submitState.message}
                  {submitState.href && (
                    <>
                      {" "}
                      <a
                        className="font-semibold underline underline-offset-4"
                        href={submitState.href}
                      >
                        Open email draft
                      </a>
                    </>
                  )}
                </p>
              )}
            </form>
          ) : (
            <div className="space-y-5">
              <div>
                <p className="eyebrow">Email Ashish directly</p>
                <p className="mt-3 max-w-prose text-sm leading-6 text-muted">
                  Email is the direct contact option right now. Your email app
                  will open a new message; nothing is submitted or sent by this
                  website.
                </p>
              </div>
              <ButtonLink
                href={`mailto:${profile.email}`}
                icon={<ArrowUpRight aria-hidden="true" size={15} />}
              >
                Email {profile.name}
              </ButtonLink>
              <nav
                aria-label="Professional profiles"
                className="flex flex-wrap gap-x-5 gap-y-3"
              >
                {profile.socials
                  .filter((social) => social.icon !== "mail")
                  .map((social) => (
                    <a
                      className="text-sm font-medium text-muted underline decoration-line underline-offset-4 hover:text-accent"
                      href={social.href}
                      key={social.icon}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {social.label}
                    </a>
                  ))}
              </nav>
            </div>
          )}
        </Card>
        <aside className="space-y-4">
          <Card>
            <p className="eyebrow">Direct contact</p>
            <a
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold hover:text-accent"
              href={`mailto:${profile.email}`}
            >
              <Mail aria-hidden="true" size={16} />
              {profile.email}
            </a>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
              <MapPin aria-hidden="true" size={15} />
              {profile.location}
            </p>
          </Card>
          <Card>
            <p className="text-sm leading-6 text-muted">
              {siteConfig.contactEndpoint
                ? "Messages are sent through the configured contact service."
                : "No contact service is configured. Use the email link to start a message in your email app."}
            </p>
          </Card>
        </aside>
      </Container>
    </>
  );
}
