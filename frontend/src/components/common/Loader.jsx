import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#f5f7ff]"
    >
      
      {/* BACKGROUND GLOWS */}
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/20 blur-3xl" />

      {/* CONTENT */}
      <div className="relative flex flex-col items-center">
        
        {/* ROTATING ORBIT */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
          className="absolute h-[180px] w-[180px] rounded-full border border-purple-200"
        >
          
          <div className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_0_30px_rgba(124,58,237,0.7)]" />
        </motion.div>

        {/* CENTER CORE */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="relative z-10 flex h-30 w-30 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-[0_0_80px_rgba(124,58,237,0.4)]"
        >
          
          <img
            src="/logo.jpg"
            alt="logo"
            className="h-32 w-32 rounded-full object-cover"
          />
        </motion.div>

        {/* BRAND */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mt-10 text-3xl font-black text-gray-900"
        >
          MediRoute AI
        </motion.h1>

        <p className="mt-2 text-sm text-gray-500">
          Smart Healthcare Assistance
        </p>
      </div>
    </motion.div>
  );
};

export default Loader;