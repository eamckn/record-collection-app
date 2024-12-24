require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");
const { indexRouter } = require("./routes/indexRouter");
const { artistRouter } = require("./routes/artistRouter");
const PORT = process.env.PORT || 8080;
const assetsPath = path.join(__dirname, "styles");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.use("/", indexRouter);
app.use("/artists", artistRouter);

app.listen(PORT, () => {
  console.log(`Server is currently listening on port ${PORT}.`);
});
