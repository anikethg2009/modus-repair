"use client";

import { contactMethods, deviceTypes } from "@/content/site";

const inputClass =
  "mt-2 block w-full rounded-[2px] border border-ink/35 bg-[#fbfaf6] px-3.5 py-3 text-base text-ink placeholder:text-ink-muted/70 hover:border-ink/60 focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-signal";
const labelClass = "eyebrow block !text-ink";

export default function RepairForm() {
  return (
    <form
      className="space-y-7"
      onSubmit={(e) => {
        e.preventDefault();
        // Submission is wired up in Phase 3 (API route + email).
      }}
    >
      <div className="grid gap-7 sm:grid-cols-2 sm:gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" maxLength={100} className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" maxLength={30} className={`${inputClass} font-mono tabular-nums`} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" maxLength={200} className={inputClass} />
      </div>

      <div>
        <label htmlFor="device" className={labelClass}>Device</label>
        <select id="device" name="device" required defaultValue="" className={inputClass}>
          <option value="" disabled>Select a device type</option>
          {deviceTypes.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="issue" className={labelClass}>What&apos;s wrong?</label>
        <textarea
          id="issue"
          name="issue"
          required
          rows={5}
          maxLength={3000}
          placeholder="Make and model if you know it (e.g. iPhone 13, PS5), and what's happening."
          className={inputClass}
        />
      </div>

      <fieldset>
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
        />
      </div>

      <div className="border-t border-ink pt-7">
        <button type="submit" className="btn btn-primary w-full sm:w-auto">
          Send Repair Request <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}
