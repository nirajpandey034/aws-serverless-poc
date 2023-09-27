const express = require("express");
const UserModel = require("../models/User.model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await UserModel.find({}, { firstName: 1, email: 1, _id: 0 });
    return res.json({ data: users });
  } catch (err) {
    return res.json({ err: `Error: ${err}` });
  }
});

module.exports = router;
