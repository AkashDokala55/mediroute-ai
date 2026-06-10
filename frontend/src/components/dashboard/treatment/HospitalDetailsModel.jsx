import { motion, AnimatePresence } from "framer-motion";

import {
  X,
  Hospital,
  Phone,
  MapPin,
  ShieldCheck,
  BadgeCheck,
  Stethoscope,
  Sparkles,
  Navigation,
} from "lucide-react";

const HospitalDetailsModel = ({
  open,
  setOpen,
  hospital,
}) => {

  if (!hospital) return null;

  return (
    <AnimatePresence>

      {open && (

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
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              y: 20,
            }}
            transition={{
              duration: 0.28,
            }}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[40px] border border-white/30 bg-white/95 p-8 shadow-[0_30px_120px_rgba(15,23,42,0.35)] backdrop-blur-3xl"
          >

            {/* CLOSE */}
            <button
              onClick={() =>
                setOpen(false)
              }
              className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-red-100 hover:text-red-500"
            >
              <X size={22} />
            </button>

            {/* HEADER */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

              <div className="flex-1">

                {/* BADGES */}
                <div className="flex flex-wrap items-center gap-3">

                  <div className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">

                    <ShieldCheck size={16} />

                    {hospital.relevanceScore ||
                      hospital.aiScore ||
                      92}% Match
                  </div>

                  {hospital.isNearby && (

                    <div className="inline-flex items-center gap-2 rounded-2xl bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                      <MapPin size={15} />

                      Location Based Hospital
                    </div>
                  )}
                </div>

                {/* NAME */}
                <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-5xl">

                  {hospital.hospitalName}
                </h1>

                {/* DISTRICT */}
                <div className="mt-6 flex items-center gap-3 text-lg text-slate-600">

                  <MapPin
                    size={20}
                    className="text-cyan-600"
                  />

                  <span className="font-medium">

                    {hospital.district ||
                      hospital.city ||
                      "District Not Available"}

                  </span>
                </div>
              </div>

              {/* ICON */}
              <div className="flex h-28 w-28 items-center justify-center rounded-[34px] bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)]">

                <Hospital size={44} />
              </div>
            </div>

            {/* DISCLAIMER */}
            <div className="mt-10 rounded-[30px] border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-6">

              <div className="flex items-start gap-4">

                <BadgeCheck
                  size={22}
                  className="mt-1 text-amber-600"
                />

                <p className="text-[15px] leading-8 text-amber-800">

                  Treatment availability,
                  package approval,
                  room availability,
                  and scheme eligibility may vary.

                  Please verify directly with the
                  hospital or official scheme authorities
                  before proceeding.

                </p>
              </div>
            </div>

            {/* INFO GRID */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">

              {/* CONTACT */}
              <div className="rounded-[30px] border border-gray-100 bg-gray-50 p-7">

                <div className="flex items-center gap-5">

                  <div className="rounded-2xl bg-green-100 p-4 text-green-600">

                    <Phone size={26} />
                  </div>

                  <div>

                    <p className="text-sm text-gray-500">

                      Contact Number
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-gray-900">

                      {hospital.contact ||
                        hospital.phone ||
                        hospital.mobile ||
                        hospital.contactNumber ||
                        "Not Available"}

                    </h3>
                  </div>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="rounded-[30px] border border-blue-100 bg-blue-50 p-7">

                <div className="flex items-start gap-5">

                  <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">

                    <MapPin size={26} />
                  </div>

                  <div>

                    <p className="text-sm text-gray-500">

                      Address
                    </p>

                    <h3 className="mt-2 text-base font-semibold leading-7 text-gray-900">

                      {hospital.address ||
                        hospital.hospitalAddress ||
                        "Address Not Available"}

                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* SPECIALITIES */}
            {hospital.specialities &&
              hospital.specialities.length > 0 && (

              <div className="mt-12">

                <div className="flex items-center gap-3">

                  <Stethoscope
                    size={22}
                    className="text-blue-600"
                  />

                  <h3 className="text-3xl font-black text-slate-900">

                    Supported Specialities
                  </h3>
                </div>

                <div className="mt-7 flex flex-wrap gap-4">

                  {hospital.specialities.map(
                    (
                      speciality,
                      idx
                    ) => (

                    <div
                      key={idx}
                      className="rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm"
                    >
                      {speciality}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HospitalDetailsModel;