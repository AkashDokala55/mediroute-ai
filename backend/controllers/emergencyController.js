const Emergency =
  require("../models/Emergency");

const crypto =
  require("crypto");


// CREATE CARD

const createEmergencyCard =
  async (req, res) => {

    try {

      const existingCard =
        await Emergency.findOne({
          userId: req.user.id,
        });

      if (existingCard) {

        return res.status(400).json({
          message:
            "Emergency card already exists. Please update the existing card.",
        });
      }

      const qrId =
        crypto
          .randomBytes(8)
          .toString("hex");

      const card =
        await Emergency.create({

          userId:
            req.user.id,

          fullName:
            req.body.fullName,

          age:
            req.body.age,

          bloodGroup:
            req.body.bloodGroup,

          emergencyContact:
            req.body.emergencyContact,

          address:
            req.body.address,

          qrId,
        });

      res.status(201).json(card);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };
// GET USER CARDS

const getEmergencyCards =
  async (req, res) => {

    try {

      const cards =
        await Emergency.find({

          userId:
            req.user.id,
        });

      res.json(cards);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };


// GET BY QR

const getEmergencyByQR =
  async (req, res) => {

    try {

      const card =
        await Emergency.findOne({

          qrId:
            req.params.qrId,
        });

      if (!card) {

        return res
          .status(404)
          .json({

            message:
              "Emergency card not found",
          });
      }

      res.json(card);

    } catch (error) {

      res.status(500).json({

        message:
          error.message,
      });
    }
  };


// DELETE

const deleteEmergencyCard =
  async (req, res) => {

    try {

      await Emergency.findByIdAndDelete(
        req.params.id
      );

      res.json({

        message:
          "Emergency card deleted",
      });

    } catch (error) {

      res.status(500).json({

        message:
          error.message,
      });
    }
  };

module.exports = {

  createEmergencyCard,

  getEmergencyCards,

  getEmergencyByQR,

  deleteEmergencyCard,
};