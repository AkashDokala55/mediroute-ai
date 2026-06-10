import {
  ShieldCheck,
  Upload,
  Sparkles,
  QrCode,
} from "lucide-react";

const VaultHero = ({
  onUpload,
}) => {

  return (
    <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-10 text-white shadow-[0_20px_80px_rgba(79,70,229,0.35)]">

      {/* BG BLURS */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* LEFT */}
        <div className="max-w-3xl">

          {/* TAG */}
          <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-xl">

            <Sparkles size={16} />

            Smart Healthcare Record Management
          </div>

          {/* TITLE */}
          <h1 className="mt-6 text-3xl md:text-4xl xl:text-6xl font-black leading-tight tracking-tight ">

            Medical Vault &
            <br />

            Emergency Access

          </h1>

          {/* DESC */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">

            Securely store, organize,
            and instantly share medical
            records with hospitals,
            doctors, and emergency services
            using QR-powered access.

          </p>

          {/* FEATURES */}
          <div className="mt-8 flex flex-wrap gap-4">

            <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium backdrop-blur-xl">

              <ShieldCheck size={18} />

              Secure Medical Vault
            </div>

            <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium backdrop-blur-xl">

              <QrCode size={18} />

              Temporary QR Sharing
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-5">

          {/* UPLOAD BUTTON */}
          <button
            onClick={onUpload}
            className="group flex items-center gap-4 rounded-[28px] bg-white px-7 py-5 text-left text-slate-900 shadow-[0_15px_50px_rgba(15,23,42,0.25)] transition-all duration-300 hover:scale-[1.02]"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">

              <Upload size={28} />
            </div>

            <div>

              <h3 className="text-lg font-black">

                Upload Medical Record
              </h3>

              <p className="mt-1 text-sm text-slate-500">

                Store reports, scans,
                prescriptions and more

              </p>
            </div>
          </button>

          {/* SECURITY CARD */}
          <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

            <div className="flex items-start gap-4">

              <div className="rounded-2xl bg-green-400/20 p-4 text-green-300">

                <ShieldCheck size={24} />
              </div>

              <div>

                <h3 className="text-lg font-bold">

                  Secure & Temporary Sharing
                </h3>

                <p className="mt-2 text-sm leading-7 text-blue-100">

                  Generate temporary QR access
                  links for hospitals and doctors
                  with custom expiry times and
                  permission controls.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaultHero;