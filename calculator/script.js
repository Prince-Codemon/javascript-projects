buttons = document.querySelectorAll("button");
let area = document.getElementById("calcinpt");
btn = document.getElementsByClassName("btn");
let screenValue = " ";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "=") {
      area.value = eval(area.value);
    } else if (buttonText == "C") {
      area.value = " ";
      screenValue = " ";
    } else {
      screenValue += buttonText;

      area.value = screenValue;
    }
  });
}
