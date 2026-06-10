import { motion } from "framer-motion";

import {
  HeartPulse,
  Phone,
  ShieldCheck,
  Droplets,
  QrCode,
} from "lucide-react";
import toast from "react-hot-toast";
const EmergencyCard = ({card,}) => {
  const handleShare = async () => {

  const emergencyUrl =
    `${window.location.origin}/emergency/${card.qrId}`;

  await navigator.clipboard.writeText(
    emergencyUrl
  );

  toast.success(
    "Emergency Link Copied"
  );
};
const handleDownloadQR =
  () => {

    const svg =
      document.getElementById(
        "emergency-qr"
      );

    if (!svg) {

      toast.error(
        "QR not found"
      );

      return;
    }

    const svgData =
      new XMLSerializer().serializeToString(
        svg
      );

    const canvas =
      document.createElement(
        "canvas"
      );

    const ctx =
      canvas.getContext("2d");

    const img =
      new Image();

    img.onload = () => {

      canvas.width = 500;

      canvas.height = 500;

      ctx.drawImage(
        img,
        0,
        0
      );

      const pngFile =
        canvas.toDataURL(
          "image/png"
        );

      const downloadLink =
        document.createElement(
          "a"
        );

      downloadLink.download =
        "EmergencyQR.png";

      downloadLink.href =
        pngFile;

      downloadLink.click();
    };

    img.src =
      "data:image/svg+xml;base64," +
      btoa(svgData);
  };
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
      className="relative overflow-hidden rounded-[40px] border border-white/20 bg-gradient-to-br from-[#2563eb] via-[#4f46e5] to-[#9333ea] p-8 text-white shadow-[0_20px_80px_rgba(79,70,229,0.35)]"
    >
      
      {/* GLOWS */}
      <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-white/10 blur-3xl" />

      <div className="absolute bottom-[-100px] left-[-100px] h-[220px] w-[220px] rounded-full bg-cyan-300/20 blur-3xl" />

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

      {/* TOP */}
      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        
        {/* LEFT */}
        <div>
          
          <div className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-xl">
            
            <ShieldCheck size={16} />

            Emergency Healthcare Access
          </div>

          <h1 className="mt-7 text-5xl font-black">
            {card?.fullName}
          </h1>

          <p className="mt-3 text-blue-100">
            Digital Emergency Health Card
          </p>

          {/* TAGS */}
          <div className="mt-8 flex flex-wrap gap-3">
            
<Tag
  icon={Droplets}
  text={`${card?.bloodGroup} Blood Group`}
/>
            <Tag
              icon={HeartPulse}
              text="No Critical Allergies"
            />

            <Tag
  icon={Phone}
  text={card?.emergencyContact}
/>
          </div>
        </div>

        {/* QR */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="relative flex h-[220px] w-[220px] items-center justify-center rounded-[36px] border border-white/20 bg-white/10 backdrop-blur-2xl"
        >
          
          {/* PULSE */}
          <div className="absolute inset-0 rounded-[36px] border border-cyan-300/30 animate-ping" />

          <div className="rounded-[28px] bg-white p-6 shadow-2xl">
            
            <QrCode
              size={120}
              className="text-black"
            />
          </div>
        </motion.div>
      </div>

      {/* BOTTOM */}
      <div className="relative z-10 mt-10 grid gap-5 md:grid-cols-3">
        
        <InfoCard
  label="Address"
  value={card?.address}
/>

        <InfoCard
  label="Blood Group"
  value={card?.bloodGroup}
/>

        <InfoCard
  label="Age"
  value={card?.age}
/>
      </div>

      {/* BUTTONS */}
      <div className="relative z-10 mt-10 flex flex-wrap gap-4">
        
        <button
  onClick={
    handleDownloadQR
  }
  className="rounded-2xl bg-white px-6 py-4 text-sm font-bold text-indigo-700 shadow-xl transition hover:scale-[1.03]"
>
  Download QR
</button>
        <button
  onClick={handleShare}
  className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
>

  Share Emergency Access

</button>
      </div>
    </motion.div>
  );
};

const Tag = ({
  icon: Icon,
  text,
}) => {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur-xl">
      
      <Icon size={16} />

      {text}
    </div>
  );
};

const InfoCard = ({
  label,
  value,
}) => {
  return (
    <div className="rounded-[28px] border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
      
      <p className="text-sm text-blue-100">
        {label}
      </p>

      <h3 className="mt-3 text-xl font-black">
        {value}
      </h3>
    </div>
  );
};

export default EmergencyCard;