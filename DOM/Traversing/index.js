(function () {
  var list = document.querySelector(".active");

  list.classList.remove("active");

  list.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.className =
    "active";
})();
