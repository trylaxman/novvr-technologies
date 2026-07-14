export type ProjectEnquiryField =
  | "name"
  | "email"
  | "company"
  | "service"
  | "estimatedBudget"
  | "preferredTimeline"
  | "message";

export type ProjectEnquiryFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<
    Record<ProjectEnquiryField, string[]>
  >;
};

export const initialProjectEnquiryFormState: ProjectEnquiryFormState = {
  status: "idle",
  message: "",
};