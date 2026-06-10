import { motion } from "framer-motion";

const ScanningAnimation = () => {
  return (
    <div className="relative flex h-[320px] items-center justify-center overflow-hidden rounded-[32px] border border-white/50 bg-white/70 shadow-xl backdrop-blur-3xl">
      
      {/* GLOW */}
      <div className="absolute h-[240px] w-[240px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />

      {/* DOCUMENT */}
      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="relative z-10 h-[220px] w-[170px] rounded-3xl border border-white/50 bg-white shadow-2xl"
      >
        
        {/* HEADER */}
        <div className="border-b border-gray-100 p-5">
          
          <div className="h-4 w-24 rounded-full bg-gray-200" />

          <div className="mt-3 h-3 w-16 rounded-full bg-gray-100" />
        </div>

        {/* CONTENT */}
        <div className="space-y-4 p-5">
          
          <div className="h-3 w-full rounded-full bg-gray-100" />

          <div className="h-3 w-[80%] rounded-full bg-gray-100" />

          <div className="h-3 w-[60%] rounded-full bg-gray-100" />

          <div className="h-3 w-full rounded-full bg-gray-100" />

          <div className="h-3 w-[70%] rounded-full bg-gray-100" />
        </div>

        {/* SCANNER LINE */}
        <motion.div
          animate={{
            top: ["10%", "85%", "10%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
          }}
          className="absolute left-0 h-1 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_25px_rgba(59,130,246,0.8)]"
        />
      </motion.div>

      {/* TEXT */}
      <div className="absolute bottom-8 text-center">
        
        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="text-lg font-semibold text-gray-700"
        >
          AI Scanning Report...
        </motion.p>

        <p className="mt-2 text-sm text-gray-500">
          Extracting medicines and healthcare details
        </p>
      </div>
    </div>
  );
};

export default ScanningAnimation;