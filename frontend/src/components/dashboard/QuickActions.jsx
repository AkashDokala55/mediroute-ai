import { motion } from "framer-motion";
import {
  useNavigate,
} from "react-router-dom";
import {
  Upload,
  ShieldCheck,
  Pill,
  QrCode,
  ArrowUpRight,
} from "lucide-react";

const actions = [
  {
  title: "Upload Reports",
  description:
    "Securely upload prescriptions and medical reports.",
  icon: Upload,
  gradient:
    "from-blue-600 to-cyan-500",
  path:
    "/medicalvault",
},
  {
  title: "Scheme Checker",
  description:
    "Check healthcare scheme eligibility instantly.",
  icon: ShieldCheck,
  gradient:
    "from-purple-600 to-pink-500",
  path:
    "/scheme-checker",
},

  {
  title: "Medicine Tracker",
  description:
    "Track medicines, reminders, and expiry dates.",
  icon: Pill,
  gradient:
    "from-indigo-600 to-purple-500",
  path:
    "/medicine-tracker",
},
  {
  title: "Emergency QR",
  description:
    "Generate emergency healthcare QR access.",
  icon: QrCode,
  gradient:
    "from-cyan-500 to-blue-600",
  path:
    "/emergency-qr",
},
];

const QuickActions = () => {
  const navigate =
    useNavigate();
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      
      {actions.map((action, index) => {
        const Icon = action.icon;

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
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
              scale: 1.01,
            }}
            className="group relative overflow-hidden rounded-[30px] border border-white/50 bg-white/70 p-6 shadow-xl backdrop-blur-3xl"
          >
            
            {/* GLOW */}
            <div
              className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-r ${action.gradient} opacity-10 blur-3xl transition duration-500 group-hover:opacity-20`}
            />

            {/* ICON */}
            <div
              className={`relative z-10 inline-flex rounded-2xl bg-gradient-to-r ${action.gradient} p-4 text-white shadow-xl`}
            >
              <Icon size={24} />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 mt-6">
              
              <h3 className="text-2xl font-bold text-gray-900">
                {action.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {action.description}
              </p>
            </div>

            {/* BUTTON */}
            <button
  onClick={() =>
    navigate(
      action.path
    )
  }
  className={`relative z-10 mt-8 flex items-center gap-2 rounded-2xl bg-gradient-to-r ${action.gradient} px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.03] active:scale-[0.98]`}
>
              
              Open

              <ArrowUpRight size={18} />
            </button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default QuickActions;