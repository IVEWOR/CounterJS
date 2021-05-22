let counter = parseInt(document.getElementById("counter").innerHTML);

// Change color
function changeColor() {
  const counterString = document.getElementById("counter");
  if (counter < 0) {
    counterString.style.color = "red";
  } else if (counter > 0) {
    counterString.style.color = "green";
  } else {
    counterString.style.color = "#000";
  }
}

// Increase function
document.getElementById("increase").addEventListener("click", function () {
  counter++;
  document.getElementById("counter").innerHTML = counter;
  changeColor();
});
// Decrease function
document.getElementById("decrease").addEventListener("click", function () {
  counter--;
  document.getElementById("counter").innerHTML = counter;
  changeColor();
});
// Reset function
document.getElementById("reset").addEventListener("click", function () {
  counter = 0;
  document.getElementById("counter").innerHTML = counter;
  changeColor();
});
