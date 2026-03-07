"use client";

import { useState, useCallback } from "react";
import { Selections, STEP_KEYS, TOTAL_STEPS, getOptionsForStep } from "@/data/taxonomy";
import { useI18n } from "@/i18n/context";
import ProgressBar from "./ProgressBar";
import StepSelector from "./StepSelector";
import Summary from "./Summary";
import LeadForm from "./LeadForm";
import Confirmation from "./Confirmation";
import Footer from "./Footer";

interface ConfiguratorProps {
  onBack: () => void;
}

type Phase = "steps" | "summary" | "leadForm" | "confirmation";

export default function Configurator({ onBack }: ConfiguratorProps) {
  const { t } = useI18n();
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Selections>({});
  const [phase, setPhase] = useState<Phase>("steps");

  const handleSelect = useCallback(
    (id: string) => {
      const key = STEP_KEYS[currentStep];
      const updated = { ...selections, [key]: id };

      for (let i = currentStep + 1; i < STEP_KEYS.length; i++) {
        delete updated[STEP_KEYS[i]];
      }

      setSelections(updated);

      if (currentStep < TOTAL_STEPS - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setPhase("summary");
      }
    },
    [currentStep, selections]
  );

  const handleBack = useCallback(() => {
    if (phase === "leadForm") {
      setPhase("summary");
      return;
    }
    if (phase === "summary") {
      setPhase("steps");
      setCurrentStep(TOTAL_STEPS - 1);
      return;
    }
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  }, [phase, currentStep, onBack]);

  const handleReset = useCallback(() => {
    setSelections({});
    setCurrentStep(0);
    setPhase("steps");
    onBack();
  }, [onBack]);

  if (phase === "confirmation") {
    return <Confirmation onReset={handleReset} />;
  }

  const options = getOptionsForStep(currentStep, selections);

  return (
    <div className="h-[100dvh] flex flex-col bg-metro-bg overflow-hidden">
      {phase === "steps" && (
        <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />
      )}

      <div className="flex-1 flex flex-col min-h-0">
        {phase === "steps" && (
          <StepSelector
            title={t.steps.titles[currentStep]}
            subtitle={t.steps.subtitles[currentStep]}
            options={options}
            selectedId={selections[STEP_KEYS[currentStep]]}
            onSelect={handleSelect}
            onBack={handleBack}
            stepIndex={currentStep}
            selections={selections}
          />
        )}

        {phase === "summary" && (
          <Summary
            selections={selections}
            onBack={handleBack}
            onContinue={() => setPhase("leadForm")}
          />
        )}

        {phase === "leadForm" && (
          <LeadForm
            selections={selections}
            onSuccess={() => setPhase("confirmation")}
            onBack={() => setPhase("summary")}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}
