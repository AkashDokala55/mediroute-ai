const express =
  require("express");

const multer =
  require("multer");

const {
  scanMedicineImage,
} = require(
  "../controllers/ocrController"
);

const router =
  express.Router();

const upload =
  multer({
    dest: "uploads/",
  });

router.post(
  "/scan",
  upload.single("image"),
  scanMedicineImage
);

module.exports =
  router;