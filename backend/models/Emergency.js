const mongoose =
  require("mongoose");

const emergencySchema =
  new mongoose.Schema(
    {
      userId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      fullName: {
        type: String,
        required: true,
      },

      age: {
        type: Number,
        required: true,
      },

      bloodGroup: {
        type: String,
        required: true,
      },

      emergencyContact: {
        type: String,
        required: true,
      },

      address: {
        type: String,
        default: "",
      },

      qrId: {
        type: String,
        unique: true,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Emergency",
    emergencySchema
  );