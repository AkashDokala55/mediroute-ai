import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

import TermsModal from "../../components/auth/TermsModal";

import {
  User,
  Mail,
  Phone,
  Lock,
  ArrowRight,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";

import {
  registerUser,
  sendSignupOtp,
  verifySignupOtp,
} from "../../services/authService";
const Signup = () => {
  const navigate = useNavigate();

  const [openTerms, setOpenTerms] =
    useState(false);

  const [loading, setLoading] =
    useState(false);
const [
  otpSent,
  setOtpSent,
] = useState(false);

const [
  otpVerified,
  setOtpVerified,
] = useState(false);

const [
  otp,
  setOtp,
] = useState("");

const [
  otpLoading,
  setOtpLoading,
] = useState(false);
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });

  const handleChange = (
    e
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };
const handleSendOtp =
  async () => {

    if (
      !formData.email
    ) {

      toast.error(
        "Enter email first"
      );

      return;
    }

    try {

      setOtpLoading(
        true
      );

      const data =
        await sendSignupOtp(
          formData.email
        );

      if (
        data.message ===
        "OTP sent successfully"
      ) {

        setOtpSent(
          true
        );

        toast.success(
          "OTP Sent"
        );

      } else {

        toast.error(
          data.message
        );

      }

    } catch {

      toast.error(
        "Failed to send OTP"
      );

    } finally {

      setOtpLoading(
        false
      );

    }
  };

const handleVerifyOtp =
  async () => {

    try {

      const data =
        await verifySignupOtp(
          formData.email,
          otp
        );

      if (
        data.message ===
        "OTP verified"
      ) {

        setOtpVerified(
          true
        );

        toast.success(
          "Email Verified"
        );

      } else {

        toast.error(
          data.message
        );

      }

    } catch {

      toast.error(
        "Verification failed"
      );

    }
  };
  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    const {
      name,
      email,
      password,
      confirmPassword,
    } = formData;

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      toast.error(
        "Please fill all required fields"
      );
      return;
    }

    if (
      password !==
      confirmPassword
    ) {
      toast.error(
        "Passwords do not match"
      );
      return;
    }
    if (
  !otpVerified
) {

  toast.error(
    "Please verify your email first"
  );

  return;

}

    try {
      setLoading(true);

      const data =
        await registerUser({
          name,
          email,
          password,
        });

      if (
        data.message ===
        "User registered successfully"
      ) {
        toast.success(
          "Account created successfully!"
        );

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        toast.error(
          data.message ||
            "Registration failed"
        );
      }
    } catch (error) {
      toast.error(
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    
      <AuthLayout
        title="Create Account"
        subtitle="Join MediRoute AI and simplify your healthcare journey."
      >
<Link
  to="/"
  className="mb-5 flex w-fit items-center gap-2 rounded-xl bg-blue-50 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-100"
>
  <ArrowLeft size={18} />
  Home
</Link>

        <form
          className="space-y-5"
          onSubmit={handleSubmit}
        >
          {/* FULL NAME */}
          <AuthInput
            icon={<User size={20} />}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />

          {/* EMAIL */}
          <div>

  <div className="flex gap-3">

    <div className="flex-1">

      <AuthInput
        icon={
          <Mail size={20} />
        }
        type="email"
        name="email"
        value={
          formData.email
        }
        onChange={
          handleChange
        }
        placeholder="Enter your email"
      />

    </div>

    <button
      type="button"
      onClick={
        handleSendOtp
      }
      disabled={
        otpVerified
      }
      className={`rounded-2xl px-4 font-semibold text-white ${
        otpVerified
          ? "bg-green-600"
          : "bg-blue-600"
      }`}
    >

      {otpVerified
        ? "Verified"
        : otpLoading
        ? "Sending..."
        : "Send OTP"}

    </button>

  </div>

  <p className="mt-2 text-xs text-gray-500">

    Use a valid email address.
    Password recovery and future
    notifications will be sent
    here.

  </p>

</div>
{otpSent &&
 !otpVerified && (

  <div className="flex gap-3">

    <div className="flex-1">

      <AuthInput
        icon={
          <ShieldCheck
            size={20}
          />
        }
        type="text"
        value={otp}
        onChange={(
          e
        ) =>
          setOtp(
            e.target
              .value
          )
        }
        placeholder="Enter OTP"
      />

    </div>

    <button
      type="button"
      onClick={
        handleVerifyOtp
      }
      className="rounded-2xl bg-green-600 px-4 font-semibold text-white"
    >

      Verify

    </button>

  </div>

)}
          {/* PHONE */}
          <AuthInput
            icon={<Phone size={20} />}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />

          {/* PASSWORD */}
          <AuthInput
            icon={<Lock size={20} />}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create password"
          />

          {/* CONFIRM PASSWORD */}
          <AuthInput
            icon={<Lock size={20} />}
            type="password"
            name="confirmPassword"
            value={
              formData.confirmPassword
            }
            onChange={handleChange}
            placeholder="Confirm password"
          />

          {/* TERMS */}
          <label className="flex items-start gap-3 pt-1 text-sm leading-relaxed text-gray-600">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-gray-300 accent-purple-600"
            />

            <span>
              I agree to the{" "}
              <button
                type="button"
                onClick={() =>
                  setOpenTerms(true)
                }
                className="font-semibold text-purple-600 hover:text-purple-700"
              >
                Terms & Conditions
              </button>

              {" "}and{" "}

              <button
                type="button"
                onClick={() =>
                  setOpenTerms(true)
                }
                className="font-semibold text-purple-600 hover:text-purple-700"
              >
                Privacy Policy
              </button>
            </span>
          </label>

          {/* SUBMIT */}
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            type="submit"
disabled={
  loading ||
  !otpVerified
}            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-base font-semibold text-white shadow-[0_10px_40px_rgba(124,58,237,0.35)] transition-all duration-300 disabled:opacity-70"
          >
            {loading
              ? "Creating..."
              : "Create Account"}

            <ArrowRight size={20} />
          </motion.button>

          {/* DIVIDER */}
          <div className="relative py-2">
            <div className="absolute left-0 top-1/2 h-[1px] w-full bg-gray-200" />

            <div className="relative mx-auto w-fit bg-white px-4 text-sm text-gray-400">
              OR
            </div>
          </div>

          {/* GOOGLE */}
          <motion.button
  whileHover={{
    scale: 1.02,
  }}
  whileTap={{
    scale: 0.98,
  }}
  type="button"
  onClick={() =>
    toast.error(
      "Google Sign-In is currently under deployment and will be available soon."
    )
  }

            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="h-5 w-5"
            />

            Continue with Google
          </motion.button>

          {/* LOGIN */}
          <p className="pt-4 text-center text-sm text-gray-500">
            Already have an account?{" "}

            <Link
              to="/login"
              className="font-semibold text-purple-600 transition hover:text-purple-700"
            >
              Login
            </Link>
          </p>
        </form>
      </AuthLayout>

      <TermsModal
        open={openTerms}
        setOpen={setOpenTerms}
      />
    </>
  );
};

export default Signup;