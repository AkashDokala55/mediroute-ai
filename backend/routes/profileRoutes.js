const express =
  require("express");

const router =
  express.Router();

const authMiddleware =
  require(
    "../middleware/authMiddleware"
  );

const {
  createProfile,
  getProfiles,
  deleteProfile,
  updateProfile,
} = require(
  "../controllers/profileController"
);

router.post(
  "/",
  authMiddleware,
  createProfile
);

router.get(
  "/",
  authMiddleware,
  getProfiles
);
router.put(
  "/:id",
  authMiddleware,
  updateProfile
);
router.delete(
  "/:id",
  authMiddleware,
  deleteProfile
);

module.exports =
  router;