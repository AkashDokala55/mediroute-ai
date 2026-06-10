import {
  useState,
} from "react";

import {
  ShieldCheck,
  Building2,
  MapPin,
} from "lucide-react";

import TreatmentCard from "./TreatmentCard";

import HospitalCard from "./HospitalCard";

const CoverageResults = ({
  matchedTreatments = [],
  locationHospitals = [],
  nearbyHospitals = [],
  selectedDistrict,
  scheme,
  setSelectedHospital,
  setOpenHospitalModal,
}) => {

  // ============================================
  // VIEW MORE STATES
  // ============================================

  const [
    showAllLocation,
    setShowAllLocation,
  ] = useState(false);

  const [
    showAllNearby,
    setShowAllNearby,
  ] = useState(false);

  // ============================================
  // DISPLAY COUNTS
  // ============================================

  const visibleLocationHospitals =
    showAllLocation
      ? locationHospitals
      : locationHospitals.slice(
          0,
          15
        );

  const visibleNearbyHospitals =
    showAllNearby
      ? nearbyHospitals
      : nearbyHospitals.slice(
          0,
          15
        );

  return (
    <div className="space-y-14">

      {/* ============================================ */}
      {/* HERO */}
      {/* ============================================ */}

      <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-10 text-white shadow-[0_20px_80px_rgba(79,70,229,0.35)]">

        <div className="flex flex-wrap items-center justify-between gap-10">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 rounded-2xl bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-xl">

              <ShieldCheck size={16} />

              Coverage Analysis Complete
            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight">

              Treatment Coverage Found
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-blue-100">

              MediRoute AI identified treatment coverage
              under
              {" "}
              {scheme}
              {" "}
              and matched hospitals
              based on your selected district and speciality.

            </p>
          </div>

          {/* RIGHT */}
          <div className="flex gap-5">

            {/* TREATMENTS */}
            <div className="rounded-[28px] bg-white/10 px-8 py-6 text-center backdrop-blur-xl">

              <h2 className="text-5xl font-black">

                {
                  matchedTreatments.length
                }
              </h2>

              <p className="mt-2 text-sm text-blue-100">

                Treatments
              </p>
            </div>

            {/* HOSPITALS */}
            <div className="rounded-[28px] bg-white/10 px-8 py-6 text-center backdrop-blur-xl">

              <h2 className="text-5xl font-black">

                {
                  locationHospitals.length +
                  nearbyHospitals.length
                }
              </h2>

              <p className="mt-2 text-sm text-blue-100">

                Hospitals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* TREATMENTS */}
      {/* ============================================ */}

      <div>

        <div className="flex items-center gap-3">

          <ShieldCheck
            size={28}
            className="text-blue-600"
          />

          <h2 className="text-4xl font-black text-slate-900">

            Covered Treatments
          </h2>
        </div>

        <div className="mt-8 space-y-6">

          {matchedTreatments.map(
            (
              treatment,
              index
            ) => (

            <TreatmentCard
              key={index}
              treatment={
                treatment
              }
            />
          ))}
        </div>
      </div>

      {/* ============================================ */}
      {/* LOCATION HOSPITALS */}
      {/* ============================================ */}

      {locationHospitals.length >
        0 && (

        <div>

          {/* TITLE */}
          <div className="mb-8 flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">

              <MapPin size={28} />
            </div>

            <div>

              <h2 className="text-4xl font-black text-slate-900">

                Hospitals in
                {" "}
                {selectedDistrict}
              </h2>

              <p className="mt-2 text-slate-500">

                Showing
                {" "}
                {
                  visibleLocationHospitals.length
                }
                /
                {
                  locationHospitals.length
                }
                {" "}
                hospitals from your selected district.
              </p>
            </div>
          </div>

          {/* LIST */}
          <div className="space-y-6">

            {visibleLocationHospitals.map(
              (
                hospital,
                index
              ) => (

              <HospitalCard
                key={index}
                hospital={
                  hospital
                }
                setSelectedHospital={
                  setSelectedHospital
                }
                setOpenHospitalModal={
                  setOpenHospitalModal
                }
              />
            ))}
          </div>

          {/* BUTTON */}
          {locationHospitals.length >
            15 && (

            <div className="mt-8 flex justify-center">

              <button
                onClick={() =>
                  setShowAllLocation(
                    !showAllLocation
                  )
                }
                className="rounded-2xl border border-blue-200 bg-blue-50 px-7 py-4 font-bold text-blue-700 transition hover:bg-blue-100"
              >

                {showAllLocation
                  ? "View Less"
                  : `View More (${locationHospitals.length - 15})`}
              </button>
            </div>
          )}
        </div>
      )}

      {/* ============================================ */}
      {/* NEARBY HOSPITALS */}
      {/* ============================================ */}

      {nearbyHospitals.length >
        0 && (

        <div>

          {/* TITLE */}
          <div className="mb-8 flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">

              <Building2 size={28} />
            </div>

            <div>

              <h2 className="text-4xl font-black text-slate-900">

                Nearby Supporting Hospitals
              </h2>

              <p className="mt-2 text-slate-500">

                Additional hospitals from nearby districts
                supporting related specialities.

              </p>
            </div>
          </div>

          {/* LIST */}
          <div className="space-y-6">

            {visibleNearbyHospitals.map(
              (
                hospital,
                index
              ) => (

              <HospitalCard
                key={index}
                hospital={
                  hospital
                }
                setSelectedHospital={
                  setSelectedHospital
                }
                setOpenHospitalModal={
                  setOpenHospitalModal
                }
              />
            ))}
          </div>

          {/* BUTTON */}
          {nearbyHospitals.length >
            15 && (

            <div className="mt-8 flex justify-center">

              <button
                onClick={() =>
                  setShowAllNearby(
                    !showAllNearby
                  )
                }
                className="rounded-2xl border border-purple-200 bg-purple-50 px-7 py-4 font-bold text-purple-700 transition hover:bg-purple-100"
              >

                {showAllNearby
                  ? "View Less"
                  : `View More (${nearbyHospitals.length - 15})`}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CoverageResults;