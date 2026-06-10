import { motion } from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import EmergencyCard from "../../components/dashboard/EmergencyCard";

import QRCodePreview from "../../components/dashboard/QRCodePreview";

import MedicalInfoCard from "../../components/dashboard/MedicalInfoCard";
import AddEmergencyCardModal from "../../components/dashboard/AddEmergencyCardModal";
import {
  getEmergencyCards,
} from "../../services/emergencyService";
import { useRef } from "react";
import QRPreviewModal from "../../components/dashboard/QRPreviewModal";

const EmergencyQR = () => {

  const [
    emergencyCards,
    setEmergencyCards,
  ] = useState([]);
  const hasCard =
  emergencyCards.length > 0;
const [openModal, setOpenModal] =
  useState(false);
  const [showQRModal, setShowQRModal] =
  useState(false);
  const [
    selectedCard,
    setSelectedCard,
  ] = useState(null);
const previewRef = useRef(null);
  useEffect(() => {

    const loadCards =
      async () => {

        try {

          const data =
            await getEmergencyCards();

          setEmergencyCards(
            data
          );

          if (
            data.length > 0
          ) {


            setSelectedCard(
              data[data.length - 1]
            );
          }

        } catch (
          error
        ) {

          
        }
      };

    loadCards();

  }, []);

  return (
    <DashboardLayout>

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
      >

        {/* HERO */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] p-8 text-white shadow-[0_20px_80px_rgba(15,23,42,0.35)] sm:p-12">

          <div className="absolute -left-20 top-0 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="absolute bottom-[-100px] right-[-100px] h-[280px] w-[280px] rounded-full bg-purple-500/10 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.05]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col gap-10 xl:flex-row lg:items-center lg:justify-between">

            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-xl">

                <div className="h-2 w-2 rounded-full bg-cyan-300" />

                Smart Emergency Healthcare Access
              </div>

<h1 className="mt-8 text-3xl font-black leading-tight md:text-4xl xl:text-6xl">                Emergency QR
                <br />
                Healthcare System
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
                Instantly share critical healthcare
                information with hospitals and emergency
                responders using secure AI-powered
                emergency QR access.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <button
  onClick={() =>
    setOpenModal(true)
  }
  className="rounded-2xl bg-white px-6 py-4 text-sm font-bold text-indigo-700 shadow-xl transition hover:scale-[1.03]"
>
  {hasCard
    ? "Update Emergency Card"
    : "Generate Emergency QR"}
</button>

                <button
  onClick={() =>
    setShowQRModal(true)
  }
  className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/20 text-black"
>
  Preview Emergency Access
</button>

              </div>
            </div>

            <div className="relative hidden lg:flex">

              <div className="flex h-[340px] w-[340px] items-center justify-center rounded-full border border-white/10">

                <div className="flex h-[260px] w-[260px] items-center justify-center rounded-full border border-white/10">

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 15,
                      ease: "linear",
                    }}
                    className="relative flex h-[180px] w-[180px] items-center justify-center rounded-full bg-white/10 backdrop-blur-2xl"
                  >

                    <div className="text-center">

                      <h2 className="text-5xl font-black">
                        QR
                      </h2>

                      <p className="mt-2 text-sm text-slate-300">
                        Secure Access
                      </p>

                    </div>

                    <div className="absolute inset-0 rounded-full border-4 border-cyan-300/30 animate-ping" />

                  </motion.div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* DEBUG INFO */}
        

        <div className="mt-10">
<EmergencyCard
  card={selectedCard}
/>        </div>
<AddEmergencyCardModal
  open={openModal}
  setOpen={setOpenModal}
  setEmergencyCards={
    setEmergencyCards
  }
  setSelectedCard={
    setSelectedCard
  }
/>
        <div
  ref={previewRef}
  className="mt-10"
>
<QRCodePreview
  card={selectedCard}
  openQR={() =>
    setShowQRModal(true)
  }
/></div>
        <div className="mt-10">
          <MedicalInfoCard
  card={selectedCard}
/>
        </div>

      </motion.div>
<QRPreviewModal
  open={showQRModal}
  setOpen={setShowQRModal}
  card={selectedCard}
/>
{
  showQRModal && (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 p-4">

      <div className="relative rounded-3xl bg-white p-6 shadow-2xl">

        <button
          onClick={() =>
            setShowQRModal(false)
          }
          className="absolute right-4 top-4 rounded-lg bg-red-500 px-3 py-2 text-white"
        >
          X
        </button>

        <h2 className="mb-6 text-center text-2xl font-bold">
          Emergency QR
        </h2>

        <QRCode
          value={
            selectedCard
              ? `${window.location.origin}/emergency/${selectedCard.qrId}`
              : "No Card"
          }
          size={250}
        />

      </div>

    </div>
  )
}
    </DashboardLayout>
  );
};

export default EmergencyQR;