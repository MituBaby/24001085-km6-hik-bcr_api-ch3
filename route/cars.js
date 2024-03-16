const express = require("express");
const router = express.Router();
const carsController = require("../controller/cars");

router.get("/", carsController.getCars);
router.post("/", carsController.addCars);
router.get("/:id", carsController.getCar);
router.put("/:id", carsController.updateCars);
router.delete("/:id", carsController.deleteCars);

module.exports = router;
