const express =
  require("express");

const router =
  express.Router();

const authMiddleware =
  require(
    "../middleware/authMiddleware"
  );

const {

  createEmergencyCard,

  getEmergencyCards,

  getEmergencyByQR,

  deleteEmergencyCard,

} = require(
  "../controllers/emergencyController"
);


// CREATE

router.post(
  "/",
  authMiddleware,
  createEmergencyCard
);


// GET USER CARDS

router.get(
  "/",
  authMiddleware,
  getEmergencyCards
);


// PUBLIC ACCESS

router.get(
  "/qr/:qrId",
  getEmergencyByQR
);


// DELETE

router.delete(
  "/:id",
  authMiddleware,
  deleteEmergencyCard
);

module.exports =
  router;