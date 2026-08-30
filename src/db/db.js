const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://yt:G7aF3UlM6qtLbFgl@yt-complete-backend.we01cys.mongodb.net/halley",
  );
  console.log("connected to DB");
}

module.exports = connectDB;
