const dotenv = require("dotenv").config();
const colors = require("colors");
const express = require("express");
const PORT = process.env.PORT || 8000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");

// Connect to DB
connectDB();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to api" });
});

//Routes
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
