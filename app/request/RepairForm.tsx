"use client";

import { contactMethods, deviceTypes } from "@/content/site";

const inputClass =
  "mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 shadow-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100";
const labelClass = "block text-sm font-medium text-slate-800";

export default function RepairForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        // Submission is wired up in Phase 3 (API route + email).
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" maxLength={100} className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" maxLength={30} className={inputClass} />
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
        <div className="mt-2 flex flex-wrap gap-3">
          {contactMethods.map((m, i) => (
            <label key={m} className="flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 has-[:checked]:border-brand-600 has-[:checked]:bg-brand-50">
              <input type="radio" name="contactMethod" value={m} defaultChecked={i === 0} className="accent-brand-700" />
              <span className="text-slate-800">{m}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="photo" className={labelClass}>
          Photo <span className="font-normal text-slate-500">(optional, max 4 MB)</span>
        </label>
        <input
          id="photo"
          name="photo"
          type="file"
          accept="image/*"
          className="mt-1 block w-full text-sm text-slate-700 file:mr-3 file:rounded-lg file:border-0 file:bg-brand-50 file:px-4 file:py-2.5 file:font-semibold file:text-brand-800 hover:file:bg-brand-100"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-accent-600 px-6 py-3.5 text-lg font-semibold text-white hover:bg-accent-700 sm:w-auto"
      >
        Send Repair Request
      </button>
    </form>
  );
}
