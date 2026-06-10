import {
  X,
  UserPlus,
  User,
  HeartPulse,
  Calendar,
  Phone,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useState,
} from "react";

import toast from "react-hot-toast";

import {
  createEmergencyCard,
  getEmergencyCards,
} from "../../services/emergencyService";

const AddEmergencyCardModal = ({
  open,
  setOpen,
  setEmergencyCards,
  setSelectedCard,
}) => {

  const [
    formData,
    setFormData,
  ] = useState({

    fullName: "",

    age: "",

    bloodGroup: "",

    emergencyContact: "",

    address: "",
  });

  const [
    loading,
    setLoading,
  ] = useState(false);

  const handleChange = (
    e
  ) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async () => {

      if (

        !formData.fullName ||

        !formData.age ||

        !formData.bloodGroup ||

        !formData.emergencyContact

      ) {

        toast.error(
          "Please fill all required fields"
        );

        return;
      }

      try {

        setLoading(true);

        await createEmergencyCard({

          ...formData,

          age:
            Number(
              formData.age
            ),
        });

        const updatedCards =
          await getEmergencyCards();

        setEmergencyCards(
          updatedCards
        );
if (
  updatedCards.length > 0
) {
  setSelectedCard(
    updatedCards[
      updatedCards.length - 1
    ]
  );
}
        setFormData({

          fullName: "",

          age: "",

          bloodGroup: "",

          emergencyContact: "",

          address: "",
        });

        toast.success(
          "Emergency card created successfully"
        );

        setOpen(false);

      } catch (error) {

  

  toast.error(
    error?.response?.data?.message ||
    "Failed to create emergency card"
  );

}

 finally {

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
className="
fixed inset-0 z-[999]
flex items-center justify-center
bg-black/60 p-4 backdrop-blur-md
lg:pl-[280px]
"        >

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
className="relative w-full max-w-2xl overflow-hidden rounded-[32px] bg-white p-6 shadow-[0_30px_120px_rgba(15,23,42,0.35)]"          >

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

              <div className="inline-flex items-center gap-2 rounded-2xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">

                <UserPlus size={16} />

                Emergency Healthcare Access

              </div>

<h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900">
                Create Emergency Card

              </h1>

<p className="mt-2 text-sm text-slate-500">
                Create an emergency healthcare profile
                for instant hospital access during
                emergencies.

              </p>

            </div>

            {/* FORM */}
<div className="mt-6 grid gap-4 md:grid-cols-2">
              {/* FULL NAME */}
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
                    name="fullName"
                    value={
                      formData.fullName
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter full name"
                    className="w-full bg-transparent text-black outline-none"
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
                    className="w-full bg-transparent text-black outline-none"
                  />

                </div>

              </div>

              {/* BLOOD GROUP */}
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
                    className="w-full bg-transparent text-black outline-none"
                  />

                </div>

              </div>

              {/* CONTACT */}
              <div>

                <label className="text-sm font-bold text-slate-700">

                  Emergency Contact

                </label>

                <div className="mt-3 flex items-center gap-4 rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4">

                  <Phone
                    size={22}
                    className="text-green-500"
                  />

                  <input
                    type="text"
                    name="emergencyContact"
                    value={
                      formData.emergencyContact
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter contact number"
                    className="w-full bg-transparent text-black outline-none"
                  />

                </div>

              </div>

              {/* ADDRESS */}
              <div className="md:col-span-2">

                <label className="text-sm font-bold text-slate-700">

                  Address

                </label>

                <div className="mt-3 flex items-center gap-4 rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4">

                  <MapPin
                    size={22}
                    className="text-purple-500"
                  />

                  <input
                    type="text"
                    name="address"
                    value={
                      formData.address
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter address"
                    className="w-full bg-transparent text-black outline-none"
                  />

                </div>

              </div>

            </div>

            {/* SECURITY */}
<div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-4">
              <div className="flex items-start gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-green-100 text-green-600">

                  <ShieldCheck size={30} />

                </div>

                <div>

                  <h3 className="text-2xl font-black text-green-800">

                    Emergency Healthcare Access

                  </h3>

                  <p className="mt-3 leading-8 text-green-700">

                    Hospitals and emergency responders
                    can instantly access your critical
                    healthcare information.

                  </p>

                </div>

              </div>

            </div>

            {/* ACTIONS */}
            <div className="mt-10 flex justify-end gap-4">

              <button
                onClick={() =>
                  setOpen(false)
                }
                className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-700"
              >

                Cancel

              </button>

              <button
                onClick={
                  handleSubmit
                }
                disabled={loading}
                className="rounded-2xl bg-gradient-to-r from-red-600 to-pink-500 px-8 py-4 text-sm font-bold text-white"
              >

                {loading
                  ? "Creating..."
                  : "Create Emergency Card"}

              </button>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
};

export default AddEmergencyCardModal;