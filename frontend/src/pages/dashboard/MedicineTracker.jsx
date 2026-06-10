import { motion } from "framer-motion";

import {
  useState,
  useEffect,
  useRef,
} from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import MedicineHero from "../../components/dashboard/MedicineHero";

import MedicineSchedule from "../../components/dashboard/MedicineSchedule";

import MedicineProgress from "../../components/dashboard/MedicineProgress";

import AddMedicineModal from "../../components/dashboard/AddMedicineModal";

import useMedicineNotifications from "../../hooks/useMedicineNotifications";

import {

  getMedicines,

} from "../../services/medicineService";
import {
  updateMedicineStatus,
} from "../../services/medicineService";

const MedicineTracker = () => {

  const [openModal, setOpenModal] =
    useState(false);

  const [
    editingMedicine,
    setEditingMedicine,
  ] = useState(null);

  const [
  medicines,
  setMedicines,
] = useState([]);
const scheduleRef = useRef(null);

  // NOTIFICATIONS
  useMedicineNotifications(
    medicines
  );

  // SAVE STORAGE
  useEffect(() => {

  const loadMedicines =
    async () => {

      try {

        const data =
          await getMedicines();


        const today =
  new Date().toDateString();



const resetMedicines =
  data.map(
    (medicine) => {

      const elapsedDays =
        Math.floor(
          (
            new Date() -
            new Date(
              medicine.startDate
            )
          ) /
          (
            1000 *
            60 *
            60 *
            24
          )
        );

      const totalDays =
  parseInt(
    medicine.days
  ) || 0;

const remainingDays =
  Math.max(
    totalDays -
      elapsedDays,
    0
  );

medicine.remainingDays =
  remainingDays;

if (
  remainingDays === 0
) {

  medicine.status =
    "Completed";
}
      if (
  medicine.status ===
    "Taken" &&
  medicine.lastTakenDate !==
    today &&
  remainingDays > 0
) {

        return {
          ...medicine,
          status: "Upcoming",
        };
      }

      return medicine;
    }
  );

setMedicines(
  resetMedicines
);

      } catch (error) {

       
      }
    };

  loadMedicines();

}, []);

  // AUTO MISSED
  useEffect(() => {

    const checkMissedMedicines =
      () => {

        const now = new Date();

        const currentHours =
          now.getHours();

        const currentMinutes =
          now.getMinutes();

        const updatedMedicines =
          medicines.map(
            (medicine) => {

              if (
  medicine.status ===
    "Taken" ||
  medicine.status ===
    "Skipped" ||
  medicine.status ===
    "Missed" ||
  medicine.status ===
    "Completed"
) {
                return medicine;
              }

              if (
                medicine.customTime
              ) {

                const [
                  medHours,
                  medMinutes,
                ] =
                  medicine.customTime
                    .split(":")
                    .map(Number);

                const currentTotal =
                  currentHours * 60 +
                  currentMinutes;

                const medicineTotal =
                  medHours * 60 +
                  medMinutes;

                if (
  currentTotal >
  medicineTotal + 30
) {
  if (
    medicine.status ===
    "Upcoming"
  ) {

    updateMedicineStatus(
      medicine._id,
      "Missed"
    );

    return {
      ...medicine,
      status: "Missed",
    };
  }
}
              }

              return medicine;
            }
          );

        const changed =
          JSON.stringify(
            updatedMedicines
          ) !==
          JSON.stringify(
            medicines
          );

        if (changed) {
          setMedicines(
            updatedMedicines
          );
        }
      };

    checkMissedMedicines();

    const interval =
      setInterval(
        checkMissedMedicines,
        60000
      );

    return () =>
      clearInterval(interval);

  }, [medicines]);

  return (
    <DashboardLayout>

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
        className="space-y-10"
      >

        <MedicineHero
  setOpenModal={setOpenModal}
  medicines={medicines}
  scheduleRef={scheduleRef}
/>

        <div ref={scheduleRef}>
  <MedicineSchedule
    medicines={medicines}
    setMedicines={setMedicines}
    setEditingMedicine={setEditingMedicine}
    setOpenModal={setOpenModal}
  />
</div>

        <MedicineProgress
          medicines={medicines}
        />

        <AddMedicineModal
          open={openModal}
          setOpen={setOpenModal}
          medicines={medicines}
          setMedicines={
            setMedicines
          }
          editingMedicine={
            editingMedicine
          }
          setEditingMedicine={
            setEditingMedicine
          }
        />

      </motion.div>
    </DashboardLayout>
  );
};

export default MedicineTracker;