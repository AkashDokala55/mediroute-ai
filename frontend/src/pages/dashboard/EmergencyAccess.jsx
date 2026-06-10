import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import {
  ShieldCheck,
  Phone,
  Droplets,
  User,
  MapPin,
  HeartPulse,
} from "lucide-react";

const EmergencyAccess = () => {

  const { id } = useParams();

useEffect(() => {

  const loadCard = async () => {

    try {

      const response =
        await fetch(
          `https://mediroute-ai-1gb5.onrender.com/api/emergency/qr/${id}`
        );

      const data =
        await response.json();

      setCard(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  loadCard();

}, [id]);
  if (loading) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-slate-100">

        <h1 className="text-xl font-bold text-slate-700">

          Loading Emergency Card...

        </h1>

      </div>

    );
  }

  if (!card) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-slate-100">

        <h1 className="text-xl font-bold text-red-600">

          Emergency Card Not Found

        </h1>

      </div>

    );
  }

  return (

    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-50">

      {/* BACKGROUND BLOBS */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-200/20 blur-3xl" />

      {/* PAGE */}

      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">

        {/* CARD */}

        <div className="relative w-full max-w-4xl overflow-hidden rounded-[40px] bg-white shadow-[0_25px_80px_rgba(15,23,42,0.18)]">

          {/* TOP DESIGN */}

          <div className="absolute right-0 top-0 h-72 w-72">

            <div
              className="absolute inset-0 bg-gradient-to-bl from-indigo-700 via-blue-600 to-cyan-400"
              style={{
                clipPath:
                  "polygon(40% 0%,100% 0%,100% 100%,0% 40%)",
              }}
            />

            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, white 0px, white 10px, transparent 10px, transparent 20px)",
              }}
            />
          </div>

          {/* CONTENT */}

          <div className="relative z-10 grid gap-10 p-10 lg:grid-cols-[1fr_280px]">

            {/* LEFT */}

            <div>

              {/* LOGO */}

              <div className="flex items-center gap-3">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white">

                  <ShieldCheck size={28} />

                </div>

                <div>

                  <h2 className="text-2xl font-black text-slate-900">

                    MediRoute AI

                  </h2>

                  <p className="text-sm text-slate-500">

                    Emergency Healthcare Card

                  </p>

                </div>

              </div>

              {/* NAME */}

              <div className="mt-10">

                <h1 className="text-5xl font-black text-slate-900">

                  {card.fullName}

                </h1>

                <p className="mt-2 text-slate-500">

                  Verified Emergency Access Profile

                </p>

              </div>

              {/* INFO GRID */}

              <div className="mt-10 grid gap-5 sm:grid-cols-2">

                <InfoItem
                  icon={User}
                  label="Age"
                  value={card.age}
                />

                <InfoItem
                  icon={Droplets}
                  label="Blood Group"
                  value={card.bloodGroup}
                />

                <InfoItem
                  icon={Phone}
                  label="Emergency Contact"
                  value={card.emergencyContact}
                />

                <InfoItem
                  icon={HeartPulse}
                  label="Status"
                  value="Stable"
                />

              </div>

              {/* ADDRESS */}

              <div className="mt-6 rounded-3xl bg-slate-50 p-5">

                <div className="flex items-start gap-3">

                  <MapPin
                    size={20}
                    className="mt-1 text-blue-600"
                  />

                  <div>

                    <p className="text-sm text-slate-500">

                      Address

                    </p>

                    <h3 className="mt-1 text-lg font-bold text-slate-900">

                      {card.address}

                    </h3>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="flex flex-col justify-between">

              {/* VERIFIED */}

              <div className="self-end rounded-full bg-green-500 px-5 py-2 text-sm font-bold text-white shadow-lg">

                VERIFIED
              </div>

              {/* QR ID CARD */}

              <div className="mt-20 rounded-[30px] bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-2xl">

                <p className="text-xs uppercase tracking-[4px] text-cyan-100">

                  Emergency QR ID

                </p>

                <h3 className="mt-4 break-all text-lg font-black">

                  <h3>
  {card.qrId}
</h3>
                </h3>

                <div className="mt-10 border-t border-white/20 pt-5">

                  <p className="text-sm text-cyan-100">

                    Generated Emergency Access
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
};

const InfoItem = ({
  icon: Icon,
  label,
  value,
}) => {

  return (

    <div className="rounded-3xl bg-slate-50 p-5">

      <div className="flex items-center gap-3">

        <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">

          <Icon size={20} />

        </div>

        <div>

          <p className="text-sm text-slate-500">

            {label}

          </p>

          <h3 className="text-lg font-black text-slate-900">

            {value}

          </h3>

        </div>

      </div>

    </div>

  );
};

export default EmergencyAccess;
