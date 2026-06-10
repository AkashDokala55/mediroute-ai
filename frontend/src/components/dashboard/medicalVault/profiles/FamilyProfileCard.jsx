import {
  User,
  Heart,
  Calendar,
  ShieldCheck,
  Trash2,
  Pencil,
} from "lucide-react";

const FamilyProfileCard = ({
  profile,
  active,
  onClick,
  onDelete,
   onEdit,
}) => {

  return (
    <div
      className={`group relative overflow-hidden rounded-[30px] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]
        
        ${
          active
            ? "border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-[0_15px_40px_rgba(37,99,235,0.15)]"
            : "border-slate-200 bg-white"
        }
      `}
    >

      {/* CARD CLICK AREA */}
      <button
        onClick={onClick}
        className="w-full text-left"
      >

        {/* BG GLOW */}
        <div
          className={`absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl transition-all duration-300
            
            ${
              active
                ? "bg-blue-400/20"
                : "bg-slate-200/20"
            }
          `}
        />

        <div className="relative z-10">

          {/* TOP */}
          <div className="flex items-start justify-between">

            <div
              className={`flex h-16 w-16 items-center justify-center rounded-3xl text-white shadow-lg
                
                ${
                  active
                    ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                    : "bg-gradient-to-br from-slate-500 to-slate-700"
                }
              `}
            >

              <User size={28} />
            </div>

            <div
              className={`rounded-2xl px-3 py-1 text-xs font-bold uppercase tracking-wide
                
                ${
                  active
                    ? "bg-blue-100 text-blue-700"
                    : "bg-slate-100 text-slate-500"
                }
              `}
            >

              {active
                ? "Active"
                : "Profile"}
            </div>
          </div>

          {/* NAME */}
          <h2 className="mt-6 text-2xl font-black tracking-tight text-slate-900">

            {profile.name}
          </h2>

          {/* RELATION */}
          <p className="mt-1 text-sm font-medium text-slate-500">

            {profile.relation}
          </p>

          {/* INFO */}
          <div className="mt-6 space-y-4">

            <div className="flex items-center gap-3 text-sm text-slate-600">

              <Calendar
                size={17}
                className="text-blue-500"
              />

              <span>
                {profile.age} Years
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-600">

              <Heart
                size={17}
                className="text-red-500"
              />

              <span>
                Blood Group: {profile.bloodGroup}
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-600">

              <ShieldCheck
                size={17}
                className="text-green-500"
              />

              <span>
                {profile.records} Medical Records
              </span>
            </div>
          </div>
        </div>
      </button>
<button
  onClick={(e) => {

    e.stopPropagation();

    onEdit(profile);
  }}
  className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-100"
>
  <Pencil size={18} />

  Edit Profile
</button>
      {/* DELETE BUTTON */}
      <button
        onClick={(e) => {

          e.stopPropagation();

          onDelete(profile);
        }}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100"
      >

        <Trash2 size={18} />

        Delete Profile
      </button>
    </div>
  );
};

export default FamilyProfileCard;