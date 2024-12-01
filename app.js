require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");
const PORT = process.env.PORT || 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is currently listening on port ${PORT}.`);
});
