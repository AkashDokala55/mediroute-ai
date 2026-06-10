import {
  Bell,
  Menu,
  ShieldCheck,
} from "lucide-react";

const user =
  JSON.parse(
    localStorage.getItem("user")
  );

const Topbar = ({
  setMobileOpen,
}) => {

  const today =
    new Date();

  const date =
    today.toLocaleDateString(
      "en-US",
      {
        month: "long",
        day: "numeric",
        year: "numeric",
      }
    );

  const day =
    today.toLocaleDateString(
      "en-US",
      {
        weekday: "long",
      }
    );

  return (

    <header className="sticky top-0 z-40 border-b border-white/40 bg-white/70 px-4 py-4 backdrop-blur-3xl sm:px-6 lg:px-10">

      <div className="flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          <button
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-lg lg:hidden"
            onClick={() =>
              setMobileOpen(true)
            }
          >

            <Menu
              size={24}
              className="text-slate-800"
            />

          </button>

          <div>

            <h3 className="text-sm font-bold text-gray-900 md:text-base">

              {date}

            </h3>

            <p className="text-xs text-gray-500">

              {day}

            </p>

          </div>

        </div>

        {/* CENTER */}
        <div className="hidden lg:flex">

          <div className="flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-5 py-2 shadow-sm">

            <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />

            <ShieldCheck
              size={16}
              className="text-green-600"
            />

            <span className="text-sm font-semibold text-green-700">

              All Healthcare Services Operational

            </span>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg transition hover:scale-[1.03]">

            <Bell
              size={20}
              className="text-gray-700"
            />

            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-500" />

          </button>

          <div className="flex items-center gap-3 rounded-2xl bg-white px-3 py-2 shadow-lg">

            <img
              src="/logo.jpg"
              alt="MediRoute AI"
              className="h-10 w-10 rounded-xl object-cover"
            />

            <div className="hidden sm:block">

              <h3 className="text-sm font-semibold text-gray-900">

                {user?.name || "User"}

              </h3>

              <p className="text-xs text-gray-500">

                MediRoute Member

              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Topbar;