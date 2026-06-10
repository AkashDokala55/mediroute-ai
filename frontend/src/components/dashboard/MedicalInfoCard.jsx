import { motion } from "framer-motion";

import {
  HeartPulse,
  Phone,
  Droplets,
  AlertTriangle,
  User,
  ShieldPlus,
  CalendarSearch,
  Calendar1Icon,
  CalendarCheck,
  HomeIcon,
} from "lucide-react";

const MedicalInfoCard = ({card,}) => {
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
      
      {/* GLOW */}
      <div className="absolute -left-20 top-0 h-[250px] w-[250px] rounded-full bg-pink-500/10 blur-3xl" />

      <div className="absolute bottom-[-100px] right-[-100px] h-[220px] w-[220px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* HEADER */}
      <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        
        <div>
          
          <div className="inline-flex items-center gap-2 rounded-2xl border border-pink-200/40 bg-pink-50/70 px-4 py-2 text-sm font-semibold text-pink-700 backdrop-blur-xl">
            
            <ShieldPlus size={16} />

            Emergency Medical Profile
          </div>

          <h2 className="mt-6 text-4xl font-black text-gray-900">
            Critical Health Details
          </h2>

          <p className="mt-3 max-w-2xl text-gray-500">
            Essential healthcare information accessible
            during emergencies and hospital visits.
          </p>
        </div>

        {/* PROFILE */}
        <div className="flex items-center gap-4 rounded-[28px] border border-white/40 bg-white/70 px-5 py-4 shadow-lg backdrop-blur-xl">
          
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl">
            <User size={28} />
          </div>

          <div>
            <h3 className="text-xl font-black text-gray-900">
             {card?.fullName ||
  "No Emergency Card"}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Emergency Access Enabled
            </p>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="relative z-10 mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        
        <InfoBox
          icon={Droplets}
          title="Blood Group"
          value={
  card?.bloodGroup ||
  "Not Available"
}
          gradient="from-red-500 to-pink-500"
        />

        <InfoBox
          icon={HeartPulse}
          title="Medical Condition"
          value="Will Update Soon"
          gradient="from-blue-600 to-cyan-500"
        />

        <InfoBox
          icon={AlertTriangle}
          title="Allergies"
          value="Will Update Soon"
          gradient="from-yellow-500 to-orange-500"
        />

        <InfoBox
          icon={Phone}
          title="Emergency Contact"
         value={
  card?.emergencyContact ||
  "Not Available"
}
          gradient="from-green-500 to-emerald-500"
        />

        <InfoBox
          icon={CalendarCheck}
          title="Age"
value={
  card?.age ||
  "Not Available"
}
          gradient="from-indigo-600 to-purple-600"
        />

        <InfoBox
          icon={HomeIcon}
          title="Address"
value={
  card?.address ||
  "Not Available"
}
          gradient="from-cyan-500 to-blue-600"
        />
      </div>

      {/* FOOTER */}
      <div className="relative z-10 mt-10 rounded-[32px] border border-white/40 bg-gradient-to-r from-blue-50/80 to-purple-50/80 p-6 shadow-inner">
        
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          
          <div>
            <h3 className="text-2xl font-black text-gray-900">
              Emergency Access Status
            </h3>

            <p className="mt-2 text-gray-500">
              Your healthcare emergency profile is active,
              secured, and ready for instant hospital access.
            </p>
          </div>

          {/* STATUS */}
          <div className="flex items-center gap-3 rounded-2xl bg-green-100 px-5 py-4 text-green-700 shadow-sm">
            
            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span className="font-bold">
              Secure Access Active
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const InfoBox = ({
  icon: Icon,
  title,
  value,
  gradient,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-gradient-to-br from-white/90 to-blue-50/60 p-6 shadow-lg transition-all duration-300 hover:shadow-[0_10px_40px_rgba(79,70,229,0.12)]"
    >
      
      {/* GLOW */}
      <div
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-r ${gradient} opacity-10 blur-3xl transition duration-500 group-hover:opacity-20`}
      />

      <div className="relative z-10">
        
        {/* ICON */}
        <div
          className={`inline-flex rounded-3xl bg-gradient-to-r ${gradient} p-4 text-white shadow-xl`}
        >
          <Icon size={24} />
        </div>

        {/* TEXT */}
        <p className="mt-6 text-sm font-medium text-gray-500">
          {title}
        </p>

        <h3 className="mt-3 text-xl font-black leading-snug text-gray-900">
          {value}
        </h3>
      </div>
    </motion.div>
  );
};

export default MedicalInfoCard;