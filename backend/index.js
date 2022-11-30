const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/video", (req, res) => {
  res.send("Hello World!");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
