import { motion } from "framer-motion";

import {
  Sparkles,
  Brain,
  ShieldCheck,
  Hospital,
  X,
} from "lucide-react";

const steps = [
  {
    icon: Brain,
    text: "Analyzing treatment keywords",
  },

  {
    icon: ShieldCheck,
    text: "Checking healthcare scheme eligibility",
  },

  {
    icon: Hospital,
    text: "Finding nearby eligible hospitals",
  },
];

const AIProcessing = ({
  onClose = () => {},
}) => {

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/60 backdrop-blur-xl"
    >

      {/* MAIN CARD */}
      <motion.div
        initial={{
          scale: 0.92,
          opacity: 0,
          y: 30,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.35,
        }}
        className="relative w-full max-w-2xl overflow-hidden rounded-[44px] border border-white/10 bg-white/10 p-12 shadow-[0_20px_100px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
      >

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 rounded-2xl bg-white/10 p-3 text-white transition hover:bg-red-500"
        >
          <X size={22} />
        </button>

        {/* GLOW */}
        <div className="absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-cyan-500/20 blur-3xl" />

        {/* AI ICON */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
          className="relative z-10 mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-[0_20px_60px_rgba(14,165,233,0.45)]"
        >

          <Sparkles size={52} />
        </motion.div>

        {/* TITLE */}
        <h1 className="relative z-10 mt-10 text-center text-5xl font-black text-white">

          MediRoute AI

        </h1>

        <p className="relative z-10 mt-5 text-center text-lg leading-relaxed text-slate-200">

          Smart healthcare intelligence
          is analyzing treatment coverage
          and matching hospitals.

        </p>

        {/* STATUS */}
        <div className="relative z-10 mt-8 flex justify-center">

          <div className="inline-flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-cyan-200">

            <div className="h-3 w-3 animate-pulse rounded-full bg-cyan-400" />

            AI Healthcare Intelligence Active

          </div>
        </div>

        {/* STEPS */}
        <div className="relative z-10 mt-12 space-y-5">

          {steps.map(
            (
              step,
              index
            ) => {

              const Icon =
                step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay:
                      index * 0.25,
                  }}
                  className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-5"
                >

                  <div className="rounded-2xl bg-white/10 p-4 text-cyan-300">

                    <Icon size={24} />
                  </div>

                  <p className="text-lg font-medium text-white">

                    {step.text}

                  </p>
                </motion.div>
              );
            }
          )}
        </div>

        {/* PROGRESS */}
        <div className="relative z-10 mt-10 h-3 overflow-hidden rounded-full bg-white/10">

          <motion.div
            animate={{
              x: [
                "-100%",
                "100%",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AIProcessing;