import { useState } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = ({
  children,
}) => {

  const [
    mobileOpen,
    setMobileOpen,
  ] = useState(false);

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-[#f4f7ff]">

      {/* GLOBAL GLOWS */}
      <div className="absolute left-[-200px] top-[-120px] h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-3xl" />

      <div className="absolute bottom-[-200px] right-[-150px] h-[500px] w-[500px] rounded-full bg-purple-400/10 blur-3xl" />

      <div className="absolute left-[40%] top-[20%] h-[300px] w-[300px] rounded-full bg-cyan-300/10 blur-3xl" />

      {/* SIDEBAR */}
      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* MAIN */}
      <div className="relative z-10 flex min-w-0 flex-1 flex-col lg:ml-[280px]">

        <Topbar
          setMobileOpen={setMobileOpen}
        />

        {/* CONTENT */}
        <main className="flex-1 px-3 py-4 sm:px-6 lg:px-10">
          {children}
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;