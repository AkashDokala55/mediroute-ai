import {
  useState,
} from "react";

import {
  Mail,
  ArrowRight,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";

import {
  sendResetOtp,
} from "../../services/authService";

const ForgotPassword =
  () => {

    const navigate =
      useNavigate();

    const [
      email,
      setEmail,
    ] = useState("");

    const [
      loading,
      setLoading,
    ] = useState(false);

    const handleSubmit =
      async (e) => {

        e.preventDefault();

        try {

          setLoading(
            true
          );

          const data =
            await sendResetOtp(
              email
            );

          if (
            data.message
          ) {

            toast.success(
              "OTP Sent"
            );

            navigate(
              "/verify-otp",
              {
                state: {
                  email,
                },
              }
            );
          }

        } catch {

          toast.error(
            "Failed to send OTP"
          );
        } finally {

          setLoading(
            false
          );
        }
      };

    return (

      <AuthLayout
        title="Forgot Password"
        subtitle="Enter your registered email"
      >

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-5"
        >

          <AuthInput
            icon={
              <Mail />
            }
            type="email"
            value={email}
            onChange={(
              e
            ) =>
              setEmail(
                e.target
                  .value
              )
            }
            placeholder="Email"
          />

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 py-4 font-semibold text-white"
          >

            {loading
              ? "Sending..."
              : "Send OTP"}

            <ArrowRight
              size={18}
            />

          </button>

        </form>

      </AuthLayout>
    );
};

export default
  ForgotPassword;