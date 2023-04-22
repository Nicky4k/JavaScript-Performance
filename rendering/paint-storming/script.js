// const $box = $(".box");

// $box.on("click", () => {
//   $box.animate(
//     {
//       marginLeft: "500px",
//     },
//     500
//   );
// });

const boxEl = document.querySelector(".box");

boxEl.addEventListener("mouseenter", () => {
  boxEl.style.willChange = "transform";
});

boxEl.addEventListener("click", () => {
  boxEl.classList.toggle("move");
});

boxEl.addEventListener("mouseleave", () => {
  boxEl.style.willChange = "auto";
  console.log("mouse leave");
});

boxEl.addEventListener("transitionend", () => {
  boxEl.style.willChange = "auto";
  console.log("transition end");
});
