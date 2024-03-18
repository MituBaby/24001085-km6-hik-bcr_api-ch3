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

exports.getCar = (req, res, next) => {
  const { id } = req.params;

  const data = carsUsecase.getCar(id);
  if (!data) {
    return next({
      statusCode: 404,
      message: `Car with id ${id} is not found!`,
    });
  }

  const response = {
    data: data,
    message: `Car with id ${id} is found!`,
  };

  res.status(200).json(response);
};

exports.addCars = (req, res, next) => {
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
    return next({
      statusCode: 404,
      message: "Plate must be filled",
    });
  }
  if (!manufacture || manufacture == "") {
    return next({
      statusCode: 404,
      message: "Manufacture must be filled",
    });
  }
  if (!model || model == "") {
    return next({
      statusCode: 404,
      message: "Model must be filled",
    });
  }
  if (!image || image == "") {
    return next({
      statusCode: 404,
      message: "Image must be filled",
    });
  }
  if (!rentPerDay) {
    return next({
      statusCode: 404,
      message: "Rent Per Day must be filled",
    });
  }
  if (!capacity) {
    return next({
      statusCode: 404,
      message: "Capacity must be filled",
    });
  }
  if (!description || description == "") {
    return next({
      statusCode: 404,
      message: "Description must be filled",
    });
  }
  if (!availableAt || availableAt == "") {
    return next({
      statusCode: 404,
      message: "Available At must be filled",
    });
  }
  if (!transmission || transmission == "") {
    return next({
      statusCode: 404,
      message: "Transmission must be filled",
    });
  }
  if (!available || available == "") {
    return next({
      statusCode: 404,
      message: "Available must be filled",
    });
  }
  if (!type || type == "") {
    return next({
      statusCode: 404,
      message: "Type must be filled",
    });
  }
  if (!year) {
    return next({
      statusCode: 404,
      message: "Year must be filled",
    });
  }
  if (!options || options == "" || options == []) {
    return next({
      statusCode: 404,
      message: "Options must be filled",
    });
  }
  if (!specs || specs == "" || specs == []) {
    return next({
      statusCode: 404,
      message: "Specs must be filled",
    });
  }

  const data = carsUsecase.addCars(req.body);
  res.status(201).json({
    data,
    message: "Success add cars data!",
  });
};

exports.updateCars = (req, res, next) => {
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
    return next({
      statusCode: 404,
      message: "Plate must be filled",
    });
  }
  if (!manufacture || manufacture == "") {
    return next({
      statusCode: 404,
      message: "Manufacture must be filled",
    });
  }
  if (!model || model == "") {
    return next({
      statusCode: 404,
      message: "Model must be filled",
    });
  }
  if (!image || image == "") {
    return next({
      statusCode: 404,
      message: "Image must be filled",
    });
  }
  if (!rentPerDay) {
    return next({
      statusCode: 404,
      message: "Rent Per Day must be filled",
    });
  }
  if (!capacity) {
    return next({
      statusCode: 404,
      message: "Capacity must be filled",
    });
  }
  if (!description || description == "") {
    return next({
      statusCode: 404,
      message: "Description must be filled",
    });
  }
  if (!availableAt || availableAt == "") {
    return next({
      statusCode: 404,
      message: "Available At must be filled",
    });
  }
  if (!transmission || transmission == "") {
    return next({
      statusCode: 404,
      message: "Transmission must be filled",
    });
  }
  if (!available || available == "") {
    return next({
      statusCode: 404,
      message: "Available must be filled",
    });
  }
  if (!type || type == "") {
    return next({
      statusCode: 404,
      message: "Type must be filled",
    });
  }
  if (!year) {
    return next({
      statusCode: 404,
      message: "Year must be filled",
    });
  }
  if (!options || options == "" || options == []) {
    return next({
      statusCode: 404,
      message: "Options must be filled",
    });
  }
  if (!specs || specs == "" || specs == []) {
    return next({
      statusCode: 404,
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
