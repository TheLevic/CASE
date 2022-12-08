const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const videoRoutes = require("./routes/videoRoutes");

const app = express();

//Middleware (seeing if our request has a body)
app.use(express.json());

//Using all of the routes from videoRoutes file
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Use all of the routes from our routes file
app.use("/api/videos", videoRoutes);

//Connect to MONGODB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB and listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
