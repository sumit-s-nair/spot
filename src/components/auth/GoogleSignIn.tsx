import { FaGoogle } from "react-icons/fa6";

export default function GoogleSignIn({ onSignIn }: { onSignIn: () => void }) {
  return (
    <div className="flex justify-center w-full">
      <button
        className="bg-blue-600/20 hover:bg-blue-700/20 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 w-full backdrop-blur-lg transition-transform duration-200 hover:scale-105 active:scale-95"
        onClick={onSignIn}
      >
        <FaGoogle />
        Sign in with Google
      </button>
    </div>
  );
}
