const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  return res.json({ data: "U got the users" });
});

module.exports = router;
