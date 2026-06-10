import { motion } from "framer-motion";

import {
  Upload,
  ScanSearch,
  ShieldCheck,
  Building2,
  Pill,
} from "lucide-react";

const steps = [
  {
    icon: <Upload size={28} />,
    title: "Upload Prescription",
    description:
      "Upload reports, prescriptions, or tablet strips securely into the platform.",
  },
  {
    icon: <ScanSearch size={28} />,
    title: "AI Extracts Information",
    description:
      "OCR technology intelligently extracts medicines, treatments, and important details.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Check Scheme Eligibility",
    description:
      "Instantly verify whether treatments and hospitals are covered under healthcare schemes.",
  },
  {
    icon: <Building2 size={28} />,
    title: "Find Nearby Hospitals",
    description:
      "Discover nearby hospitals that support your eligible healthcare schemes.",
  },
  {
    icon: <Pill size={28} />,
    title: "Manage Medicines",
    description:
      "Track medicines, expiry dates, reminders, and securely manage reports.",
  },
];

const HealthcareJourney = () => {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-white py-20 lg:py-32"
    >
      
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[250px] w-[250px] rounded-full bg-blue-100/40 blur-3xl sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]" />

      <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-purple-100/40 blur-3xl sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]" />

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          
          {/* BADGE */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2">
            
            <div className="h-2 w-2 rounded-full bg-purple-500" />

            <span className="text-xs font-medium text-gray-700 sm:text-sm">
              Simple Healthcare Journey
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-3xl font-black leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            How
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              MediRoute AI
            </span>
            <br />
            Works For You
          </h2>

          {/* SUBTEXT */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Experience a seamless healthcare journey with intelligent
            tools designed to simplify medical management and scheme access.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500 to-purple-500 lg:block" />

          <div className="space-y-10 sm:space-y-12 lg:space-y-16">
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className={`relative flex flex-col items-center lg:flex-row ${
                  index % 2 !== 0
                    ? "lg:flex-row-reverse"
                    : ""
                }`}
              >
                
                {/* CARD */}
                <div className="w-full lg:w-1/2">
                  
                  <div className="group relative rounded-2xl border border-white/50 bg-white/80 p-6 shadow-xl backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl sm:rounded-3xl sm:p-8">
                    
                    {/* GLOW */}
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-200/30 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100 sm:h-32 sm:w-32" />

                    {/* ICON */}
                    <div className="relative z-10 mb-5 inline-flex rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-3 text-white shadow-lg sm:mb-6 sm:rounded-2xl sm:p-4">
                      {step.icon}
                    </div>

                    {/* TITLE */}
                    <h3 className="relative z-10 text-2xl font-bold text-gray-900 sm:text-3xl">
                      {step.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="relative z-10 mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* CENTER DOT */}
                <div className="absolute left-1/2 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg lg:block xl:h-8 xl:w-8" />

                {/* EMPTY SPACE */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareJourney;