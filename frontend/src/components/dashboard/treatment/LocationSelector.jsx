import { MapPin } from "lucide-react";

const districts = [
  "Alluri Sitharama Raju",
  "Anakapalli",
  "Anantapur",
  "Annamayya",
  "Bapatla",
  "Chittoor",
  "Dr. B.R. Ambedkar Konaseema",
  "East Godavari",
  "Eluru",
  "Guntur",
  "Kakinada",
  "Krishna",
  "Kurnool",
  "Nandyal",
  "NTR",
  "Palnadu",
  "Parvathipuram Manyam",
  "Prakasam",
  "SPSR Nellore",
  "Sri Sathya Sai",
  "Srikakulam",
  "Tirupati",
  "Visakhapatnam",
  "Vizianagaram",
  "West Godavari",
  "YSR Kadapa",
];

const LocationSelector = ({
  selectedDistrict,
  setSelectedDistrict,
}) => {

  return (
    <div className="rounded-[32px] border border-white/30 bg-white/80 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-3xl">

      {/* TITLE */}
      <h2 className="text-4xl font-black leading-tight text-gray-900">

        Select Your
        Location

      </h2>

      <p className="mt-4 text-base leading-relaxed text-gray-500">

        Optional:
        choose your district
        to prioritize nearby hospitals.

      </p>

      {/* CLEAR */}
      {selectedDistrict && (

        <button
          onClick={() =>
            setSelectedDistrict("")
          }
          className="mt-5 rounded-2xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-600"
        >
          Clear District
        </button>
      )}

      {/* GRID */}
      <div className="mt-8 max-h-[620px] overflow-y-auto pr-2">

        <div className="grid grid-cols-1 gap-4">

          {districts.map(
            (district) => (

            <button
              key={district}
              onClick={() =>
                setSelectedDistrict(
                  district
                )
              }
              className={`rounded-[24px] border p-4 text-left transition-all duration-300 ${
                selectedDistrict ===
                district
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-100 bg-gray-50 hover:border-blue-200"
              }`}
            >

              <div className="flex items-start gap-3">

                <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">

                  <MapPin size={20} />
                </div>

                <div>

                  <h3 className="text-base font-bold leading-snug text-gray-900">

                    {district}

                  </h3>

                  <p className="mt-1 text-sm text-gray-500">

                    Nearby hospitals available

                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;