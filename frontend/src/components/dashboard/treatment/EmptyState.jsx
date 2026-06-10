import { SearchX } from "lucide-react";

const EmptyState = () => {

  return (
    <div className="rounded-[40px] border border-red-100 bg-gradient-to-br from-red-50 to-orange-50 p-10 text-center shadow-lg">

      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100 text-red-500">

        <SearchX size={42} />
      </div>

      <h2 className="mt-8 text-4xl font-black text-gray-900">
        No Results Found
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-gray-600">

        We couldn't find matching treatments
        or hospitals for your search.

        Try broader keywords or upload
        medical reports.

      </p>
    </div>
  );
};

export default EmptyState;