import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Landing from "../pages/Landing";

import Login from "../pages/auth/Login";

import Signup from "../pages/auth/Signup";

import DashboardHome from "../pages/dashboard/dashboardhome";

import MedicalVault from "../pages/dashboard/MedicalVault";

import EmergencyQR from "../pages/dashboard/EmergencyQR";

import MedicineTracker from "../pages/dashboard/MedicineTracker";

import SchemeChecker from "../pages/dashboard/SchemeChecker";

import ProtectedRoute from "./ProtectedRoute";

import SharedReport from "../pages/SharedReport";

import EmergencyAccess from "../pages/dashboard/EmergencyAccess";

import MedicineExpiry from "../pages/dashboard/MedicineExpiry";
import Settings
from "../pages/dashboard/Settings";
import ForgotPassword
from "../pages/auth/ForgotPassword";
import VerifyOtp from "../pages/auth/VerifyOtp";
import ResetPassword from "../pages/auth/ResetPassword";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* LANDING */}
        <Route
          path="/"
          element={<Landing />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* SIGNUP */}
        <Route
          path="/signup"
          element={<Signup />}
        />
         <Route
    path="/forgot-password"
    element={<ForgotPassword />}
  />
    <Route
  path="/verify-otp"
  element={<VerifyOtp />}
/>

<Route
  path="/reset-password"
  element={<ResetPassword />}
/>    
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <DashboardHome />
    </ProtectedRoute>
  }
/>

<Route
  path="/medicalvault"
  element={
    <ProtectedRoute>
      <MedicalVault />
    </ProtectedRoute>
  }
/>
<Route
  path="/shared-report/:id"
  element={<SharedReport />}
/>
<Route
  path="/emergency/:id"
  element={<EmergencyAccess />}
/>
<Route
  path="/emergency-qr"
  element={
    <ProtectedRoute>
      <EmergencyQR />
    </ProtectedRoute>
  }
/>
<Route
  path="/medicine-tracker"
  element={
    <ProtectedRoute>
      <MedicineTracker />
    </ProtectedRoute>
  }
/>
<Route
  path="/scheme-checker"
  element={
    <ProtectedRoute>
      <SchemeChecker />
    </ProtectedRoute>
  }
/>
<Route
  path="/medicine-expiry"
  element={
    <ProtectedRoute>
      <MedicineExpiry />
    </ProtectedRoute>
  }
/>
<Route
  path="/settings"
  element={
 <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  }/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;