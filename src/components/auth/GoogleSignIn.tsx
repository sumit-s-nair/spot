import { FaGoogle } from "react-icons/fa6";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
  tap: {
    scale: 0.9,
  },
};

export default function GoogleSignIn({ onSignIn }: { onSignIn: () => void }) {
  return (
    <div className="flex justify-center w-full">
      <motion.button
        className="bg-blue-600/20 hover:bg-blue-700/20 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 w-full backdrop-blur-lg"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={onSignIn}
      >
        <FaGoogle />
        Sign in with Google
      </motion.button>
    </div>
  );
}
