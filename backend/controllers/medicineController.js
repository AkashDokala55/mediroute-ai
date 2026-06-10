const Medicine =
  require("../models/Medicine");

// CREATE

const createMedicine =
  async (req, res) => {

    try {

      const medicine =
        await Medicine.create({

          userId:
            req.user.id,

          ...req.body,
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

// GET ALL

const getMedicines =
  async (req, res) => {

    try {

      const medicines =
        await Medicine.find({

          userId:
            req.user.id,
        });

      res.json(
        medicines
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };

// UPDATE

const updateMedicine =
  async (req, res) => {

    try {

      const medicine =
        await Medicine.findById(
          req.params.id
        );

      if (!medicine) {

        return res
          .status(404)
          .json({
            message:
              "Medicine not found",
          });
      }

      Object.assign(
        medicine,
        req.body
      );

      if (
        req.body.status ===
        "Taken"
      ) {

        const today =
          new Date()
            .toDateString();

        medicine.lastTakenDate =
          today;

        if (
          !medicine.takenDates
        ) {

          medicine.takenDates =
            [];
        }

        if (
          !medicine.takenDates.includes(
            today
          )
        ) {

          medicine.takenDates.push(
            today
          );
        }
      }

      await medicine.save();

      res.json(
        medicine
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };

// DELETE

const deleteMedicine =
  async (req, res) => {

    try {

      await Medicine.findByIdAndDelete(
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