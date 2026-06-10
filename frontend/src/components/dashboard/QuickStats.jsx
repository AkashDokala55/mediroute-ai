import { motion } from "framer-motion";

import {
  FileText,
  Users,
  ShieldCheck,
  QrCode,
} from "lucide-react";

const QuickStats = ({
  stats,
}) => {

  const dashboardStats = [
    {
      title: "Uploaded Reports",
      value:
        stats?.reports || 0,
      icon: FileText,
      gradient:
        "from-blue-600 to-cyan-500",
    },

    {
      title: "Family Profiles",
      value:
        stats?.profiles || 0,
      icon: Users,
      gradient:
        "from-purple-600 to-pink-500",
    },

    {
      title: "Emergency Cards",
      value:
        stats?.emergencyCards || 0,
      icon: ShieldCheck,
      gradient:
        "from-indigo-600 to-purple-500",
    },

    {
      title: "QR Shares",
      value:
        stats?.sharedReports || 0,
      icon: QrCode,
      gradient:
        "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {dashboardStats.map(
        (
          item,
          index
        ) => {

          const Icon =
            item.icon;

          return (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay:
                  index * 0.1,
              }}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-xl backdrop-blur-3xl"
            >

              <div
                className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-r ${item.gradient} opacity-10 blur-3xl transition duration-500 group-hover:opacity-20`}
              />

              <div className="relative z-10 flex items-start justify-between">

                <div>

                  <p className="text-sm text-gray-500">

                    {item.title}

                  </p>

                  <h2 className="mt-3 text-4xl font-black text-gray-900">

                    {item.value}

                  </h2>

                </div>

                <div
                  className={`rounded-2xl bg-gradient-to-r ${item.gradient} p-4 text-white shadow-lg`}
                >

                  <Icon
                    size={24}
                  />

                </div>

              </div>

              <div className="relative z-10 mt-8 flex items-center gap-2">

                <div className="h-2 w-2 rounded-full bg-green-500" />

                <p className="text-sm font-medium text-green-600">

                  Live Data

                </p>

              </div>

            </motion.div>
          );
        }
      )}

    </div>
  );
};

export default QuickStats;