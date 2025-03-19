import GoogleSignIn from "./GoogleSignIn";
import PhoneSignIn from "./PhoneSignIn";
import { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const separatorVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
};

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleGoogleSignIn = () => {
    // Google sign-in logic
    setErrorMessage("Not implemented yet.");
  };

  const handlePhoneSignIn = async () => {
    // phone sign-in logic
    setIsOtpSent(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    document.getElementById("otp-input-0")?.focus();
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

      // Move to the next input box
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
      console.log("Verify OTP");
    }
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handlePhoneSignIn();
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-6 p-6 bg-gray-900/10 backdrop-blur-lg rounded-lg shadow-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {errorMessage && (
        <motion.div
          className="text-red-500 text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {errorMessage}
        </motion.div>
      )}
      {!isOtpSent ? (
        <>
          <GoogleSignIn onSignIn={handleGoogleSignIn} />
          <motion.div
            className="flex items-center my-4 w-full"
            variants={separatorVariants}
          >
            <hr className="w-full border-gray-500" />
            <span className="px-4 text-gray-400 font-bold">OR</span>
            <hr className="w-full border-gray-500" />
          </motion.div>
          <PhoneSignIn
            onSignIn={handlePhoneSignIn}
            onKeyDown={handlePhoneKeyDown}
          />
        </>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2">
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
          </div>
          <motion.button
            className="bg-blue-600/20 hover:bg-blue-700/20 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 w-full backdrop-blur-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => console.log("Verify OTP")}
          >
            Verify OTP
          </motion.button>
        </div>
      )}
    </motion.div>
  );
}
