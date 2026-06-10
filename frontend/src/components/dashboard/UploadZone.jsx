import { motion } from "framer-motion";

import {
  UploadCloud,
  FileText,
  Sparkles,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

const UploadZone = () => {
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
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        scale: 1.005,
      }}
      className="group relative overflow-hidden rounded-[40px] border border-white/30 bg-white/60 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-3xl"
    >
      
      {/* BACKGROUND GLOWS */}
      <div className="absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl transition duration-700 group-hover:scale-110" />

      <div className="absolute bottom-[-100px] left-[-100px] h-[220px] w-[220px] rounded-full bg-cyan-400/10 blur-3xl" />

      {/* GRID EFFECT */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* HEADER */}
      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        
        {/* LEFT */}
        <div className="max-w-2xl">
          
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-2xl border border-blue-200/50 bg-blue-50/70 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur-xl">
            
            <BrainCircuit size={16} />

            AI Medical Intelligence
          </div>

          {/* TITLE */}
          <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 sm:text-5xl">
            Upload Medical
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Reports
            </span>
          </h2>

          {/* TEXT */}
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600">
            MediRoute AI intelligently scans healthcare
            documents, prescriptions, medicines, and
            treatment reports to extract medical insights,
            scheme eligibility, and medicine information.
          </p>
        </div>

        {/* RIGHT BADGES */}
        <div className="flex flex-wrap gap-3">
          
          <div className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-white shadow-lg">
            
            <Sparkles size={18} />

            <span className="text-sm font-semibold">
              AI Powered
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-white/40 bg-white/60 px-5 py-3 shadow-lg backdrop-blur-xl">
            
            <ShieldCheck
              size={18}
              className="text-green-600"
            />

            <span className="text-sm font-semibold text-gray-700">
              Secure Upload
            </span>
          </div>
        </div>
      </div>

      {/* DROP ZONE */}
      <motion.div
        whileHover={{
          scale: 1.01,
        }}
        className="relative mt-10 overflow-hidden rounded-[36px] border-2 border-dashed border-blue-300/60 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 p-10 text-center shadow-inner backdrop-blur-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/5 before:to-purple-500/5"
      >
        
        {/* SCANNING LIGHT */}
        <motion.div
          animate={{
            x: ["-120%", "120%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
          className="absolute top-0 h-full w-24 rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl"
        />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center">
          
          {/* FLOATING ICON */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="relative flex h-28 w-28 items-center justify-center rounded-[32px] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)]"
          >
            
            {/* GLOW */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-40 blur-2xl" />

            <UploadCloud
              size={44}
              className="relative z-10"
            />
          </motion.div>

          {/* TITLE */}
          <h3 className="mt-10 text-4xl font-black text-gray-900">
            Drag & Drop Files
          </h3>

          {/* SUBTEXT */}
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-500">
            Upload prescriptions, tablet strips,
            medical reports, or healthcare documents
            for intelligent AI extraction and analysis.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(79,70,229,0.35)] transition hover:scale-[1.03] active:scale-[0.98]">
              Browse Files
            </button>

            <button className="rounded-2xl border border-gray-200 bg-white/80 px-8 py-4 text-sm font-semibold text-gray-700 shadow-lg backdrop-blur-xl transition hover:bg-white">
              Scan Demo Report
            </button>
          </div>

          {/* FILE TYPES */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            
            {["PDF", "JPG", "PNG", "DOCX"].map(
              (type, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -4,
                  }}
                  className="flex items-center gap-2 rounded-2xl border border-white/40 bg-white/80 px-5 py-3 shadow-lg backdrop-blur-xl"
                >
                  
                  <FileText
                    size={18}
                    className={`${
                      type === "PDF"
                        ? "text-blue-600"
                        : type === "JPG"
                        ? "text-purple-600"
                        : type === "PNG"
                        ? "text-cyan-600"
                        : "text-indigo-600"
                    }`}
                  />

                  <span className="text-sm font-semibold text-gray-700">
                    {type}
                  </span>
                </motion.div>
              )
            )}
          </div>

          {/* STATUS */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            
            <div className="flex items-center gap-2">
              
              <div className="h-2 w-2 rounded-full bg-green-500" />

              OCR Accuracy 98%
            </div>

            <div className="flex items-center gap-2">
              
              <div className="h-2 w-2 rounded-full bg-blue-500" />

              AI Medicine Detection
            </div>

            <div className="flex items-center gap-2">
              
              <div className="h-2 w-2 rounded-full bg-purple-500" />

              Secure Cloud Processing
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UploadZone;