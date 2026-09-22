const road = document.getElementById("road");
const carColors = ["#9cc8e7", "#9fcf6a", "#d59be5", "#f3a18b", "#a2d0d0", "#d9c86e"];
const laneY = [70, 150];

const buildCar = (x, y, color, width) => {
  const car = document.createElement("div");
  car.classList.add("car");
  car.style.left = `${x}px`;
  car.style.top = `${y}px`;
  car.style.width = `${width}px`;
  car.style.setProperty("--car-color", color);

  car.innerHTML = `
    <div class="car-window"></div>
    <div class="wheel wheel-left"></div>
    <div class="wheel wheel-right"></div>
  `;

  road.appendChild(car);
};

const addRandomCar = () => {
  const y = laneY[Math.floor(Math.random() * laneY.length)];
  const width = 120 + Math.random() * 35;
  const x = Math.random() * (road.clientWidth - width);
  const color = carColors[Math.floor(Math.random() * carColors.length)];

  buildCar(x, y, color, width);
};

for (let i = 0; i < 7; i += 1) {
  addRandomCar();
}
