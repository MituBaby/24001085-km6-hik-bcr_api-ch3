const express = require("express");
const router = express.Router();
const carsController = require("../controller/cars");

// router.get("/", carsController.indexCars);
router.route("/").get(carsController.getCars).post(carsController.addCars);
router
  .route("/:id")
  .get(carsController.getCar)
  .put(carsController.updateCars)
  .delete(carsController.deleteCars);

module.exports = router;
