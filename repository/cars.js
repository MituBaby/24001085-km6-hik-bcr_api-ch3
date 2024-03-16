const cars = require("../data/cars.json");
const { v4: uuidv4 } = require("uuid");

exports.getCars = (manufacture) => {
  let data = cars.map((car) => car);

  data = data.filter((car) => {
    let filteredStatus = true;
    if (manufacture) {
      filteredStatus =
        filteredStatus &&
        car.manufacture.toLowerCase().includes(manufacture?.toLowerCase());
    }
    return filteredStatus;
  });

  return data;
};

exports.getCar = (id) => {
  let data = cars.map((car) => car);

  data = data.filter((car) => car.id == id);
  if (data.length == 0) {
    return null;
  }

  return data[0];
};

exports.addCars = (payload) => {
  payload = {
    id: uuidv4(),
    ...payload,
  };

  cars.push(payload);

  return payload;
};

exports.updateCars = (id, payload) => {
  const updatedCars = {
    id: id,
    ...payload,
  };

  cars.map((car, index) => {
    if (car?.id == id) {
      cars[index] = updatedCars;
    }
  });

  return id, payload;
};

exports.deleteCars = (id) => {
  index = cars.findIndex((car) => car.id === id);
  cars.splice(index, 1);
};
