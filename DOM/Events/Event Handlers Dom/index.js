

var btnHandler = document.querySelector("#btn");
var div = document.querySelector("#text-area");
var input = document.getElementById("chat");

btnHandler.addEventListener("click", function () {
  div.innerHTML += "<p>" + input.value + "</p>";
  input.value = "";
});