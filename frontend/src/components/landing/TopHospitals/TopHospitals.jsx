import { motion } from "framer-motion";
import {
  Building2,
  ShieldPlus,
  HeartHandshake,
} from "lucide-react";

const schemes = [
  "Ayushman Bharat",
  "Aarogyasri",
  "PMJAY",
  "EHS",
  "State Health Schemes",
];

const hospitals = [
  "Apollo Hospitals",
  "Yashoda Hospitals",
  "KIMS",
  "CARE Hospitals",
  "AIG Hospitals",
  "Continental Hospitals",
];

const TopHospitals = () => {
  return (
    <section
      id="hospitals"
      className="relative overflow-hidden bg-white py-32"
    >
      
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-100/30 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-100/30 blur-3xl" />

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          
          {/* BADGE */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-5 py-2">
            
            <div className="h-2 w-2 rounded-full bg-purple-500" />

            <span className="text-sm font-medium text-gray-700">
              Healthcare Ecosystem Support
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-5xl font-black leading-tight text-gray-900">
            Supported
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Hospitals
            </span>
            <br />
            & Healthcare Schemes
          </h2>

          {/* SUBTEXT */}
          <p className="mt-8 text-lg leading-relaxed text-gray-600">
            MediRoute AI is designed to simplify access to healthcare
            schemes and supported hospitals for patients across India.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="mt-24 grid gap-10 lg:grid-cols-2">
          
          {/* SCHEMES */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-white/50 bg-white/70 p-10 shadow-2xl backdrop-blur-2xl"
          >
            
            {/* ICON */}
            <div className="mb-8 inline-flex rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white shadow-lg">
              <ShieldPlus size={32} />
            </div>

            {/* TITLE */}
            <h3 className="text-3xl font-bold text-gray-900">
              Supported Healthcare Schemes
            </h3>

            <p className="mt-4 text-gray-600">
              Verify treatment eligibility across multiple healthcare schemes.
            </p>

            {/* SCHEME LIST */}
            <div className="mt-10 space-y-4">
              
              {schemes.map((scheme, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    x: 8,
                  }}
                  className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 transition"
                >
                  
                  <span className="font-medium text-gray-700">
                    {scheme}
                  </span>

                  <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    Active
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* HOSPITALS */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-white/50 bg-white/70 p-10 shadow-2xl backdrop-blur-2xl"
          >
            
            {/* ICON */}
            <div className="mb-8 inline-flex rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 p-4 text-white shadow-lg">
              <Building2 size={32} />
            </div>

            {/* TITLE */}
            <h3 className="text-3xl font-bold text-gray-900">
              Supported Hospitals
            </h3>

            <p className="mt-4 text-gray-600">
              Discover hospitals supporting healthcare schemes and treatments.
            </p>

            {/* HOSPITAL LIST */}
            <div className="mt-10 space-y-4">
              
              {hospitals.map((hospital, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    x: 8,
                  }}
                  className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 transition"
                >
                  
                  <div className="flex items-center gap-3">
                    
                    <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-2 text-white">
                      <HeartHandshake size={18} />
                    </div>

                    <span className="font-medium text-gray-700">
                      {hospital}
                    </span>
                  </div>

                  <div className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                    Verified
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TopHospitals;