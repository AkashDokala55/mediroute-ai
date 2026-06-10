import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Pill,
  ShieldCheck,
  CheckCircle2,
  Bell,
  QrCode,
  FileText,
  Search,
  Hospital,
  Sparkles,
} from "lucide-react";

const HealthcareJourney = () => {
  const [scene, setScene] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setScene((prev) => (prev + 1) % 6);
  }, 4000);

  return () => clearInterval(timer);
}, []);

  return (
    <div
      className="
      relative
      h-[360px]
      overflow-hidden
      rounded-[32px]
      border
      border-white/50
      bg-white/70
      backdrop-blur-2xl
      shadow-[0_20px_60px_rgba(15,23,42,0.08)]
    "
    >
      {/* BACKGROUND GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
        absolute
        left-1/2
        top-1/2
        h-[250px]
        w-[250px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-purple-500
        blur-[120px]
      "
      />

      <AnimatePresence mode="wait">

        {scene === 0 && <MedicationScene />}
{scene === 1 && <VaultScene />}
{scene === 2 && <EmergencyScene />}
{scene === 3 && <MedicineExpiryScene />}
{scene === 4 && <SchemeScene />}
{scene === 5 && <FinalScene />}

      </AnimatePresence>
    </div>
  );
};

export default HealthcareJourney;

/* ================================================= */
/* SCENE 1 */
/* ================================================= */

const MedicationScene = () => {
  return (
    <motion.div
      initial={{
        scale: 0.9,
        opacity: 0,
        filter: "blur(10px)",
      }}
      animate={{
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
      }}
      exit={{
        scale: 1.1,
        opacity: 0,
        filter: "blur(10px)",
      }}
      transition={{
        duration: 0.8,
      }}
      className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >
      {/* AMBIENT GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="
        absolute
        h-[280px]
        w-[280px]
        rounded-full
        bg-gradient-to-r
        from-red-500
        via-orange-500
        to-yellow-400
        blur-[130px]
        "
      />

      {/* ALERT BADGE */}

      <motion.div
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
        }}
        className="
        absolute
        top-12
        right-12
        rounded-full
        bg-red-500
        px-5
        py-2
        text-sm
        font-bold
        text-white
        shadow-[0_10px_30px_rgba(239,68,68,0.45)]
        "
      >
        3 Missed Doses
      </motion.div>

      {/* PULSE RINGS */}

      <motion.div
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.35, 0, 0.35],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
        absolute
        h-60
        w-60
        rounded-full
        border-[5px]
        border-red-300
        "
      />

      <motion.div
        animate={{
          scale: [1.1, 1.8, 1.1],
          opacity: [0.2, 0, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          delay: 0.5,
        }}
        className="
        absolute
        h-60
        w-60
        rounded-full
        border-[3px]
        border-orange-300
        "
      />

      {/* MAIN ICON */}

      <motion.div
        animate={{
          rotate: [0, -6, 6, -6, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
        }}
        className="
        relative
        flex
        h-52
        w-52
        items-center
        justify-center
        rounded-[48px]
        bg-gradient-to-br
        from-red-500
        via-orange-500
        to-yellow-500
        shadow-[0_0_120px_rgba(239,68,68,0.45)]
        "
      >
        <Pill
          size={110}
          className="text-white"
        />

        {/* FLOATING DOT */}

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
          absolute
          -right-3
          -top-3
          h-5
          w-5
          rounded-full
          bg-red-500
          shadow-[0_0_20px_rgba(239,68,68,0.8)]
          "
        />
      </motion.div>

      {/* SUCCESS CARD */}

      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: [0, 1.15, 1],
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
        className="
        absolute
        bottom-20
        flex
        items-center
        gap-3
        rounded-2xl
        bg-green-500
        px-6
        py-3
        text-white
        shadow-[0_15px_40px_rgba(34,197,94,0.4)]
        "
      >
        <CheckCircle2 size={24} />

        <span className="font-semibold">
          Reminder Active
        </span>
      </motion.div>

      {/* PREMIUM CAPTION */}

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.8,
        }}
        className="
        absolute
        bottom-7
        text-base
        font-bold
        tracking-wide
        text-gray-800
        "
      >
        Never miss Medication Again..
      </motion.p>
    </motion.div>
  );
};
/* ================================================= */
/* SCENE 2 */
/* ================================================= */

const VaultScene = () => {
  return (
    <motion.div
      initial={{
        scale: 0.9,
        filter: "blur(10px)",
      }}
      animate={{
        scale: 1,
        filter: "blur(0px)",
      }}
      exit={{
        scale: 1.12,
        filter: "blur(10px)",
      }}
      transition={{
        duration: 0.8,
      }}
      className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >
      {/* SECURITY AMBIENT GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="
        absolute
        h-[300px]
        w-[300px]
        rounded-full
        bg-gradient-to-r
        from-cyan-500
        via-blue-500
        to-indigo-600
        blur-[140px]
        "
      />

      {/* NETWORK LINES */}

      <svg
        className="
        absolute
        inset-0
        h-full
        w-full
        "
        viewBox="0 0 800 400"
      >
        <motion.line
          x1="180"
          y1="90"
          x2="400"
          y2="200"
          stroke="#3B82F6"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
          }}
        />

        <motion.line
          x1="620"
          y1="100"
          x2="400"
          y2="200"
          stroke="#06B6D4"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.2,
          }}
        />

        <motion.line
          x1="180"
          y1="300"
          x2="400"
          y2="200"
          stroke="#8B5CF6"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.4,
          }}
        />
      </svg>

      {/* FILE 1 */}

      <motion.div
        animate={{
          x: [-180, -90, 0],
          y: [-100, -40, 0],
          scale: [1, 1, 0.1],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
        absolute
        left-16
        top-12
        "
      >
        <FileText
          size={64}
          className="text-blue-500"
        />
      </motion.div>

      {/* FILE 2 */}

      <motion.div
        animate={{
          x: [180, 90, 0],
          y: [-80, -30, 0],
          scale: [1, 1, 0.1],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          delay: 0.3,
          repeat: Infinity,
        }}
        className="
        absolute
        right-16
        top-16
        "
      >
        <FileText
          size={64}
          className="text-cyan-500"
        />
      </motion.div>

      {/* FILE 3 */}

      <motion.div
        animate={{
          x: [-150, -70, 0],
          y: [120, 50, 0],
          scale: [1, 1, 0.1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          delay: 0.6,
          repeat: Infinity,
        }}
        className="
        absolute
        left-20
        bottom-20
        "
      >
        <FileText
          size={64}
          className="text-purple-500"
        />
      </motion.div>

      {/* MAIN VAULT */}

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
        className="
        relative
        flex
        h-52
        w-52
        items-center
        justify-center
        rounded-[52px]
        bg-gradient-to-br
        from-cyan-500
        via-blue-600
        to-indigo-700
        shadow-[0_0_120px_rgba(59,130,246,0.45)]
        "
      >
        <ShieldCheck
          size={110}
          className="text-white"
        />

        {/* LOCK STATUS */}

        <motion.div
          animate={{
            scale: [0.8, 1.3, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="
          absolute
          -bottom-4
          rounded-full
          bg-white
          p-3
          shadow-xl
          "
        >
          <CheckCircle2
            size={26}
            className="text-green-500"
          />
        </motion.div>
      </motion.div>

      {/* SECURITY TAG */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
        absolute
        top-12
        rounded-full
        bg-white/90
        px-5
        py-2
        shadow-lg
        backdrop-blur-xl
        "
      >
        <span
          className="
          text-sm
          font-semibold
          text-blue-700
          "
        >
          Encrypted Storage
        </span>
      </motion.div>

      {/* CAPTION */}

      <motion.p
        className="
        absolute
        bottom-8
        text-base
        font-bold
        tracking-wide
        text-gray-800
        "
      >
        Records Secured
      </motion.p>
    </motion.div>
  );
};
const EmergencyScene = () => {
  return (
    <motion.div
      initial={{
        scale: 0.95,
        filter: "blur(8px)",
      }}
      animate={{
        scale: 1,
        filter: "blur(0px)",
      }}
      exit={{
        scale: 1.05,
        filter: "blur(8px)",
      }}
      transition={{
        duration: 0.8,
      }}
      className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.45, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="
        absolute
        h-[300px]
        w-[300px]
        rounded-full
        bg-gradient-to-r
        from-red-500
        via-purple-500
        to-blue-500
        blur-[140px]
        "
      />

      {/* EMERGENCY ALERT */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="
        absolute
        top-12
        rounded-full
        bg-red-500
        px-5
        py-2
        text-sm
        font-bold
        text-white
        shadow-[0_10px_30px_rgba(239,68,68,0.4)]
        "
      >
        Emergency Detected
      </motion.div>

      {/* QR CARD */}

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          y: [0, -6, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
        absolute
        left-10
        flex
        h-36
        w-36
        items-center
        justify-center
        rounded-[32px]
        bg-white
        shadow-[0_20px_40px_rgba(0,0,0,0.08)]
        "
      >
        <QrCode
          size={80}
          className="text-red-500"
        />
      </motion.div>

      {/* DATA TRANSFER LINE */}

      <div
        className="
        absolute
        flex
        items-center
        justify-center
        "
      >
        <div
          className="
          h-[3px]
          w-60
          rounded-full
          bg-gradient-to-r
          from-red-500
          via-purple-500
          to-blue-500
          "
        />
      </div>

      {/* PARTICLE 1 */}

      <motion.div
        animate={{
          x: [-110, 110],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className="
        absolute
        h-3
        w-3
        rounded-full
        bg-white
        shadow-[0_0_15px_rgba(255,255,255,1)]
        "
      />

      {/* PARTICLE 2 */}

      <motion.div
        animate={{
          x: [-110, 110],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          delay: 0.3,
          ease: "linear",
        }}
        className="
        absolute
        h-3
        w-3
        rounded-full
        bg-cyan-300
        shadow-[0_0_15px_rgba(34,211,238,1)]
        "
      />

      {/* PARTICLE 3 */}

      <motion.div
        animate={{
          x: [-110, 110],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          delay: 0.6,
          ease: "linear",
        }}
        className="
        absolute
        h-3
        w-3
        rounded-full
        bg-pink-300
        shadow-[0_0_15px_rgba(236,72,153,1)]
        "
      />

      {/* HOSPITAL RADAR */}

      <motion.div
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
        absolute
        right-8
        h-48
        w-48
        rounded-full
        border-4
        border-cyan-300
        "
      />

      {/* HOSPITAL CARD */}

      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          y: [0, -6, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
        absolute
        right-10
        flex
        h-36
        w-36
        items-center
        justify-center
        rounded-[32px]
        bg-gradient-to-br
        from-blue-500
        via-cyan-500
        to-indigo-600
        text-white
        shadow-[0_20px_50px_rgba(59,130,246,0.35)]
        "
      >
        <Hospital size={80} />
      </motion.div>

      {/* ACCESS GRANTED */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
        absolute
        bottom-20
        flex
        items-center
        gap-3
        rounded-2xl
        bg-green-500
        px-6
        py-3
        text-white
        shadow-[0_15px_40px_rgba(34,197,94,0.4)]
        "
      >
        <CheckCircle2 size={24} />

        <span className="font-semibold">
          Instant Access
        </span>
      </motion.div>

      {/* CAPTION */}

      <p
        className="
        absolute
        bottom-7
        text-base
        font-bold
        tracking-wide
        text-gray-800
        "
      >
        Emergency Ready
      </p>
    </motion.div>
  );
};
const MedicineExpiryScene = () => {
  return (
    <motion.div
      initial={{
        scale: 0.95,
        filter: "blur(8px)",
      }}
      animate={{
        scale: 1,
        filter: "blur(0px)",
      }}
      exit={{
        scale: 1.05,
        filter: "blur(8px)",
      }}
      transition={{
        duration: 0.8,
      }}
      className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >
      {/* AI GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.45, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="
        absolute
        h-[300px]
        w-[300px]
        rounded-full
        bg-gradient-to-r
        from-yellow-400
        via-orange-500
        to-red-500
        blur-[140px]
        "
      />

      {/* EXPIRY ALERT */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="
        absolute
        top-12
        rounded-full
        bg-orange-500
        px-5
        py-2
        text-sm
        font-bold
        text-white
        shadow-[0_10px_30px_rgba(249,115,22,0.4)]
        "
      >
        Expiry Approaching
      </motion.div>

      {/* MEDICINE CARD */}

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          y: [0, -6, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
        relative
        flex
        h-56
        w-40
        items-center
        justify-center
        rounded-[36px]
        bg-white
        shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        "
      >
        <Pill
          size={90}
          className="text-orange-500"
        />

        {/* SCANNING LINE */}

        <motion.div
          animate={{
            top: [10, 190, 10],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
          absolute
          left-0
          h-[4px]
          w-full
          bg-gradient-to-r
          from-transparent
          via-orange-500
          to-transparent
          shadow-[0_0_20px_rgba(249,115,22,0.9)]
          "
        />
      </motion.div>

      {/* DATE CHIP */}

      <motion.div
        animate={{
          x: [0, 40, 70],
          opacity: [0, 1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
        absolute
        right-12
        top-28
        rounded-full
        bg-red-100
        px-4
        py-2
        text-xs
        font-semibold
        text-red-700
        shadow-lg
        "
      >
        Expires in 5 Days
      </motion.div>

      {/* ALERT CHIP */}

      <motion.div
        animate={{
          x: [0, 40, 70],
          opacity: [0, 1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          delay: 0.4,
        }}
        className="
        absolute
        right-16
        top-44
        rounded-full
        bg-orange-100
        px-4
        py-2
        text-xs
        font-semibold
        text-orange-700
        shadow-lg
        "
      >
        Replace Soon
      </motion.div>

      {/* PROTECTED STATUS */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
        absolute
        bottom-20
        flex
        items-center
        gap-3
        rounded-2xl
        bg-green-500
        px-6
        py-3
        text-white
        shadow-[0_15px_40px_rgba(34,197,94,0.4)]
        "
      >
        <CheckCircle2 size={24} />

        <span className="font-semibold">
          Alert Generated
        </span>
      </motion.div>

      {/* CAPTION */}

      <p
        className="
        absolute
        bottom-7
        text-base
        font-bold
        tracking-wide
        text-gray-800
        "
      >
        Expiry Intelligence
      </p>
    </motion.div>
  );
};
const SchemeScene = () => {
  return (
    <motion.div
      initial={{
        scale: 0.95,
        filter: "blur(8px)",
      }}
      animate={{
        scale: 1,
        filter: "blur(0px)",
      }}
      exit={{
        scale: 1.05,
        filter: "blur(8px)",
      }}
      transition={{
        duration: 0.8,
      }}
      className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >
      {/* AMBIENT GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="
        absolute
        h-[320px]
        w-[320px]
        rounded-full
        bg-gradient-to-r
        from-blue-500
        via-purple-500
        to-indigo-600
        blur-[140px]
        "
      />

      {/* OPERATION CARD */}

      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
        absolute
        top-10
        rounded-2xl
        bg-white/90
        px-6
        py-4
        shadow-xl
        backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-3">
          <Search
            size={22}
            className="text-blue-600"
          />

          <div>
            <p className="text-xs text-gray-500">
              Selected Procedure
            </p>

            <p className="font-semibold text-gray-800">
              Knee Surgery
            </p>
          </div>
        </div>
      </motion.div>

      {/* AI ENGINE */}

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
        className="
        flex
        h-52
        w-52
        items-center
        justify-center
        rounded-[48px]
        bg-gradient-to-br
        from-blue-500
        via-purple-600
        to-indigo-700
        shadow-[0_0_120px_rgba(99,102,241,0.45)]
        "
      >
        <Search
          size={110}
          className="text-white"
        />
      </motion.div>

      {/* ELIGIBLE SCHEME */}

      <motion.div
        animate={{
          x: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
        absolute
        left-8
        bottom-24
        rounded-2xl
        bg-green-500
        px-5
        py-3
        text-white
        shadow-xl
        "
      >
        <div className="flex items-center gap-2">
          <CheckCircle2 size={22} />

          <div>
            <p className="text-xs text-green-100">
              Eligible Scheme
            </p>

            <p className="font-semibold">
              Ayushman Bharat
            </p>
          </div>
        </div>
      </motion.div>

      {/* HOSPITAL CARD */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
        className="
        absolute
        right-8
        bottom-24
        rounded-2xl
        bg-white
        px-5
        py-3
        shadow-xl
        "
      >
        <div className="flex items-center gap-3">
          <Hospital
            size={22}
            className="text-blue-600"
          />

          <div>
            <p className="text-xs text-gray-500">
              Nearby Hospitals
            </p>

            <p className="font-semibold text-gray-800">
              3 Found Nearby
            </p>
          </div>
        </div>
      </motion.div>

      {/* FLOATING TAG */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
        absolute
        right-12
        top-28
        rounded-full
        bg-purple-100
        px-4
        py-2
        text-xs
        font-semibold
        text-purple-700
        "
      >
        Coverage Verified
      </motion.div>

      {/* CAPTION */}

      <p
        className="
        absolute
        bottom-7
        text-base
        font-bold
        tracking-wide
        text-gray-800
        "
      >
        Scheme & Hospital Discovery
      </p>
    </motion.div>
  );
};
const FinalScene = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >
      {/* BACKGROUND ENERGY */}

      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
        absolute
        h-[260px]
        w-[260px]
        rounded-full
        bg-gradient-to-r
        from-blue-500
        via-purple-500
        to-cyan-500
        blur-[120px]
        "
      />

      {/* SVG NETWORK */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 400"
      >
        <motion.line
          x1="400"
          y1="200"
          x2="170"
          y2="90"
          stroke="#8B5CF6"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />

        <motion.line
          x1="400"
          y1="200"
          x2="630"
          y2="90"
          stroke="#3B82F6"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.3,
          }}
        />

        <motion.line
          x1="400"
          y1="200"
          x2="170"
          y2="320"
          stroke="#06B6D4"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.6,
          }}
        />

        <motion.line
          x1="400"
          y1="200"
          x2="630"
          y2="320"
          stroke="#EC4899"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.9,
          }}
        />
      </svg>

      {/* FEATURES FLYING TO CENTER */}

      <motion.div
        initial={{
          x: -220,
          y: -120,
          opacity: 0,
        }}
        animate={{
          x: -120,
          y: -70,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="
        absolute
        text-green-600
        "
      >
        <Pill size={48} />
      </motion.div>

      <motion.div
        initial={{
          x: 220,
          y: -120,
          opacity: 0,
        }}
        animate={{
          x: 120,
          y: -70,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.2,
        }}
        className="
        absolute
        text-blue-600
        "
      >
        <ShieldCheck size={48} />
      </motion.div>

      <motion.div
        initial={{
          x: -220,
          y: 120,
          opacity: 0,
        }}
        animate={{
          x: -120,
          y: 70,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.4,
        }}
        className="
        absolute
        text-cyan-600
        "
      >
        <QrCode size={48} />
      </motion.div>

      <motion.div
        initial={{
          x: 220,
          y: 120,
          opacity: 0,
        }}
        animate={{
          x: 120,
          y: 70,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.6,
        }}
        className="
        absolute
        text-purple-600
        "
      >
        <FileText size={48} />
      </motion.div>

      {/* CENTER LOGO */}

      <motion.div
        initial={{
          scale: 0,
          rotate: -180,
        }}
        animate={{
          scale: [0, 1.2, 1],
          rotate: 0,
        }}
        transition={{
          duration: 1.8,
          delay: 0.8,
        }}
        className="
        relative
        z-20
        "
      >
        <div
          className="
          flex
          h-28
          w-28
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-[0_0_80px_rgba(124,58,237,0.45)]
          "
        >
          <img
            src="/logo.jpg"
            alt=""
            className="
            h-20
            w-20
            rounded-full
            object-cover
            "
          />
        </div>
      </motion.div>

      {/* TEXT */}

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
          delay: 1.5,
        }}
        className="
        absolute
        bottom-8
        text-center
        "
      >
        <h3
          className="
          text-xl
          font-black
          text-gray-900
          "
        >
          One Platform
        </h3>

        <p
          className="
          bg-gradient-to-r
          from-blue-600
          to-purple-600
          bg-clip-text
          text-lg
          font-bold
          text-transparent
          "
        >
          Every Healthcare Need
        </p>
      </motion.div>
    </motion.div>
  );
};