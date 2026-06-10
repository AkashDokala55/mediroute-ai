import { motion } from "framer-motion";
import QRCodeModule from "react-qr-code";
import { useState } from "react"; 
const QRCode =
  QRCodeModule.default;
import {
  QrCode,
  ShieldCheck,
  Lock,
  Activity,
  CheckCircle2,
} from "lucide-react";

const QRCodePreview = ({ card }) => {

  const [showQR, setShowQR] =
    useState(false);
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
      <div className="absolute -right-20 -top-20 h-[250px] w-[250px] rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 blur-3xl" />

      <div className="absolute bottom-[-100px] left-[-100px] h-[220px] w-[220px] rounded-full bg-purple-500/10 blur-3xl" />

      {/* HEADER */}
      <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        
        <div>
          
          <div className="inline-flex items-center gap-2 rounded-2xl border border-cyan-200/40 bg-cyan-50/70 px-4 py-2 text-sm font-semibold text-cyan-700 backdrop-blur-xl">
            
            <Activity size={16} />

            Live Emergency Access
          </div>

          <h2 className="mt-6 text-4xl font-black text-gray-900">
            QR Access Preview
          </h2>

          <p className="mt-3 max-w-xl text-gray-500">
            Real-time secure emergency healthcare QR
            for hospitals and emergency responders.
          </p>
        </div>

        {/* STATUS */}
        <div className="flex items-center gap-2 rounded-2xl bg-green-50 px-5 py-3 text-green-700 shadow-sm">
          
          <CheckCircle2 size={18} />

          <span className="text-sm font-bold">
            Active & Verified
          </span>
        </div>
      </div>

      {/* MAIN */}
      <div className="relative z-10 mt-10 grid gap-8 lg:grid-cols-2">
        
        {/* LEFT */}
        <div className="relative overflow-hidden rounded-[36px] border border-white/40 bg-gradient-to-br from-[#2563eb] via-[#4f46e5] to-[#9333ea] p-8 text-white shadow-[0_20px_60px_rgba(79,70,229,0.25)]">
          
          {/* GRID */}
          <div className="absolute inset-0 opacity-[0.08]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* GLOW */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center">
            
            {/* QR */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="relative flex h-[260px] w-[260px] items-center justify-center rounded-[36px] border border-white/20 bg-white/10 backdrop-blur-2xl"
            >
              
              {/* PULSE */}
              <div className="absolute inset-0 rounded-[36px] border border-cyan-300/30 animate-ping" />

              {/* QR BOX */}
              <div className="relative rounded-[28px] bg-white p-8 shadow-2xl">

<div
  className={`transition duration-500 ${
    showQR
      ? ""
      : "blur-md"
  }`}
>    <QRCode
      id="emergency-qr"
      value={
        card
          ? `https://mediroute-ai-1gb5.onrender.com/emergency/${card.qrId}`
          : "No Card"
      }
      size={160}
    />
  </div>

  {
  !showQR && (
    <div className="absolute inset-0 flex items-center justify-center">

      <button
        onClick={() =>
          setShowQR(true)
        }
        className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg"
      >
        Reveal Emergency QR
      </button>

    </div>
  )
}
<p className="mt-4 text-center text-sm text-blue-200">
  QR ID: {card?.qrId}
</p>
{
  showQR && (
    <button
      onClick={() =>
        setShowQR(false)
      }
      className="mt-4 rounded-xl bg-white/20 px-4 py-2 text-sm font-semibold text-black backdrop-blur-xl text-black"
    >
      Hide QR
    </button>
  )
}
</div>
            </motion.div>

            {/* TEXT */}
            <h3 className="mt-8 text-2xl font-black">
              Emergency Health Access
            </h3>

            <p className="mt-3 text-center text-sm leading-relaxed text-blue-100">
              Hospitals can instantly access critical
              healthcare details during emergencies.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          
          {/* SECURITY */}
          <div className="rounded-[32px] border border-white/40 bg-gradient-to-br from-white/80 to-cyan-50/60 p-6 shadow-lg">
            
            <div className="flex items-center gap-4">
              
              <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-4 text-white shadow-lg">
                <ShieldCheck size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-black text-gray-900">
                  Secure Encryption
                </h3>

                <p className="mt-1 text-gray-500">
                  Healthcare data protection enabled
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              
              <SecurityItem
                label="QR Encryption"
                value="AES-256 Enabled"
              />

              <SecurityItem
                label="Access Expiry"
                value="24 Hours"
              />

              <SecurityItem
                label="Verification"
                value="Hospital Verified"
              />
            </div>
          </div>

          {/* ACCESS LOG */}
          <div className="rounded-[32px] border border-white/40 bg-white/70 p-6 shadow-lg backdrop-blur-2xl">
            
            <div className="flex items-center gap-4">
              
              <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 p-4 text-white shadow-lg">
                <Lock size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-black text-gray-900">
                  Access Status
                </h3>

                <p className="mt-1 text-gray-500">
                  Live emergency access monitoring
                </p>
              </div>
            </div>

            {/* STATUS ITEMS */}
            <div className="mt-8 space-y-4">
              
              <AccessItem text="Emergency QR Generated" />

              <AccessItem text="Healthcare Access Active" />

              <AccessItem text="Medical Data Protected" />

              <AccessItem text="Hospital Sync Completed" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SecurityItem = ({
  label,
  value,
}) => {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/80 px-5 py-4 shadow-sm">
      
      <p className="text-sm font-medium text-gray-500">
        {label}
      </p>

      <p className="text-sm font-bold text-gray-900">
        {value}
      </p>
    </div>
  );
};

const AccessItem = ({ text }) => {
  return (
    <motion.div
      whileHover={{
        x: 4,
      }}
      className="flex items-center gap-3 rounded-2xl border border-white/40 bg-gradient-to-r from-white to-purple-50/40 px-5 py-4 shadow-sm"
    >
      
      <div className="h-3 w-3 rounded-full bg-green-500" />

      <p className="text-sm font-semibold text-gray-700">
        {text}
      </p>
    </motion.div>
  );
};

export default QRCodePreview;