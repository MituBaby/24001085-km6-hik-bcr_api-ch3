const carsRepo = require("../repository/cars");

exports.getCars = (manufacture) => {
  const data = carsRepo.getCars(manufacture);
  return data;
};

exports.getCar = (id) => {
  const data = carsRepo.getCar(id);
  return data;
};

exports.addCars = (payload) => {
  const data = carsRepo.addCars(payload);
  return data;
};

exports.updateCars = (id, payload) => {
  const data = carsRepo.updateCars(id, payload);
  return data;
};

exports.deleteCars = (id) => {
  const data = carsRepo.deleteCars(id);
  return data;
};
