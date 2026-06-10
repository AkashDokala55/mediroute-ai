import {
  X,
  Copy,
  Check,
  Share2,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

import QRGenerator from "./QRGenerator";
import ExpiryTimer from "./ExpiryTimer";
import SharePermissionModal from "./SharePermissionModal";



const QRShareModal = ({
  open,
  setOpen,
  report,
}) => {

  const [
    copied,
    setCopied,
  ] = useState(false);

  const [
    shareUrl,
    setShareUrl,
  ] = useState("");

  const [
    selectedPermission,
    setSelectedPermission,
  ] = useState(
    "View Only"
  );

  const [
    expiry,
    setExpiry,
  ] = useState(
    "30 Minutes"
  );

  // ============================================
  // GENERATE URL
  // ============================================

  useEffect(() => {

  if (
    report &&
    open
  ) {

    setShareUrl(
      `https://mediroute-ai-1gb5.onrender.com/shared-report/${report.qrId}`
    );
  }

}, [
  report,
  open,
]);

  // ============================================
  // COPY LINK
  // ============================================

  const copyLink =
    async () => {

      try {

        await navigator.clipboard.writeText(
          shareUrl
        );

        setCopied(true);

        setTimeout(
          () =>
            setCopied(
              false
            ),
          2500
        );

      } catch (
        error
      ) {

        
      }
    };

  if (!report)
    return null;

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
        >

          {/* MODAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[40px] bg-white p-8 shadow-[0_30px_120px_rgba(15,23,42,0.35)]"          >

            {/* CLOSE */}
            <button
              onClick={() =>
                setOpen(false)
              }
              className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition hover:bg-red-100 hover:text-red-500"
            >

              <X size={22} />
            </button>

            {/* HEADER */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-2xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">

                <Share2 size={16} />

                Secure Healthcare Sharing
              </div>

              <h1 className="mt-5 text-5xl font-black tracking-tight text-slate-900">

                Share Medical Record
              </h1>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-500">

                Generate a secure QR code
                and temporary access link
                for hospitals, doctors and
                emergency responders.

              </p>
            </div>

            {/* CONTENT */}
            <div className="mt-10 grid gap-8 xl:grid-cols-2">

              {/* LEFT */}
              <div className="space-y-8">

                <QRGenerator
                  shareUrl={shareUrl}
                  expiry={expiry}
                />

                <ExpiryTimer
                  minutes={30}
                />
              </div>

              {/* RIGHT */}
              <div className="space-y-8">

                <SharePermissionModal
                  selectedPermission={
                    selectedPermission
                  }
                  setSelectedPermission={
                    setSelectedPermission
                  }
                />

                {/* LINK */}
                <div className="rounded-[32px] border border-slate-200 bg-white p-6">

                  <h2 className="text-2xl font-black text-slate-900">

                    Secure Share Link
                  </h2>

                  <div className="mt-5 flex gap-3">

                    <input
                      value={
                        shareUrl
                      }
                      readOnly
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm outline-none"
                    />

                    <button
                      onClick={
                        copyLink
                      }
                      className="flex items-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >

                      {copied ? (
                        <>
                          <Check
                            size={18}
                          />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy
                            size={18}
                          />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* REPORT INFO */}
                <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6">

                  <h2 className="text-2xl font-black text-slate-900">

                    Shared Record
                  </h2>

                  <div className="mt-5 space-y-4">

                    <div>

                      <p className="text-sm text-slate-500">

                        Title
                      </p>

                      <h3 className="font-bold text-slate-900">

                        {report.title}
                      </h3>
                    </div>

                    <div>

                      <p className="text-sm text-slate-500">

                        Category
                      </p>

                      <h3 className="font-bold text-slate-900">

                        {report.category}
                      </h3>
                    </div>

                    <div>

                      <p className="text-sm text-slate-500">

                        Hospital
                      </p>

                      <h3 className="font-bold text-slate-900">

                        {report.hospital}
                      </h3>
                    </div>

                    <div>

                      <p className="text-sm text-slate-500">

                        Permission
                      </p>

                      <h3 className="font-bold text-blue-700">

                        {
                          selectedPermission
                        }
                      </h3>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QRShareModal;