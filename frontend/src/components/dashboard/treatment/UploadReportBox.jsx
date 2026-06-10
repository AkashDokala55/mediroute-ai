import { motion } from "framer-motion";

import {
  UploadCloud,
  FileText,
  Sparkles,
  ScanLine,
} from "lucide-react";

const UploadReportBox = ({
  uploadedFile,
  setUploadedFile,
}) => {

  const handleFileChange = (
    e
  ) => {

    const file =
      e.target.files[0];

    if (file) {
      setUploadedFile(file);
    }
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
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className="relative overflow-hidden rounded-[40px] border border-white/30 bg-white/70 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-3xl"
    >

      {/* GLOW */}
      <div className="absolute -right-20 bottom-0 h-[260px] w-[260px] rounded-full bg-cyan-500/10 blur-3xl" />

      {/* HEADER */}
      <div className="relative z-10">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 rounded-2xl border border-cyan-200/40 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
          
          <Sparkles size={16} />

          AI Report Scanner
        </div>

        {/* TITLE */}
        <h2 className="mt-6 text-4xl font-black text-gray-900">
          Upload Medical Report
        </h2>

        <p className="mt-3 max-w-2xl text-gray-500">
          Upload prescriptions, discharge
          summaries, or medical reports to
          automatically detect treatments
          and eligible healthcare coverage.
        </p>
      </div>

      {/* DROP AREA */}
      <motion.label
        whileHover={{
          scale: 1.01,
        }}
        className="relative z-10 mt-10 flex min-h-[320px] cursor-pointer flex-col items-center justify-center rounded-[36px] border-2 border-dashed border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 text-center transition-all duration-300 hover:border-blue-400"
      >

        <input
          type="file"
          accept=".pdf,.png,.jpg,.jpeg"
          onChange={
            handleFileChange
          }
          className="hidden"
        />

        {/* ICON */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="flex h-24 w-24 items-center justify-center rounded-[30px] bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_10px_40px_rgba(14,165,233,0.35)]"
        >
          <UploadCloud size={42} />
        </motion.div>

        {/* TEXT */}
        <h3 className="mt-8 text-3xl font-black text-gray-900">
          Upload Report or Prescription
        </h3>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base">
          AI will analyze uploaded healthcare
          documents to identify probable
          treatments and match them with
          eligible scheme-covered hospitals.
        </p>

        {/* BUTTON */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-xl transition hover:scale-[1.03]">
          Browse Medical Files
        </div>

        {/* SUPPORTED */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

          <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 shadow-md">
            
            <FileText
              size={16}
              className="text-red-500"
            />

            <span className="text-sm font-medium text-gray-700">
              PDF
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 shadow-md">
            
            <FileText
              size={16}
              className="text-blue-500"
            />

            <span className="text-sm font-medium text-gray-700">
              JPG
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 shadow-md">
            
            <ScanLine
              size={16}
              className="text-cyan-500"
            />

            <span className="text-sm font-medium text-gray-700">
              AI Scan Ready
            </span>
          </div>
        </div>
      </motion.label>

      {/* FILE PREVIEW */}
      {uploadedFile && (

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="relative z-10 mt-8 flex items-center gap-4 rounded-[28px] border border-green-100 bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-5"
        >

          <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-4 text-white shadow-lg">
            
            <FileText size={24} />
          </div>

          <div className="flex-1">

            <h3 className="font-bold text-gray-900">
              File Uploaded Successfully
            </h3>

            <p className="mt-1 text-sm text-gray-600">
              {uploadedFile.name}
            </p>
          </div>

          <div className="rounded-2xl bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Ready for AI Scan
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default UploadReportBox;