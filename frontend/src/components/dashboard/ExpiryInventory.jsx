import {
  Trash2,
  Edit,
  Pill,
  CalendarClock,
  Package,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";

import {
  deleteExpiryMedicine,
} from "../../services/expiryService";

const ExpiryInventory = ({
  medicines,
  setMedicines,
  setOpenModal,
  setEditingMedicine,
}) => {

  const handleDelete =
    async (id) => {

      if (
        !window.confirm(
          "Delete medicine?"
        )
      )
        return;

      await deleteExpiryMedicine(
        id
      );

      setMedicines(
        medicines.filter(
          (med) =>
            med._id !== id
        )
      );
    };

  const getStatus =
    (date) => {

      const today =
        new Date();

      const expiry =
        new Date(date);

      const diff =
        Math.ceil(
          (
            expiry -
            today
          ) /
            (1000 *
              60 *
              60 *
              24)
        );

      if (diff < 0)
        return {
          label: "Expired",
          bg:
            "bg-red-100",
          text:
            "text-red-700",
          border:
            "border-red-200",
          icon:
            AlertTriangle,
        };

      if (diff <= 30)
        return {
          label:
            "Expiring Soon",
          bg:
            "bg-amber-100",
          text:
            "text-amber-700",
          border:
            "border-amber-200",
          icon:
            CalendarClock,
        };

      return {
        label: "Safe",
        bg:
          "bg-emerald-100",
        text:
          "text-emerald-700",
        border:
          "border-emerald-200",
        icon:
          ShieldCheck,
      };
    };

  if (
    medicines.length === 0
  ) {

    return (
      <div className="rounded-[40px] border border-dashed border-blue-200 bg-white/70 p-20 text-center shadow-xl backdrop-blur-3xl">

        <Pill
          size={60}
          className="mx-auto text-blue-500"
        />

        <h2 className="mt-6 text-3xl font-black text-gray-900">
          No Medicines Added
        </h2>

        <p className="mt-3 text-gray-500">
          Start tracking medicine expiry dates.
        </p>

      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {medicines.map(
        (medicine) => {

          const status =
            getStatus(
              medicine.expiryDate
            );

          const StatusIcon =
            status.icon;

          return (

            <div
              key={
                medicine._id
              }
              className={`group overflow-hidden rounded-[32px] border ${status.border} bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >

              {/* TOP BAR */}
              <div
                className={`h-2 w-full ${status.bg}`}
              />

              <div className="p-6">

                {/* HEADER */}
                <div className="flex items-start justify-between">

                  <div className="flex items-center gap-3">

                    <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-3 text-white shadow-lg">
                      <Pill
                        size={20}
                      />
                    </div>

                    <div>

                      <h2 className="text-xl font-black text-gray-900">
                        {
                          medicine.medicineName
                        }
                      </h2>

                      <p className="text-sm text-gray-500">
                        Medicine Inventory
                      </p>

                    </div>

                  </div>

                </div>

                {/* STATUS */}
                <div className="mt-6">

                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${status.bg} ${status.text}`}
                  >

                    <StatusIcon
                      size={16}
                    />

                    {
                      status.label
                    }

                  </span>

                </div>

                {/* DETAILS */}
                <div className="mt-6 space-y-4">

                  <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">

                    <Package
                      size={18}
                      className="text-blue-600"
                    />

                    <div>

                      <p className="text-xs text-gray-500">
                        Quantity
                      </p>

                      <h3 className="font-bold text-gray-900">
                        {
                          medicine.quantity
                        } Tablets
                      </h3>

                    </div>

                  </div>

                  <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">

                    <CalendarClock
                      size={18}
                      className="text-purple-600"
                    />

                    <div>

                      <p className="text-xs text-gray-500">
                        Expiry Date
                      </p>

                      <h3 className="font-bold text-gray-900">
                        {new Date(
                          medicine.expiryDate
                        ).toLocaleDateString()}
                      </h3>

                    </div>

                  </div>

                </div>

                {/* ACTIONS */}
                <div className="mt-6 flex gap-3">

                  <button
                    onClick={() => {

                      setEditingMedicine(
                        medicine
                      );

                      setOpenModal(
                        true
                      );
                    }}
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
                  >

                    <Edit
                      size={18}
                    />

                    Edit

                  </button>

                  <button
                    onClick={() =>
                      handleDelete(
                        medicine._id
                      )
                    }
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-500 to-rose-500 px-4 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
                  >

                    <Trash2
                      size={18}
                    />

                    Delete

                  </button>

                </div>

              </div>

            </div>
          );
        }
      )}

    </div>
  );
};

export default ExpiryInventory;