import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import {
  X,
  User,
  Heart,
  Users,
} from "lucide-react";

import {
  updateProfile,
  getProfiles,
} from "../../../../services/profileService";

const EditProfileModal = ({
  open,
  setOpen,
  profile,
  setProfiles,
}) => {

  const [
    formData,
    setFormData,
  ] = useState({
    name: "",
    relation: "",
    age: "",
    bloodGroup: "",
  });

  useEffect(() => {

    if (profile) {

      setFormData({
        name:
          profile.name || "",

        relation:
          profile.relation || "",

        age:
          profile.age || "",

        bloodGroup:
          profile.bloodGroup || "",
      });
    }

  }, [profile]);

  const handleChange =
    (e) => {

      setFormData({
        ...formData,

        [e.target.name]:
          e.target.value,
      });
    };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      const {
        name,
        relation,
        age,
        bloodGroup,
      } = formData;

      if (
        !name ||
        !relation ||
        !age ||
        !bloodGroup
      ) {

        toast.error(
          "Please fill all fields"
        );

        return;
      }

      try {

        await updateProfile(
          profile._id,
          {
            ...formData,

            age:
              Number(age),
          }
        );

        const updatedProfiles =
          await getProfiles();

        setProfiles(
          updatedProfiles
        );

        toast.success(
          "Profile updated successfully"
        );

        setOpen(false);

      } catch (
        error
      ) {

        

        toast.error(
          "Failed to update profile"
        );
      }
    };

  if (!open)
    return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      <div className="w-full max-w-2xl rounded-[32px] bg-white p-8 shadow-2xl">

        {/* HEADER */}
        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-black text-slate-900">

              Edit Profile
            </h2>

            <p className="mt-2 text-slate-500">

              Update family member information.
            </p>
          </div>

          <button
            onClick={() =>
              setOpen(false)
            }
          >
            <X size={24} />
          </button>
        </div>

        {/* FORM */}
        <form
          onSubmit={
            handleSubmit
          }
          className="mt-8 space-y-5"
        >

          {/* NAME */}
          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">

              Name
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">

              <User
                size={18}
              />

              <input
                type="text"
                name="name"
                value={
                  formData.name
                }
                onChange={
                  handleChange
                }
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* RELATION */}
          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">

              Relation
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">

              <Users
                size={18}
              />

              <input
                type="text"
                name="relation"
                value={
                  formData.relation
                }
                onChange={
                  handleChange
                }
                className="w-full bg-transparent text-slate-900 black-600 outline-none"
              />
            </div>
          </div>

          {/* AGE */}
          <div>

            <label className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white">

              Age
            </label>

            <input
              type="number"
              name="age"
              value={
                formData.age
              }
              onChange={
                handleChange
              }
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none"
            />
          </div>

          {/* BLOOD GROUP */}
          <div>

            <label className="w-full bg-transparent text-slate-900 black-600 outline-none">

              Blood Group
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">

              <Heart
                size={18}
              />

              <input
                type="text"
                name="bloodGroup"
                value={
                  formData.bloodGroup
                }
                onChange={
                  handleChange
                }
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-4 pt-4">

            <button
  type="button"
  onClick={() =>
    setOpen(false)
  }
  className="rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
>
  Cancel
</button>

            <button
              type="submit"
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white"
            >
              Update Profile
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;