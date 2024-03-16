class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("card-cars");
    this.kirim = document.getElementById("btn-submit");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
    this.kirim.onclick = this.run;
  }

  run = (event) => {
    event.preventDefault();

    // Ambil value dari input tanggal dan jumlah penumpang
    const inputDate = document.getElementById("tanggal").value;
    const inputTime = document.getElementById("time").value;
    const inputPassenger = parseInt(
      document.getElementById("jumlahPenumpang").value
    );

    function convertTimeToMilliseconds(time) {
      // Pisahkan jam dan menit
      const [hours, minutes] = time.split(":");

      // Hitung total milidetik dari jam dan menit
      return parseInt(hours) * 60 + parseInt(minutes);
    }

    const milidetik = convertTimeToMilliseconds(inputTime);

    // Filter mobil berdasarkan ketersediaan tanggal dan jumlah penumpang
    const filteredCars = Car.list.filter((car) => {
      const availableAt = new Date(car.availableAt);
      const isoDate = availableAt.toISOString().split("T")[0];
      const time = availableAt.getHours() * 60 + availableAt.getMinutes();
      return (
        isoDate >= inputDate &&
        time >= milidetik &&
        car.capacity >= inputPassenger
      );
    });

    // Bersihkan konten sebelum menampilkan mobil yang difilter
    this.clear();

    // Render hanya mobil yang telah difilter
    filteredCars.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("col-md-4");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
