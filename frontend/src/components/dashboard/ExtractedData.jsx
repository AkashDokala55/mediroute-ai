import { motion } from "framer-motion";

import {
  Pill,
  ShieldCheck,
  AlertTriangle,
  FileText,
  CheckCircle2,
  Sparkles,
  BrainCircuit,
  Activity,
} from "lucide-react";

const medicines = [
  {
    name: "Paracetamol 650mg",
    usage: "Fever & Pain Relief",
    status: "Safe",
    color: "green",
    confidence: "98%",
  },

  {
    name: "Amoxicillin",
    usage: "Antibiotic",
    status: "Monitor",
    color: "yellow",
    confidence: "94%",
  },

  {
    name: "Vitamin D3",
    usage: "Supplement",
    status: "Safe",
    color: "green",
    confidence: "96%",
  },
];

const ExtractedData = () => {
  return (
    <div className="grid gap-8 xl:grid-cols-3">
      
      {/* LEFT */}
      <div className="space-y-8 xl:col-span-2">
        
        {/* SUMMARY */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="relative overflow-hidden rounded-[36px] border border-white/40 bg-white/60 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-3xl"
        >
          
          {/* GLOW */}
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

          {/* HEADER */}
          <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            
            <div className="flex items-center gap-4">
              
              <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white shadow-xl">
                <FileText size={26} />
              </div>

              <div>
                <h2 className="text-3xl font-black text-gray-900">
                  AI Report Summary
                </h2>

                <p className="mt-1 text-gray-500">
                  Smart healthcare extraction analysis
                </p>
              </div>
            </div>

            {/* AI BADGE */}
            <div className="flex w-fit items-center gap-2 rounded-2xl border border-indigo-200/40 bg-indigo-50/70 px-4 py-2 text-indigo-700 shadow-sm backdrop-blur-xl">
              
              <BrainCircuit size={16} />

              <span className="text-sm font-semibold">
                AI Generated
              </span>
            </div>
          </div>

          {/* INFO GRID */}
          <div className="relative z-10 mt-8 grid gap-5 sm:grid-cols-2">
            
            <InfoCard
              title="Patient Condition"
              value="Mild Viral Fever"
            />

            <InfoCard
              title="Doctor Recommendation"
              value="Rest & Hydration"
            />

            <InfoCard
              title="Treatment Duration"
              value="5 Days"
            />

            <InfoCard
              title="Follow-up"
              value="Recommended"
            />
          </div>
        </motion.div>

        {/* MEDICINES */}
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
            delay: 0.1,
          }}
          className="relative overflow-hidden rounded-[36px] border border-white/40 bg-white/60 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-3xl"
        >
          
          {/* GLOW */}
          <div className="absolute bottom-[-80px] left-[-80px] h-52 w-52 rounded-full bg-purple-500/10 blur-3xl" />

          {/* HEADER */}
          <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            
            <div className="flex items-center gap-4">
              
              <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 p-4 text-white shadow-xl">
                <Pill size={26} />
              </div>

              <div>
                <h2 className="text-3xl font-black text-gray-900">
                  Medicines Detected
                </h2>

                <p className="mt-1 text-gray-500">
                  AI extracted medicines from report
                </p>
              </div>
            </div>

            {/* STATUS */}
            <div className="flex items-center gap-2 rounded-2xl bg-green-50 px-4 py-2 text-green-700 shadow-sm">
              
              <Activity size={16} />

              <span className="text-sm font-semibold">
                Analysis Complete
              </span>
            </div>
          </div>

          {/* LIST */}
          <div className="relative z-10 mt-8 space-y-5">
            
            {medicines.map((medicine, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                  scale: 1.01,
                }}
                className="group rounded-[28px] border border-white/40 bg-gradient-to-r from-white/80 to-blue-50/50 p-6 shadow-lg transition-all duration-300 hover:shadow-[0_10px_40px_rgba(79,70,229,0.12)]"
              >
                
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  
                  {/* LEFT */}
                  <div>
                    
                    <div className="flex items-center gap-3">
                      
                      <h3 className="text-2xl font-black text-gray-900">
                        {medicine.name}
                      </h3>

                      <div className="rounded-xl bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
                        {medicine.confidence}
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-gray-500">
                      {medicine.usage}
                    </p>
                  </div>

                  {/* STATUS */}
                  <div
                    className={`flex w-fit items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold ${
                      medicine.color === "green"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    
                    {medicine.color === "green" ? (
                      <CheckCircle2 size={18} />
                    ) : (
                      <AlertTriangle size={18} />
                    )}

                    {medicine.status}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* RIGHT */}
      <div className="space-y-8">
        
        {/* SCHEMES */}
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
            delay: 0.2,
          }}
          className="relative overflow-hidden rounded-[36px] border border-white/40 bg-gradient-to-br from-indigo-50/70 to-purple-50/70 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-3xl"
        >
          
          {/* GLOW */}
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative z-10">
            
            <div className="inline-flex rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white shadow-xl">
              <ShieldCheck size={26} />
            </div>

            <h2 className="mt-7 text-4xl font-black text-gray-900">
              Scheme Eligibility
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              AI identified possible healthcare schemes
              based on uploaded treatment records.
            </p>

            {/* SCHEMES */}
            <div className="mt-8 space-y-4">
              
              <SchemeTag name="Ayushman Bharat" />

              <SchemeTag name="State Health Support" />

              <SchemeTag name="Senior Citizen Benefit" />
            </div>

            {/* BUTTON */}
            <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 py-4 text-sm font-bold text-white shadow-[0_10px_40px_rgba(79,70,229,0.25)] transition hover:scale-[1.03]">
              Check Full Eligibility
            </button>
          </div>
        </motion.div>

        {/* AI STATUS */}
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
            delay: 0.3,
          }}
          className="rounded-[36px] border border-white/40 bg-white/60 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-3xl"
        >
          
          <div className="flex items-center gap-3">
            
            <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-3 text-white shadow-lg">
              <Sparkles size={22} />
            </div>

            <h2 className="text-3xl font-black text-gray-900">
              AI Analysis
            </h2>
          </div>

          <div className="mt-8 space-y-6">
            
            <StatusItem
              label="Medicine Extraction"
              value="98%"
            />

            <StatusItem
              label="OCR Accuracy"
              value="95%"
            />

            <StatusItem
              label="Healthcare Analysis"
              value="97%"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const InfoCard = ({
  title,
  value,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="rounded-[28px] border border-white/40 bg-gradient-to-br from-white/90 to-blue-50/70 p-6 shadow-lg"
    >
      
      <p className="text-sm font-medium text-gray-500">
        {title}
      </p>

      <h3 className="mt-3 text-2xl font-black text-gray-900">
        {value}
      </h3>
    </motion.div>
  );
};

const SchemeTag = ({ name }) => {
  return (
    <motion.div
      whileHover={{
        x: 4,
      }}
      className="rounded-2xl border border-white/40 bg-white/70 px-5 py-4 text-sm font-bold text-indigo-700 shadow-lg backdrop-blur-xl"
    >
      {name}
    </motion.div>
  );
};

const StatusItem = ({
  label,
  value,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        
        <p className="text-sm font-medium text-gray-500">
          {label}
        </p>

        <p className="text-sm font-bold text-gray-900">
          {value}
        </p>
      </div>

      <div className="mt-3 h-3 overflow-hidden rounded-full bg-gray-100">
        
        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: value,
          }}
          transition={{
            duration: 1.2,
          }}
          className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
        />
      </div>
    </div>
  );
};

export default ExtractedData;