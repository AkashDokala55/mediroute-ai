const mongoose =
  require("mongoose");

const profileSchema =
  new mongoose.Schema(
    {
      userId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      name: {
        type: String,
        required: true,
      },

      relation: {
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
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Profile",
    profileSchema
  );