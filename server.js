const app = require("./src/app");

// require db
const connectDB = require("./src/db/db");

// calling the fnc
connectDB();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
