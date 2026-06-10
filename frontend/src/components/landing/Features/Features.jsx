import { motion } from "framer-motion";

import {
  ShieldCheck,
  ScanText,
  Pill,
  BellRing,
  QrCode,
  Share2,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Scheme Eligibility Checker",
    description:
      "Instantly verify whether treatments and hospitals are covered under healthcare schemes.",
  },
  {
    icon: <ScanText size={28} />,
    title: "OCR Prescription Upload",
    description:
      "Upload prescriptions or reports and automatically extract important medical information.",
  },
  {
    icon: <Pill size={28} />,
    title: "Medicine Expiry Tracker",
    description:
      "Track medicine expiry dates by uploading tablet strips and receive expiry reminders.",
  },
  {
    icon: <BellRing size={28} />,
    title: "Tablet Scheduler",
    description:
      "Schedule medicines and receive timely reminders for daily healthcare management.",
  },
  {
    icon: <QrCode size={28} />,
    title: "Emergency QR Card",
    description:
      "Generate emergency health QR cards containing important medical and contact details.",
  },
  {
    icon: <Share2 size={28} />,
    title: "Secure QR Sharing",
    description:
      "Securely share reports and medical documents using temporary QR-based access.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#f5f7ff] py-20 lg:py-32"
    >
      
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[250px] w-[250px] rounded-full bg-blue-200/20 blur-3xl sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]" />

      <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-purple-200/20 blur-3xl sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]" />

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          
          {/* BADGE */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl">
            
            <div className="h-2 w-2 rounded-full bg-purple-500" />

            <span className="text-xs font-medium text-gray-700 sm:text-sm">
              Powerful Healthcare Features
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-3xl font-black leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Everything You Need
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              In One Platform
            </span>
          </h2>

          {/* SUBTEXT */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            MediRoute AI simplifies healthcare management with intelligent
            tools for schemes, medicines, reports, emergency access,
            and secure medical sharing.
          </p>
        </motion.div>

        {/* FEATURE GRID */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2 xl:mt-24 xl:grid-cols-3 xl:gap-8">
          
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/50 bg-white/70 p-6 shadow-xl backdrop-blur-2xl transition-all duration-500 sm:rounded-3xl sm:p-8"
            >
              
              {/* HOVER GLOW */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-300/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* ICON */}
              <div className="relative z-10 mb-5 inline-flex rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-3 text-white shadow-lg sm:mb-6 sm:rounded-2xl sm:p-4">
                {feature.icon}
              </div>

              {/* TITLE */}
              <h3 className="relative z-10 text-xl font-bold text-gray-900 sm:text-2xl">
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="relative z-10 mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                {feature.description}
              </p>

              {/* BOTTOM LINE */}
              <div className="relative z-10 mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 group-hover:w-full sm:mt-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;