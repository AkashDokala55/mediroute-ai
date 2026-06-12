const express =
  require("express");

const router =
  express.Router();

const {
  submitSupportRequest,
} = require(
  "../controllers/supportController"
);

router.post(
  "/submit",
  submitSupportRequest
);
router.post(
  "/submit",
  (req, res, next) => {
    console.log("SUPPORT ROUTE HIT");
    next();
  },
  submitSupportRequest
);
module.exports =
  router;