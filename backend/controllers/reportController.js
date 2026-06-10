const Report =
  require("../models/Report");

const crypto =
  require("crypto");


// CREATE REPORT

const createReport =
  async (req, res) => {
const expiresAt =
  new Date(
    Date.now() +
    30 * 60 * 1000
  );
    try {

      const qrId =
        crypto.randomBytes(8)
        .toString("hex");

      const report =
        await Report.create({

          userId:
            req.user.id,

          profileId:
            req.body.profileId,

          title:
            req.body.title,

          category:
            req.body.category,

          hospital:
            req.body.hospital,

          reportDate:
            req.body.reportDate,

          fileUrl:
            req.body.fileUrl,
          fileSize:
            req.body.fileSize,
          expiresAt,
          qrId,
        });

      res.status(201).json(
        report
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };


// GET REPORTS

const getReports =
  async (req, res) => {

    try {

      const reports =
        await Report.find({
          userId:
            req.user.id,
        }).populate(
          "profileId"
        );

      res.json(
        reports
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };


// DELETE REPORT

const deleteReport =
  async (req, res) => {

    try {

      await Report.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Report deleted",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };


// GET REPORT BY QR

const getReportByQR =
  async (req, res) => {

    try {

      const report =
        await Report.findOne({
          qrId:
            req.params.qrId,
        });

      if (!report) {

        return res
          .status(404)
          .json({
            message:
              "Report not found",
          });
          
      }
if (
  report.expiresAt &&
  report.expiresAt <
    new Date()
) {

  return res
    .status(403)
    .json({
      message:
        "QR Access Expired",
    });
}
      res.json(
        report
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {

  createReport,

  getReports,

  deleteReport,

  getReportByQR,
};