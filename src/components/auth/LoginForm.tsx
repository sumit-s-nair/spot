import GoogleSignIn from "./GoogleSignIn";
import PhoneSignIn from "./PhoneSignIn";
import { useState, useEffect } from "react";

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleGoogleSignIn = () => {
    setErrorMessage("Not implemented yet.");
  };

  const handlePhoneSignIn = async () => {
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

      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleOtpKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    } else if (e.key === "Enter" && otp.every((digit) => digit !== "")) {
      console.log("Verify OTP");
    }
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handlePhoneSignIn();
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-gray-900/10 backdrop-blur-lg rounded-lg shadow-lg">
      {errorMessage && (
        <div className="text-red-500 text-center mb-4">{errorMessage}</div>
      )}

      {!isOtpSent ? (
        <>
          <GoogleSignIn onSignIn={handleGoogleSignIn} />
          <div className="flex items-center my-4 w-full">
            <hr className="w-full border-gray-500" />
            <span className="px-4 text-gray-400 font-bold">OR</span>
            <hr className="w-full border-gray-500" />
          </div>
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
          <button
            className="bg-blue-600/20 hover:bg-blue-700/20 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 w-full backdrop-blur-lg"
            onClick={() => console.log("Verify OTP")}
          >
            Verify OTP
          </button>
        </div>
      )}
    </div>
  );
}
