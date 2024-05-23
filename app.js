const COLOR__CONTAINER = document.getElementById("my__color");
console.log(COLOR__CONTAINER);
const CHANGE__COLOR = document.getElementById("my__btn");
console.log(CHANGE__COLOR);

// function changeBgColor(params) {
//   COLOR__CONTAINER.style.backgroundColor = "yellow";
// }

// CHANGE__COLOR.addEventListener("click", changeBgColor);

CHANGE__COLOR.addEventListener("click", function () {
  const hieghts = ["50px", "20px", "55px", "33px", "66px", "85px", "90px"];
  const randomHeight = hieghts[Math.floor(Math.random() * hieghts.length)];

  const colors = ["blue", "orange", "yellow", "pink", "black", "purple", "red"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  COLOR__CONTAINER.style.height = randomHeight;
  COLOR__CONTAINER.style.backgroundColor = randomColor;
});
