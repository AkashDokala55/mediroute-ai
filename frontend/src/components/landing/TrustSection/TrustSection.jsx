import { motion } from "framer-motion";

import {
  ShieldCheck,
  LockKeyhole,
  QrCode,
  FileScan,
  HeartPulse,
  BadgeCheck,
} from "lucide-react";

const trustItems = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Secure Medical Storage",
    description:
      "All reports and prescriptions are securely stored with protected access.",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: <QrCode size={28} />,
    title: "Temporary QR Sharing",
    description:
      "Share medical reports instantly with time-limited secure QR access.",
    color: "from-purple-600 to-pink-500",
  },
  {
    icon: <FileScan size={28} />,
    title: "Smart OCR Extraction",
    description:
      "Automatically extract important medical information from prescriptions and reports.",
    color: "from-indigo-600 to-purple-500",
  },
  {
    icon: <HeartPulse size={28} />,
    title: "Healthcare Scheme Support",
    description:
      "Designed specifically to simplify healthcare scheme accessibility for patients.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: <LockKeyhole size={28} />,
    title: "Privacy Focused",
    description:
      "Your healthcare data remains protected with controlled access and sharing.",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "Reliable Assistance",
    description:
      "Built to provide trustworthy healthcare management and accessibility support.",
    color: "from-blue-500 to-indigo-600",
  },
];

const TrustSection = () => {
  return (
    <section
      id="trust"
      className="relative overflow-hidden bg-[#f7f8ff] py-20 lg:py-32"
    >
      
      {/* BACKGROUND GLOWS */}
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
            
            <div className="h-2 w-2 rounded-full bg-green-500" />

            <span className="text-xs font-medium text-gray-700 sm:text-sm">
              Trusted Healthcare Platform
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-3xl font-black leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Built With
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Trust
            </span>
            <br />
            & Patient Safety
          </h2>

          {/* SUBTEXT */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            MediRoute AI focuses on secure healthcare access,
            protected medical sharing, and intelligent patient assistance
            with a privacy-first approach.
          </p>
        </motion.div>

        {/* TRUST GRID */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2 xl:mt-24 xl:grid-cols-3 xl:gap-8">
          
          {trustItems.map((item, index) => (
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
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-300/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100 sm:h-40 sm:w-40" />

              {/* ICON */}
              <div
                className={`relative z-10 inline-flex rounded-xl bg-gradient-to-r ${item.color} p-3 text-white shadow-lg sm:rounded-2xl sm:p-4`}
              >
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="relative z-10 mt-5 text-xl font-bold text-gray-900 sm:mt-6 sm:text-2xl">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="relative z-10 mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                {item.description}
              </p>

              {/* BOTTOM BAR */}
              <div
                className={`relative z-10 mt-6 h-1 w-0 rounded-full bg-gradient-to-r ${item.color} transition-all duration-500 group-hover:w-full sm:mt-8`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;