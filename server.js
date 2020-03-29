const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// set up express

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

console.log("Server starting...");
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

// set up routes

app.use("/articles", require("./routes/articleRouter"));

// set up mongoose

console.log("Connecting to MongoDB...");
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  err => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);