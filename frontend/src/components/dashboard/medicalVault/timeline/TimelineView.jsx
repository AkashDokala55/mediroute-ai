import {
  Clock3,
  Sparkles,
} from "lucide-react";

import TimelineCard from "./TimelineCard";

const TimelineView = ({
  selectedProfile,
  reports,
}) => {

  // ============================================
  // FILTER REPORTS
  // ============================================

  const filteredRecords =
  reports.filter(
    report =>
      report.profileId?.name ===
      selectedProfile
  );

  return (
    <div>

      {/* HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-5">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">

            <Clock3 size={30} />
          </div>

          <div>

            <h2 className="text-4xl font-black tracking-tight text-slate-900">

              Medical Timeline
            </h2>

            <p className="mt-2 text-slate-500">

              Chronological healthcare
              history and uploaded records.

            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 px-5 py-3 text-sm font-semibold text-blue-700">

          <Sparkles size={18} />

          {filteredRecords.length}
          {" "}
          Timeline Entries
        </div>
      </div>

      {/* EMPTY */}
      {filteredRecords.length ===
      0 ? (

        <div className="mt-10 rounded-[36px] border border-dashed border-slate-300 bg-white p-16 text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-slate-400">

            <Clock3 size={40} />
          </div>

          <h3 className="mt-8 text-3xl font-black text-slate-900">

            No Timeline Records
          </h3>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-500">

            Uploaded reports and healthcare
            activities will appear here
            in chronological order.

          </p>
        </div>

      ) : (

        /* TIMELINE */
        <div className="relative mt-10 space-y-8">

          {filteredRecords.map(
            (
              report
            ) => (

            <TimelineCard
              key={report._id}
              record={{
  reportId: report._id,

  title: report.title,

  category: report.category,

  hospital: report.hospital,

  description: report.description,

  date: new Date(
    report.createdAt
  ).toLocaleDateString(),
}}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TimelineView;