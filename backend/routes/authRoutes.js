const express =
  require("express");

const router =
  express.Router();

const {
  registerUser,
  loginUser,
  sendResetOtp,
  verifyResetOtp,
  resetPassword,
  sendSignupOtp,
  verifySignupOtp,
} = require(
  "../controllers/authController"
);
const authMiddleware =
  require(
    "../middleware/authMiddleware"
  );

router.get(
  "/me",
  authMiddleware,
  (req, res) => {

    res.json({
      userId:
        req.user.id,
    });
  }
);
router.post(
  "/register",
  registerUser
);
router.post(
  "/signup/send-otp",
  sendSignupOtp
);

router.post(
  "/signup/verify-otp",
  verifySignupOtp
);
router.post(
  "/login",
  loginUser
);
router.post(
  "/forgot-password",
  sendResetOtp
);

router.post(
  "/verify-otp",
  verifyResetOtp
);

router.post(
  "/reset-password",
  resetPassword
);
router.get("/test", (req, res) => {
  res.json({
    status: "Backend Working",
  });
});

router.get("/env-test", (req, res) => {
  res.json({
    brevoUser: process.env.BREVO_USER,
    hasBrevoPass: !!process.env.BREVO_PASS,
    senderEmail: process.env.SENDER_EMAIL,
  });
});

module.exports =
  router;