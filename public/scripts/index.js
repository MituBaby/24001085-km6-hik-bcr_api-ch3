import cars from "./cars.js";

const carsCard = document.getElementById("card-cars");
const searchInput = document.getElementById("jumlahPenumpang");
const searchSubmit = document.getElementById("search-submit");

// get cars
async function getCars(manufacture) {
  const carsData = await cars.getCarsData(manufacture);
  let carsDataInCards = "";
  carsData.map((car) => {
    carsDataInCards += `
    <div class="col-md-4">
      <div class="card mt-5">
            <img src="${car.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <p>${car.manufacture} ${car.model}/${car.type}</p>
              <h5 class="card-title">${car.rentPerDay.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}</h5>
              <p class="card-text">Description : <br>${
                car.description
              } <br> <br> Specs: <br> ${car.specs} <br><br>Options: <br> ${
      car.options
    }<br> <br>Available at : ${car.availableAt}</p>
              <div class="detail">
                <span>
                  <img src="./images/fi_users.png" alt="" />
                </span>
                <p class="ms-2">${car.capacity} orang</p>
              </div>
              <div class="detail">
                <span>
                  <img src="./images/fi_settings.png" alt="" />
                </span>
                <p class="ms-2">${car.transmission}</p>
              </div>
              <div class="detail">
                <span>
                  <img src="./images/fi_calendar.png" alt="" />
                </span>
                <p class="ms-2">${car.year}</p>
              </div>

              <a href="#" class="btn btn-success">Go somewhere</a>
            </div>
          </div>
        </div>
    `;
  });
  carsCard.innerHTML = carsDataInCards;
}

searchSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  const manufacture = searchInput.value;
  getCars(manufacture);
});

getCars("");
