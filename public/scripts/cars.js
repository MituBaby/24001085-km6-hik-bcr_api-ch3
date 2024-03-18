const getCarsData = async (manufacture) => {
  const res = await fetch(`/cars?manufacture=${manufacture}`);
  const { data, message } = await res.json();
  return data;
};

export default { getCarsData };
