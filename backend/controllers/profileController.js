const Profile =
  require("../models/Profile");


// CREATE PROFILE

const createProfile =
  async (req, res) => {

    try {

      const {
        name,
        relation,
        age,
        bloodGroup,
      } = req.body;

      const profile =
        await Profile.create({
          userId:
            req.user.id,

          name,

          relation,

          age,

          bloodGroup,
        });

      res.status(201).json(
        profile
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };


// GET ALL PROFILES

const getProfiles =
  async (req, res) => {

    try {

      const profiles =
        await Profile.find({
          userId:
            req.user.id,
        });

      res.json(
        profiles
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };


// DELETE PROFILE

const deleteProfile =
  async (req, res) => {

    try {

      await Profile.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Profile deleted",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };
const updateProfile =
  async (req, res) => {

    const profile =
      await Profile.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(profile);
  };
module.exports = {

  createProfile,

  getProfiles,

  deleteProfile,
  updateProfile,
};