import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface OnboardingFieldProps {
  label: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isVerified?: boolean;
  onVerify?: () => void;
  prefix?: string;
}

export default function OnboardingField({
  label,
  type,
  value,
  onChange,
  isVerified,
  onVerify,
  prefix,
}: OnboardingFieldProps) {
  return (
    <motion.div variants={itemVariants} className="mb-4 w-full">
      <label className="block text-sm font-medium text-gray-200">{label}</label>
      <div className="flex gap-2 items-center">
        {prefix && <span className="text-white p-2">{prefix}</span>}
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="mt-1 block w-full bg-black/20 text-white p-2 rounded"
        />
        {onVerify && (
          <button
            onClick={onVerify}
            className="bg-blue-600/30 hover:bg-blue-700/30 text-white font-bold py-2 px-4 rounded"
            disabled={isVerified}
          >
            {isVerified ? "Verified" : "Verify"}
          </button>
        )}
      </div>
    </motion.div>
  );
}
