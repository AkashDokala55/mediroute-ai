import {
  ShieldCheck,
  IndianRupee,
} from "lucide-react";

const TreatmentCard = ({
  treatment,
}) => {

  return (
    <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm">

      {/* TOP */}
      <div className="flex items-start justify-between gap-6">

        {/* LEFT */}
        <div>

          <div className="inline-flex items-center gap-2 rounded-xl bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">

            <ShieldCheck size={14} />

            {treatment.scheme}

          </div>

          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-900">

            {treatment.treatmentName}

          </h2>

          <p className="mt-3 text-sm text-slate-500">

            {treatment.speciality}

          </p>
        </div>

        {/* COST */}
        <div className="rounded-3xl bg-emerald-50 px-6 py-4 text-center">

          <div className="flex items-center justify-center gap-1 text-emerald-700">

            <IndianRupee size={18} />

            <span className="text-3xl font-black">

              {treatment.packageAmount ||
                "N/A"}

            </span>
          </div>

          <p className="mt-1 text-xs font-medium text-emerald-600">

            Covered Package

          </p>
        </div>
      </div>

      {/* INVESTIGATIONS */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">

        {/* PRE */}
        <div className="rounded-2xl bg-cyan-50 p-4">

          <h3 className="text-sm font-bold text-cyan-700">

            Pre Investigations

          </h3>

          <div className="mt-3 flex flex-wrap gap-2">

            {treatment.preInvestigations
              ?.slice(0, 4)
              .map(
                (
                  item,
                  idx
                ) => (

                <div
                  key={idx}
                  className="rounded-xl bg-white px-3 py-1 text-xs text-slate-700"
                >
                  {item}
                </div>
              ))}
          </div>
        </div>

        {/* POST */}
        <div className="rounded-2xl bg-purple-50 p-4">

          <h3 className="text-sm font-bold text-purple-700">

            Post Investigations

          </h3>

          <div className="mt-3 flex flex-wrap gap-2">

            {treatment.postInvestigations
              ?.slice(0, 4)
              .map(
                (
                  item,
                  idx
                ) => (

                <div
                  key={idx}
                  className="rounded-xl bg-white px-3 py-1 text-xs text-slate-700"
                >
                  {item}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;