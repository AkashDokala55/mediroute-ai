import { motion } from "framer-motion";

import {
  CalendarClock,
  Plus,
  ScanLine,
  Pill,
} from "lucide-react";

const ExpiryHero = ({
  medicines,
  setOpenModal,
}) => {

  const total =
    medicines.length;

  const nearestMedicine =
    medicines.length > 0
      ? [...medicines].sort(
          (a, b) =>
            new Date(
              a.expiryDate
            ) -
            new Date(
              b.expiryDate
            )
        )[0]
      : null;

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
        duration: 0.5,
      }}
      className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] p-8 text-white shadow-[0_20px_80px_rgba(37,99,235,0.35)]"
    >

      {/* GLOWS */}
      <div className="absolute -left-20 top-0 h-[280px] w-[280px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute bottom-[-80px] right-[-80px] h-[240px] w-[240px] rounded-full bg-blue-400/10 blur-3xl" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* LEFT */}
        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-xl">

            <CalendarClock
              size={16}
            />

            Smart Expiry Monitoring

          </div>

          <h1 className="mt-8 text-3xl md:text-4xl xl:text-6xl font-black leading-tight ">
            Medicine
            <br />
            Expiry Tracker
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
            Keep track of home medicines,
            prevent expiry losses,
            and get notified before
            medicines become unusable.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button
              onClick={() =>
                setOpenModal(true)
              }
              className="rounded-2xl bg-white px-6 py-4 text-sm font-bold text-blue-700 shadow-xl transition hover:scale-[1.03]"
            >
              Add Medicine
            </button>

            <button
            onClick={() =>
                setOpenModal(true)
              }
              className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
            >
              Scan Medicine
            </button>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4 lg:w-[360px]">

          <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">

            <div className="flex items-center gap-3">

              <Pill size={22} />

              <div>

                <p className="text-sm text-slate-300">
                  Total Inventory
                </p>

                <h3 className="text-4xl font-black">
                  {total}
                </h3>

              </div>

            </div>

          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">

            <div className="flex items-center gap-3">

              <ScanLine
                size={22}
              />

              <div>

                <p className="text-sm text-slate-300">
                  Nearest Expiry
                </p>

                <h3 className="text-xl font-black">
                  {nearestMedicine
                    ? nearestMedicine.medicineName
                    : "No Medicines"}
                </h3>

                <p className="mt-1 text-xs text-slate-300">

                  {nearestMedicine
                    ? new Date(
                        nearestMedicine.expiryDate
                      ).toLocaleDateString()
                    : "--"}

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
};

export default ExpiryHero;