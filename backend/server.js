const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

const complaintRoutes =
require("./routes/complaintRoutes");

const authRoutes =
require("./routes/authRoutes");

const aiRoutes =
require("./routes/aiRoutes");

const app = express();

/* MIDDLEWARE */

app.use(cors());

app.use(express.json());

/* DATABASE CONNECTION */

mongoose.connect(

  process.env.MONGO_URI

)

.then(() => {

  console.log(
    "MongoDB Connected"
  );

})

.catch((error) => {

  console.log(error);

});

/* ROUTES */

app.use(
  "/api/complaints",
  complaintRoutes
);

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/ai",
  aiRoutes
);

/* TEST ROUTE */

app.get("/", (req, res) => {

  res.send(
    "AI Complaint Backend Running"
  );

});

/* PORT */

const PORT =
process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server Running On Port ${PORT}`
  );

});