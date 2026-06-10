import {
  Download,
  QrCode,
  ShieldCheck,
} from "lucide-react";

import QRCodeModule from "react-qr-code";

const QRCode =
  QRCodeModule.default;
  
const QRGenerator = ({
  shareUrl,
  expiry,
}) => {

  // ============================================
  // DOWNLOAD QR
  // ============================================

  const handleDownload =
    () => {

      const svg =
        document.getElementById(
          "mediroute-qr"
        );

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
          "mediroute-qr.png";

        downloadLink.href =
          pngFile;

        downloadLink.click();
      };

      img.src =
        "data:image/svg+xml;base64," +
        btoa(svgData);
    };

  return (
    <div className="rounded-[36px] border border-slate-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">

      {/* QR */}
      <div className="rounded-[30px] bg-white p-8 shadow-lg">

        <QRCode
          id="mediroute-qr"
          value={shareUrl}
          size={260}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      {/* INFO */}
      <div className="mt-8 space-y-4">

        {/* EXPIRY */}
        <div className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">

            <QrCode size={28} />
          </div>

          <div>

            <p className="text-sm text-slate-500">

              QR Expiry
            </p>

            <h3 className="mt-1 text-lg font-bold text-slate-900">

              {expiry}
            </h3>
          </div>
        </div>

        {/* SECURITY */}
        <div className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">

            <ShieldCheck size={28} />
          </div>

          <div>

            <p className="text-sm text-slate-500">

              Access Security
            </p>

            <h3 className="mt-1 text-lg font-bold text-slate-900">

              Temporary Protected Access
            </h3>
          </div>
        </div>
      </div>

      {/* DOWNLOAD */}
      <button
        onClick={
          handleDownload
        }
        className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-sm font-bold text-white shadow-[0_10px_40px_rgba(37,99,235,0.25)] transition hover:scale-[1.02]"
      >

        <Download size={18} />

        Download QR
      </button>
    </div>
  );
};

export default QRGenerator;