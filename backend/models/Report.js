const mongoose =
  require("mongoose");

const reportSchema =
  new mongoose.Schema(
    {
      userId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      profileId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Profile",
        required: true,
      },

      title: {
        type: String,
        required: true,
      },

      category: {
        type: String,
        required: true,
      },

      hospital: {
        type: String,
        required: true,
      },

      reportDate: {
        type: Date,
        required: true,
      },

      fileUrl: {
        type: String,
        default: "",
      },
      fileType: {
  type: String,
  default: "",
},
fileSize: {
  type: Number,
  default: 0,
},
expiresAt: {
  type: Date,
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
    "Report",
    reportSchema
  );