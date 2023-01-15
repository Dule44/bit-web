var main = document.querySelector(".main");
var img = document.querySelectorAll("img");
var document = document.documentElement;

img.forEach(function (el) {
  el.addEventListener("click", addRedBorder);
});

function addRedBorder(el) {
  this.classList.add("red-border");
  if (this.width >= 300) {
    el.stopPropagation();
  }
}

function elementClicked(el) {
  console.log(el.target.tagName);
}
function element(el) {
  console.log("main" + el.target);
}

document.addEventListener("click", elementClicked);
document.addEventListener("click", element);
