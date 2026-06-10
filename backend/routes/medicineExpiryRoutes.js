const express =
  require("express");

const router =
  express.Router();

const authMiddleware =
  require(
    "../middleware/authMiddleware"
  );

const {
  createMedicine,
  getMedicines,
  updateMedicine,
  deleteMedicine,
} = require(
  "../controllers/medicineExpiryController"
);

router.post(
  "/",
  authMiddleware,
  createMedicine
);

router.get(
  "/",
  authMiddleware,
  getMedicines
);

router.put(
  "/:id",
  authMiddleware,
  updateMedicine
);

router.delete(
  "/:id",
  authMiddleware,
  deleteMedicine
);

module.exports =
  router;