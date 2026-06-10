import {
  FileText,
  Download,
  Eye,
  Share2,
  ShieldCheck,
  Star,
  QrCode,
  Trash2,
  Clock3,
  Pill,
  FlaskConical,
  ScanSearch,
  ClipboardList,
} from "lucide-react";
import {
  downloadReport,
} from "../../../../services/vaultService";
import toast from "react-hot-toast";
const categoryIcons = {
  Prescription: Pill,

  "Lab Report":
    FlaskConical,

  Scan:
    ScanSearch,

  "Discharge Summary":
    ClipboardList,

  Insurance:
    ShieldCheck,
};
const categoryColors = {

  Prescription:
    "from-blue-500 to-cyan-500",

  "Lab Report":
    "from-purple-500 to-pink-500",

  Scan:
    "from-emerald-500 to-green-500",

  "Discharge Summary":
    "from-orange-500 to-red-500",

  Insurance:
    "from-indigo-500 to-blue-600",

  General:
    "from-slate-500 to-slate-700",
};

const ReportCard = ({
  report,
  onView,
  onDelete,
  onOpenQR,
}) => {

  const gradient =
    categoryColors[
      report.category
    ] ||
    categoryColors.General;

  return (
    <div id={`report-${report._id}`}
    className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

      {/* BG */}
      <div
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${gradient} opacity-10 blur-3xl`}
      />

      <div className="relative z-10">

        {/* TOP */}
        <div className="flex items-start justify-between gap-4">

          <div className="flex items-start gap-5">

            {/* ICON */}
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${gradient} text-white shadow-lg`}
            >

              {
  (() => {

    const Icon =
      categoryIcons[
        report.category
      ] || FileText;
const CategoryIcon =
  categoryIcons[
    report.category
  ] || FileText;
  <CategoryIcon size={30} />
    return (
      <Icon size={30} />
    );

  })()
}
            </div>

            {/* INFO */}
            <div>

              <h2 className="text-2xl font-black tracking-tight text-slate-900">

                {report.title}
              </h2>

              <div
                className={`mt-3 inline-flex rounded-2xl bg-gradient-to-r ${gradient} px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-md`}
              >

                {report.category}
              </div>
            </div>
          </div>

          {/* STAR */}
          <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-500 transition hover:bg-yellow-100">

            <Star size={20} />
          </button>
        </div>

        {/* DESC */}
        <p className="mt-6 text-[15px] leading-7 text-slate-600">

          {report.description}
        </p>

        {/* META */}
        <div className="mt-7 grid gap-4 md:grid-cols-2">

          <div className="rounded-2xl bg-slate-50 p-4">

            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">

              Hospital
            </p>

            <h3 className="mt-2 text-sm font-semibold text-slate-800">

              {report.hospital}
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">

            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">

              Uploaded
            </p>

            <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-800">

              <Clock3
                size={16}
                className="text-cyan-500"
              />

              {new Date(
  report.createdAt
).toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* SECURITY */}
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-green-100 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">

          <ShieldCheck size={18} />

          Encrypted & Securely Stored
        </div>

        {/* ACTIONS */}
        <div className="mt-8 flex flex-wrap gap-3">

          {/* VIEW */}
          <button
            onClick={onView}
            className="flex items-center gap-3 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
          >

            <Eye size={18} />

            View
          </button>

          {/* DOWNLOAD */}
          <button
  onClick={() =>
    downloadReport(
      report
    )
  }
  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
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
  onClick={() =>
    onOpenQR(report)
  }
  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
>
  <QrCode size={18} />

  QR Access
</button>

          {/* DELETE */}
          <button
            onClick={() =>
              onDelete(report._id)
            }
            className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100"
          >

            <Trash2 size={18} />

            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;