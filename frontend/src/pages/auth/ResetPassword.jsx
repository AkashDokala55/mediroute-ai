import {
  useState,
} from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  Lock,
  ArrowRight,
} from "lucide-react";

import toast from "react-hot-toast";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";

import {
  resetPassword,
} from "../../services/authService";

const ResetPassword =
  () => {

    const navigate =
      useNavigate();

    const location =
      useLocation();

    const email =
      location.state?.email;

    const otp =
      location.state?.otp;

    const [
      password,
      setPassword,
    ] = useState("");

    const [
      confirmPassword,
      setConfirmPassword,
    ] = useState("");

    const [
      loading,
      setLoading,
    ] = useState(false);

    const handleSubmit =
      async (e) => {

        e.preventDefault();

        if (
          password !==
          confirmPassword
        ) {

          return toast.error(
            "Passwords do not match"
          );
        }

        try {

          setLoading(
            true
          );

          const data =
            await resetPassword(
              email,
              otp,
              password
            );

          if (
            data.message ===
            "Password updated successfully"
          ) {

            toast.success(
              "Password Updated"
            );

            navigate(
              "/login"
            );

          } else {

            toast.error(
              data.message
            );
          }

        } catch {

          toast.error(
            "Reset failed"
          );
        } finally {

          setLoading(
            false
          );
        }
      };

    return (

      <AuthLayout
        title="Reset Password"
        subtitle="Create a new password"
      >

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-5"
        >

          <AuthInput
            icon={
              <Lock />
            }
            type="password"
            value={
              password
            }
            onChange={(e) =>
              setPassword(
                e.target
                  .value
              )
            }
            placeholder="New Password"
          />

          <AuthInput
            icon={
              <Lock />
            }
            type="password"
            value={
              confirmPassword
            }
            onChange={(e) =>
              setConfirmPassword(
                e.target
                  .value
              )
            }
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 py-4 font-semibold text-white"
          >

            {loading
              ? "Updating..."
              : "Update Password"}

            <ArrowRight
              size={18}
            />

          </button>

        </form>

      </AuthLayout>
    );
};

export default ResetPassword;