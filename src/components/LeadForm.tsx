"use client";

import { useState } from "react";
import { Selections, METRO_COLORS } from "@/data/taxonomy";
import { useI18n } from "@/i18n/context";

interface LeadFormProps {
  selections: Selections;
  onSuccess: () => void;
  onBack: () => void;
}

interface FormData {
  firstName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  email?: string;
  phone?: string;
  consent?: string;
}

export default function LeadForm({ selections, onSuccess, onBack }: LeadFormProps) {
  const { t, locale } = useI18n();
  const [form, setForm] = useState<FormData>({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.firstName.trim()) errs.firstName = t.leadForm.errors.firstNameRequired;
    if (!form.email.trim()) {
      errs.email = t.leadForm.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = t.leadForm.errors.emailInvalid;
    }
    if (!form.phone.trim()) {
      errs.phone = t.leadForm.errors.phoneRequired;
    } else if (!/^[+]?[\d\s()-]{7,}$/.test(form.phone)) {
      errs.phone = t.leadForm.errors.phoneInvalid;
    }
    if (!consent) errs.consent = t.legal.consentRequired;
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, consent, selections, locale }),
      });
      if (res.ok) {
        onSuccess();
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  function updateField(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FormErrors];
        return next;
      });
    }
  }

  return (
    <div className="metro-fade-in px-5 py-4 w-full flex-1 flex flex-col min-h-0">
      <h3 className="text-[20px] leading-tight tracking-tight mb-1 shrink-0">
        <span className="font-extralight text-metro-warm">{t.leadForm.title1}</span>{" "}
        <span className="font-semibold text-white">{t.leadForm.title2}</span>
      </h3>
      <p className="text-[11px] text-metro-muted mb-3 tracking-wide shrink-0">
        {t.leadForm.subtitle}
      </p>

      {/* Process steps */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-4 shrink-0">
        {t.trust.processSteps.map((step, i) => (
          <div key={i} className="flex items-start gap-2">
            <span
              className="w-[18px] h-[18px] flex items-center justify-center text-[9px] font-bold text-white shrink-0 mt-px"
              style={{ backgroundColor: i === 0 ? METRO_COLORS.cta : "rgba(232, 224, 216, 0.12)" }}
            >
              {i + 1}
            </span>
            <span className="text-[10px] text-metro-muted leading-tight">{step}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col min-h-0">
        <div className="space-y-2.5 flex-1 min-h-0">
          <div>
            <input
              type="text"
              placeholder={t.leadForm.firstName}
              value={form.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
              className={`metro-input ${errors.firstName ? "metro-input-error" : ""}`}
            />
            {errors.firstName && <p className="text-metro-error text-[11px] mt-1">{errors.firstName}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder={t.leadForm.email}
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              className={`metro-input ${errors.email ? "metro-input-error" : ""}`}
            />
            {errors.email && <p className="text-metro-error text-[11px] mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              type="tel"
              placeholder={t.leadForm.phone}
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className={`metro-input ${errors.phone ? "metro-input-error" : ""}`}
            />
            {errors.phone && <p className="text-metro-error text-[11px] mt-1">{errors.phone}</p>}
          </div>

          <div>
            <textarea
              placeholder={t.leadForm.message}
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              rows={2}
              className="metro-input resize-none"
            />
          </div>

          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                if (errors.consent) {
                  setErrors((prev) => {
                    const next = { ...prev };
                    delete next.consent;
                    return next;
                  });
                }
              }}
              className="mt-0.5 shrink-0 accent-[#E8762D]"
            />
            <span className="text-[10px] text-metro-muted leading-snug">
              {t.legal.consent
                .split(/\{terms\}|\{privacy\}/)
                .map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i === 0 && (
                      <a href="/voorwaarden" target="_blank" rel="noopener noreferrer" className="text-metro-warm underline">
                        {t.footer.termsLink}
                      </a>
                    )}
                    {i === 1 && i < arr.length - 1 && (
                      <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-metro-warm underline">
                        {t.footer.privacyLink}
                      </a>
                    )}
                  </span>
                ))}
            </span>
          </label>
          {errors.consent && <p className="text-metro-error text-[11px] mt-1">{errors.consent}</p>}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="metro-tile w-full py-3.5 px-5 text-left text-[14px] font-semibold text-white tracking-wide disabled:opacity-50 mt-3 shrink-0"
          style={{ backgroundColor: METRO_COLORS.cta }}
        >
          <span className="flex items-center justify-between">
            {submitting ? t.leadForm.sending : t.leadForm.cta}
            {!submitting && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </span>
        </button>

        {submitError && (
          <p className="text-metro-error text-[11px] mt-2 shrink-0">{t.leadForm.errors.submitError}</p>
        )}

        <p className="flex items-center gap-1.5 mt-2 text-[10px] text-metro-muted/70 shrink-0">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          {t.trust.privacyNote}
        </p>
      </form>

      <button
        onClick={onBack}
        className="mt-3 text-[12px] text-metro-muted hover:text-metro-warm transition-colors flex items-center gap-2 self-start shrink-0"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {t.steps.back}
      </button>
    </div>
  );
}
