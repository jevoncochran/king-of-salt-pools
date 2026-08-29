"use client";

import { useState, type FormEvent } from "react";
import { submitQuoteRequest } from "@/app/contact/actions";
import {
  contactDays,
  contactTimeSlots,
  howHeardOptions,
} from "@/lib/contact-schedule";
import { siteConfig } from "@/lib/site-config";
import { formatPhoneNumber } from "@/lib/format";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/icons";

const initialFormData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  streetAddress: "",
  city: "",
  howHeard: "",
  preferredDay: "",
  preferredTime: "",
};

type FormData = typeof initialFormData;

const inputClasses =
  "w-full rounded-md border border-navy/15 bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-colors";

const labelClasses = "block text-sm font-semibold text-navy mb-1.5";

export default function ContactForm() {
  const [step, setStep] = useState<"form" | "result">("form");
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  function updateField<K extends keyof FormData>(field: K, value: FormData[K]) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitting(true);
    setSubmitError(false);
    try {
      await submitQuoteRequest(formData);
      setStep("result");
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (step === "result") {
    return (
      <div className="rounded-2xl border border-navy/10 bg-white p-8">
        <div className="flex size-12 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
          <CheckCircleIcon className="size-7" />
        </div>
        <h2 className="mt-4 text-2xl font-extrabold text-navy">
          You&rsquo;re all set, {formData.firstName}!
        </h2>

        <div className="mt-6 rounded-xl bg-navy px-6 py-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
            Estimated Installation Price
          </p>
          <p className="mt-2 text-5xl font-extrabold text-white">$3,599</p>
        </div>

        <div className="mt-6 rounded-lg border border-navy/10 bg-sand p-4 text-sm text-navy/80">
          {formData.preferredDay && formData.preferredTime ? (
            <p>
              We&rsquo;ll aim to call you{" "}
              <span className="font-bold text-navy">
                {formData.preferredDay} around {formData.preferredTime}
              </span>
              . If that time doesn&rsquo;t work out, we&rsquo;ll follow up to
              find one that does.
            </p>
          ) : (
            <p>
              We&rsquo;ll be in touch shortly to confirm the details and get
              your installation scheduled.
            </p>
          )}
          <p className="mt-2 text-navy/60">
            We&rsquo;ll reach you at {formData.phone} or {formData.email}.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setStep("form")}
          className="mt-6 text-sm font-bold uppercase tracking-wide text-gold-dark hover:text-navy transition-colors"
        >
          Need to change something? Edit your info
        </button>

        <p className="mt-3 text-xs leading-relaxed text-navy/50">
          *This price covers most residential pools up to 35,000 gallons. If
          your pool is larger or needs additional equipment, we&rsquo;ll confirm
          final pricing after taking a look.
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-2xl border border-navy/10 bg-white p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClasses}>
            First Name<span className="text-gold-dark">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClasses}>
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number<span className="text-gold-dark">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(555) 555-5555"
            value={formData.phone}
            onChange={(e) => updateField("phone", formatPhoneNumber(e.target.value))}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email<span className="text-gold-dark">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="streetAddress" className={labelClasses}>
            Street Address
          </label>
          <input
            id="streetAddress"
            name="streetAddress"
            type="text"
            value={formData.streetAddress}
            onChange={(e) => updateField("streetAddress", e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="city" className={labelClasses}>
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={(e) => updateField("city", e.target.value)}
            className={inputClasses}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="howHeard" className={labelClasses}>
            How did you hear about us?
          </label>
          <select
            id="howHeard"
            name="howHeard"
            value={formData.howHeard}
            onChange={(e) => updateField("howHeard", e.target.value)}
            className={inputClasses}
          >
            <option value="">Select an option</option>
            {howHeardOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 border-t border-navy/10 pt-6">
        <p className={labelClasses}>Best Time to Reach You</p>
        <p className="text-xs text-navy/50 mb-3">
          Optional — {siteConfig.name} can call Monday through Saturday, 8:00 AM
          to 5:00 PM.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="preferredDay" className="sr-only">
              Preferred Day
            </label>
            <select
              id="preferredDay"
              name="preferredDay"
              value={formData.preferredDay}
              onChange={(e) => updateField("preferredDay", e.target.value)}
              className={inputClasses}
            >
              <option value="">Any day</option>
              {contactDays.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="preferredTime" className="sr-only">
              Preferred Time
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={(e) => updateField("preferredTime", e.target.value)}
              className={inputClasses}
            >
              <option value="">Any time</option>
              {contactTimeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {submitError && (
        <p className="mt-6 text-sm font-semibold text-red-600">
          Something went wrong submitting your request. Please try again or call
          us at {siteConfig.phone}.
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-navy hover:bg-gold-light transition-colors disabled:opacity-60"
      >
        {submitting ? "Submitting..." : "See My Price"}
        {!submitting && <ArrowRightIcon className="size-4" />}
      </button>
      <p className="mt-3 text-center text-xs text-navy/50">
        *Indicates a required field.
      </p>
    </form>
  );
}
