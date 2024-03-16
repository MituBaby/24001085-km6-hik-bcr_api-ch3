const express = require("express");
const router = express.Router();
const cars = require("./cars");

// /cars
router.use("/cars", cars);

module.exports = router;
