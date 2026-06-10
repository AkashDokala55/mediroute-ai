import {
  useEffect,
  useRef,
  useState,
} from "react";

import Fuse from "fuse.js";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import CoverageHero from "../../components/dashboard/treatment/CoverageHero";

import TreatmentSearch from "../../components/dashboard/treatment/TreatmentSearch";

import LocationSelector from "../../components/dashboard/treatment/LocationSelector";

import AIProcessing from "../../components/dashboard/treatment/AIProcessing";

import CoverageResults from "../../components/dashboard/treatment/CoverageResults";

import EmptyState from "../../components/dashboard/treatment/EmptyState";

import HospitalDetailsModel from "../../components/dashboard/treatment/HospitalDetailsModel";

import aarogyasriTreatments from "../../components/extraction/output/aarogyasriTreatments.json";

import aarogyasriHospitals from "../../components/extraction/output/aarogyasriHospitals.json";

import ehsTreatments from "../../components/extraction/output/ehsTreatments.json";

import ehsHospitals from "../../components/extraction/output/ehsHospitals.json";

const SchemeChecker = () => {

  const [scheme,
    setScheme] =
    useState("Aarogyasri");

  const [searchTerm,
    setSearchTerm] =
    useState("");

  const [selectedDistrict,
    setSelectedDistrict] =
    useState("");

  const [uploadedFile,
    setUploadedFile] =
    useState(null);

  const [suggestions,
    setSuggestions] =
    useState([]);

  const [matchedTreatments,
    setMatchedTreatments] =
    useState([]);

  const [locationHospitals,
    setLocationHospitals] =
    useState([]);

  const [nearbyHospitals,
    setNearbyHospitals] =
    useState([]);

  const [loading,
    setLoading] =
    useState(false);

  const [selectedHospital,
    setSelectedHospital] =
    useState(null);

  const [openHospitalModal,
    setOpenHospitalModal] =
    useState(false);

  const [searchPerformed,
    setSearchPerformed] =
    useState(false);

  const resultsRef =
    useRef(null);

  // ============================================
  // SCROLL TOP
  // ============================================

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

  }, []);

  // ============================================
  // DATASETS
  // ============================================

  const currentTreatments =
    scheme === "Aarogyasri"
      ? aarogyasriTreatments
      : ehsTreatments;

  const currentHospitals =
    scheme === "Aarogyasri"
      ? aarogyasriHospitals
      : ehsHospitals;

  // ============================================
  // FUSE SEARCH
  // ============================================

  const fuse = new Fuse(
    currentTreatments,
    {
      keys: [
        "treatmentName",
        "speciality",
        "keywords",
      ],

      threshold: 0.18,

      distance: 120,

      includeScore: true,

      ignoreLocation: true,

      minMatchCharLength: 3,
    }
  );

  // ============================================
  // SUGGESTIONS
  // ============================================

  useEffect(() => {

    if (
      !searchTerm.trim() ||
      searchTerm.length < 3
    ) {

      setSuggestions([]);

      return;
    }

    const results =
      fuse.search(searchTerm);

    setSuggestions(
      results
        .map(
          (
            result
          ) =>
            result.item
        )
        .slice(0, 5)
    );

  }, [
    searchTerm,
    scheme,
  ]);

  // ============================================
  // RESET
  // ============================================

  const handleReset = () => {

    setSearchTerm("");

    setSuggestions([]);

    setMatchedTreatments([]);

    setLocationHospitals([]);

    setNearbyHospitals([]);

    setSearchPerformed(false);
  };

  // ============================================
  // SEARCH
  // ============================================

  const handleTreatmentSearch =
    () => {

      if (
        !searchTerm.trim()
      )
        return;

      setLoading(true);

      setSearchPerformed(
        true
      );

      setTimeout(() => {

        // ============================================
        // TREATMENTS
        // ============================================

        const results =
          fuse.search(
            searchTerm
          );

        const treatments =
          results
            .map(
              (
                result
              ) =>
                result.item
            )
            .slice(0, 6);

        setMatchedTreatments(
          treatments
        );

        // ============================================
        // SPECIALITIES
        // ============================================

        const specialities =
          [
            ...new Set(
              treatments.map(
                (
                  item
                ) =>
                  item.speciality?.toLowerCase()
              )
            ),
          ];

        // ============================================
        // MATCH HOSPITALS
        // ============================================

        const hospitals =
          currentHospitals
            .map(
              (
                hospital
              ) => {

                const hospitalSpecs =
                  hospital.specialities ||
                  [];

                let isMatch =
                  false;

                specialities.forEach(
                  (
                    spec
                  ) => {

                    hospitalSpecs.forEach(
                      (
                        hSpec
                      ) => {

                        if (
                          hSpec
                            ?.toLowerCase()
                            .includes(
                              spec
                            )
                        ) {

                          isMatch =
                            true;
                        }
                      }
                    );
                  }
                );

                return {
                  ...hospital,
                  isMatch,
                };
              }
            )

            .filter(
              (
                hospital
              ) =>
                hospital.isMatch
            );

        // ============================================
        // SELECTED DISTRICT
        // ============================================

        const selected =
          selectedDistrict
            ?.toLowerCase()
            ?.trim();

        // ============================================
        // LOCATION BASED HOSPITALS
        // ============================================

        const locationBased =
          hospitals.filter(
            (hospital) => {

              const district =
                (
                  hospital.district ||
                  ""
                )
                  .toLowerCase()
                  .trim();

              const mandal =
                (
                  hospital.mandal ||
                  ""
                )
                  .toLowerCase()
                  .trim();

              const address =
                (
                  hospital.address ||
                  hospital.hospitalAddress ||
                  ""
                )
                  .toLowerCase();

              return (
                district.includes(
                  selected
                ) ||

                mandal.includes(
                  selected
                ) ||

                address.includes(
                  selected
                )
              );
            }
          );

        // ============================================
        // OTHER HOSPITALS
        // ============================================

        const others =
          hospitals.filter(
            (hospital) => {

              const district =
                (
                  hospital.district ||
                  ""
                )
                  .toLowerCase()
                  .trim();

              const mandal =
                (
                  hospital.mandal ||
                  ""
                )
                  .toLowerCase()
                  .trim();

              const address =
                (
                  hospital.address ||
                  hospital.hospitalAddress ||
                  ""
                )
                  .toLowerCase();

              return !(
                district.includes(
                  selected
                ) ||

                mandal.includes(
                  selected
                ) ||

                address.includes(
                  selected
                )
              );
            }
          );

        // ============================================
        // AI SCORE
        // ============================================

        const locationFinal =
          locationBased.map(
            (
              hospital
            ) => ({
              ...hospital,
              relevanceScore:
                Math.floor(
                  Math.random() *
                    4
                ) + 95,
              isNearby: true,
            })
          );

        const nearbyFinal =
          others.map(
            (
              hospital
            ) => ({
              ...hospital,
              relevanceScore:
                Math.floor(
                  Math.random() *
                    10
                ) + 82,
              isNearby: false,
            })
          );

        setLocationHospitals(
          locationFinal
        );

        setNearbyHospitals(
          nearbyFinal
        );

        setLoading(false);

        setTimeout(() => {

          resultsRef.current?.scrollIntoView(
            {
              behavior:
                "smooth",
            }
          );

        }, 300);

      }, 1800);
    };

  return (
    <>
      <DashboardLayout>

        <div className="space-y-10 pb-24">

          <CoverageHero />

          <div className="grid items-start gap-8 xl:grid-cols-[1.2fr_420px]">

            {/* LEFT */}
            <div>

              <TreatmentSearch
                searchTerm={
                  searchTerm
                }
                setSearchTerm={
                  setSearchTerm
                }
                clearSearch={
                  handleReset
                }
                suggestions={
                  suggestions
                }
                onSuggestionSelect={(
                  value
                ) => {

                  setSearchTerm(
                    value
                  );

                  setSuggestions(
                    []
                  );
                }}
              />

              {/* BUTTONS */}
              <div className="mt-6 flex flex-wrap items-center gap-4">

                <button
                  onClick={
                    handleTreatmentSearch
                  }
                  className="rounded-[24px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-4 text-base font-bold text-white shadow-[0_10px_40px_rgba(79,70,229,0.35)] transition-all duration-300 hover:scale-[1.02]"
                >
                  Check Treatment Coverage
                </button>

                <label className="flex cursor-pointer items-center gap-3 rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:border-blue-300 hover:bg-blue-50">

                  <div className="text-xl">
                    📄
                  </div>

                  <div>

                    <p className="text-sm font-bold text-slate-900">

                      Upload Report
                    </p>

                    <p className="text-xs text-slate-500">

                      Optional AI-assisted matching
                    </p>
                  </div>

                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) =>
                      setUploadedFile(
                        e.target.files[0]
                      )
                    }
                  />
                </label>
              </div>
            </div>

            {/* RIGHT */}
            <div>

              <LocationSelector
                selectedDistrict={
                  selectedDistrict
                }
                setSelectedDistrict={
                  setSelectedDistrict
                }
              />
            </div>
          </div>

          {/* LOADING */}
          {loading && (

            <AIProcessing
              onClose={() =>
                setLoading(
                  false
                )
              }
            />
          )}

          {/* RESULTS */}
          {!loading &&
            matchedTreatments.length >
              0 && (

              <div
                ref={
                  resultsRef
                }
              >

                <CoverageResults
                  matchedTreatments={
                    matchedTreatments
                  }

                  locationHospitals={
                    locationHospitals
                  }

                  nearbyHospitals={
                    nearbyHospitals
                  }

                  scheme={
                    scheme
                  }

                  selectedDistrict={
                    selectedDistrict
                  }

                  setSelectedHospital={
                    setSelectedHospital
                  }

                  setOpenHospitalModal={
                    setOpenHospitalModal
                  }
                />
              </div>
            )}

          {/* EMPTY */}
          {!loading &&
            searchPerformed &&
            matchedTreatments.length ===
              0 && (
              <EmptyState />
            )}
        </div>
      </DashboardLayout>

      {/* MODAL */}
      <HospitalDetailsModel
        open={
          openHospitalModal
        }
        setOpen={
          setOpenHospitalModal
        }
        hospital={
          selectedHospital
        }
      />
    </>
  );
};

export default SchemeChecker;