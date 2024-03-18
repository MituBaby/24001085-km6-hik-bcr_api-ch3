const { json } = require("express");
const carsUsecase = require("../usecase/cars");
const path = require("path");

// exports.indexCars = (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/cariMobil.html"));
// };

exports.getCars = (req, res) => {
  const { manufacture } = req.query;
  const data = carsUsecase.getCars(manufacture);

  const response = {
    data,
    message: `Car with manufacture ${manufacture} is found!`,
  };
  // console.log(data);

  res.sendFile(path.join(__dirname, "../public/cars.html"));
  res.status(200).json(response);
};

exports.getCar = (req, res) => {
  const { id } = req.params;

  const data = carsUsecase.getCar(id);
  if (!data) {
    return res.status(404).json({
      data: null,
      message: `Car with id ${id} is not found!`,
    });
  }

  const response = {
    data: data,
    message: `Car with id ${id} is found!`,
  };

  res.status(200).json(response);
};

exports.addCars = (req, res) => {
  const {
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  } = req.body;

  if (!plate || plate == "") {
    return res.status(400).json({
      data: null,
      message: "Plate must be filled",
    });
  }
  if (!manufacture || manufacture == "") {
    return res.status(400).json({
      data: null,
      message: "Manufacture must be filled",
    });
  }
  if (!model || model == "") {
    return res.status(400).json({
      data: null,
      message: "Model must be filled",
    });
  }
  if (!image || image == "") {
    return res.status(400).json({
      data: null,
      message: "Image must be filled",
    });
  }
  if (!rentPerDay) {
    return res.status(400).json({
      data: null,
      message: "Rent Per Day must be filled",
    });
  }
  if (!capacity) {
    return res.status(400).json({
      data: null,
      message: "Capacity must be filled",
    });
  }
  if (!description || description == "") {
    return res.status(400).json({
      data: null,
      message: "Description must be filled",
    });
  }
  if (!availableAt || availableAt == "") {
    return res.status(400).json({
      data: null,
      message: "Available At must be filled",
    });
  }
  if (!transmission || transmission == "") {
    return res.status(400).json({
      data: null,
      message: "Transmission must be filled",
    });
  }
  if (!available || available == "") {
    return res.status(400).json({
      data: null,
      message: "Available must be filled",
    });
  }
  if (!type || type == "") {
    return res.status(400).json({
      data: null,
      message: "Type must be filled",
    });
  }
  if (!year) {
    return res.status(400).json({
      data: null,
      message: "Year must be filled",
    });
  }
  if (!options || options == "" || options == []) {
    return res.status(400).json({
      data: null,
      message: "Options must be filled",
    });
  }
  if (!specs || specs == "" || specs == []) {
    return res.status(400).json({
      data: null,
      message: "Specs must be filled",
    });
  }

  const data = carsUsecase.addCars(req.body);
  res.status(201).json({
    data,
    message: "Success add cars data!",
  });
};

exports.updateCars = (req, res) => {
  const { id } = req?.params;
  const {
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  } = req.body;

  if (!plate || plate == "") {
    return res.status(400).json({
      data: null,
      message: "Plate must be filled",
    });
  }
  if (!manufacture || manufacture == "") {
    return res.status(400).json({
      data: null,
      message: "Manufacture must be filled",
    });
  }
  if (!model || model == "") {
    return res.status(400).json({
      data: null,
      message: "Model must be filled",
    });
  }
  if (!image || image == "") {
    return res.status(400).json({
      data: null,
      message: "Image must be filled",
    });
  }
  if (!rentPerDay) {
    return res.status(400).json({
      data: null,
      message: "Rent Per Day must be filled",
    });
  }
  if (!capacity) {
    return res.status(400).json({
      data: null,
      message: "Capacity must be filled",
    });
  }
  if (!description || description == "") {
    return res.status(400).json({
      data: null,
      message: "Description must be filled",
    });
  }
  if (!availableAt || availableAt == "") {
    return res.status(400).json({
      data: null,
      message: "Available At must be filled",
    });
  }
  if (!transmission || transmission == "") {
    return res.status(400).json({
      data: null,
      message: "Transmission must be filled",
    });
  }
  if (!available || available == "") {
    return res.status(400).json({
      data: null,
      message: "Available must be filled",
    });
  }
  if (!type || type == "") {
    return res.status(400).json({
      data: null,
      message: "Type must be filled",
    });
  }
  if (!year) {
    return res.status(400).json({
      data: null,
      message: "Year must be filled",
    });
  }
  if (!options || options == "" || options == []) {
    return res.status(400).json({
      data: null,
      message: "Options must be filled",
    });
  }
  if (!specs || specs == "" || specs == []) {
    return res.status(400).json({
      data: null,
      message: "Specs must be filled",
    });
  }

  const data = carsUsecase.updateCars(id, req.body);

  res.status(200).json({
    data,
    message: `Success updated cars with id ${id}`,
  });
};

exports.deleteCars = (req, res) => {
  const { id } = req?.params;

  carsUsecase.deleteCars(id);

  res.status(200).json({
    data: null,
    message: `Success deleted cars with id ${id}`,
  });
};
