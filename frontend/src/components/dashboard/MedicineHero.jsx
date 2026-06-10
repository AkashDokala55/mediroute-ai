import { motion } from "framer-motion";

import {
  Pill,
  Bell,
  ShieldCheck,
  Activity,
} from "lucide-react";

const MedicineHero = ({
  setOpenModal,
  medicines,
  scheduleRef,
}) => {

  const active =
    medicines.length;

  const taken =
    medicines.filter(
      (med) =>
        med.status === "Taken"
    ).length;

  const completion =
    active > 0
      ? Math.round(
          (taken / active) *
            100
        )
      : 0;
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
      className="relative overflow-hidden rounded-[40px] border border-white/20 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] p-8 text-white shadow-[0_20px_80px_rgba(37,99,235,0.35)] sm:p-12"
    >
      
      {/* GLOWS */}
      <div className="absolute -left-20 top-0 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute bottom-[-100px] right-[-100px] h-[280px] w-[280px] rounded-full bg-blue-400/10 blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col gap-10 xl:flex-row lg:items-center lg:justify-between">
        
        {/* LEFT */}
        <div className="max-w-3xl">
          
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-xl">
            
            <Activity size={16} />

            Smart Medicine Reminder
          </div>

          {/* TITLE */}
          <h1 className="mt-8 text-3xl md:text-4xl xl:text-6xl font-black leading-tight ">
            Medicine
            <br />
            Tracker System
          </h1>

          {/* TEXT */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
            Schedule medicines, receive reminders,
            track missed dosages, and monitor your
            daily medicine routine intelligently.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            
            <button
              onClick={() => setOpenModal(true)}
              className="rounded-2xl bg-white px-6 py-4 text-sm font-bold text-blue-700 shadow-xl transition hover:scale-[1.03]"
            >
              Add Medicine
            </button>

            <button
  onClick={() =>
    scheduleRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
  className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
>
  View Schedule
</button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative hidden xl:flex">
          
          {/* OUTER */}
          <div className="flex h-[340px] w-[340px] items-center justify-center rounded-full border border-white/10">
            
            <div className="flex h-[260px] w-[260px] items-center justify-center rounded-full border border-white/10">
              
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
                className="relative flex h-[180px] w-[180px] items-center justify-center rounded-full bg-white/10 backdrop-blur-2xl"
              >
                
                {/* CENTER */}
                <div className="text-center">
                  
                  <Pill
                    size={48}
                    className="mx-auto"
                  />

                  <p className="mt-4 text-sm text-slate-300">
                    Reminder Monitoring
                  </p>
                </div>

                {/* PULSE */}
                <div className="absolute inset-0 rounded-full border-4 border-cyan-300/30 animate-ping" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="relative z-10 mt-12 grid gap-5 md:grid-cols-3">
        
        <StatCard
          icon={Pill}
          title="Medicines Active"
value={active}        />

        <StatCard
          icon={Bell}
          title="Today's Reminders"
value={active}        />

        <StatCard
          icon={ShieldCheck}
          title="Completion Rate"
value={`${completion}%`}        />
      </div>
    </motion.div>
  );
};

const StatCard = ({
  icon: Icon,
  title,
  value,
}) => {
  return (
    <div className="rounded-[28px] border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
      
      <div className="flex items-center gap-4">
        
        <div className="rounded-2xl bg-white/10 p-4">
          <Icon size={24} />
        </div>

        <div>
          <p className="text-sm text-slate-300">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-black">
            {value}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MedicineHero;