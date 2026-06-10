import { motion } from "framer-motion";
import {
  useState,
  useEffect,
} from "react";
import {
  Pill,
  Clock3,
  CheckCircle2,
  AlertCircle,
  Bell,
  SkipForward,
  Trash2,
  Pencil,
} from "lucide-react";
import {
  deleteMedicine as deleteMedicineAPI,
} from "../../services/medicineService";
import {
  updateMedicineStatus,
} from "../../services/medicineService";
import ConfirmModal from "../common/ConfirmModal";
const MedicineSchedule = ({
  medicines,
  setMedicines,
  setEditingMedicine,
  setOpenModal,
}) => {
  const [
  takeOpen,
  setTakeOpen,
] = useState(false);

const [
  selectedMedicineId,
  setSelectedMedicineId,
] = useState(null);

  // MARK AS TAKEN
  const markAsTaken =
(medicineId) => {

  setSelectedMedicineId(
    medicineId
  );

  setTakeOpen(true);
};
  const confirmTakeMedicine =
async () => {

  const updatedMedicine =
    await updateMedicineStatus(
      selectedMedicineId,
      {
        status: "Taken",
        lastTakenDate:
          new Date().toDateString(),
      }
    );

  setMedicines(
    medicines.map(
      (medicine) =>
        medicine._id ===
        selectedMedicineId
          ? updatedMedicine
          : medicine
    )
  );
};

  // MARK AS SKIPPED
  
  // DELETE MEDICINE
  const deleteMedicine =
  async (medicineId) => {

    try {

      await deleteMedicineAPI(
        medicineId
      );

      setMedicines(
        medicines.filter(
          (med) =>
            med._id !==
            medicineId
        )
      );

    } catch (error) {

    }
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="relative overflow-hidden rounded-[40px] border border-white/40 bg-white/60 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-3xl"
    >
      
      {/* GLOWS */}
      <div className="absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute bottom-[-100px] left-[-100px] h-[240px] w-[240px] rounded-full bg-purple-500/10 blur-3xl" />

      {/* HEADER */}
      <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        
        {/* LEFT */}
        <div>
          
          <div className="inline-flex items-center gap-2 rounded-2xl border border-blue-200/40 bg-blue-50/70 px-4 py-2 text-sm font-semibold text-blue-700 backdrop-blur-xl">
            
            <Bell size={16} />

            Smart Reminder Timeline
          </div>

          <h2 className="mt-6 text-4xl font-black text-gray-900">
            Today's Medicine Schedule
          </h2>

          <p className="mt-3 max-w-2xl text-gray-500">
            Manage your daily medicines, reminders,
            and dosage tracking with smart schedules.
          </p>
        </div>

        {/* STATUS */}
        <div className="flex items-center gap-3 rounded-2xl bg-green-100 px-5 py-4 text-green-700 shadow-sm">
          
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <span className="font-bold">
{
  medicines.filter(
    (medicine) =>
      medicine.status !==
      "Completed"
  ).length
}
Medicines Active          </span>
        </div>
      </div>

      {/* EMPTY STATE */}
      {medicines.length === 0 && (
        <div className="relative z-10 mt-14 rounded-[36px] border border-dashed border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 p-14 text-center">
          
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[30px] bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl">
            <Pill size={40} />
          </div>

          <h3 className="mt-8 text-3xl font-black text-gray-900">
            No Medicines Added
          </h3>

          <p className="mx-auto mt-4 max-w-lg text-gray-500">
            Add medicine reminders to start tracking
            schedules, reminders, skipped doses,
            and daily progress.
          </p>
        </div>
      )}

      {/* MEDICINE LIST */}
      <div className="relative z-10 mt-12 space-y-8">
        
        {medicines.map((medicine) => {

  const now =
    new Date();

  const currentMinutes =
    now.getHours() * 60 +
    now.getMinutes();

  const [
    medHour,
    medMinute,
  ] =
    medicine.customTime
      ?.split(":")
      .map(Number) || [0, 0];

  const medicineMinutes =
    medHour * 60 +
    medMinute;

  const canTakeMedicine =
    currentMinutes >=
    medicineMinutes;

  return (
          <motion.div
            key={medicine._id}
            whileHover={{
              y: -4,
              scale: 1.01,
            }}
            className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-gradient-to-r from-white/90 to-blue-50/60 p-6 shadow-lg transition-all duration-300 hover:shadow-[0_10px_40px_rgba(79,70,229,0.12)]"
          >
            
            {/* GLOW */}
            <div
              className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-r ${medicine.gradient} opacity-10 blur-3xl transition duration-500 group-hover:opacity-20`}
            />

            <div className="relative z-10 flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              
              {/* LEFT */}
              <div className="flex items-start gap-5">
                
                {/* ICON */}
                <div
                  className={`rounded-[28px] bg-gradient-to-r ${medicine.gradient} p-5 text-white shadow-xl`}
                >
                  <Pill size={28} />
                </div>

                {/* CONTENT */}
                <div>
                  
                  {/* TOP */}
                  <div className="flex flex-wrap items-center gap-3">
                    
                    <h3 className="text-2xl font-black text-gray-900">
                      {medicine.name}
                    </h3>

                    <div className="rounded-xl bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
                      Reminder Active
                    </div>
                  </div>

                  {/* DOSAGE */}
                  <p className="mt-3 text-base text-gray-600">
                    {medicine.dosage}
                  </p>

                  {/* EXTRA DETAILS */}
                  <p className="mt-2 text-sm text-gray-500">
{medicine.type} • {medicine.remainingDays} Days Remaining                  </p>

                  {/* TIMINGS */}
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    
                    {/* TIME */}
                    <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 shadow-sm">
                      
                      <Clock3
                        size={16}
                        className="text-blue-600"
                      />

                      <span className="text-sm font-semibold text-gray-700">
                        {medicine.customTime ||
                          medicine.timing}
                      </span>
                    </div>

                    {/* REMINDER */}
                    <div className="flex items-center gap-2 rounded-2xl bg-cyan-50 px-4 py-2 text-cyan-700 shadow-sm">
                      
                      <Bell size={16} />

                      <span className="text-sm font-semibold">
                        {medicine.reminder}
                      </span>
                    </div>

                    {/* STATUS */}
                    <div
                      className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-bold ${
                       medicine.status === "Completed"
  ? "bg-purple-100 text-purple-700"
  : medicine.status === "Taken"
  ? "bg-green-100 text-green-700"
  : medicine.status === "Skipped"
  ? "bg-yellow-100 text-yellow-700"
  : medicine.status === "Missed"
  ? "bg-red-100 text-red-700"
  : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      
                      {medicine.status ===
"Completed" ? (
  <CheckCircle2 size={16} />
) : medicine.status ===
"Taken" ? (
  <CheckCircle2 size={16} />
) : medicine.status ===
"Skipped" ? (
  <SkipForward size={16} />
) : (
  <AlertCircle size={16} />
)}

                      {medicine.status}
                    </div>
                  </div>

                  {/* NOTES */}
                  {medicine.notes && (
                    <div className="mt-5 rounded-2xl border border-blue-100 bg-white/70 p-4">
                      
                      <p className="text-sm leading-relaxed text-gray-600">
                        {medicine.notes}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col gap-4 xl:min-w-[240px]">
                
                {/* TAKEN */}
                <button
  disabled={
  !canTakeMedicine ||
  medicine.status ===
    "Taken" ||
  medicine.status ===
    "Completed"
}
  onClick={() =>
    markAsTaken(
      medicine._id
    )
  }
  className={`flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold text-white shadow-lg transition

  ${
    !canTakeMedicine ||
    medicine.status ===
      "Taken"
      ? "cursor-not-allowed bg-gray-400"
      : "bg-gradient-to-r from-green-500 to-emerald-500 hover:scale-[1.03]"
  }`}
>
  <CheckCircle2 size={18} />

  {medicine.status ===
"Completed"
  ? "Course Completed"
  : medicine.status ===
    "Taken"
  ? "Already Taken"
  : "Mark as Taken"}
</button>

                {/* SKIP */}
                

                {/* ACTIONS */}
                <div className="flex gap-3">
                  
                  {/* EDIT */}
                  <button disabled={
    medicine.status ===
    "Completed"
  }
                    onClick={() => {

                      setEditingMedicine(
                        medicine
                      );

                      setOpenModal(true);
                    }}
className={`flex flex-1 items-center justify-center gap-2 rounded-2xl bg-blue-100 px-4 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-200

  ${
    medicine.status ===
    "Completed"
      ? "cursor-not-allowed opacity-50"
      : ""
  }`}                  >
                    
                    <Pencil size={16} />

                    Edit
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={() =>
                      deleteMedicine(
                        medicine._id
                      )
                    }
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-red-100 px-4 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-200"
                  >
                    
                    <Trash2 size={16} />

                    Delete
                  </button>
                </div>
              </div>
            </div>
     
          </motion.div>
);
})}      </div>
       <ConfirmModal
  open={takeOpen}
  setOpen={setTakeOpen}
  title="Medicine Intake"
  message="Have you taken this medicine dose?"
  onConfirm={confirmTakeMedicine}
/>
    </motion.div>
  );
};

export default MedicineSchedule;