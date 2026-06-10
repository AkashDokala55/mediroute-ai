const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const medicineRoutes =
  require(
    "./routes/medicineRoutes"
  );
  const medicineExpiryRoutes =
  require(
    "./routes/medicineExpiryRoutes"
  );
  const ocrRoutes =
  require(
    "./routes/ocrRoutes"
  );
  
const connectDB = require("./config/db");

dotenv.config();

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);
app.use(
  "/api/medicines",
  medicineRoutes
);
app.use(
  "/api/profiles",
  require("./routes/profileRoutes")
);

app.use(
  "/api/reports",
  require(
    "./routes/reportRoutes"
  )
);
app.use(
  "/api/emergency",
  require(
    "./routes/emergencyRoutes"
  )
);
app.use(
  "/api/medicine-expiry",
  medicineExpiryRoutes
);
app.use(
  "/api/ocr",
  ocrRoutes
);
app.use(
  "/api/support",
  require(
    "./routes/supportRoutes"
  )
);
const PORT =
  process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("MediRoute AI Backend Running 🚀");
});
app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});