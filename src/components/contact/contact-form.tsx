"use client";

import { ArrowRight } from "lucide-react";
import { type FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactPage } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "failure";

const { form } = contactPage;

// The field is taller and larger-typed than the input primitive's default, so
// the text size carries the important modifier to win regardless of utility
// sort order. Focus styling stays with the primitive.
const fieldClass = "h-11 border-slate-300 bg-white text-sm!";
const labelClass =
  "text-[0.7rem] font-bold tracking-[0.16em] text-brand uppercase";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const data = new FormData(formElement);

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        throw new Error(result?.error ?? form.failure);
      }

      formElement.reset();
      setStatus("success");
    } catch (error) {
      setStatus("failure");
      setErrorMessage(error instanceof Error ? error.message : form.failure);
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <div id="contact-form">
      <h2 className="font-heading text-2xl leading-tight font-extrabold text-brand sm:text-3xl">
        {form.title}
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
        {form.description}
      </p>

      {status === "success" ? (
        <output className="mt-8 block border-t-2 border-brand-accent bg-slate-50 p-7">
          <span className="block text-sm leading-relaxed text-slate-600 sm:text-base">
            {form.success}
          </span>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-5 inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.16em] text-brand-accent uppercase transition-colors hover:text-brand-accent-dark"
          >
            {form.again}
            <ArrowRight className="size-3.5" />
          </button>
        </output>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name" className={labelClass}>
                {form.name.label}
              </Label>
              <Input
                id="name"
                name="name"
                required
                maxLength={120}
                autoComplete="name"
                placeholder={form.name.placeholder}
                className={fieldClass}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email" className={labelClass}>
                {form.email.label}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                maxLength={200}
                autoComplete="email"
                placeholder={form.email.placeholder}
                className={fieldClass}
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone" className={labelClass}>
              {form.phone.label}
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              maxLength={40}
              autoComplete="tel"
              placeholder={form.phone.placeholder}
              className={fieldClass}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message" className={labelClass}>
              {form.message.label}
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={6}
              maxLength={5000}
              placeholder={form.message.placeholder}
              className="min-h-32 border-slate-300 bg-white text-sm!"
            />
          </div>

          {/* Honeypot: hidden from people and assistive tech, tempting to bots. */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {status === "failure" ? (
            <p
              role="alert"
              className="border-l-2 border-destructive bg-destructive/5 px-4 py-3 text-sm text-destructive"
            >
              {errorMessage || form.failure}
            </p>
          ) : null}

          <div className="pt-1">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="h-11 gap-2 bg-brand-accent px-7 text-[0.72rem] font-bold tracking-[0.16em] text-white uppercase hover:bg-brand-accent-dark"
            >
              {isSubmitting ? `${form.submitting}...` : form.submit}
              {isSubmitting ? null : <ArrowRight className="size-4" />}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
