let mongoose = require("mongoose");
const db = mongoose.connection;

const server =
  "mongodb+srv://user034:micromax3g@vanillajsstore.fhkvpeo.mongodb.net/vanilla_js_store?retryWrites=true&w=majority";

module.exports = function DBConnect() {
  mongoose
    .connect(server, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection to database is established");
    })
    .catch((err) => {
      console.log("Some error occurred", err);
    });
};
