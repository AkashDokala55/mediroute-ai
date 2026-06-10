import {
  Upload,
  X,
  FileText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  useState,
} from "react";

import {
  uploadFile,
  createReport,
  getReports,
} from "../../../../services/reportService";

import toast from "react-hot-toast";

const categories = [
  "Prescription",
  "Lab Report",
  "Scan",
  "Discharge Summary",
  "Insurance",
];

const UploadRecordModal = ({
  open,
  setOpen,
  setReports,
  profiles = [],
}) => {

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState(
    "Prescription"
  );

  const [
    selectedFile,
    setSelectedFile,
  ] = useState(null);

  const [
    title,
    setTitle,
  ] = useState("");

  const [
    hospital,
    setHospital,
  ] = useState("");

  const [
  profile,
  setProfile,
] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  const handleFileChange = (
    e
  ) => {

    const file =
      e.target.files[0];

    if (file) {

      setSelectedFile(
        file
      );
    }
  };

  const handleUpload =
  async () => {
   
    if (
      !title ||
      !hospital ||
      !selectedFile ||
      !profile
    ) {

      toast.error(
        "Please fill all fields"
      );

      return;
    }

    try {

      setLoading(true);

      // Upload file to Cloudinary

      const uploadResult =
        await uploadFile(
          selectedFile
        );

      if (
        !uploadResult.success
      ) {

        toast.error(
          "File upload failed"
        );

        return;
      }

      // Find selected profile

      const selectedMember =
        profiles.find(
          p =>
            p.name ===
            profile
        );

      // Save report in MongoDB

      await createReport({

        profileId:
          profile,

        title,

        category:
          selectedCategory,

        hospital,

        reportDate:
          new Date(),

        fileUrl:
          uploadResult.fileUrl,
        fileSize: selectedFile.size,
      });

      // Reload reports

      const updatedReports =
        await getReports();

      setReports(
        updatedReports
      );

      // Reset

      setTitle("");

      setHospital("");

      setSelectedFile(
        null
      );

      setSelectedCategory(
        "Prescription"
      );

      setProfile("");

      toast.success(
        "Medical record uploaded"
      );

      setOpen(false);

    } catch (
      error
    ) {

      

      toast.error(
        "Upload failed"
      );

    } finally {

      setLoading(false);
    }
  };

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
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[40px] border border-white/20 bg-white p-8 shadow-[0_30px_120px_rgba(15,23,42,0.35)]"
          >

            <button
              onClick={() =>
                setOpen(false)
              }
              className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition hover:bg-red-100 hover:text-red-500"
            >

              <X size={22} />

            </button>

            <div>

              <div className="inline-flex items-center gap-2 rounded-2xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">

                <Sparkles size={16} />

                Smart Medical Vault

              </div>

              <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900">

                Upload Medical Record

              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-500">

                Securely upload and manage healthcare records.

              </p>

            </div>

            <div className="mt-10 space-y-6">

              <div>

                <label className="text-sm font-bold text-slate-700">

                  Record Title

                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) =>
                    setTitle(
                      e.target.value
                    )
                  }
                  placeholder="Enter report title"
                  className="mt-3 w-full rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 font-medium placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              <div>

                <label className="text-sm font-bold text-slate-700">

                  Hospital Name

                </label>

                <input
                  type="text"
                  value={hospital}
                  onChange={(e) =>
                    setHospital(
                      e.target.value
                    )
                  }
                  placeholder="Enter hospital name"
                  className="mt-3 w-full rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 font-medium placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              <div>

                <label className="text-sm font-bold text-slate-700">

                  Profile

                </label>

                <select
  value={profile}
  onChange={(e) =>
    setProfile(
      e.target.value
    )
  }
  className="mt-3 w-full rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 font-medium outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
>
  <option value="">
    Select Profile
  </option>

  {profiles.map(
    (member) => (
      <option
        key={member._id}
        value={member._id}
      >
        {member.name}
      </option>
    )
  )}
</select>

              </div>

              <div>

                <label className="text-sm font-bold text-slate-700">

                  Category

                </label>

                <div className="mt-4 flex flex-wrap gap-3">

                  {categories.map(
                    (
                      category,
                      index
                    ) => (

                      <button
                        key={index}
                        type="button"
                        onClick={() =>
                          setSelectedCategory(
                            category
                          )
                        }
                        className={`rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                          selectedCategory ===
                          category
                            ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                            : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                        }`}
                      >

                        {category}

                      </button>
                    )
                  )}

                </div>

              </div>

              <div>

                <label className="text-sm font-bold text-slate-700">

                  Upload File

                </label>

                <label className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-[32px] border-2 border-dashed border-slate-300 bg-slate-50 px-8 py-16 text-center transition hover:border-blue-400 hover:bg-blue-50">

                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">

                    <Upload size={38} />

                  </div>

                  <h3 className="mt-6 text-2xl font-black text-slate-900">

                    Upload Medical File

                  </h3>

                  <p className="mt-3 text-slate-500">

                    PDF, scans, prescriptions, reports and images.

                  </p>

                  {selectedFile && (

                    <div className="mt-8 flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-md">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">

                        <FileText size={28} />

                      </div>

                      <div className="text-left">

                        <h3 className="text-base font-bold text-slate-900">

                          {selectedFile.name}

                        </h3>

                      </div>

                    </div>
                  )}

                  <input
                    type="file"
                    className="hidden"
                    onChange={
                      handleFileChange
                    }
                  />

                </label>

              </div>

            </div>

            <div className="mt-10 flex flex-wrap justify-end gap-4">

              <button
                onClick={() =>
                  setOpen(false)
                }
                className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-700"
              >

                Cancel

              </button>

              <button
                onClick={
                  handleUpload
                }
                disabled={loading}
                className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-sm font-bold text-white"
              >

                {loading
                  ? "Uploading..."
                  : "Upload Record"}

              </button>

            </div>

          </motion.div>

        </motion.div>
      )}

    </AnimatePresence>
  );
};

export default UploadRecordModal;