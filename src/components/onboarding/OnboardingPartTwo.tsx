import { useState } from "react";
import { motion } from "framer-motion";
import OnboardingField from "./OnboardingField";
import OnboardingButton from "./OnboardingButton";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface OnboardingPartTwoProps {
  nextStep: () => void;
  prevStep: () => void;
}

export default function OnboardingPartTwo({
  nextStep,
  prevStep,
}: OnboardingPartTwoProps) {
  const [university, setUniversity] = useState("");
  const [admissionNo, setAdmissionNo] = useState("");
  const [universityEmail, setUniversityEmail] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleEmailVerification = () => {
    // Handle email OTP verification logic here
    setIsOtpSent(true);
  };

  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input box if the current one is filled
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleOtpKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    } else if (e.key === "Enter" && otp.every((digit) => digit !== "")) {
      // Trigger OTP verification
      setIsEmailVerified(true);
    }
  };

  return (
    <motion.div
      className="px-8 flex flex-col justify-center items-center bg-black/20 backdrop-blur-lg shadow-lg rounded-2xl p-8 m-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="mb-4">
        <h1 className="text-3xl font-bold">University Verification</h1>
      </motion.div>
      <OnboardingField
        label="University"
        type="text"
        value={university}
        onChange={(e) => setUniversity(e.target.value)}
      />
      <OnboardingField
        label="Admission No"
        type="text"
        value={admissionNo}
        onChange={(e) => setAdmissionNo(e.target.value)}
      />
      <OnboardingField
        label="University Email"
        type="email"
        value={universityEmail}
        onChange={(e) => setUniversityEmail(e.target.value)}
        isVerified={isEmailVerified}
        onVerify={handleEmailVerification}
      />
      {isOtpSent && (
        <motion.div variants={itemVariants} className="flex gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(e, index)}
              onKeyDown={(e) => handleOtpKeyDown(e, index)}
              className="bg-black/30 text-white p-3 rounded-lg w-12 text-center focus:outline-none"
            />
          ))}
        </motion.div>
      )}
      <OnboardingField
        label="Course"
        type="text"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <OnboardingField
        label="Semester"
        type="text"
        value={semester}
        onChange={(e) => setSemester(e.target.value)}
      />
      <div className="flex gap-4">
        <OnboardingButton text="Back" onClick={prevStep} />
        <OnboardingButton
          text="Next"
          onClick={nextStep}
          disabled={!isEmailVerified}
        />
      </div>
    </motion.div>
  );
}
