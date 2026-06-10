const mongoose =
  require("mongoose");

const supportRequestSchema =
  new mongoose.Schema(
    {
      ticketId: {
        type: String,
        required: true,
      },

      name: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        required: true,
      },

      subject: {
        type: String,
        required: true,
      },

      message: {
        type: String,
        required: true,
      },

      status: {
        type: String,
        default: "Open",
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "SupportRequest",
    supportRequestSchema
  );