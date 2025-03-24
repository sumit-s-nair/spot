"use client";

import Background from "@/components/ui/Background";
import OnboardingPartOne from "@/components/onboarding/OnboardingPartOne";
import OnboardingPartTwo from "@/components/onboarding/OnboardingPartTwo";
import OnboardingPartThree from "@/components/onboarding/OnboardingPartThree";
import { useState } from "react";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <main className="relative min-h-screen text-white flex flex-col justify-center items-center">
      <Background />
      {step === 1 && <OnboardingPartOne nextStep={nextStep} />}
      {step === 2 && <OnboardingPartTwo nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <OnboardingPartThree prevStep={prevStep} />}
    </main>
  );
}