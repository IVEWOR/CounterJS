let counter = parseInt(document.getElementById("counter").innerHTML);
// Increase function
document.getElementById("increase").addEventListener("click", function () {
  counter++;
  document.getElementById("counter").innerHTML = counter;
});
// Decrease function
document.getElementById("decrease").addEventListener("click", function () {
  counter--;
  document.getElementById("counter").innerHTML = counter;
});
//Reset zero
document.getElementById("reset").addEventListener("click", function () {
  counter = 0;
  document.getElementById("counter").innerHTML = counter;
});
