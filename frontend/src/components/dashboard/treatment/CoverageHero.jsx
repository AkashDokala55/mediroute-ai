import { motion } from "framer-motion";

import {
  ShieldCheck,
  Hospital,
  Sparkles,
} from "lucide-react";

const CoverageHero = () => {

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="relative overflow-hidden rounded-[50px] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-10 text-white shadow-[0_20px_80px_rgba(79,70,229,0.35)]"
    >

      {/* GLOW */}
      <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative z-10">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-xl">

          <Sparkles size={16} />

          AI Healthcare Coverage Engine
        </div>

        {/* TITLE */}
        <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight">

          Check Treatment Coverage
          & Find Eligible Hospitals

        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">

          Discover hospitals supporting
          Aarogyasri and EHS-covered treatments
          using AI-assisted healthcare matching.

        </p>

        {/* STATS */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-[30px] bg-white/10 p-6 backdrop-blur-xl">

            <ShieldCheck size={30} />

            <h3 className="mt-4 text-3xl font-black">
              2+
            </h3>

            <p className="mt-1 text-blue-100">
              Healthcare Schemes
            </p>
          </div>

          <div className="rounded-[30px] bg-white/10 p-6 backdrop-blur-xl">

            <Hospital size={30} />

            <h3 className="mt-4 text-3xl font-black">
              1000+
            </h3>

            <p className="mt-1 text-blue-100">
              Hospitals Supported
            </p>
          </div>

          <div className="rounded-[30px] bg-white/10 p-6 backdrop-blur-xl">

            <Sparkles size={30} />

            <h3 className="mt-4 text-3xl font-black">
              AI Powered
            </h3>

            <p className="mt-1 text-blue-100">
              Smart Matching
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CoverageHero;