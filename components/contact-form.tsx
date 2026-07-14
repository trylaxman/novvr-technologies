"use client";

import {
  useActionState,
  useEffect,
  useRef,
} from "react";

import { submitProjectEnquiry } from "@/app/contact/actions";
import { initialProjectEnquiryFormState } from "@/app/contact/form-state";

type FieldErrorProps = {
  id: string;
  errors?: string[];
};

function FieldError({ id, errors }: FieldErrorProps) {
  if (!errors?.length) {
    return null;
  }

  return (
    <span id={id} className="field-error" role="alert">
      {errors[0]}
    </span>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, isPending] = useActionState(
    submitProjectEnquiry,
    initialProjectEnquiryFormState,
  );

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="contact-form"
      noValidate
    >
      <div className="form-field">
        <label htmlFor="name">
          Name <span aria-hidden="true">*</span>
        </label>

        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          required
          maxLength={100}
          aria-invalid={
            state.fieldErrors?.name ? true : undefined
          }
          aria-describedby={
            state.fieldErrors?.name
              ? "name-error"
              : undefined
          }
        />

        <FieldError
          id="name-error"
          errors={state.fieldErrors?.name}
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">
          Work email <span aria-hidden="true">*</span>
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@company.com"
          required
          maxLength={254}
          aria-invalid={
            state.fieldErrors?.email ? true : undefined
          }
          aria-describedby={
            state.fieldErrors?.email
              ? "email-error"
              : undefined
          }
        />

        <FieldError
          id="email-error"
          errors={state.fieldErrors?.email}
        />
      </div>

      <div className="form-field">
        <label htmlFor="company">
          Company <span className="optional-label">Optional</span>
        </label>

        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Company or organisation"
          maxLength={150}
          aria-invalid={
            state.fieldErrors?.company ? true : undefined
          }
          aria-describedby={
            state.fieldErrors?.company
              ? "company-error"
              : undefined
          }
        />

        <FieldError
          id="company-error"
          errors={state.fieldErrors?.company}
        />
      </div>

      <div className="form-field">
        <label htmlFor="service">
          What do you need help with?{" "}
          <span aria-hidden="true">*</span>
        </label>

        <select
          id="service"
          name="service"
          defaultValue=""
          required
          aria-invalid={
            state.fieldErrors?.service ? true : undefined
          }
          aria-describedby={
            state.fieldErrors?.service
              ? "service-error"
              : undefined
          }
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="web3-development">
            Web3 development
          </option>
          <option value="ai-development">
            AI development
          </option>
          <option value="full-stack-development">
            Full-stack development
          </option>
          <option value="creative-growth">
            Creative and growth
          </option>
          <option value="other">Something else</option>
        </select>

        <FieldError
          id="service-error"
          errors={state.fieldErrors?.service}
        />
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="estimatedBudget">
            Estimated budget{" "}
            <span className="optional-label">Optional</span>
          </label>

          <select
            id="estimatedBudget"
            name="estimatedBudget"
            defaultValue=""
            aria-invalid={
              state.fieldErrors?.estimatedBudget
                ? true
                : undefined
            }
            aria-describedby={
              state.fieldErrors?.estimatedBudget
                ? "estimated-budget-error"
                : undefined
            }
          >
            <option value="">Select a range</option>
            <option value="under-5000">
              Under $5,000
            </option>
            <option value="5000-10000">
              $5,000–$10,000
            </option>
            <option value="10000-25000">
              $10,000–$25,000
            </option>
            <option value="25000-50000">
              $25,000–$50,000
            </option>
            <option value="50000-plus">
              $50,000+
            </option>
            <option value="not-sure">
              Not sure yet
            </option>
          </select>

          <FieldError
            id="estimated-budget-error"
            errors={state.fieldErrors?.estimatedBudget}
          />
        </div>

        <div className="form-field">
          <label htmlFor="preferredTimeline">
            Preferred timeline{" "}
            <span className="optional-label">Optional</span>
          </label>

          <select
            id="preferredTimeline"
            name="preferredTimeline"
            defaultValue=""
            aria-invalid={
              state.fieldErrors?.preferredTimeline
                ? true
                : undefined
            }
            aria-describedby={
              state.fieldErrors?.preferredTimeline
                ? "preferred-timeline-error"
                : undefined
            }
          >
            <option value="">Select a timeline</option>
            <option value="immediately">
              Immediately
            </option>
            <option value="within-1-month">
              Within one month
            </option>
            <option value="1-3-months">
              Within 1–3 months
            </option>
            <option value="3-6-months">
              Within 3–6 months
            </option>
            <option value="flexible">
              Flexible
            </option>
          </select>

          <FieldError
            id="preferred-timeline-error"
            errors={state.fieldErrors?.preferredTimeline}
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="message">
          Project overview <span aria-hidden="true">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={5000}
          rows={7}
          placeholder="Tell us what you are building, the problem you want to solve, and any useful context..."
          aria-invalid={
            state.fieldErrors?.message ? true : undefined
          }
          aria-describedby={
            state.fieldErrors?.message
              ? "message-error"
              : "message-help"
          }
        />

        <span id="message-help" className="field-help">
          Please provide at least 20 characters.
        </span>

        <FieldError
          id="message-error"
          errors={state.fieldErrors?.message}
        />
      </div>

      <div
        className="form-honeypot"
        aria-hidden="true"
      >
        <label htmlFor="website">
          Leave this field empty
        </label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {state.message ? (
        <div
          className={`form-status form-status-${state.status}`}
          role={
            state.status === "error" ? "alert" : "status"
          }
          aria-live="polite"
        >
          {state.message}
        </div>
      ) : null}

      <button
        className="button"
        type="submit"
        disabled={isPending}
        aria-disabled={isPending}
      >
        {isPending
          ? "Sending enquiry..."
          : "Send project enquiry"}
      </button>

      <p className="form-privacy-note">
        By submitting this form, you agree that Novvr
        Technologies may contact you regarding your enquiry.
      </p>
    </form>
  );
}