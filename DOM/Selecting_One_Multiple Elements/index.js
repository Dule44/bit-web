

// 1.
(function () {
  document.querySelector(".two").className = "bg";
})();


//2.
(function () {
  document.querySelectorAll("li").forEach(function (el) {
    el.className = "li-bg";
  });
})();


//3.
(function () {
  document.querySelectorAll(".three li").forEach(function (el) {
    el.className = "li-three";
    el.style.textTransform = "uppercase";
  });
})();
