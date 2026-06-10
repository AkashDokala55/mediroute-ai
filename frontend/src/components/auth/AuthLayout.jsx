import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const AuthLayout = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f7ff]">
      
      {/* GLOWS */}
      <div className="absolute left-0 top-0 h-[320px] w-[320px] rounded-full bg-blue-300/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-purple-300/20 blur-3xl" />

      {/* MAIN */}
      <div className="relative z-10 flex min-h-screen">
        
        {/* LEFT */}
        <div className="relative hidden flex-1 overflow-hidden lg:flex">
          
          {/* BIG CENTER GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
            }}
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
          />

          {/* CONTENT */}
          <div className="relative z-10 flex w-full flex-col justify-between px-10 py-12">
            
            {/* TOP */}
            <div>
              
              {/* BRAND */}
              <div className="flex items-center gap-4">
                
                <img
                  src="/logo.jpg"
                  alt="logo"
                  className="h-14 w-14 rounded-2xl object-cover shadow-xl"
                />

                <div>
                  <h1 className="text-3xl font-black text-gray-900">
                    MediRoute AI
                  </h1>

                  <p className="text-sm text-gray-500">
                    Smart Healthcare Assistance
                  </p>
                </div>
              </div>

              {/* TEXT */}
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
                  duration: 0.8,
                }}
                className="mt-16"
              >
                
                <h2 className="max-w-xl text-5xl font-black leading-tight text-gray-900 xl:text-6xl">
                  Healthcare
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Simplified
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
                  Securely manage medical reports, scheme eligibility,
                  medicines, and emergency healthcare access —
                  all in one intelligent platform.
                </p>
              </motion.div>
            </div>

            {/* FLOATING CARDS */}
            <div className="relative mt-14 h-[240px]">
              
              <FloatingCard
                title="Scheme Eligibility"
                top="0%"
                left="0%"
              />

              <FloatingCard
                title="Medicine Tracking"
                top="8%"
                left="48%"
              />

              <FloatingCard
                title="Secure QR Sharing"
                top="55%"
                left="18%"
              />
            </div>
          </div>
        </div>

        {/* RIGHT */}
<div className="relative flex w-full items-center justify-center px-4 py-10 sm:px-6 lg:w-[45%] lg:px-10">

  <div className="w-full max-w-md">

    {/* HOME BUTTON */}
    <Link
      to="/"
      className="mb-4 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-md transition hover:shadow-lg"
    >
      <ArrowLeft size={18} />
      Home
    </Link>          
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
              duration: 0.7,
            }}
            className="w-full max-w-md rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-2xl backdrop-blur-3xl sm:p-8"
          >
            
            {/* MOBILE LOGO */}
            <div className="mb-8 flex items-center gap-3 lg:hidden">
              
              <img
                src="/logo.jpg"
                alt="logo"
                className="h-12 w-12 rounded-2xl object-cover shadow-lg"
              />

              <div>
                <h1 className="text-2xl font-black text-gray-900">
                  MediRoute AI
                </h1>

                <p className="text-sm text-gray-500">
                  Smart Healthcare Assistance
                </p>
              </div>
            </div>

            {/* TITLE */}
            <div>
              
              <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">
                {title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-500 sm:text-base">
                {subtitle}
              </p>
            </div>

            {/* FORM */}
            <div className="mt-8">
              {children}
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </div>
  );
};

const FloatingCard = ({
  title,
  top,
  left,
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      style={{
        top,
        left,
      }}
      className="absolute rounded-2xl border border-white/50 bg-white/70 px-6 py-4 shadow-xl backdrop-blur-2xl"
    >
      <p className="font-semibold text-gray-800">
        {title}
      </p>
    </motion.div>
  );
};

export default AuthLayout;