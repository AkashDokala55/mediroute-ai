import {
  Search,
  X,
} from "lucide-react";

const VaultSearch = ({
  searchTerm,
  setSearchTerm,
}) => {

  return (
    <div className="relative">

      {/* SEARCH BOX */}
      <div className="flex items-center gap-4 rounded-[32px] border border-slate-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 focus-within:border-blue-400 focus-within:shadow-lg">

        {/* ICON */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">

          <Search size={24} />
        </div>

        {/* INPUT */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(
              e.target.value
            )
          }
          placeholder="Search reports, hospitals, categories..."
          className="w-full bg-transparent text-lg font-medium text-slate-900 outline-none placeholder:text-slate-400"
        />

        {/* CLEAR */}
        {searchTerm && (

          <button
            onClick={() =>
              setSearchTerm("")
            }
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-500 transition hover:bg-red-100"
          >

            <X size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default VaultSearch;