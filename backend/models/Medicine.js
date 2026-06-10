  const mongoose =
    require("mongoose");

  const medicineSchema =
    new mongoose.Schema(
      {
        userId: {
          type:
            mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },

        name: String,

        dosage: String,

        type: String,

        timing: String,

        customTime: String,

        reminder: String,

        days: String,
  startDate: {
    type: Date,
    default: Date.now,
  },
        notes: String,

        status: {
  type: String,
  default: "Upcoming",
},

lastTakenDate: {
  type: String,
  default: "",
},

takenDates: {
  type: [String],
  default: [],
},

gradient: {
  type: String,
  default: "from-purple-600 to-pink-500",
},
      },
      {
        timestamps: true,
      }
    );

  module.exports =
    mongoose.model(
      "Medicine",
      medicineSchema
    );