import {
  X,
  FileText,
  Download,
  Share2,
  QrCode,
  ShieldCheck,
  Trash2,
  Star,
  Clock3,
  Hospital,
} from "lucide-react";
import {
  downloadReport,
} from "../../../../services/vaultService";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useState } from "react";

const ReportViewerModal = ({
  open,
  setOpen,
  report,
  onOpenQR,
  onDelete,
}) => {
const [pdfLoading, setPdfLoading] =
  useState(true);

  if (!report) return null;
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
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
        >

          {/* MODAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              y: 20,
            }}
            transition={{
              duration: 0.28,
            }}
            className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[40px] border border-white/20 bg-white p-8 shadow-[0_30px_120px_rgba(15,23,42,0.35)]"
          >

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
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

              {/* LEFT */}
              <div className="flex-1">

                {/* BADGES */}
                <div className="flex flex-wrap gap-3">

                  <div className="inline-flex items-center gap-2 rounded-2xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">

                    <ShieldCheck size={16} />

                    Secure Medical Record
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-2xl bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">

                    <Clock3 size={16} />

                    Uploaded {report.date}
                  </div>
                </div>

                {/* TITLE */}
                <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900">

                  {report.title}
                </h1>

                {/* DESC */}
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-500">

                  {report.description}
                </p>

                {/* META */}
                <div className="mt-8 flex flex-wrap gap-5">

                  {/* HOSPITAL */}
                  <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-5 py-4">

                    <Hospital
                      size={20}
                      className="text-blue-600"
                    />

                    <div>

                      <p className="text-xs uppercase tracking-wide text-slate-400">

                        Hospital
                      </p>

                      <h3 className="text-sm font-bold text-slate-800">

                        {report.hospital}
                      </h3>
                    </div>
                  </div>

                  {/* CATEGORY */}
                  <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-5 py-4">

                    <FileText
                      size={20}
                      className="text-purple-600"
                    />

                    <div>

                      <p className="text-xs uppercase tracking-wide text-slate-400">

                        Category
                      </p>

                      <h3 className="text-sm font-bold text-slate-800">

                        {report.category}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* ICON */}
              <div className="flex h-28 w-28 items-center justify-center rounded-[34px] bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-[0_20px_60px_rgba(37,99,235,0.25)]">

                <FileText size={42} />
              </div>
            </div>

            {/* PREVIEW */}
<div className="mt-12">

  <h2 className="text-3xl font-black text-slate-900">

    Report Preview
  </h2>

  <div className="mt-6 overflow-hidden rounded-[36px] border border-slate-200 bg-slate-50">

    {/* IMAGE PREVIEW */}
    {report.fileType?.startsWith(
      "image"
    ) && (

      <img
        src={report.fileUrl}
        alt={report.title}
        className="max-h-[800px] w-full object-contain bg-white"
      />
    )}

    {/* PDF PREVIEW */}
    {/* PDF PREVIEW */}
{report.fileUrl
  ?.toLowerCase()
  .includes(".pdf") && (

  <div className="relative h-[800px]">

    {pdfLoading && (

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">

        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>

        <p className="mt-6 text-lg font-semibold text-slate-600">

          Loading Medical Report...

        </p>

        <p className="mt-2 text-sm text-slate-400">

          Please wait while the PDF is being prepared.

        </p>

      </div>
    )}

    <iframe
      src={report.fileUrl}
      title={report.title}
      className="h-[800px] w-full bg-white"
      onLoad={() =>
        setPdfLoading(false)
      }
    />

  </div>
)}

    {/* FALLBACK */}
    {!report.fileType?.startsWith(
      "image"
    ) &&
      report.fileType !==
        "application/pdf" && (

      <div className="flex min-h-[420px] items-center justify-center p-10 text-center">

        <div>

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-blue-600">

            <FileText size={42} />
          </div>

          <h3 className="mt-8 text-3xl font-black text-slate-900">

            Preview Not Available
          </h3>

          <p className="mx-auto mt-4 max-w-xl leading-8 text-slate-500">

            This file type cannot
            be previewed directly.

          </p>
        </div>
      </div>
    )}
  </div>
</div>
            

            {/* SECURITY */}
            <div className="mt-10 rounded-[32px] border border-green-100 bg-green-50 p-7">

              <div className="flex items-start gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-green-100 text-green-600">

                  <ShieldCheck size={32} />
                </div>

                <div>

                  <h3 className="text-2xl font-black text-green-800">

                    Encrypted Healthcare Storage
                  </h3>

                  <p className="mt-3 max-w-3xl leading-8 text-green-700">

                    This medical record is securely
                    encrypted and accessible only
                    through controlled sharing,
                    temporary QR access and
                    permission-based authorization.

                  </p>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-12 flex flex-wrap gap-4">

              {/* VIEW */}
              <button
  onClick={() =>
    downloadReport(
      report
    )
  }
  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
>

  <Download size={18} />

  Download
</button>

              {/* SHARE */}
              <button
  onClick={async () => {

    try {

      if (navigator.share) {

        await navigator.share({

          title: report.title,

          text: `Medical Report - ${report.title}`,

          url: report.fileUrl,
        });

      } else {

        await navigator.clipboard.writeText(
          report.fileUrl
        );

        toast.success(
          "Report link copied"
        );
      }

    } catch (error) {

     
    }
  }}
  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
>
  <Share2 size={18} />
  Share
</button>
              {/* QR */}
              <button
                onClick={
                  onOpenQR
                }
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >

                <QrCode size={18} />

                Generate QR Access
              </button>

              {/* FAVORITE */}
              <button className="flex items-center gap-3 rounded-2xl border border-yellow-200 bg-yellow-50 px-6 py-4 text-sm font-semibold text-yellow-700 transition hover:bg-yellow-100">

                <Star size={18} />

                Pin Record
              </button>

              {/* DELETE */}
<button
  onClick={() =>
    onDelete(
      report.id
    )
  }
  className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-sm font-semibold text-red-600 transition hover:bg-red-100"
>
                <Trash2 size={18} />

                Delete
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReportViewerModal;