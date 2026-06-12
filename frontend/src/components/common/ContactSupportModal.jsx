import {
useState,
} from "react";

import {
X,
Send,
CheckCircle,
Headphones,
User,
Mail,
MessageSquare,
} from "lucide-react";

import {
submitSupportRequest,
} from "../../services/supportService";
import { useLocation } from "react-router-dom";
const ContactSupportModal = ({
open,
setOpen,
}) => {

const user =
JSON.parse(
localStorage.getItem(
"user"
)
);
const location = useLocation();

const dashboardRoutes = [
  "/dashboard",
  "/medicalVault",
  "/medicine-tracker",
  "/scheme-checker",
  "/emergency-qr",
  "/medicine-expiry",
  "/settings",
];

const isDashboardPage =
  dashboardRoutes.some(
    (route) =>
      location.pathname.startsWith(route)
  );
const [
loading,
setLoading,
] = useState(false);

const [
success,
setSuccess,
] = useState(null);

const [formData, setFormData] =
useState({
  name:
    isDashboardPage
      ? user?.name || ""
      : "",

  email:
    isDashboardPage
      ? user?.email || ""
      : "",

  subject: "",
  message: "",
});
if (!open)
return null;

const resetForm =
() => {


  setSuccess(null);

  setFormData({
  name:
    isDashboardPage
      ? user?.name || ""
      : "",

  email:
    isDashboardPage
      ? user?.email || ""
      : "",

  subject: "",
  message: "",
}); 
};


const handleSubmit =
async (e) => {


  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.subject ||
    !formData.message
  ) {

    return;
  }

  try {

    setLoading(true);

    const data =
      await submitSupportRequest(
        formData
      );

    setSuccess(
      data.ticketId
    );

  } catch (
    error
  ) {

    

  } finally {

    setLoading(false);
  }
};

return (

<div className="
fixed inset-0
z-[100]
flex items-center justify-center
bg-black/50
p-4
lg:pl-[280px]
">

  <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[32px] border border-white/20 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.15)]">

    {/* HEADER */}
    <div className="flex items-center justify-between border-b p-6">

      <div className="flex items-center gap-3">

        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-3 text-white">

          <Headphones size={22} />

        </div>

        <div>

          <h2 className="text-2xl font-black text-gray-900">
            MediRoute AI Support
          </h2>

          <p className="text-sm text-gray-500">
            We usually respond within 24 hours
          </p>

        </div>

      </div>

      <button
        onClick={() => {

          setOpen(false);
          resetForm();

        }}
        className="rounded-xl p-2 text-gray-700 transition hover:bg-gray-100"
      >

        <X size={22} />

      </button>

    </div>

    {!success ? (

      <form
        onSubmit={
          handleSubmit
        }
        className="space-y-4 p-6"
      >

        <div className="relative">

          <User
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Full Name"
            value={
              formData.name
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                name:
                  e.target
                    .value,
              })
            }
            className="w-full rounded-2xl border border-gray-200 py-3 pl-11 pr-4 outline-none focus:border-blue-500 text-black"
          />

        </div>

        <div className="relative">

          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={
              formData.email
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                email:
                  e.target
                    .value,
              })
            }
            className="w-full rounded-2xl border border-gray-200 py-3 pl-11 pr-4 outline-none focus:border-blue-500 text-black"
          />

        </div>

        <div className="relative">

          <MessageSquare
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Subject"
            value={
              formData.subject
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                subject:
                  e.target
                    .value,
              })
            }
            className="w-full rounded-2xl border border-gray-200 py-3 pl-11 pr-4 outline-none focus:border-blue-500 text-black"
          />

        </div>

        <textarea
          rows="5"
          placeholder="Describe your issue or suggestion..."
          value={
            formData.message
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              message:
                e.target
                  .value,
            })
          }
          className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-blue-500 text-black"
        />

        <div className="rounded-2xl bg-blue-50 p-4 text-sm text-gray-600">

          <p className="font-semibold">
            Response Time
          </p>

          <p className="mt-1">
            Most requests receive a response within 24 hours.
          </p>

        </div>

        <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-4 text-sm text-gray-600">

          <p className="font-semibold">
            Support Information
          </p>

          <p className="mt-2">
            Every request receives a unique ticket ID.
            Updates and responses will be sent to your registered email address.
          </p>

        </div>

        <button
          type="submit"
          disabled={
            loading
          }
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 py-4 font-semibold text-white transition hover:scale-[1.01]"
        >

          <Send
            size={18}
          />

          {loading
            ? "Submitting..."
            : "Submit Request"}

        </button>

      </form>

    ) : (

      <div className="p-8 text-center">

        <CheckCircle
          size={70}
          className="mx-auto text-green-600"
        />

        <h3 className="mt-4 text-2xl font-bold text-gray-900">

          Request Submitted Successfully

        </h3>

        <p className="mt-4 text-gray-600">

          Ticket ID

        </p>

        <p className="mt-2 text-2xl font-black text-blue-600">

          {success}

        </p>

        <p className="mt-5 text-gray-500">

          Thank you for contacting
          MediRoute AI.

          <br />

          A response will be sent to your registered email address within 24 hours.

        </p>

        <div className="mt-8 flex gap-3">

          <button
            onClick={() => {

              resetForm();

            }}
            className="flex-1 rounded-2xl bg-gray-100 py-3 font-semibold text-gray-700 hover:bg-gray-200"
          >
            Submit Another
          </button>

          <button
            onClick={() => {

              setOpen(false);
              resetForm();

            }}
            className="flex-1 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white"
          >
            Close
          </button>

        </div>

      </div>

    )}

  </div>

</div>


);
};

export default ContactSupportModal;
