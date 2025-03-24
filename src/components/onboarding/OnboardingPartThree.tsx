import { useState } from "react";
import { motion } from "framer-motion";
import OnboardingButton from "./OnboardingButton";
import { X } from "lucide-react";

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

interface OnboardingPartThreeProps {
  prevStep: () => void;
}

export default function OnboardingPartThree({
  prevStep,
}: OnboardingPartThreeProps) {
  const [interests, setInterests] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [interestInput, setInterestInput] = useState("");
  const [skillInput, setSkillInput] = useState("");

  const handleInterestKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && interestInput.trim() !== "") {
      setInterests([...interests, interestInput.trim()]);
      setInterestInput("");
    }
  };

  const handleSkillKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && skillInput.trim() !== "") {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleInterestDelete = (index: number) => {
    setInterests(interests.filter((_, i) => i !== index));
  };

  const handleSkillDelete = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <motion.div
      className="px-8 flex flex-col justify-center items-center bg-black/20 backdrop-blur-lg shadow-lg rounded-2xl p-8 m-8 max-w-md"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="mb-4">
        <h1 className="text-3xl font-bold">Let&apos;s find out more about you</h1>
      </motion.div>
      <motion.div variants={itemVariants} className="mb-4 w-full">
        <label className="block text-sm font-medium text-gray-200">
          Interests
        </label>
        <input
          type="text"
          value={interestInput}
          onChange={(e) => setInterestInput(e.target.value)}
          onKeyDown={handleInterestKeyDown}
          className="mt-1 block w-full bg-black/20 text-white p-2 rounded"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-blue-600/40 text-white px-3 py-1 rounded-lg flex items-center gap-2"
            >
              <span>{interest}</span>
              <button
                onClick={() => handleInterestDelete(index)}
                className="text-white"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div variants={itemVariants} className="mb-4 w-full">
        <label className="block text-sm font-medium text-gray-200">
          Skills
        </label>
        <input
          type="text"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyDown={handleSkillKeyDown}
          className="mt-1 block w-full bg-black/20 text-white p-2 rounded"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-blue-600/40 text-white px-3 py-1 rounded-lg flex items-center gap-2"
            >
              <span>{skill}</span>
              <button
                onClick={() => handleSkillDelete(index)}
                className="text-white"
              >
                <X size={16}/>
              </button>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="flex gap-4">
        <OnboardingButton text="Back" onClick={prevStep} />
        <OnboardingButton text="Complete" />
      </div>
    </motion.div>
  );
}
