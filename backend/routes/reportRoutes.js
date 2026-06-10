const express =
  require("express");

const router =
  express.Router();

const authMiddleware =
  require(
    "../middleware/authMiddleware"
  );
const upload = require(
  "../middleware/uploadMiddleware"
);
const {

  createReport,

  getReports,

  deleteReport,

  getReportByQR,

} = require(
  "../controllers/reportController"
);
router.post(
  "/upload",
  authMiddleware,
  upload.single("file"),
  (req, res) => {

    

    res.status(200).json({
      success: true,
      fileUrl: req.file.path,
      fileType: req.file.mimetype,
    });
  }
);
router.post(
  "/",
  authMiddleware,
  createReport
);

router.get(
  "/",
  authMiddleware,
  getReports
);

router.delete(
  "/:id",
  authMiddleware,
  deleteReport
);

router.get(
  "/qr/:qrId",
  getReportByQR
);

module.exports =
  router;