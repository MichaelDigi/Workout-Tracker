const express = require("express");
const mongoose = require("mongoose");
const router = require("/routes");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(router);

mongoose.connect(process.env.MONGODB_URI || "mongo://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
