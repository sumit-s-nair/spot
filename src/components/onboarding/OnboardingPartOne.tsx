import { useState } from "react";
import { motion } from "framer-motion";
import OnboardingField from "./OnboardingField";
import OnboardingButton from "./OnboardingButton";
import { ImageUp } from "lucide-react";
import Image from "next/image";

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

interface OnboardingPartOneProps {
  nextStep: () => void;
}

export default function OnboardingPartOne({
  nextStep,
}: OnboardingPartOneProps) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handlePhoneVerification = () => {
    // Handle phone OTP verification logic here
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
      if (index === 5 && otp.every((digit) => digit !== "")) {
        // Trigger OTP verification
        setIsPhoneVerified(true);
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
      setIsPhoneVerified(true);
    }
  };

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(e.target.files[0]);
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
        <h1 className="text-3xl font-bold">Personal Details</h1>
      </motion.div>
      <motion.div variants={itemVariants} className="mb-4 w-full">
        <label className="block text-sm font-medium text-gray-300">
          Profile Picture
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="cursor-pointer">
            <div className="w-32 h-32 rounded-full bg-black/20 flex items-center justify-center overflow-hidden">
              {profilePic ? (
                <Image
                  src={URL.createObjectURL(profilePic)}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  width={128}
                  height={128}
                />
              ) : (
                <span className="text-white">
                  <ImageUp />
                </span>
              )}
            </div>
            <input
              type="file"
              onChange={handleProfilePicChange}
              className="hidden"
            />
          </label>
        </div>
      </motion.div>
      <OnboardingField
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <OnboardingField
        label="Phone Number"
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        isVerified={isPhoneVerified}
        onVerify={handlePhoneVerification}
        prefix="+91"
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
      <OnboardingButton
        text="Next"
        onClick={nextStep}
        disabled={!isPhoneVerified}
      />
    </motion.div>
  );
}
