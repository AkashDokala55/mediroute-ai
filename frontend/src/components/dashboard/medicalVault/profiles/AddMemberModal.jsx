import {
  X,
  UserPlus,
  User,
  HeartPulse,
  Calendar,
 ShieldCheck,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useState,
} from "react";

import {
  getProfiles,
  createProfile,
} from "../../../../services/profileService";
import {
  removeProfile,
} from "../../../../services/profileService";
import toast from "react-hot-toast";
const AddMemberModal = ({
  open,
  setOpen,
  setProfiles,
}) => {

  // ============================================
  // STATES
  // ============================================

  const [
    formData,
    setFormData,
  ] = useState({
    name: "",
    relation: "",
    age: "",
    bloodGroup: "",
  });

  const [
    loading,
    setLoading,
  ] = useState(false);

  // ============================================
  // HANDLE CHANGE
  // ============================================

  const handleChange = (
    e
  ) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // ============================================
  // HANDLE SUBMIT
  // ============================================

  const handleSubmit =
    async () => {

      if (
        !formData.name ||
        !formData.relation ||
        !formData.age ||
        !formData.bloodGroup
      ) {

        toast.error(
  "Please fill all fields"
);

        return;
      }

      try {

        setLoading(true);

        // SAVE PROFILE
        await createProfile({
  ...formData,
  age:
    Number(
      formData.age
    ),
});

        // GET UPDATED PROFILES
        const updatedProfiles =
  await getProfiles();

        // UPDATE STATE
        setProfiles(
          updatedProfiles
        );

        // RESET FORM
        setFormData({
          name: "",
          relation: "",
          age: "",
          bloodGroup: "",
        });

        // CLOSE
        toast.success(
  "Family member added successfully"
);
        setOpen(false);

      } catch (error) {

        
      } finally {

        setLoading(false);
      }
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
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
        >

          {/* MODAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              y: 20,
            }}
            transition={{
              duration: 0.28,
            }}
            className="relative w-full max-w-3xl overflow-hidden rounded-[40px] border border-white/20 bg-white p-8 shadow-[0_30px_120px_rgba(15,23,42,0.35)]"
          >

            {/* CLOSE */}
            <button
              onClick={() =>
                setOpen(false)
              }
              className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition hover:bg-red-100 hover:text-red-500"
            >

              <X size={22} />
            </button>

            {/* HEADER */}
            <div>

              {/* TAG */}
              <div className="inline-flex items-center gap-2 rounded-2xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">

                <UserPlus size={16} />

                Family Healthcare Profiles
              </div>

              {/* TITLE */}
              <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900">

                Add Family Member
              </h1>

              {/* DESC */}
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-500">

                Create healthcare profiles
                for family members to manage
                medical records and emergency access.

              </p>
            </div>

            {/* FORM */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">

              {/* NAME */}
              <div>

                <label className="text-sm font-bold text-slate-700">

                  Full Name
                </label>

                <div className="mt-3 flex items-center gap-4 rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4">

                  <User
                    size={22}
                    className="text-blue-600"
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
                    placeholder="Enter member name"
                    className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* RELATION */}
              <div>

                <label className="text-sm font-bold text-slate-700">

                  Relation
                </label>

                <div className="mt-3 flex items-center gap-4 rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4">

                  <ShieldCheck
                    size={22}
                    className="text-cyan-600"
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
                    placeholder="Father / Mother / Child"
                    className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* AGE */}
              <div>

                <label className="text-sm font-bold text-slate-700">

                  Age
                </label>

                <div className="mt-3 flex items-center gap-4 rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4">

                  <Calendar
                    size={22}
                    className="text-orange-500"
                  />

                  <input
                    type="number"
                    name="age"
                    value={
                      formData.age
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter age"
                    className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* BLOOD */}
              <div>

                <label className="text-sm font-bold text-slate-700">

                  Blood Group
                </label>

                <div className="mt-3 flex items-center gap-4 rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4">

                  <HeartPulse
                    size={22}
                    className="text-red-500"
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
                    placeholder="O+ / A+ / B+"
                    className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* SECURITY */}
            <div className="mt-10 rounded-[30px] border border-green-100 bg-green-50 p-6">

              <div className="flex items-start gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-green-100 text-green-600">

                  <ShieldCheck size={30} />
                </div>

                <div>

                  <h3 className="text-2xl font-black text-green-800">

                    Secure Family Healthcare Profiles
                  </h3>

                  <p className="mt-3 leading-8 text-green-700">

                    Family members get secure
                    healthcare storage and
                    emergency healthcare access.

                  </p>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-10 flex flex-wrap justify-end gap-4">

              {/* CANCEL */}
              <button
                onClick={() =>
                  setOpen(false)
                }
                className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >

                Cancel
              </button>

              {/* ADD */}
              <button
                onClick={
                  handleSubmit
                }
                disabled={loading}
                className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-sm font-bold text-white shadow-[0_10px_40px_rgba(37,99,235,0.25)] transition-all duration-300 hover:scale-[1.02]"
              >

                {loading
                  ? "Adding..."
                  : "Add Family Member"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddMemberModal;