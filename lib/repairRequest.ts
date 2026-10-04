import { contactMethods, deviceTypes } from "@/content/site";

export const MAX_PHOTO_BYTES = 4 * 1024 * 1024;

// Name of the hidden honeypot input. Real visitors never see or fill it.
export const HONEYPOT_FIELD = "company";

export type RepairRequest = {
  name: string;
  email: string;
  phone: string;
  device: string;
  issue: string;
  contactMethod: string;
  photo: File | null;
};

export type FieldErrors = Partial<Record<keyof RepairRequest, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(form: FormData, key: string) {
  const v = form.get(key);
  return typeof v === "string" ? v.trim() : "";
}

export function validateRepairRequest(
  form: FormData,
): { ok: true; data: RepairRequest } | { ok: false; errors: FieldErrors } {
  const data = {
    name: text(form, "name"),
    email: text(form, "email"),
    phone: text(form, "phone"),
    device: text(form, "device"),
    issue: text(form, "issue"),
    contactMethod: text(form, "contactMethod"),
  };
  const errors: FieldErrors = {};

  if (!data.name) errors.name = "Please enter your name.";
  else if (data.name.length > 100) errors.name = "Name is too long.";

  if (!EMAIL_RE.test(data.email) || data.email.length > 200) errors.email = "Please enter a valid email address.";

  const digits = data.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15 || data.phone.length > 30)
    errors.phone = "Please enter a valid phone number, including area code.";

  if (!deviceTypes.includes(data.device)) errors.device = "Please choose a device type.";

  if (data.issue.length < 10) errors.issue = "Please describe the problem in a sentence or two.";
  else if (data.issue.length > 3000) errors.issue = "Please keep the description under 3,000 characters.";

  if (!contactMethods.includes(data.contactMethod)) errors.contactMethod = "Please choose how to contact you.";

  // Browsers send an empty, nameless File when no photo is chosen.
  const rawPhoto = form.get("photo");
  let photo: File | null = null;
  if (rawPhoto instanceof File && rawPhoto.size > 0) {
    if (!rawPhoto.type.startsWith("image/")) errors.photo = "The photo must be an image file.";
    else if (rawPhoto.size > MAX_PHOTO_BYTES) errors.photo = "The photo must be 4 MB or smaller.";
    else photo = rawPhoto;
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  return { ok: true, data: { ...data, photo } };
}
