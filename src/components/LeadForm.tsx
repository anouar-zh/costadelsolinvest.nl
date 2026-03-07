"use client";

import { useState } from "react";
import { Selections, METRO_COLORS } from "@/data/taxonomy";
import { useI18n } from "@/i18n/context";

interface LeadFormProps {
  selections: Selections;
  onSuccess: () => void;
  onBack: () => void;
}

type ContactMethod = "phone" | "email" | "whatsapp";

const PHONE_PREFIXES: Record<string, string> = {
  nl: "+31 ",
  en: "+44 ",
  es: "+34 ",
  de: "+49 ",
};

const COUNTRY_MAP: Record<string, string> = {
  nl: "NL",
  en: "GB",
  es: "ES",
  de: "DE",
};

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
    phone: PHONE_PREFIXES[locale] ?? "",
    message: "",
  });
  const [contactMethod, setContactMethod] = useState<ContactMethod>("phone");
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
        body: JSON.stringify({
          ...form,
          contactMethod,
          consent,
          selections,
          locale,
          inferredCountry: COUNTRY_MAP[locale] ?? "NL",
          device: window.innerWidth < 768 ? "mobile" : "desktop",
          submittedAt: new Date().toISOString(),
          utmSource: new URLSearchParams(window.location.search).get("utm_source") ?? undefined,
          utmMedium: new URLSearchParams(window.location.search).get("utm_medium") ?? undefined,
          utmCampaign: new URLSearchParams(window.location.search).get("utm_campaign") ?? undefined,
        }),
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
            <p className="text-[10px] text-metro-muted mb-1.5">{t.leadForm.contactMethod}</p>
            <div className="flex gap-2">
              {(["phone", "email", "whatsapp"] as const).map((method) => {
                const labels = { phone: t.leadForm.contactPhone, email: t.leadForm.contactEmail, whatsapp: t.leadForm.contactWhatsApp };
                const icons = {
                  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
                  email: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
                  whatsapp: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />,
                };
                const isActive = contactMethod === method;
                return (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setContactMethod(method)}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-[10px] font-medium transition-colors ${
                      isActive
                        ? "text-white bg-white/15 border border-white/25"
                        : "text-metro-muted bg-white/5 border border-white/8 hover:bg-white/10"
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {icons[method]}
                    </svg>
                    {labels[method]}
                  </button>
                );
              })}
            </div>
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
