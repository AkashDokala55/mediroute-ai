import { motion } from "framer-motion";

import {
  ShieldCheck,
  BadgeIndianRupee,
  HeartPulse,
  FileCheck,
  Stethoscope,
  Sparkles,
} from "lucide-react";

const TreatmentResults = ({
  matchedTreatments,
  scheme,
}) => {

  if (
    !matchedTreatments ||
    matchedTreatments.length === 0
  ) {
    return null;
  }

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-2xl border border-blue-200/40 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            
            <Sparkles size={16} />

            AI Coverage Results
          </div>

          <h2 className="mt-5 text-4xl font-black text-gray-900">
            Matched Treatments
          </h2>

          <p className="mt-2 text-gray-500">
            Showing treatments covered under{" "}
            <span className="font-semibold text-blue-700">
              {scheme}
            </span>
          </p>
        </div>

        <div className="rounded-[28px] bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-white shadow-xl">
          
          <h3 className="text-3xl font-black">
            {
              matchedTreatments.length
            }
          </h3>

          <p className="mt-1 text-sm text-blue-100">
            Treatments Found
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="grid gap-8 xl:grid-cols-2">

        {matchedTreatments.map(
          (item, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -5,
            }}
            className="relative overflow-hidden rounded-[36px] border border-white/30 bg-white/80 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-3xl"
          >

            {/* GLOW */}
            <div className="absolute -right-10 -top-10 h-[180px] w-[180px] rounded-full bg-blue-500/10 blur-3xl" />

            {/* TOP */}
            <div className="relative z-10 flex items-start justify-between gap-4">

              {/* LEFT */}
              <div>

                {/* SCHEME */}
                <div className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                  
                  <ShieldCheck size={16} />

                  {scheme}
                </div>

                {/* TITLE */}
                <h3 className="mt-6 text-3xl font-black leading-tight text-gray-900">
                  {
                    item.treatmentName
                  }
                </h3>

                {/* SPECIALITY */}
                <div className="mt-5 flex flex-wrap gap-3">

                  <div className="flex items-center gap-2 rounded-2xl bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                    
                    <HeartPulse size={16} />

                    {
                      item.speciality
                    }
                  </div>

                  <div className="flex items-center gap-2 rounded-2xl bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700">
                    
                    <Stethoscope size={16} />

                    {
                      item.treatmentType ||
                      "Treatment"
                    }
                  </div>
                </div>
              </div>

              {/* PACKAGE */}
              <div className="rounded-[28px] bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-5 text-center text-white shadow-xl">

                <BadgeIndianRupee
                  size={28}
                  className="mx-auto"
                />

                <h3 className="mt-3 text-2xl font-black">
                  ₹
                  {
                    item.packageAmount ||
                    "N/A"
                  }
                </h3>

                <p className="mt-1 text-xs text-green-100">
                  Coverage Amount
                </p>
              </div>
            </div>

            {/* DETAILS */}
            <div className="relative z-10 mt-8 grid gap-5 sm:grid-cols-2">

              {/* CODE */}
              <div className="rounded-[28px] border border-gray-100 bg-gray-50 p-5">

                <p className="text-sm font-medium text-gray-500">
                  Treatment Code
                </p>

                <h3 className="mt-3 text-lg font-bold text-gray-900">
                  {
                    item.treatmentCode ||
                    item.procedureCode ||
                    "N/A"
                  }
                </h3>
              </div>

              {/* SPECIALITY CODE */}
              <div className="rounded-[28px] border border-gray-100 bg-gray-50 p-5">

                <p className="text-sm font-medium text-gray-500">
                  Speciality Code
                </p>

                <h3 className="mt-3 text-lg font-bold text-gray-900">
                  {
                    item.specialityCode ||
                    "N/A"
                  }
                </h3>
              </div>
            </div>

            {/* INVESTIGATIONS */}
            <div className="relative z-10 mt-8 space-y-5">

              {/* PRE */}
              {item.preInvestigations &&
                item.preInvestigations
                  .length > 0 && (

                <div className="rounded-[28px] border border-cyan-100 bg-cyan-50 p-6">

                  <div className="flex items-center gap-3">

                    <FileCheck
                      size={20}
                      className="text-cyan-600"
                    />

                    <h3 className="text-lg font-bold text-gray-900">
                      Pre Investigations
                    </h3>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">

                    {item.preInvestigations.map(
                      (
                        pre,
                        idx
                      ) => (

                      <div
                        key={idx}
                        className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-cyan-700 shadow-sm"
                      >
                        {pre}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* POST */}
              {item.postInvestigations &&
                item.postInvestigations
                  .length > 0 && (

                <div className="rounded-[28px] border border-purple-100 bg-purple-50 p-6">

                  <div className="flex items-center gap-3">

                    <FileCheck
                      size={20}
                      className="text-purple-600"
                    />

                    <h3 className="text-lg font-bold text-gray-900">
                      Post Investigations
                    </h3>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">

                    {item.postInvestigations.map(
                      (
                        post,
                        idx
                      ) => (

                      <div
                        key={idx}
                        className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-purple-700 shadow-sm"
                      >
                        {post}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentResults;