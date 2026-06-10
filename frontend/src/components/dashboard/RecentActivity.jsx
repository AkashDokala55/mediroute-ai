import { motion } from "framer-motion";

import {
  FileText,
  QrCode,
  ShieldCheck,
  Pill,
} from "lucide-react";

const getIconData =
  (type) => {

    switch (type) {

      case "report":
        return {
          icon:
            FileText,

          color:
            "from-blue-600 to-cyan-500",
        };

      case "profile":
        return {
          icon:
            Pill,

          color:
            "from-purple-600 to-pink-500",
        };

      case "emergency":
        return {
          icon:
            QrCode,

          color:
            "from-indigo-600 to-purple-500",
        };

      default:
        return {
          icon:
            ShieldCheck,

          color:
            "from-cyan-500 to-blue-600",
        };
    }
  };
const RecentActivity = ({
  activities = [],
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="rounded-[32px] border border-white/50 bg-white/70 p-6 shadow-xl backdrop-blur-3xl"
    >
      
      {/* HEADER */}
      <div className="flex items-center justify-between">
        
        <div>
          <h2 className="text-3xl font-black text-gray-900">
            Recent Activity
          </h2>

          <p className="mt-2 text-gray-500">
            Your latest healthcare interactions.
          </p>
        </div>

        <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.03] active:scale-[0.98]">
          View All
        </button>
      </div>

      {/* ACTIVITIES */}
      <div className="mt-8 space-y-5">
        
        {activities.map((activity, index) => {
const {
  icon: Icon,
  color,
} =
  getIconData(
    activity.type
  );
          return (
            <motion.div
              key={index}
              whileHover={{
                x: 4,
              }}
              className="group flex items-center justify-between rounded-2xl border border-white/40 bg-white/60 p-5 transition-all duration-300 hover:shadow-lg"
            >
              
              {/* LEFT */}
              <div className="flex items-center gap-4">
                
                {/* ICON */}
                <div
                  className={`rounded-2xl bg-gradient-to-r ${color} p-4 text-white shadow-lg`}
                >
                  <Icon size={22} />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {activity.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
{
  new Date(
    activity.time
  ).toLocaleDateString()
}                  </p>
                </div>
              </div>

              {/* STATUS */}
              <div className="hidden sm:flex items-center gap-2">
                
                <div className="h-2 w-2 rounded-full bg-green-500" />

                <p className="text-sm font-medium text-green-600">
                  Completed
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default RecentActivity;