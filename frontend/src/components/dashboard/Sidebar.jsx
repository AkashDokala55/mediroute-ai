import {
  LayoutDashboard,
  FileText,
  Pill,
  ShieldCheck,
  QrCode,
  CalendarClock,
  Settings,
  LogOut,
  X,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";




const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },

  {
    name: "Reports",
    icon: FileText,
    path: "/medicalVault",
  },

  {
    name: "Medicine Tracker",
    icon: Pill,
    path: "/medicine-tracker",
  },

  {
    name: "Scheme Checker",
    icon: ShieldCheck,
    path: "/scheme-checker",
  },

  {
    name: "Emergency QR",
    icon: QrCode,
    path: "/emergency-qr",
  },


  {
  name: "Medicine Expiry",
  icon: CalendarClock,
  path: "/medicine-expiry",

},
];

const Sidebar = ({
  mobileOpen,
  setMobileOpen,
}) => {

  const location =
    useLocation();

  const navigate =
    useNavigate();

  const handleLogout =
    () => {

      localStorage.removeItem(
        "token"
      );

      localStorage.removeItem(
        "user"
      );

      navigate(
        "/login"
      );
    };
  
  return (
    <>
      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() =>
            setMobileOpen(false)
          }
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-[280px]
          overflow-hidden border-r border-white/50
          bg-white/90 px-6 py-6 shadow-xl
          backdrop-blur-3xl transition-transform duration-300

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:translate-x-0
          lg:flex lg:flex-col
        `}
      >
        {/* BACKGROUND GLOW */}
        <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-blue-300/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-300/10 blur-3xl" />

        {/* LOGO */}
<div className="relative z-10 flex items-start gap-4">          <img
            src="/logo.jpg"
            alt="logo"
className="h-16 w-16 rounded-2xl object-cover shadow-lg shrink-0"          />

          <div>
<h1 className="text-lg sm:text-xl font-black text-gray-900 leading-tight">              MediRoute AI
            </h1>

            <p className="text-sm text-gray-500">
              Healthcare Dashboard
            </p>
          </div>

          {/* MOBILE CLOSE */}
          <button
  className="ml-auto flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-slate-200 lg:hidden"
            onClick={() =>
              setMobileOpen(false)
            }
          >
            <X size={20} />
          </button>
        </div>

        {/* MENU */}
<div className="relative z-10 mt-1 flex flex-1 flex-col gap-1 min-h-0 overflow-y-auto pr-2">          {menuItems.map(
            (
              item,
              index
            ) => {
              const Icon =
                item.icon;

              const isActive =
                location.pathname ===
                item.path;

              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() =>
                    setMobileOpen(
                      false
                    )
                  }
                >
                  <button
                    className={`group flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl"
                        : "text-gray-600 hover:bg-white hover:shadow-lg"
                    }`}
                  >
                    {/* ICON */}
                    <div
                      className={`transition duration-300 ${
                        isActive
                          ? "scale-110"
                          : "group-hover:scale-110"
                      }`}
                    >
                      <Icon size={22} />
                    </div>

                    {/* TEXT */}
                    <span className="font-medium">
                      {item.name}
                    </span>
                  </button>
                </Link>
              );
            }
          )}
        </div>

        {/* BOTTOM */}
        <div className="relative z-10 mt-4 space-y-3">
          {/* SETTINGS */}
          <Link to="/settings">
          <button className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-gray-600 transition-all duration-300 hover:bg-white hover:shadow-lg">
            <Settings size={22} />

            <span className="font-medium">
              Settings
            </span>
          </button></Link>

          {/* LOGOUT */}
          <button onClick={handleLogout} className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-red-500 transition-all duration-300 hover:bg-red-50">
            <LogOut size={22} />

            <span className="font-medium">
              Logout
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;