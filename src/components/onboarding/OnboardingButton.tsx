import { motion } from "framer-motion";

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

interface OnboardingButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function OnboardingButton({
  text,
  onClick,
  disabled = false,
}: OnboardingButtonProps) {
  return (
    <motion.button
      className={`bg-blue-500/30 hover:bg-blue-700/20 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 w-full backdrop-blur-lg ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </motion.button>
  );
}
