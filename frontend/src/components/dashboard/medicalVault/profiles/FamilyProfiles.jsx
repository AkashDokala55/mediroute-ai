import {
  Plus,
  Users,
} from "lucide-react";

import {
  useState,
} from "react";

import FamilyProfileCard from "./FamilyProfileCard";
import AddMemberModal from "./AddMemberModal";
import toast from "react-hot-toast";
import ConfirmModal from "../../../common/ConfirmModal";
import {
  removeProfile,
  getProfiles,
} from "../../../../services/profileService";
import EditProfileModal from "../profiles/EditProfileModal"
const FamilyProfiles = ({
  profiles,
  setProfiles,
  reports,
  selectedProfile,
  setSelectedProfile,
}) => {
const [
  openEditModal,
  setOpenEditModal,
] = useState(false);

const [
  profileToEdit,
  setProfileToEdit,
] = useState(null);
  const [
    openModal,
    setOpenModal,
  ] = useState(false);
  const [
  openConfirm,
  setOpenConfirm,
] = useState(false);

const [
  profileToDelete,
  setProfileToDelete,
] = useState(null);

  // ============================================
  // DELETE PROFILE
  // ============================================
const handleEditProfile =
  (profile) => {

    setProfileToEdit(
      profile
    );

    setOpenEditModal(
      true
    );
  };
const handleDeleteProfile =
  (
    profile
  ) => {

    if (
      profiles.length === 1
    ) {

      toast.error(
        "At least one profile must exist."
      );

      return;
    }

    setProfileToDelete(
      profile
    );

    setOpenConfirm(
      true
    );
  };
const confirmDeleteProfile =
  async () => {

    if (
      !profileToDelete
    )
      return;

    try {

      await removeProfile(
        profileToDelete._id
      );

      const updatedProfiles =
        await getProfiles();

      setProfiles(
        updatedProfiles
      );

      toast.success(
        "Profile deleted"
      );

      if (
        selectedProfile ===
        profileToDelete.name
      ) {

        setSelectedProfile(
          updatedProfiles[0]
            ?.name || ""
        );
      }

      setProfileToDelete(
        null
      );

    } catch (
      error
    ) {

      toast.error(
        "Failed to delete profile"
      );

      
    }
  };
  return (
    <>
      <div>

        {/* HEADER */}
        <div className="flex flex-wrap items-center justify-between gap-5">

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">

                <Users size={28} />
              </div>

              <div>

                <h2 className="text-4xl font-black tracking-tight text-slate-900">

                  Family Health Profiles
                </h2>

                <p className="mt-2 text-slate-500">

                  Manage healthcare records
                  for all family members.

                </p>
              </div>
            </div>
          </div>

          {/* ADD BUTTON */}
          <button
            onClick={() =>
              setOpenModal(true)
            }
            className="flex items-center gap-3 rounded-[24px] bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-sm font-bold text-white shadow-[0_10px_40px_rgba(37,99,235,0.25)] transition-all duration-300 hover:scale-[1.02]"
          >

            <Plus size={20} />

            Add Family Member
          </button>
        </div>

        {/* GRID */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {profiles.map(
            (
              profile
            ) => (

              <FamilyProfileCard
  key={profile._id}
  profile={{
    ...profile,

    records:
      reports.filter(
        report =>
          report.profileId?.name ===
          profile.name
      ).length,
  }}
  active={
    selectedProfile ===
    profile.name
  }
  onClick={() =>
    setSelectedProfile(
      profile.name
    )
  }
  onDelete={
    handleDeleteProfile
  }
  onEdit={
    handleEditProfile
  }
/>
            )
          )}
        </div>
      </div>

      {/* ADD MEMBER MODAL */}
      <AddMemberModal
        open={openModal}
        setOpen={setOpenModal}
        profiles={profiles}
        setProfiles={
          setProfiles
        }
      />
      <ConfirmModal
  open={openConfirm}
  setOpen={setOpenConfirm}
  title="Delete Profile"
  message={`Are you sure you want to delete ${profileToDelete?.name || ""}?`}
  onConfirm={
    confirmDeleteProfile
  }
  confirmText="Delete"
  confirmColor="bg-red-600"
/>
<EditProfileModal
  open={openEditModal}
  setOpen={
    setOpenEditModal
  }
  profile={
    profileToEdit
  }
  setProfiles={
    setProfiles
  }
/>
    </>
  );
};

export default FamilyProfiles;