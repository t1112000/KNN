const displayWidth = window.innerWidth - 25; // Chiều Ngang của Màn hình
const displayHeight = 900; // Chiều Cao của Màn hình
const dataSetSize = 150; // Số lượng
const caidat = {
  rootNode: "#knn",
  width: displayWidth,
  height: displayHeight,
  backgroundColor: "black",
  circleFill: "#3fe4h2",
  circleStroke: "white",
};
const types = ["A", "B"];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomPoint(width, height, cx, cy) {
  const rho = Math.sqrt(Math.random());
  const phi = Math.random() * Math.PI * 2;
  const randoms = {
    x: getRandomInt(-width / 2, width / 2),
    y: getRandomInt(-height / 2, height / 2),
  };
  const x = (rho * Math.cos(phi) * width) / 2 + cx + randoms.x;
  const y = (rho * Math.sin(phi) * height) / 2 + cy + randoms.y;
  return { x, y };
}
function createRandomData() {
  const ellipOptions = {
    A: {
      width: displayWidth / 3,
      height: displayWidth / 3,
      cx: displayWidth / 3,
      cy: displayHeight / 3,
    },
    B: {
      width: displayWidth / 2.5,
      height: displayWidth / 2.5,
      cx: displayWidth * 0.663,
      cy: displayHeight * 0.66,
    },
  };
  return Array.apply(null, Array(dataSetSize)).map((d) => {
    const type = Math.random() > 0.5 ? types[0] : types[1];
    const { width, height, cx, cy } = ellipOptions[type];
    const { x, y } = createRandomPoint(width, height, cx, cy);
    return { x, y, type };
  });
}
const data = createRandomData();
const k = 3;
const vis = new d3ml.KNNVisualization(data, caidat, types, k);
vis.draw();
