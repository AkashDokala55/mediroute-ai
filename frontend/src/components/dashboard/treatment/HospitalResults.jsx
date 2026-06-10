import { useState } from "react";

import HospitalCard from "./HospitalCard";

const HospitalResults = ({
  matchedHospitals,
  selectedDistrict,
  setSelectedHospital,
  setOpenHospitalModal,
}) => {

  // PAGINATION
  const [
    visibleNearbyCount,
    setVisibleNearbyCount,
  ] = useState(15);

  const [
    visibleOtherCount,
    setVisibleOtherCount,
  ] = useState(15);

  // FILTER
  const nearbyHospitals =
    matchedHospitals.filter(
      (hospital) =>
        hospital.isNearby
    );

  const otherHospitals =
    matchedHospitals.filter(
      (hospital) =>
        !hospital.isNearby
    );

  return (
    <div className="space-y-16">

      {/* ================================= */}
      {/* LOCATION HOSPITALS */}
      {/* ================================= */}

      {nearbyHospitals.length >
        0 && (

        <div>

          {/* HEADER */}
          <div>

            <h2 className="text-4xl font-black text-slate-900">

              Hospitals In{" "}
              {selectedDistrict}

            </h2>

            <p className="mt-3 text-slate-500">

              Showing{" "}
              {
                Math.min(
                  visibleNearbyCount,
                  nearbyHospitals.length
                )
              }
              /
              {
                nearbyHospitals.length
              }{" "}
              hospitals near your selected district.

            </p>
          </div>

          {/* GRID */}
          <div className="mt-8 grid gap-6">

            {nearbyHospitals
              .slice(
                0,
                visibleNearbyCount
              )
              .map(
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

          {/* VIEW MORE */}
          {nearbyHospitals.length >
            visibleNearbyCount && (

            <div className="mt-8 flex justify-center">

              <button
                onClick={() =>
                  setVisibleNearbyCount(
                    (
                      prev
                    ) =>
                      prev +
                      15
                  )
                }
                className="rounded-2xl bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
              >
                View More Hospitals
              </button>
            </div>
          )}
        </div>
      )}

      {/* ================================= */}
      {/* OTHER HOSPITALS */}
      {/* ================================= */}

      {otherHospitals.length >
        0 && (

        <div>

          {/* HEADER */}
          <div>

            <h2 className="text-4xl font-black text-slate-900">

              Other Nearby Hospitals

            </h2>

            <p className="mt-3 text-slate-500">

              Showing{" "}
              {
                Math.min(
                  visibleOtherCount,
                  otherHospitals.length
                )
              }
              /
              {
                otherHospitals.length
              }{" "}
              hospitals from nearby districts.

            </p>
          </div>

          {/* GRID */}
          <div className="mt-8 grid gap-6">

            {otherHospitals
              .slice(
                0,
                visibleOtherCount
              )
              .map(
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

          {/* VIEW MORE */}
          {otherHospitals.length >
            visibleOtherCount && (

            <div className="mt-8 flex justify-center">

              <button
                onClick={() =>
                  setVisibleOtherCount(
                    (
                      prev
                    ) =>
                      prev +
                      15
                  )
                }
                className="rounded-2xl bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
              >
                View More Hospitals
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HospitalResults;