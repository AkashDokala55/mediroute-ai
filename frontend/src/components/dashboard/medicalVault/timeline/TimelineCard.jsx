import {
  Calendar,
  Hospital,
  FileText,
  ShieldCheck,
  Pill,
  Activity,
} from "lucide-react";

const categoryIcons = {

  Prescription: Pill,

  "Lab Report": Activity,

  Scan: ShieldCheck,

  "Discharge Summary":
    FileText,

  Insurance:
    ShieldCheck,

  General: FileText,
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

const TimelineCard = ({
  record,
}) => {

  const Icon =
    categoryIcons[
      record.category
    ] || FileText;

  const gradient =
    categoryColors[
      record.category
    ] ||
    categoryColors.General;

  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]">

      {/* TIMELINE LINE */}
      <div className="absolute left-10 top-0 h-full w-[2px] bg-gradient-to-b from-blue-100 via-cyan-100 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 flex gap-6">

        {/* ICON */}
        <div
          className={`relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br ${gradient} text-white shadow-lg`}
        >

          <Icon size={28} />
        </div>

        {/* DETAILS */}
        <div className="flex-1">

          {/* TOP */}
          <div className="flex flex-wrap items-start justify-between gap-4">

            <div>

              {/* TITLE */}
              <h2 className="text-2xl font-black tracking-tight text-slate-900">

                {record.title}
              </h2>

              {/* HOSPITAL */}
              <div className="mt-3 flex items-center gap-3 text-sm text-slate-500">

                <Hospital
                  size={17}
                  className="text-blue-500"
                />

                <span>

                  {record.hospital}
                </span>
              </div>
            </div>

            {/* CATEGORY */}
            <div
              className={`rounded-2xl bg-gradient-to-r ${gradient} px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg`}
            >

              {record.category}
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-5 text-[15px] leading-7 text-slate-600">

            {record.description}
          </p>

          {/* FOOTER */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">

            {/* DATE */}
            <div className="flex items-center gap-3 text-sm font-medium text-slate-500">

              <Calendar
                size={18}
                className="text-cyan-500"
              />

              {record.date}
            </div>

            {/* ACTION */}
            <button
  onClick={() => {

    const element =
      document.getElementById(
        `report-${record.reportId}`
      );

    if (element) {

      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      element.classList.add(
        "ring-4",
        "ring-blue-400"
      );

      setTimeout(() => {

        element.classList.remove(
          "ring-4",
          "ring-blue-400"
        );

      }, 2000);
    }
  }}
  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
>
  View Details
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;