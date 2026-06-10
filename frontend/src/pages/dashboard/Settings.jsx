import DashboardLayout from "../../components/dashboard/DashboardLayout";

import {
  User,
  Bell,
  Moon,
  Shield,
  Info,
  Wrench,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";
import toast from "react-hot-toast";
const user =
  JSON.parse(
    localStorage.getItem("user")
  );

const Settings = () => {

  const [
    darkMode,
    setDarkMode,
  ] = useState(false);

  const [
    medicineAlerts,
    setMedicineAlerts,
  ] = useState(true);

  const [
    expiryAlerts,
    setExpiryAlerts,
  ] = useState(true);

  const [
    reportAlerts,
    setReportAlerts,
  ] = useState(true);

  return (

    <DashboardLayout>

      <div className="space-y-6">

        {/* HEADER */}

        <div>

          <h1 className="text-4xl font-black text-gray-900">

            Settings

          </h1>

          <p className="mt-2 text-gray-500">

            Manage your account and healthcare preferences.

          </p>

        </div>

        {/* PROFILE */}

        {/* PROFILE */}

<Card>

  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 text-white">

    <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

    <div className="relative flex items-center gap-5">

      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-md">

        <User size={36} />

      </div>

      <div>

        <h2 className="text-2xl font-black">

          {user?.name || "User"}

        </h2>

        <p className="mt-1 text-white/80">

          {user?.email ||
            "No email available"}

        </p>

        <div className="mt-3 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium">

          MediRoute Member

        </div>

      </div>

    </div>

  </div>

  <div className="mt-5 grid grid-cols-2 gap-4">

    <div className="rounded-2xl bg-blue-50 p-4">

      <p className="text-xs font-semibold uppercase text-blue-600">

        Account Status

      </p>

      <p className="mt-1 font-bold text-green-600">

        Active

      </p>

    </div>

    <div className="rounded-2xl bg-purple-50 p-4">

      <p className="text-xs font-semibold uppercase text-purple-600">

        Version

      </p>

      <p className="mt-1 font-bold text-gray-800">

        MediRoute AI v1.0

      </p>

    </div>

  </div>

  <div className="mt-5 rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-4">

    <p className="text-sm text-gray-600">

      Profile customization and account editing
      features are currently under development
      and will be available in future updates.

    </p>

  </div>

</Card>

        {/* APPEARANCE */}

        <Card>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-purple-100 p-4">

                <Moon
                  size={22}
                  className="text-purple-600"
                />

              </div>

              <div>

                <h3 className="font-bold text-black">

                  Dark Mode

                </h3>

                <p className="text-sm text-gray-500">

                  Customize your experience

                </p>

              </div>

            </div>

            <Toggle
  checked={false}
  onChange={() =>
    toast.error(
      "Dark Mode is currently under development."
    )
  }
/>

          </div>

        </Card>

        {/* NOTIFICATIONS */}

        <Card>

          <div className="mb-5 flex items-center gap-3 text-black">

            <Bell
              className="text-green-600"
            />

            <h3 className="font-bold">

              Notifications

            </h3>

          </div>

          <SettingRow
            title="Medicine Reminders"
            checked={
              medicineAlerts
            }
            onChange={() => {
  setMedicineAlerts(
    !medicineAlerts
  );

  toast.success(
    "Preference updated"
  );
}}
          />

          <SettingRow
            title="Expiry Alerts"
            checked={
              expiryAlerts
            }
            onChange={() =>{
              setExpiryAlerts(
                !expiryAlerts
              )
              toast.success(
    "Preference updated"
  );
            }}
          />

          <SettingRow
            title="Report Updates"
            checked={
              reportAlerts
            }
            onChange={() =>{
              setReportAlerts(
                !reportAlerts
              )
              toast.success(
    "Preference updated"
  );}
            }
          />

        </Card>

        {/* SECURITY */}

        <Card>

          <div className="flex items-center gap-4 text-black">

            <div className="rounded-2xl bg-red-100 p-4">

              <Shield
                size={22}
                className="text-red-600"
              />

            </div>

            <div>

              <h3 className="font-bold">

                Privacy & Security

              </h3>

              <p className="text-sm text-gray-500">

                Your healthcare data is
                securely stored and protected.

              </p>

            </div>

          </div>

        </Card>

        {/* ABOUT */}

        <Card>

          <div className="flex items-center gap-4 text-black">

            <div className="rounded-2xl bg-orange-100 p-4">

              <Info
                size={22}
                className="text-orange-600"
              />

            </div>

            <div>

              <h3 className="font-bold">

                About MediRoute AI

              </h3>

              <p className="text-sm text-gray-500">

                Version 1.0

              </p>

            </div>

          </div>

          <div className="mt-4 rounded-2xl bg-gray-50 p-4">

            <p className="text-sm text-gray-600">

              Built using React,
              Node.js, MongoDB,
              Cloudinary and OCR.Space.

            </p>

          </div>

        </Card>

        {/* DEVELOPMENT NOTICE */}

        <Card>

          <div className="flex items-start gap-4 text-black">

            <div className="rounded-2xl bg-yellow-100 p-4">

              <Wrench
                size={22}
                className="text-yellow-600"
              />

            </div>

            <div>

              <h3 className="font-bold">

                Development Notice

              </h3>

              <p className="mt-2 text-sm text-gray-600">

                MediRoute AI is under
                continuous development.

                Some settings and
                advanced healthcare
                features are currently
                being improved and
                will be available in
                future updates.

              </p>

            </div>

          </div>

        </Card>

      </div>

    </DashboardLayout>
  );
};

const Card = ({
  children,
}) => (

  <div className="rounded-[28px] border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-3xl">

    {children}

  </div>

);

const Toggle = ({
  checked,
  onChange,
}) => (

  <button
    onClick={onChange}
    className={`relative h-7 w-14 rounded-full transition ${
      checked
        ? "bg-green-500"
        : "bg-gray-300"
    }`}
  >

    <span
      className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
        checked
          ? "left-8"
          : "left-1"
      }`}
    />

  </button>

);

const SettingRow = ({
  title,
  checked,
  onChange,
}) => (

  <div className="flex items-center justify-between py-3">

    <span className="text-gray-700">

      {title}

    </span>

    <Toggle
      checked={checked}
      onChange={onChange}
    />

  </div>

);

export default Settings;