const mongoose =
  require("mongoose");

const medicineExpirySchema =
  new mongoose.Schema(
    {
      userId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      medicineName: {
        type: String,
        required: true,
      },

      quantity: {
        type: Number,
        required: true,
      },

      expiryDate: {
        type: Date,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "MedicineExpiry",
    medicineExpirySchema
  );