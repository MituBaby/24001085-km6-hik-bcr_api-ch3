class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="card mt-5">
            <img src="${this.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <p>${this.manufacture} ${this.model}/${this.type}</p>
              <h5 class="card-title">${this.rentPerDay.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}</h5>
              <p class="card-text">Description : <br>${
                this.description
              } <br> <br> Specs: <br> ${this.specs} <br><br>Options: <br> ${
      this.options
    }<br> <br>Available at : ${this.availableAt}</p>
              <div class="detail">
                <span>
                  <img src="./images/fi_users.png" alt="" />
                </span>
                <p class="ms-2">${this.capacity} orang</p>
              </div>
              <div class="detail">
                <span>
                  <img src="./images/fi_settings.png" alt="" />
                </span>
                <p class="ms-2">${this.transmission}</p>
              </div>
              <div class="detail">
                <span>
                  <img src="./images/fi_calendar.png" alt="" />
                </span>
                <p class="ms-2">${this.year}</p>
              </div>

              <a href="#" class="btn btn-success">Go somewhere</a>
            </div>
          </div>
    `;
  }
}
