const API =
  "https://mediroute-ai-gvqi.onrender.com/api/auth";

export const registerUser =
  async (userData) => {

    const response =
      await fetch(
        `${API}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body:
            JSON.stringify(
              userData
            ),
        }
      );

    return response.json();
  };

export const loginUser =
  async (userData) => {

    const response =
      await fetch(
        `${API}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body:
            JSON.stringify(
              userData
            ),
        }
      );

    return response.json();
  };

export const sendResetOtp =
  async (email) => {

    const response =
      await fetch(
        `${API}/forgot-password`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body:
            JSON.stringify({
              email,
            }),
        }
      );

    return response.json();
  };

export const verifyResetOtp =
  async (
    email,
    otp
  ) => {

    const response =
      await fetch(
        `${API}/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body:
            JSON.stringify({
              email,
              otp,
            }),
        }
      );

    return response.json();
  };

export const resetPassword =
  async (
    email,
    otp,
    password
  ) => {

    const response =
      await fetch(
        `${API}/reset-password`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body:
            JSON.stringify({
              email,
              otp,
              password,
            }),
        }
      );

    return response.json();
  };
  export const sendSignupOtp =
  async (email) => {

    const response =
      await fetch(
        `${API}/signup/send-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body:
            JSON.stringify({
              email,
            }),
        }
      );

    return response.json();
  };
  export const verifySignupOtp =
  async (
    email,
    otp
  ) => {

    const response =
      await fetch(
        `${API}/signup/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body:
            JSON.stringify({
              email,
              otp,
            }),
        }
      );

    return response.json();
  };