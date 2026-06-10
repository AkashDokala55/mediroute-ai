import {
  ShieldAlert,
  QrCode,
  Clock3,
  Phone,
  HeartPulse,
  Siren,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const EmergencyQuickShare = () => {
const navigate =
  useNavigate();
  return (
    <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-red-500 via-rose-600 to-pink-600 p-8 text-white shadow-[0_25px_80px_rgba(239,68,68,0.35)]">

      {/* BG GLOWS */}
      <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />

      <div className="relative z-10">

        {/* TOP */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* LEFT */}
          <div className="max-w-3xl">

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-xl">

              <Siren size={16} />

              Emergency Healthcare Access
            </div>

            {/* TITLE */}
            <h1 className="mt-6 text-3xl md:text-4xl xl:text-6xl font-black leading-tight tracking-tight ">

              Emergency
              <br />

              Quick Share

            </h1>

            {/* DESC */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-rose-100">

              Instantly generate emergency
              QR access for hospitals,
              ambulance services and doctors
              during critical situations.

            </p>
          </div>

          {/* QR BUTTON */}
          <button className="group flex items-center gap-5 rounded-[32px] bg-white px-8 py-6 text-left text-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.25)] transition-all duration-300 hover:scale-[1.02]"
          onClick={() =>
    navigate("/emergency-qr")
  }>

            {/* ICON */}
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500 to-pink-600 text-white shadow-lg">

              <QrCode size={38} />
            </div>

            {/* TEXT */}
            <div>

              <h3 className="text-2xl font-black">

                Generate Emergency QR
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-500">

                One-click temporary emergency
                medical access for hospitals.

              </p>
            </div>
          </button>
        </div>

        {/* INFO CARDS */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {/* ACCESS */}
          <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-white">

              <ShieldAlert size={30} />
            </div>

            <h3 className="mt-6 text-2xl font-black">

              Secure Access
            </h3>

            <p className="mt-3 leading-7 text-rose-100">

              Temporary encrypted
              medical access with
              expiry protection.

            </p>
          </div>

          {/* EXPIRY */}
          <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-white">

              <Clock3 size={30} />
            </div>

            <h3 className="mt-6 text-2xl font-black">

              Auto Expiry
            </h3>

            <p className="mt-3 leading-7 text-rose-100">

              QR automatically expires
              after emergency session
              completion.

            </p>
          </div>

          {/* HEALTH */}
          <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-white">

              <HeartPulse size={30} />
            </div>

            <h3 className="mt-6 text-2xl font-black">

              Critical Records
            </h3>

            <p className="mt-3 leading-7 text-rose-100">

              Share blood group,
              allergies, reports and
              emergency medical history.

            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-wrap items-center gap-4 rounded-[30px] border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">

            <Phone size={26} />
          </div>

          <div>

            <h3 className="text-lg font-bold">

              Emergency Contact Enabled
            </h3>

            <p className="mt-1 text-sm text-rose-100">

              Hospitals can securely access
              emergency healthcare records
              during critical treatment situations.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyQuickShare;