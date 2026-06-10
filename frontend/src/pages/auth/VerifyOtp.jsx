import {
  useState,
} from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import toast from "react-hot-toast";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";

import {
  verifyResetOtp,
} from "../../services/authService";

const VerifyOtp = () => {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const email =
    location.state?.email;

  const [
    otp,
    setOtp,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const data =
          await verifyResetOtp(
            email,
            otp
          );

        if (
          data.message ===
          "OTP verified"
        ) {

          toast.success(
            "OTP Verified"
          );

          navigate(
            "/reset-password",
            {
              state: {
                email,
                otp,
              },
            }
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
      } finally {

        setLoading(false);
      }
    };

  return (

    <AuthLayout
      title="Verify OTP"
      subtitle="Enter the OTP sent to your email"
    >

      <form
        onSubmit={
          handleSubmit
        }
        className="space-y-5"
      >

        <AuthInput
          icon={
            <ShieldCheck />
          }
          type="text"
          value={otp}
          onChange={(e) =>
            setOtp(
              e.target.value
            )
          }
          placeholder="Enter OTP"
        />

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 py-4 font-semibold text-white"
        >

          {loading
            ? "Verifying..."
            : "Verify OTP"}

          <ArrowRight
            size={18}
          />

        </button>

      </form>

    </AuthLayout>
  );
};

export default VerifyOtp;