import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import QuickStats from "../../components/dashboard/QuickStats";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentActivity from "../../components/dashboard/RecentActivity";
import WelcomeModal from "../../components/common/WelcomeModal";
import {
  getDashboardStats,
} from "../../services/dashboardService";
import {
  getRecentActivities,
} from "../../services/dashboardService";
import DashboardHero from "../../components/dashboard/DashboardHero";
import HealthTicker
from "../../components/dashboard/healthTicker";
import WellnessCarousel
from "../../components/dashboard/WellnessCarousel";
import FloatingSupportButton
from "../../components/common/FloatingSupportButton";
const DashboardHome = () => {
const [
  activities,
  setActivities,
] = useState([]);
const [showWelcome, setShowWelcome] = useState(
  !localStorage.getItem("mediroute-welcome")
);
  const [
    stats,
    setStats,
  ] = useState({
    reports: 0,
    profiles: 0,
    emergencyCards: 0,
    sharedReports: 0,
  });

  useEffect(() => {

    const loadStats =
      async () => {
const recentActivities =
  await getRecentActivities();

setActivities(
  recentActivities
);
        try {

          const data =
            await getDashboardStats();

          setStats(data);

        } catch (error) {

         
        }
      };

    loadStats();

  }, []);
  const handleCloseWelcome = () => {
  localStorage.setItem(
    "mediroute-welcome",
    "seen"
  );

  setShowWelcome(false);
};
  return (
    
   


    <DashboardLayout>

      {/* HEADER */}
      <DashboardHero></DashboardHero>
      {/* STATS */}
      <div className="mt-10">
<QuickStats
  stats={stats}
/>      </div>
<br></br>
<HealthTicker />
      {/* QUICK ACTIONS */}
      <div className="mt-12">
        
        <div className="mb-6">
          
          <h2 className="text-3xl font-black text-gray-900">
            Quick Actions
          </h2>

          <p className="mt-2 text-gray-500">
            Access your healthcare tools instantly.
          </p>
        </div>

        <QuickActions />
      </div>

      {/* RECENT ACTIVITY */}
      <div className="mt-12">
<WellnessCarousel />    </div>
    <FloatingSupportButton />
<WelcomeModal
  open={showWelcome}
  onClose={handleCloseWelcome}
/>
    </DashboardLayout>
  );
};

export default DashboardHome;