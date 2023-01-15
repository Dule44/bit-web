


var footballField = document.querySelector(".field");
var player = document.querySelector('.player');
var button = document.getElementById('btn');

button.addEventListener('click', () => {
  if (button.textContent === "Stop Moving") {
    button.textContent = "Start Moving";
    button.style.backgroundColor = "Blue";
  } else {
    button.textContent = "Stop Moving";
    button.style.backgroundColor = "Red";
  }
});

footballField.addEventListener("click", function(event) {
  if (button.textContent === "Stop Moving") {
  var x = event.clientX;
  var y = event.clientY;

  player.style.left = x + "px";
  player.style.top = y + "px";
}});


