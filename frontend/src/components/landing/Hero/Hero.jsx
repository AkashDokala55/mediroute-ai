import {
  Search,
  ShieldCheck,
  Pill,
  FileText,
  Building2,
} from "lucide-react";

import { motion } from "framer-motion";
import HealthJourney from "../Hero/HealthJourney";
const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f5f7ff] pt-28 sm:pt-32 lg:pt-36">
      
      {/* BACKGROUND GLOWS */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-200/30 blur-3xl sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]" />

      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-200/30 blur-3xl sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]" />

      {/* MAIN CONTAINER */}
      <div className="mx-auto grid min-h-[92vh] max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          
          {/* BADGE */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl">
            
            <div className="h-2 w-2 rounded-full bg-green-500" />

            <span className="text-xs font-medium text-gray-700 sm:text-sm">
              Trusted Healthcare Assistance Platform
            </span>
          </div>

          {/* HEADING */}
          <h1 className="max-w-2xl text-4xl font-black leading-tight text-gray-900 sm:text-5xl lg:text-5xl">
            Healthcare Made
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Smarter
            </span>
            <br />
            For Everyone.
          </h1>

          {/* SUBTEXT */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0 lg:text-l">
            Check healthcare scheme eligibility, upload prescriptions,
            track medicines, and securely manage medical records —
            all in one intelligent platform.
          </p>

          {/* SEARCH BAR */}
          <HealthJourney />
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center">
          
          <div className="relative flex h-[350px] w-[350px] items-center justify-center sm:h-[500px] sm:w-[500px] lg:h-[680px] lg:w-[680px]">

            {/* AMBIENT GLOW */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="absolute h-[180px] w-[180px] rounded-full bg-purple-400/20 blur-[100px] sm:h-[250px] sm:w-[250px] lg:h-[320px] lg:w-[320px]"
            />

            {/* ORBIT RINGS */}
            <div className="absolute h-[300px] w-[300px] rounded-full border border-purple-200/60 sm:h-[420px] sm:w-[420px] lg:h-[560px] lg:w-[560px]" />

            <div className="absolute h-[220px] w-[220px] rounded-full border border-purple-100 sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]" />

            <div className="absolute h-[160px] w-[160px] rounded-full border border-purple-100 sm:h-[220px] sm:w-[220px] lg:h-[280px] lg:w-[280px]" />

            {/* ROTATING CONTAINER */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 22,
                ease: "linear",
              }}
              className="absolute h-[300px] w-[300px] sm:h-[420px] sm:w-[420px] lg:h-[560px] lg:w-[560px]"
            >
              
              {/* TOP */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2">
                <OrbitCard
                  icon={<ShieldCheck />}
                  title="Scheme Check"
                />
              </div>

              {/* RIGHT */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <OrbitCard
                  icon={<Building2 />}
                  title="Nearby Hospitals"
                />
              </div>

              {/* BOTTOM */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <OrbitCard
                  icon={<Pill />}
                  title="Medicine Tracker"
                />
              </div>

              {/* LEFT */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <OrbitCard
                  icon={<FileText />}
                  title="OCR Reports"
                />
              </div>
            </motion.div>

            {/* FLOATING PARTICLES */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 16,
                ease: "linear",
              }}
              className="absolute h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]"
            >
              
              <div className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.9)] sm:h-4 sm:w-4" />

              <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.9)] sm:h-3 sm:w-3" />

              <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)] sm:h-3 sm:w-3" />

              <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.9)] sm:h-4 sm:w-4" />
            </motion.div>

            {/* CENTER CORE */}
            <motion.div
              animate={{
                y: [0, -14, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="relative z-20 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-[0_0_120px_rgba(124,58,237,0.45)] sm:h-44 sm:w-44 lg:h-60 lg:w-60"
            >
              
              {/* CORE RING */}
              <div className="absolute inset-0 rounded-full border border-white/20" />

              {/* LOGO */}
              <motion.img
                animate={{
                  rotate: [0, 6, -6, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                src="/logo.jpg"
                alt="logo"
                className="mb-2 h-10 w-10 rounded-full object-cover shadow-xl sm:h-14 sm:w-14 lg:mb-4 lg:h-16 lg:w-16"
              />

              <h2 className="text-xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                MediRoute
              </h2>

              <p className="mt-1 hidden text-xs text-white/80 sm:block">
                Healthcare Companion
              </p>

              {/* PULSE */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                }}
                className="absolute inset-0 rounded-full border border-white/20"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OrbitCard = ({ icon, title }) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
      className="rounded-xl border border-white/60 bg-white/80 px-3 py-2 shadow-2xl backdrop-blur-xl sm:rounded-2xl sm:px-5 sm:py-4"
    >
      <div className="flex items-center gap-2 sm:gap-3">
        
        <div className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-2 text-white shadow-lg sm:rounded-xl sm:p-3">
          {icon}
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-800 sm:text-sm lg:text-base">
            {title}
          </p>

          <p className="hidden text-xs text-gray-500 sm:block">
            Smart Assistance
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;