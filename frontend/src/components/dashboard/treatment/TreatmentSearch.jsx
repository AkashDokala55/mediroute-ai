import {
  Search,
  X,
  Sparkles,
} from "lucide-react";

const TreatmentSearch = ({
  searchTerm,
  setSearchTerm,
  clearSearch,
  suggestions = [],
  onSuggestionSelect,
}) => {

  return (
    <div className="relative">

      {/* HERO */}
      <div>

        {/* TAG */}
        <div className="inline-flex items-center gap-2 rounded-2xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">

          <Sparkles size={16} />

          AI Healthcare Treatment Discovery
        </div>

        {/* TITLE */}
        <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-slate-900">

          Find Covered
          <br />

          Treatments &
          <br />

          Eligible Hospitals

        </h1>

        {/* DESC */}
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-500">

          Search treatments covered under Aarogyasri or EHS
          and discover district-based hospitals with
          AI-powered healthcare matching.

        </p>
      </div>

      {/* SEARCH */}
      <div className="relative mt-10">

        {/* INPUT */}
        <div className="group flex items-center gap-4 rounded-[30px] border border-slate-200 bg-white px-6 py-5 shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition-all duration-300 focus-within:border-blue-400 focus-within:shadow-[0_10px_50px_rgba(37,99,235,0.15)]">

          {/* ICON */}
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">

            <Search size={24} />
          </div>

          {/* INPUT FIELD */}
          <input
            id="treatment-search-input"
            type="text"
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
            placeholder="Search treatment, surgery, disease..."
            className="w-full bg-transparent text-lg font-medium text-slate-900 outline-none placeholder:text-slate-400"
          />

          {/* CLEAR */}
          {searchTerm && (

            <button
              onClick={
                clearSearch
              }
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-red-500 transition-all duration-300 hover:bg-red-100"
            >

              <X size={18} />
            </button>
          )}
        </div>

        {/* DROPDOWN */}
        {suggestions.length >
          0 && (

          <div className="absolute left-0 right-0 top-full z-[999] mt-4 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.12)]">

            {/* HEADER */}
            <div className="border-b border-slate-100 px-5 py-4">

              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">

                Suggested Treatments
              </h3>
            </div>

            {/* LIST */}
            <div className="max-h-[340px] overflow-y-auto">

              {suggestions.map(
                (
                  item,
                  index
                ) => (

                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    onSuggestionSelect(
                      item.treatmentName
                    )
                  }
                  className="w-full border-b border-slate-100 px-6 py-5 text-left transition-all duration-200 hover:bg-blue-50"
                >

                  {/* TITLE */}
                  <h3 className="line-clamp-2 text-base font-bold leading-snug text-slate-900">

                    {
                      item.treatmentName
                    }
                  </h3>

                  {/* SPECIALITY */}
                  <div className="mt-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">

                    {
                      item.speciality
                    }
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TreatmentSearch;