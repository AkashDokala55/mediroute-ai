const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const scanMedicineImage =
  async (req, res) => {

    try {

      if (!req.file) {

        return res
          .status(400)
          .json({
            message:
              "No image uploaded",
          });
      }

      const formData =
        new FormData();

      formData.append(
        "apikey",
        process.env.OCR_SPACE_API_KEY
      );

      formData.append(
  "file",
  fs.createReadStream(
    req.file.path
  ),
  {
    filename:
      req.file.originalname,
    contentType:
      req.file.mimetype,
  }
);

      const response =
        await axios.post(
          "https://api.ocr.space/parse/image",
          formData,
          {
            headers:
              formData.getHeaders(),
          }
        );

     



const text =
  response.data
    ?.ParsedResults?.[0]
    ?.ParsedText || "";

res.json({
  text,
});

    } catch (error) {

     

      res.status(500).json({
        message:
          "OCR failed",
      });
    }
  };

module.exports = {
  scanMedicineImage,
};