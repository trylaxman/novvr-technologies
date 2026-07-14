"use server";

import { headers } from "next/headers";

import type { ProjectEnquiryFormState } from "@/app/contact/form-state";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { projectEnquirySchema } from "@/lib/validations/project-enquiry";

function getFormValue(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value : "";
}

function getClientIpAddress(headersList: Headers) {
  const forwardedFor = headersList.get("x-forwarded-for");

  if (forwardedFor) {
    const firstAddress = forwardedFor.split(",")[0]?.trim();

    return firstAddress || null;
  }

  return headersList.get("x-real-ip")?.trim() || null;
}

export async function submitProjectEnquiry(
  _previousState: ProjectEnquiryFormState,
  formData: FormData,
): Promise<ProjectEnquiryFormState> {
  const rawData = {
    name: getFormValue(formData, "name"),
    email: getFormValue(formData, "email"),
    company: getFormValue(formData, "company"),
    service: getFormValue(formData, "service"),
    estimatedBudget: getFormValue(formData, "estimatedBudget"),
    preferredTimeline: getFormValue(
      formData,
      "preferredTimeline",
    ),
    message: getFormValue(formData, "message"),
    website: getFormValue(formData, "website"),
  };

  const validationResult =
    projectEnquirySchema.safeParse(rawData);

  if (!validationResult.success) {
    const fieldErrors =
      validationResult.error.flatten().fieldErrors;

    return {
      status: "error",
      message:
        "Please review the highlighted fields and try again.",
      fieldErrors: {
        name: fieldErrors.name,
        email: fieldErrors.email,
        company: fieldErrors.company,
        service: fieldErrors.service,
        estimatedBudget: fieldErrors.estimatedBudget,
        preferredTimeline: fieldErrors.preferredTimeline,
        message: fieldErrors.message,
      },
    };
  }

  const {
    name,
    email,
    company,
    service,
    estimatedBudget,
    preferredTimeline,
    message,
  } = validationResult.data;

  try {
    const headersList = await headers();

    const ipAddress = getClientIpAddress(headersList);
    const userAgent = headersList.get("user-agent");

    const supabase = createSupabaseAdminClient();

    const { error } = await supabase
      .from("project_enquiries")
      .insert({
        name,
        email,
        company: company ?? null,
        service,
        estimated_budget: estimatedBudget ?? null,
        preferred_timeline: preferredTimeline ?? null,
        message,
        status: "new",
        source: "website",
        ip_address: ipAddress,
        user_agent: userAgent,
      });

    if (error) {
      console.error("Supabase project enquiry error:", {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint,
      });

      return {
        status: "error",
        message:
          "We could not submit your enquiry right now. Please email us directly at hello@novvr.com.",
      };
    }

    return {
      status: "success",
      message:
        "Thank you. Your project enquiry has been received. We’ll get back to you soon.",
    };
  } catch (error) {
    console.error("Project enquiry submission error:", error);

    return {
      status: "error",
      message:
        "Something went wrong while submitting your enquiry. Please email us directly at hello@novvr.com.",
    };
  }
}