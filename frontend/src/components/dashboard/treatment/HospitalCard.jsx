import {
  MapPin,
  Phone,
  X,
  ArrowRight,
} from "lucide-react";

const HospitalCard = ({
  hospital,
  setSelectedHospital,
  setOpenHospitalModal,
}) => {

  return (
    <div className="relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)]">

      {/* CLOSE */}
      <button
        className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-red-100 hover:text-red-600"
      >
        <X size={16} />
      </button>

      {/* TOP */}
      <div className="flex items-start justify-between gap-5 pr-10">

        {/* LEFT */}
        <div className="flex-1">

          {/* BADGES */}
          <div className="flex flex-wrap items-center gap-3">

            <div
              className={`rounded-xl px-3 py-1 text-xs font-semibold ${
                hospital.isNearby
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {hospital.isNearby
                ? "Location Match"
                : "Nearby Support"}
            </div>

            <div className="rounded-xl bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">

              {hospital.aiScore || 92}% AI Match

            </div>
          </div>

          {/* NAME */}
          <h2 className="mt-5 text-3xl font-black leading-tight text-gray-900">

            {hospital.hospitalName}

          </h2>

          {/* LOCATION */}
          <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-gray-600">

            <div className="flex items-center gap-2">

              <MapPin
                size={16}
                className="text-blue-600"
              />

              <span>

                {hospital.district}

              </span>
            </div>

            {hospital.contact && (

              <div className="flex items-center gap-2">

                <Phone
                  size={16}
                  className="text-green-600"
                />

                <span>

                  {hospital.contact}

                </span>
              </div>
            )}
          </div>

          {/* SPECIALITIES */}
          {hospital.specialities &&
            hospital.specialities.length >
              0 && (

              <div className="mt-5 flex flex-wrap gap-2">

                {hospital.specialities
                  .slice(0, 4)
                  .map(
                    (
                      item,
                      idx
                    ) => (

                    <div
                      key={idx}
                      className="rounded-xl bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
              </div>
            )}
        </div>

        {/* DETAILS */}
        <button
          onClick={() => {

            setSelectedHospital(
              hospital
            );

            setOpenHospitalModal(
              true
            );
          }}
          className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:scale-[1.03]"
        >

          View Details

          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default HospitalCard;