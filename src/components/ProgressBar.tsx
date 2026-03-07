"use client";

import { useI18n } from "@/i18n/context";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const { t } = useI18n();

  return (
    <div className="px-5 pt-3 pb-1">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-metro-muted uppercase tracking-[0.2em] font-semibold">
          {t.progress.step} {currentStep + 1} {t.progress.of} {totalSteps}
        </span>
        <span className="text-[10px] text-metro-warm uppercase tracking-[0.15em] font-medium">
          {t.progress.labels[currentStep]}
        </span>
      </div>

      <div className="flex gap-1">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className="metro-dot h-[3px] flex-1"
            style={{
              backgroundColor:
                i < currentStep
                  ? "rgba(232, 224, 216, 0.6)"
                  : i === currentStep
                  ? "#E8762D"
                  : "rgba(232, 224, 216, 0.1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
