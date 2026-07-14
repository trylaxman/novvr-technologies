import { z } from "zod";

export const serviceOptions = [
  "web3-development",
  "ai-development",
  "full-stack-development",
  "creative-growth",
  "other",
] as const;

export const budgetOptions = [
  "under-5000",
  "5000-10000",
  "10000-25000",
  "25000-50000",
  "50000-plus",
  "not-sure",
] as const;

export const timelineOptions = [
  "immediately",
  "within-1-month",
  "1-3-months",
  "3-6-months",
  "flexible",
] as const;

function optionalString(maxLength: number) {
  return z.preprocess(
    (value) => {
      if (typeof value !== "string") {
        return undefined;
      }

      const trimmedValue = value.trim();

      return trimmedValue.length > 0 ? trimmedValue : undefined;
    },
    z.string().max(maxLength).optional(),
  );
}

function optionalEnum<T extends readonly [string, ...string[]]>(
  values: T,
) {
  return z.preprocess(
    (value) => {
      if (typeof value !== "string" || value.trim() === "") {
        return undefined;
      }

      return value;
    },
    z.enum(values).optional(),
  );
}

export const projectEnquirySchema = z.object({
  name: z
    .string({
      error: "Please enter your name.",
    })
    .trim()
    .min(2, "Name must contain at least 2 characters.")
    .max(100, "Name cannot exceed 100 characters."),

  email: z
    .string({
      error: "Please enter your work email.",
    })
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address.")
    .max(254, "Email address is too long."),

  company: optionalString(150),

  service: z.enum(serviceOptions, {
    error: "Please select a service.",
  }),

  estimatedBudget: optionalEnum(budgetOptions),

  preferredTimeline: optionalEnum(timelineOptions),

  message: z
    .string({
      error: "Please provide a project overview.",
    })
    .trim()
    .min(20, "Please provide at least 20 characters.")
    .max(5000, "Project overview cannot exceed 5,000 characters."),

  // Honeypot field. Real visitors will never fill this in.
  website: z.preprocess(
    (value) => {
      if (typeof value !== "string") {
        return "";
      }

      return value.trim();
    },
    z.string().max(0, "Unable to submit this enquiry."),
  ),
});

export type ProjectEnquiryInput = z.infer<
  typeof projectEnquirySchema
>;