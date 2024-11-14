const clickBtn = document.querySelector(".btn");
const outer = document.querySelector(".outer");
const inner = document.querySelector(".inner");

// const cb = () => {
//   console.log("button clicked");
// };
// clickBtn.addEventListener("click", cb);

//event propagation - bubling, capturing

//event bubling
// clickBtn.addEventListener("click", () => {
//   console.log("button clicked");
// });
// inner.addEventListener("click", () => {
//   console.log("inner clicked");
// });
// outer.addEventListener("click", () => {
//   console.log("outer clicked");
// });

//event capturing
// clickBtn.addEventListener(
//   "click",
//   () => {
//     console.log("button clicked");
//   },
//   { capture: true }
// );
// inner.addEventListener(
//   "click",
//   () => {
//     console.log("inner clicked");
//   },
//   { capture: true }
// );
// outer.addEventListener(
//   "click",
//   () => {
//     console.log("outer clicked");
//   },
//   { capture: true }
// );

// clickBtn.addEventListener(
//   "click",
//   (event) => {
//     // console.log(event);

//     event.stopPropagation();
//     console.log("button clicked");
//   },
//   { capture: true }
// );
// inner.addEventListener(
//   "click",
//   (event) => {
//     event.stopPropagation();

//     console.log("inner clicked");
//   },
//   { capture: true }
// );
// outer.addEventListener(
//   "click",
//   (event) => {
//     event.stopPropagation();

//     console.log("outer clicked");
//   },
//   { capture: true }
// );

clickBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("button clicked");
});
inner.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("inner clicked");
});
outer.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("outer clicked");
});

const box = document.querySelector(".box");

// clickBtn.addEventListener("contextmenu", function () {
//   console.log("context menu event worked");
// });
// box.addEventListener("mousedown", function () {
//   console.log("mousedown event worked");
// });
// box.addEventListener("mouseup", function () {
//   console.log("mouseup event worked");
// });
// box.addEventListener("mousemove", function () {
//   console.log("mousemove event worked");
// });
// box.addEventListener("mouseenter", function () {
//   console.log("mouseenter event worked");
// });
// box.addEventListener("mouseover", function () {
//   console.log("mouseover event worked");
// });
// box.addEventListener("mouseout", function () {
//   console.log("mouseout event worked");
// });
box.addEventListener("click", function (event) {
  console.log(event);
  //   console.log(event.target);
  //   console.log(this);

  console.log("click event worked");
});

//keyboard events

// window.addEventListener("keydown", function (event) {
//   //   console.log(event);
//   console.log(event.code);
//   console.log(event.key);
// });
let alpha = 1;
window.addEventListener("keyup", function (event) {
  // console.log(event.key);
  //   console.log(alpha);
  if (event.key === "ArrowDown") {
    if (alpha > 0) alpha -= 0.1;
  } else if (event.key === "ArrowUp") {
    if (alpha < 1) alpha += 0.1;
  }

  document.body.style.backgroundColor = `rgba(0,255,0, ${alpha})`;
});

const searchInput = document.querySelector(".search");

searchInput.addEventListener("keyup", function (e) {
  console.log(e.target.value);
  document.querySelector(".text").textContent = e.target.value;
});

searchInput.addEventListener("focus", function (e) {
  //   console.log("focused on search input!");
  e.target.style.backgroundColor = "yellow";
});
searchInput.addEventListener("blur", function (e) {
  console.log("blur event worked!");
  //   e.target.style.backgroundColor = "unset";
  e.target.style.backgroundColor = "white";
});
