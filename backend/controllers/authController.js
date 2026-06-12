const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// REGISTER USER
const nodemailer =
  require("nodemailer");
const registerUser = async (
  req,
  res
) => {

  try {

    const {
      name,
      email,
      password,
    } = req.body;

    // CHECK FIELDS

    if (
      !name ||
      !email ||
      !password
    ) {

      return res
        .status(400)
        .json({
          message:
            "All fields are required",
        });
    }
   
    // EXISTING USER

    const existingUser =
      await User.findOne({
        email,
      });

    if (
      existingUser
    ) {

      return res
        .status(400)
        .json({
          message:
            "User already exists",
        });
    }

    // HASH PASSWORD

    const salt =
      await bcrypt.genSalt(
        10
      );

    const hashedPassword =
      await bcrypt.hash(
        password,
        salt
      );

    // CREATE USER

    const user =
      await User.create({
        name,
        email,
        password:
          hashedPassword,
      });

    res.status(201).json({
      message:
        "User registered successfully",

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {

  

  res.status(500).json({
    message:
      error.message,
  });
}
};
 const loginUser = async (
  req,
  res
) => {

  try {

    const {
      email,
      password,
    } = req.body;

    if (
      !email ||
      !password
    ) {

      return res
        .status(400)
        .json({
          message:
            "All fields are required",
        });
    }

    const user =
      await User.findOne({
        email,
      });

    if (!user) {

      return res
        .status(400)
        .json({
          message:
            "Invalid credentials",
        });
    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {

      return res
        .status(400)
        .json({
          message:
            "Invalid credentials",
        });
    }

    const token =
      jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );

    res.status(200).json({
      message:
        "Login successful",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (
    error
  ) {

    res.status(500).json({
      message:
        error.message,
    });
  }
};
const transporter =
  nodemailer.createTransport({
    service: "gmail",


    auth: {
      user:
        process.env.EMAIL_USER,

      pass:
        process.env.EMAIL_PASS,
    },

    tls: {
      rejectUnauthorized:
        false,
    },
  });
  transporter.verify(
  (error,sucess) => {

    if (error) {
    console.log("SMTP ERROR:");
    console.log(error);
  } else {
    console.log("SMTP READY");
  }

});
  const sendResetOtp =
  async (
    req,
    res
  ) => {

    try {

      const { email } =
        req.body;

      const user =
        await User.findOne({
          email,
        });

      if (!user) {

        return res
          .status(404)
          .json({
            message:
              "User not found",
          });
      }

      const otp =
        Math.floor(
          100000 +
            Math.random() *
              900000
        ).toString();

      user.resetOtp =
        otp;

      user.resetOtpExpiry =
        Date.now() +
        10 * 60 * 1000;

      await user.save();

      await transporter.sendMail({
        from:
          process.env.EMAIL_USER,

        to: email,

        subject:
          "MediRoute AI Password Reset OTP",

        html: `
          <h2>Password Reset</h2>
          <p>Your OTP is:</p>
          <h1>${otp}</h1>
          <p>Valid for 10 minutes.</p>
        `,
      });
console.log("OTP =", otp);

      res.json({
        message:
          "OTP sent successfully",
      });

    } catch (error) {

  console.log("SEND OTP ERROR:");
  console.log(error);

  res.status(500).json({
    message: error.message,
    error: String(error),
  });
}
  };
  const verifyResetOtp =
  async (
    req,
    res
  ) => {

    try {

      const {
        email,
        otp,
      } = req.body;

      const user =
        await User.findOne({
          email,
        });

      if (
        !user ||
        user.resetOtp !==
          otp
      ) {

        return res
          .status(400)
          .json({
            message:
              "Invalid OTP",
          });
      }

      if (
        user.resetOtpExpiry <
        Date.now()
      ) {

        return res
          .status(400)
          .json({
            message:
              "OTP expired",
          });
      }

      res.json({
        message:
          "OTP verified",
      });

    } catch (
      error
    ) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };
  const resetPassword =
  async (
    req,
    res
  ) => {

    try {

      const {
        email,
        otp,
        password,
      } = req.body;

      const user =
        await User.findOne({
          email,
        });

      if (
        !user ||
        user.resetOtp !==
          otp
      ) {

        return res
          .status(400)
          .json({
            message:
              "Invalid OTP",
          });
      }

      const salt =
        await bcrypt.genSalt(
          10
        );

      user.password =
        await bcrypt.hash(
          password,
          salt
        );

      user.resetOtp =
        null;

      user.resetOtpExpiry =
        null;

      await user.save();

      res.json({
        message:
          "Password updated successfully",
      });

    } catch (
      error
    ) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };
  const sendSignupOtp = async (req, res) => {

  try {

    console.log("========== SEND SIGNUP OTP START ==========");

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

    const { email } = req.body;

    console.log("Received Email:", email);

    const existingUser = await User.findOne({
      email,
    });

    console.log("User Check Complete");

    if (existingUser) {

      return res.status(400).json({
        message: "Email already registered",
      });
    }

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    console.log("Generated OTP:", otp);

    global.signupOtps =
      global.signupOtps || {};

    global.signupOtps[email] = {
      otp,
      expiry:
        Date.now() +
        10 * 60 * 1000,
    };

    console.log("OTP Stored");

    console.log("About to send email...");

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject:
        "MediRoute AI Email Verification",
      html: `
        <h2>Email Verification</h2>
        <h1>${otp}</h1>
        <p>Valid for 10 minutes.</p>
      `,
    });

    console.log(
      "Email sent successfully"
    );

    return res.json({
      message:
        "OTP sent successfully",
    });

  } catch (error) {

    console.log(
      "========== SEND SIGNUP OTP ERROR =========="
    );

    console.log(error);

    console.log(
      "ERROR MESSAGE:",
      error.message
    );

    console.log(
      "ERROR STACK:",
      error.stack
    );

    return res.status(500).json({
      message: error.message,
      error: String(error),
    });
  }
};
    
const verifySignupOtp =
  async (
    req,
    res
  ) => {

    try {

      const {
        email,
        otp,
      } = req.body;

      const data =
        global.signupOtps?.[
          email
        ];

      if (!data) {

        return res
          .status(400)
          .json({
            message:
              "OTP not found",
          });
      }

      if (
        data.otp !== otp
      ) {

        return res
          .status(400)
          .json({
            message:
              "Invalid OTP",
          });
      }

      if (
        data.expiry <
        Date.now()
      ) {

        return res
          .status(400)
          .json({
            message:
              "OTP expired",
          });
      }

      res.json({
        message:
          "OTP verified",
      });

    } catch (
      error
    ) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };
module.exports = {
  registerUser,
  loginUser,
  sendResetOtp,
  verifyResetOtp,
  resetPassword,
  sendSignupOtp,
  verifySignupOtp,
};
