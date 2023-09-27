const serverless = require("serverless-http");
const express = require("express");
const app = express();
const DBConnect = require("./config/DB");

DBConnect();
// Routes
app.use("/users", require("./routes/User.route"));

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

// app.listen(3000, () => {
//   console.log("Listening");
// });
module.exports.handler = serverless(app);
