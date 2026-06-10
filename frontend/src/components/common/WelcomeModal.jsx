import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

const WelcomeAccessCard = ({
  open,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
            fixed
            inset-0
            z-[9998]
            bg-black/30
            backdrop-blur-xl
            "
          />

          {/* CONTAINER */}

          <div
            className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            p-4
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              transition={{
                duration: 0.45,
              }}
              className="
              relative
              w-full
              max-w-5xl
              overflow-hidden
              rounded-[36px]
              border
              border-white/20
              bg-white/10
              backdrop-blur-3xl
              shadow-[0_25px_100px_rgba(0,0,0,0.35)]
              "
            >
              {/* GLOW */}

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.15, 0.35, 0.15],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                }}
                className="
                absolute
                left-1/2
                top-1/2
                h-[500px]
                w-[500px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-gradient-to-r
                from-blue-500
                via-purple-500
                to-cyan-500
                blur-[160px]
                "
              />

              {/* SHINE */}

              <motion.div
                animate={{
                  x: ["-120%", "180%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "linear",
                }}
                className="
                absolute
                inset-y-0
                w-32
                rotate-12
                bg-white/20
                blur-2xl
                "
              />

              {/* CONTENT */}

              <div
                className="
                relative
                z-10
                flex
                flex-col
                md:flex-row
                "
              >
                {/* LEFT PANEL */}

                <div
                  className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  border-b
                  border-white/10
                  p-8
                  md:w-[300px]
                  md:border-b-0
                  md:border-r
                  "
                >
                  <motion.img
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.5,
                    }}
                    src="/logo.jpg"
                    alt=""
                    className="
                    h-28
                    w-28
                    rounded-full
                    border-4
                    border-white/40
                    shadow-[0_0_40px_rgba(124,58,237,0.4)]
                    "
                  />

                  <h1
                    className="
                    mt-6
                    text-center
                    text-3xl
                    font-black
                    text-white
                    "
                  >
                    MediRoute AI
                  </h1>

                  <p
                    className="
                    mt-2
                    text-center
                    text-sm
                    text-white/70
                    "
                  >
                    Crafted by
                  </p>

                  <p
                    className="
                    text-center
                    font-semibold
                    text-cyan-300
                    "
                  >
                    Akash Dokala
                  </p>

                  <div
                    className="
                    mt-4
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    px-4
                    py-2
                    text-sm
                    text-white
                    "
                  >
                    Version 1.0
                  </div>
                </div>

                {/* RIGHT PANEL */}

                <div
                  className="
                  flex-1
                  p-8
                  md:p-10
                  "
                >
                  <div
                    className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    px-4
                    py-2
                    text-white
                    "
                  >
                    <Sparkles size={16} />
                    Premium Healthcare Platform
                  </div>

                  <h2
                    className="
                    mt-6
                    text-4xl
                    font-black
                    text-white
                    "
                  >
                    One Platform.
                  </h2>

                  <h2
                    className="
                    text-4xl
                    font-black
                    bg-gradient-to-r
                    from-cyan-300
                    via-white
                    to-purple-300
                    bg-clip-text
                    text-transparent
                    "
                  >
                    Every Healthcare Need.
                  </h2>

                  <p
                    className="
                    mt-6
                    max-w-xl
                    text-lg
                    leading-relaxed
                    text-white/80
                    "
                  >
                    Manage medicines, securely store
                    medical records, access emergency
                    information instantly, discover
                    healthcare schemes and locate nearby
                    hospitals — all from one intelligent
                    platform.
                  </p>

                  <div
                    className="
                    mt-8
                    rounded-2xl
                    border
                    border-white/15
                    bg-white/10
                    p-4
                    text-white/80
                    "
                  >
                    Complete your profile later to unlock
                    personalized healthcare management and
                    smarter recommendations.
                  </div>

                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    onClick={onClose}
                    className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    via-purple-600
                    to-cyan-500
                    px-8
                    py-4
                    font-semibold
                    text-white
                    shadow-[0_10px_40px_rgba(124,58,237,0.45)]
                    "
                  >
                    Explore Dashboard

                    <ArrowRight size={20} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WelcomeAccessCard;