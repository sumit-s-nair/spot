import { Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
  tap: {
    scale: 0.9,
  },
};

const inputVariants = {
  focus: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

interface PhoneSignInProps {
  onSignIn: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function PhoneSignIn({ onSignIn, onKeyDown }: PhoneSignInProps) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, "");
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value.replace(/(\d{5})(\d{0,5})/, "$1 $2"));
    }
  };

  const isPhoneNumberValid = phoneNumber.replace(/\s/g, "").length === 10;

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex gap-2 items-center bg-black/10 backdrop-blur-lg p-4 rounded-lg w-full">
        <span className="text-white p-2">+91</span>
        <motion.input
          type="text"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={handleInputChange}
          onKeyDown={onKeyDown}
          className="bg-transparent text-white p-2 rounded w-full focus:outline-none"
          variants={inputVariants}
          whileFocus="focus"
        />
      </div>
      <motion.button
        className={`bg-blue-600/20 hover:bg-blue-700/20 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 w-full backdrop-blur-lg ${
          !isPhoneNumberValid ? "opacity-50 cursor-not-allowed" : ""
        }`}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        disabled={!isPhoneNumberValid}
        onClick={onSignIn}
      >
        <Smartphone />
        Get OTP
      </motion.button>
    </div>
  );
}
