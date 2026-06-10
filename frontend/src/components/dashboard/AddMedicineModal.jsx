import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  X,
  Pill,
  Clock3,
  Bell,
  CalendarDays,
  ClipboardList,
} from "lucide-react";

import {
  useState,
  useEffect,
} from "react";
import {

  createMedicine,

  updateMedicine,

} from "../../services/medicineService";
const timingOptions = [
  "Morning",
  "Afternoon",
  "Evening",
  "Night",
];

const medicineTypes = [
  "Tablet",
  "Capsule",
  "Syrup",
  "Injection",
];

const AddMedicineModal = ({
  open,
  setOpen,
  medicines,
  setMedicines,
  editingMedicine,
  setEditingMedicine,
}) => {

  const initialState = {
    name: "",
    dosage: "",
    type: "Tablet",
    timing: "Morning",
    customTime: "",
    reminder: "10 mins before",
    days: "",
    notes: "",
  };

  const [formData, setFormData] =
    useState(initialState);

  // PREFILL EDIT
  useEffect(() => {

    if (editingMedicine) {
      setFormData(editingMedicine);
    } else {
      setFormData(initialState);
    }

  }, [editingMedicine]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // ADD / UPDATE
  const handleSubmit = async () => {

    if (editingMedicine) {

  const updatedMedicine =
    await updateMedicine(
      editingMedicine._id,
      formData
    );

  setMedicines(
    medicines.map(
      (medicine) =>
        medicine._id ===
        editingMedicine._id
          ? updatedMedicine
          : medicine
    )
  );

} else {

  const newMedicine = {
    ...formData,
    status: "Upcoming",
    gradient:
      "from-purple-600 to-pink-500",
  };

  const createdMedicine =
    await createMedicine(
      newMedicine
    );

  setMedicines([
    ...medicines,
    createdMedicine,
  ]);

    }

    setOpen(false);

    setEditingMedicine(null);

    setFormData(initialState);
  };

  return (
    <AnimatePresence>

      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
className="
fixed inset-0 z-[100]
flex items-center justify-center
bg-black/50 p-4 backdrop-blur-md
lg:pl-[280px]
"        >

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            className="relative flex max-h-[95vh] w-full max-w-4xl flex-col overflow-hidden rounded-[40px] bg-white shadow-2xl"
          >

            {/* HEADER */}
            <div className="border-b border-gray-100 px-8 py-6">

              <button
                onClick={() => {

                  setOpen(false);

                  setEditingMedicine(
                    null
                  );
                }}
                className="absolute right-6 top-6 rounded-2xl bg-gray-100 p-3"
              >
                <X size={20} />
              </button>

              <div className="inline-flex items-center gap-2 rounded-2xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">

                <Pill size={16} />

                Smart Medicine Reminder
              </div>

              <h2 className="mt-5 text-4xl font-black text-gray-900">
                {editingMedicine
                  ? "Edit Medicine"
                  : "Add New Medicine"}
              </h2>

              <p className="mt-2 text-gray-500">
                Configure medicine reminders.
              </p>
            </div>

            {/* BODY */}
            <div className="overflow-y-auto px-8 py-8">

              <div className="grid gap-8 md:grid-cols-2">

                <InputBox
                  icon={Pill}
                  label="Medicine Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Paracetamol"
                />

                <InputBox
                  icon={ClipboardList}
                  label="Dosage"
                  name="dosage"
                  value={formData.dosage}
                  onChange={handleChange}
                  placeholder="1 Tablet"
                />

                {/* TYPE */}
                <SelectorGroup
                  title="Medicine Type"
                  options={medicineTypes}
                  value={formData.type}
                  onSelect={(value) =>
                    setFormData({
                      ...formData,
                      type: value,
                    })
                  }
                />

                {/* TIMING */}
                <SelectorGroup
                  title="Daily Timing"
                  options={timingOptions}
                  value={formData.timing}
                  onSelect={(value) =>
                    setFormData({
                      ...formData,
                      timing: value,
                    })
                  }
                />

                <InputBox
                  icon={Clock3}
                  label="Custom Time"
                  name="customTime"
                  type="time"
                  value={formData.customTime}
                  onChange={handleChange}
                />

                <InputBox
                  icon={Bell}
                  label="Reminder Before"
                  name="reminder"
                  value={formData.reminder}
                  onChange={handleChange}
                />

                <InputBox
                  icon={CalendarDays}
                  label="Duration"
                  name="days"
                  value={formData.days}
                  onChange={handleChange}
                  placeholder="7 Days"
                />

                {/* NOTES */}
                <div className="md:col-span-2">

                  <label className="mb-4 block text-sm font-semibold text-gray-700">
                    Notes
                  </label>

                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Optional notes..."
                    className="w-full rounded-[28px] border border-gray-200 bg-gray-50 p-5 text-gray-800 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="border-t border-gray-100 px-8 py-6">

              <button
                onClick={handleSubmit}
                className="w-full rounded-[28px] bg-gradient-to-r from-blue-600 to-purple-600 py-5 text-base font-bold text-white shadow-xl transition hover:scale-[1.01]"
              >
                {editingMedicine
                  ? "Update Medicine"
                  : "Add Medicine"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const InputBox = ({
  icon: Icon,
  label,
  ...props
}) => {
  return (
    <div>

      <label className="mb-4 block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <div className="flex items-center gap-4 rounded-[24px] border border-gray-200 bg-gray-50 px-5 py-4">

        <Icon
          size={20}
          className="text-blue-600"
        />

        <input
          {...props}
          className="w-full bg-transparent text-gray-800 outline-none"
        />
      </div>
    </div>
  );
};

const SelectorGroup = ({
  title,
  options,
  value,
  onSelect,
}) => {
  return (
    <div>

      <label className="mb-4 block text-sm font-semibold text-gray-700">
        {title}
      </label>

      <div className="flex flex-wrap gap-3">

        {options.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() =>
              onSelect(item)
            }
            className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${
              value === item
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AddMedicineModal;