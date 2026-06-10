import {
  useState,
  useEffect,
} from "react";

import DashboardLayout
  from "../../components/dashboard/DashboardLayout";

import ExpiryHero
  from "../../components/dashboard/ExpiryHero";

import ExpiryInventory
  from "../../components/dashboard/ExpiryInventory";

import AddExpiryModal
  from "../../components/dashboard/AddExpiryModal";

import ExpiryInsights
  from "../../components/dashboard/ExpiryInsights";

import {
  getExpiryMedicines,
} from "../../services/expiryService";

import NearestExpiryCard
from "../../components/dashboard/NearestExpiryCard";

const MedicineExpiry = () => {

  const [
    medicines,
    setMedicines,
  ] = useState([]);

  const [
    openModal,
    setOpenModal,
  ] = useState(false);

  const [
    editingMedicine,
    setEditingMedicine,
  ] = useState(null);

  const [
    visibleCount,
    setVisibleCount,
  ] = useState(6);

  useEffect(() => {

    const loadData =
      async () => {

        try {

          const data =
            await getExpiryMedicines();

          setMedicines(
            Array.isArray(data)
              ? data
              : []
          );

        } catch (error) {

         
        }
      };

    loadData();

  }, []);

  const displayedMedicines =
    medicines.slice(
      0,
      visibleCount
    );

  return (
    <DashboardLayout>

      <div className="space-y-10">

        {/* HERO */}
        <ExpiryHero
          medicines={medicines}
          setOpenModal={
            setOpenModal
          }
        />

        {/* INSIGHTS */}
        <ExpiryInsights
  medicines={medicines}
/>

<NearestExpiryCard
  medicines={medicines}
/>

        {/* INVENTORY */}
        <ExpiryInventory
          medicines={
            displayedMedicines
          }
          setMedicines={
            setMedicines
          }
          setOpenModal={
            setOpenModal
          }
          setEditingMedicine={
            setEditingMedicine
          }
        />

        {/* VIEW MORE */}
        {medicines.length >
          visibleCount && (

          <div className="flex justify-center">

            <button
              onClick={() =>
                setVisibleCount(
                  visibleCount + 6
                )
              }
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-bold text-white shadow-xl transition hover:scale-[1.03]"
            >
              View More Medicines
            </button>

          </div>
        )}

        {/* MODAL */}
        <AddExpiryModal
          open={openModal}
          setOpen={
            setOpenModal
          }
          medicines={
            medicines
          }
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

      </div>

    </DashboardLayout>
  );
};

export default MedicineExpiry;