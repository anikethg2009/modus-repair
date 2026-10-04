"use client";

import { useRef, useState, type FormEvent } from "react";
import { contactMethods, deviceTypes, site } from "@/content/site";
import { HONEYPOT_FIELD, MAX_PHOTO_BYTES, type FieldErrors } from "@/lib/repairRequest";

const inputClass =
  "mt-2 block w-full rounded-[2px] border border-ink/35 bg-[#fbfaf6] px-3.5 py-3 text-base text-ink placeholder:text-ink-muted/70 hover:border-ink/60 focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-signal aria-[invalid=true]:border-signal-deep aria-[invalid=true]:border-2";
const labelClass = "eyebrow block !text-ink";

type Status = "idle" | "sending" | "success" | "error";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-start gap-2 text-sm font-medium text-ink">
      <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-signal" />
      {message}
    </p>
  );
}

export default function RepairForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  // Props that wire a field to its error message for screen readers.
  const errorProps = (field: keyof FieldErrors) =>
    fieldErrors[field]
      ? { "aria-invalid": true as const, "aria-describedby": `${field}-error` }
      : {};

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const photo = data.get("photo");
    if (photo instanceof File && photo.size > MAX_PHOTO_BYTES) {
      setFieldErrors({ photo: "The photo must be 4 MB or smaller." });
      setMessage("Please fix the highlighted fields.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setMessage("");
    setFieldErrors({});
    try {
      const res = await fetch("/api/repair-request", { method: "POST", body: data });
      const body = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
        return;
      }
      setFieldErrors(body.fields ?? {});
      setMessage(
        body.error ??
          (res.status === 413 ? "That photo is too large. Please use one under 4 MB." : "Something went wrong. Please try again."),
      );
      setStatus("error");
    } catch {
      setMessage("Couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-ink">
        <div className="border-b border-ink bg-signal px-5 py-3">
          <p className="eyebrow !text-ink">Request received</p>
        </div>
        <div className="px-5 py-8">
          <p className="font-display text-3xl font-bold tracking-[-0.02em]">Thanks, your request is in.</p>
          <p className="mt-3 max-w-md text-ink-muted">
            I&apos;ll get back to you the way you asked with next steps and a quote. If it&apos;s urgent, call or text{" "}
            <a href={site.contact.phoneHref} className="font-mono text-ink underline tabular-nums">
              {site.contact.phoneDisplay}
            </a>
            .
          </p>
          <button type="button" onClick={() => setStatus("idle")} className="btn btn-secondary mt-8">
            Send another request
          </button>
        </div>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form ref={formRef} className="space-y-7" onSubmit={handleSubmit} aria-busy={sending}>
      {status === "error" && (
        <div role="alert" className="border-l-2 border-signal bg-paper-2 px-5 py-4">
          <p className="eyebrow !text-ink">Not sent</p>
          <p className="mt-1">{message}</p>
          {Object.keys(fieldErrors).length === 0 && (
            <p className="mt-1 text-sm text-ink-muted">
              You can also call or text{" "}
              <a href={site.contact.phoneHref} className="font-mono underline tabular-nums">
                {site.contact.phoneDisplay}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${site.contact.email}`} className="underline">
                {site.contact.email}
              </a>
              .
            </p>
          )}
        </div>
      )}

      {/* Honeypot: hidden from people and screen readers, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
        <label htmlFor={HONEYPOT_FIELD}>Company</label>
        <input id={HONEYPOT_FIELD} name={HONEYPOT_FIELD} type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-7 sm:grid-cols-2 sm:gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" maxLength={100} className={inputClass} {...errorProps("name")} />
          <FieldError id="name-error" message={fieldErrors.name} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" maxLength={30} className={`${inputClass} font-mono tabular-nums`} {...errorProps("phone")} />
          <FieldError id="phone-error" message={fieldErrors.phone} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" maxLength={200} className={inputClass} {...errorProps("email")} />
        <FieldError id="email-error" message={fieldErrors.email} />
      </div>

      <div>
        <label htmlFor="device" className={labelClass}>Device</label>
        <select id="device" name="device" required defaultValue="" className={inputClass} {...errorProps("device")}>
          <option value="" disabled>Select a device type</option>
          {deviceTypes.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <FieldError id="device-error" message={fieldErrors.device} />
      </div>

      <div>
        <label htmlFor="issue" className={labelClass}>What&apos;s wrong?</label>
        <textarea
          id="issue"
          name="issue"
          required
          minLength={10}
          rows={5}
          maxLength={3000}
          placeholder="Make and model if you know it (e.g. iPhone 13, PS5), and what's happening."
          className={inputClass}
          {...errorProps("issue")}
        />
        <FieldError id="issue-error" message={fieldErrors.issue} />
      </div>

      <fieldset {...(fieldErrors.contactMethod ? { "aria-describedby": "contactMethod-error" } : {})}>
        <legend className={labelClass}>Preferred contact method</legend>
        <div className="mt-2 grid grid-cols-3 border border-ink">
          {contactMethods.map((m, i) => (
            <label
              key={m}
              className="relative cursor-pointer border-ink px-2 py-3 text-center text-sm font-medium not-last:border-r has-[:checked]:bg-ink has-[:checked]:text-paper has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-signal"
            >
              <input type="radio" name="contactMethod" value={m} defaultChecked={i === 0} className="sr-only" />
              {m}
            </label>
          ))}
        </div>
        <FieldError id="contactMethod-error" message={fieldErrors.contactMethod} />
      </fieldset>

      <div>
        <label htmlFor="photo" className={labelClass}>
          Photo <span className="normal-case tracking-normal text-ink-muted">(optional, max 4 MB)</span>
        </label>
        <input
          id="photo"
          name="photo"
          type="file"
          accept="image/*"
          className="mt-2 block w-full border border-dashed border-ink/40 p-2 text-sm text-ink-muted file:mr-3 file:cursor-pointer file:rounded-[2px] file:border file:border-ink file:bg-transparent file:px-3 file:py-2 file:font-mono file:text-xs file:font-semibold file:uppercase file:tracking-[0.06em] file:text-ink hover:file:bg-ink/5"
          {...errorProps("photo")}
        />
        <FieldError id="photo-error" message={fieldErrors.photo} />
      </div>

      <div className="border-t border-ink pt-7">
        <button type="submit" disabled={sending} className="btn btn-primary w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto">
          {sending ? "Sending…" : <>Send Repair Request <span aria-hidden="true">→</span></>}
        </button>
      </div>
    </form>
  );
}
