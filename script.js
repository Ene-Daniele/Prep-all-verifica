let color = "#555500";
document.addEventListener("DOMContentLoaded", domloaded, false);

let canvas;
let ctx;

function domloaded() {

  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.fillStyle = color;

  const shape = [
    { x: 0, y: 0 },
    { x: 0, y: 500 },
    { x: 500, y: 500 },
    { x: 500, y: 0 }
  ];

  let point = {
    x: Math.round(Math.random() * 500),
    y: Math.round(Math.random() * 500)
  };

  let count = 0;
  let previousRand = null;

  while (count < 50000) {
    let currentRand = Math.floor(Math.random() * shape.length);

    if (currentRand !== previousRand) {
      previousRand = currentRand;

      let corner = shape[currentRand];
      point.x = (point.x + corner.x) / 2;
      point.y = (point.y + corner.y) / 2;
      ctx.fillRect(point.x, point.y, 5, 5);
      count++;
    }
  }
}

function fractalFunction() {

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  color = "#ff0000";
  domloaded();
}