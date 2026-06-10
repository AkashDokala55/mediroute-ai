import { motion } from "framer-motion";

import {
  CheckCircle2,
  XCircle,
  Clock3,
  Flame,
  Activity,
} from "lucide-react";

const MedicineProgress = ({
  medicines,
}) => {

  const today =
  new Date().toDateString();

const taken =
  medicines.filter(
    (med) =>
      med.lastTakenDate === today
  ).length;

  const skipped =
    medicines.filter(
      (med) =>
        med.status === "Skipped"
    ).length;

  const missed =
    medicines.filter(
      (med) =>
        med.status === "Missed"
    ).length;

  const total =
    medicines.length;
const streakDates =
  new Set();

medicines.forEach(
  (medicine) => {

    (
      medicine.takenDates ||
      []
    ).forEach(
      (date) =>
        streakDates.add(
          date
        )
    );
  }
);

const sortedDates =
  Array.from(
    streakDates
  )
    .map(
      (date) =>
        new Date(date)
    )
    .sort(
      (a, b) =>
        b - a
    );

let streak = 0;

let currentDate =
  new Date();

while (true) {

  const exists =
    sortedDates.some(
      (date) =>
        date.toDateString() ===
        currentDate.toDateString()
    );

  if (!exists)
    break;

  streak++;

  currentDate.setDate(
    currentDate.getDate() -
      1
  );
}
  const completion =
    total > 0
      ? Math.round(
          (taken / total) * 100
        )
      : 0;

  const stats = [
    {
      title: "Taken",
      value: taken,
      subtitle:
        "Medicines Completed",
      icon: CheckCircle2,
      bg: "bg-green-100",
      text: "text-green-700",
    },

    {
      title: "Skipped",
      value: skipped,
      subtitle:
        "Skipped By User",
      icon: XCircle,
      bg: "bg-yellow-100",
      text: "text-yellow-700",
    },

    {
      title: "Missed",
      value: missed,
      subtitle:
        "No User Response",
      icon: Clock3,
      bg: "bg-red-100",
      text: "text-red-700",
    },

    {
      title: "Current Streak",
      value: `${streak} Days`,
      subtitle:
        "Consistency Tracking",
      icon: Flame,
      bg: "bg-blue-100",
      text: "text-blue-700",
    },
  ];

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
      className="relative overflow-hidden rounded-[40px] border border-white/40 bg-white/60 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-3xl"
    >
      
      {/* HEADER */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        
        <div>
          
          <div className="inline-flex items-center gap-2 rounded-2xl border border-blue-200/40 bg-blue-50/70 px-4 py-2 text-sm font-semibold text-blue-700">
            
            <Activity size={16} />

            Smart Progress Tracking
          </div>

          <h2 className="mt-6 text-4xl font-black text-gray-900">
            Medicine Progress
          </h2>

          <p className="mt-3 max-w-2xl text-gray-500">
            Real-time tracking based on
            medicine reminder interactions.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-green-100 px-5 py-4 text-green-700 shadow-sm">
          
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <span className="font-bold">
            {completion}% Completion
          </span>
        </div>
      </div>

      {/* STATS */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="rounded-[32px] border border-white/40 bg-gradient-to-br from-white/90 to-blue-50/60 p-6 shadow-lg"
            >
              
              <div
                className={`inline-flex rounded-[28px] ${item.bg} p-5 ${item.text}`}
              >
                <Icon size={28} />
              </div>

              <h3 className="mt-8 text-5xl font-black text-gray-900">
                {item.value}
              </h3>

              <p className="mt-3 text-xl font-bold text-gray-800">
                {item.title}
              </p>

              <p className="mt-3 text-sm text-gray-500">
                {item.subtitle}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* PROGRESS BAR */}
      <div className="mt-12 rounded-[32px] border border-white/40 bg-gradient-to-r from-blue-50/80 to-purple-50/70 p-7 shadow-inner">
        
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          
          <div>
            <h3 className="text-3xl font-black text-gray-900">
              Daily Adherence
            </h3>

            <p className="mt-3 text-gray-500">
              Completion percentage for today's medicines.
            </p>
          </div>

          <div className="text-right">
            <h2 className="text-5xl font-black text-blue-700">
              {completion}%
            </h2>

            <p className="mt-2 text-sm font-medium text-gray-500">
              Today's Completion
            </p>
          </div>
        </div>

        {/* BAR */}
        <div className="mt-8 h-5 overflow-hidden rounded-full bg-white shadow-inner">
          
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${completion}%`,
            }}
            transition={{
              duration: 1,
            }}
            className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default MedicineProgress;