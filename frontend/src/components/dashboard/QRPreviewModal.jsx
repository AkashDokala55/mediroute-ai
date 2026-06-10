import { X } from "lucide-react";
import QRCodeModule from "react-qr-code";

const QRCode = QRCodeModule.default;

const QRPreviewModal = ({
  open,
  setOpen,
  card,
}) => {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">

      <div className="relative w-full max-w-lg rounded-[32px] bg-white p-8 shadow-2xl">

        <button
          onClick={() =>
            setOpen(false)
          }
          className="absolute right-6 top-6 text-black"
        >
          <X size={24} />
        </button>

        <h2 className="text-center text-3xl font-black text-gray-900">
          Emergency QR Access
        </h2>

        <p className="mt-3 text-center text-gray-500">
          Share only with trusted healthcare professionals.
        </p>

        <div className="mt-8 flex justify-center">

          <div className="rounded-[28px] bg-white p-6 shadow-xl">

            <QRCode
              value={
                card
                  ? `${window.location.origin}/emergency/${card.qrId}`
                  : "No Card"
              }
              size={260}
            />

          </div>

        </div>

        <p className="mt-5 text-center text-sm text-gray-500">
          QR ID: {card?.qrId}
        </p>

      </div>

    </div>
  );
};

export default QRPreviewModal;