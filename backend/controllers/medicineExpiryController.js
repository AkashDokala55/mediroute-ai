const MedicineExpiry =
  require(
    "../models/MedicineExpiry"
  );

const createMedicine =
  async (req, res) => {
    try {
      const medicine =
        await MedicineExpiry.create({
          userId:
            req.user.id,

          medicineName:
            req.body.medicineName,

          quantity:
            req.body.quantity,

          expiryDate:
            req.body.expiryDate,
        });

      res.status(201).json(
        medicine
      );
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

const getMedicines =
  async (req, res) => {
    try {
      const medicines =
        await MedicineExpiry.find({
          userId:
            req.user.id,
        });

      res.json(medicines);
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

const updateMedicine =
  async (req, res) => {
    try {
      const medicine =
        await MedicineExpiry.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            returnDocument:
              "after",
          }
        );

      res.json(medicine);
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

const deleteMedicine =
  async (req, res) => {
    try {
      await MedicineExpiry.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Medicine deleted",
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  createMedicine,
  getMedicines,
  updateMedicine,
  deleteMedicine,
};