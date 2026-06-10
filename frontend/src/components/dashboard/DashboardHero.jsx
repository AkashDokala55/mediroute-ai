import { motion } from "framer-motion";
import {
  HeartPulse,
  Pill,
  Shield,
  FileText,
} from "lucide-react";

const DashboardHero = () => {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  const hour =
    new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning ☀️"
      : hour < 18
      ? "Good Afternoon 🌤️"
      : "Good Evening 🌙";

  const quotes = [
    "Your health is your greatest wealth.",
    "Take care of your body. It's the only place you have to live.",
    "A healthy future starts today.",
    "Small daily habits create lifelong health.",
    "Wellness is not a destination, it's a way of life.",
  ];

  const quote =
    quotes[
      new Date().getDate() %
        quotes.length
    ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        scale: 1.01,
      }}
      className="group relative overflow-hidden rounded-[40px] shadow-2xl"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e40af] to-[#7c3aed]" />

      {/* GLOW */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full border border-white/10 bg-white/5 blur-sm" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col gap-8 p-6 md:p-10">

        {/* TOP */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row">

          {/* LEFT */}
          <div className="max-w-2xl">

            <div className="mb-6 flex items-center gap-4">

              {/* LOGO */}
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-xl">

                <img
                  src="/logo.jpg"
                  alt="MediRoute"
                  className="h-10 w-10 object-contain"
                />

              </div>

              <div>

                <p className="text-sm font-medium text-blue-100">
                  MediRoute AI
                </p>

                <p className="text-xs text-blue-200">
                  Smart Healthcare Platform
                </p>

              </div>

            </div>

            <p className="text-sm font-medium text-blue-100">
              {greeting}
            </p>

            <h1 className="mt-2 text-3xl font-black text-white md:text-5xl">
              {user?.name || "User"}
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-blue-100">

              "{quote}"

            </p>

          </div>

          {/* RIGHT PREMIUM BADGE */}
          <div className="flex items-start justify-start lg:justify-end">

            <div className="rounded-[28px] border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-xl">

              <p className="text-xs uppercase tracking-widest text-blue-200">
                Membership
              </p>

              <h3 className="mt-2 text-2xl font-black text-white">
                HEALTH+
              </h3>

              <p className="mt-2 text-sm text-blue-100">
                Premium Healthcare Dashboard
              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM FEATURES */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <FeatureCard
            icon={<FileText size={20} />}
            title="Medical Records"
          />

          <FeatureCard
            icon={<Pill size={20} />}
            title="Medicine Tracker"
          />

          <FeatureCard
            icon={<HeartPulse size={20} />}
            title="Health Monitoring"
          />

          <FeatureCard
            icon={<Shield size={20} />}
            title="Emergency Access"
          />

        </div>

      </div>

    </motion.div>
  );
};

const FeatureCard = ({
  icon,
  title,
}) => {

  return (
    <div className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl transition duration-300 hover:bg-white/15">

      <div className="flex items-center gap-3">

        <div className="rounded-2xl bg-white/15 p-3 text-white">

          {icon}

        </div>

        <span className="font-semibold text-white">

          {title}

        </span>

      </div>

    </div>
  );
};

export default DashboardHero;