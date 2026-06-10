import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

import {
  Mail,
  Lock,
  ArrowRight,
   ArrowLeft,
} from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";

import { loginUser } from "../../services/authService";

const Login = () => {

  const navigate =
    useNavigate();

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    formData,
    setFormData,
  ] = useState({
    email: "",
    password: "",
  });

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
        email,
        password,
      } = formData;

      if (
        !email ||
        !password
      ) {

        toast.error(
          "Please fill all fields"
        );

        return;
      }

      try {

        setLoading(true);

        const data =
          await loginUser(
            formData
          );

        if (
          data.token
        ) {

          localStorage.setItem(
            "token",
            data.token
          );

          localStorage.setItem(
            "user",
            JSON.stringify(
              data.user
            )
          );

          toast.success(
            "Login Successful"
          );

          setTimeout(
            () => {

              navigate(
                "/dashboard"
              );
            },
            1000
          );

        } else {

          toast.error(
            data.message ||
            "Login failed"
          );
        }

      } catch (
        error
      ) {

        toast.error(
          "Something went wrong"
        );
      } finally {

        setLoading(
          false
        );
      }
    };

  return (
    
    <AuthLayout
    
      title="Welcome Back"
      
      subtitle="Login to continue managing your healthcare journey securely."
    >
      
      
<div className="absolute left-6 top-6 z-50">

  

</div>
      {/* FORM */}
      <form
        className="space-y-5"
        onSubmit={
          handleSubmit
        }
      >

        {/* EMAIL */}
        <AuthInput
          icon={
            <Mail
              size={20}
            />
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

        {/* PASSWORD */}
        <AuthInput
          icon={
            <Lock
              size={20}
            />
          }
          type="password"
          name="password"
          value={
            formData.password
          }
          onChange={
            handleChange
          }
          placeholder="Enter your password"
        />

        {/* OPTIONS */}
        <div className="flex items-center justify-between pt-1">

          {/* REMEMBER */}
          <label className="flex items-center gap-2 text-sm text-gray-600">

            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 accent-purple-600"
            />

            Remember me

          </label>

          {/* FORGOT */}
          <Link
  to="/forgot-password"
  className="text-sm font-medium text-purple-600 transition hover:text-purple-700"
>
  Forgot Password?
</Link>

        </div>

        {/* LOGIN BUTTON */}
        <motion.button
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          type="submit"
          disabled={
            loading
          }
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-base font-semibold text-white shadow-[0_10px_40px_rgba(124,58,237,0.35)] transition-all duration-300 disabled:opacity-70"
        >

          {
            loading
              ? "Logging in..."
              : "Login"
          }

          <ArrowRight
            size={20}
          />

        </motion.button>

        {/* DIVIDER */}
        <div className="relative py-2">

          <div className="absolute left-0 top-1/2 h-[1px] w-full bg-gray-200" />

          <div className="relative mx-auto w-fit bg-white px-4 text-sm text-gray-400">

            OR

          </div>

        </div>

        {/* GOOGLE BUTTON */}
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

        {/* SIGNUP */}
        <p className="pt-4 text-center text-sm text-gray-500">

          Don’t have an account?{" "}

          <Link
            to="/signup"
            className="font-semibold text-purple-600 transition hover:text-purple-700"
          >
            Create Account
          </Link>

        </p>

      </form>

    </AuthLayout>
  );
};

export default Login;