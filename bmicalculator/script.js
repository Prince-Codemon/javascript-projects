let weightInpt = document.getElementById("weight");
weightInpt.blur();
let HeightInpt = document.getElementById("height");
let btn = document.getElementById("calc");
let screen = document.getElementById("showvalue");
btn.addEventListener("click", () => {
  let weight = weightInpt.value;
  let height = HeightInpt.value;
  console.log(weight);
  console.log(height);
  if (isNaN(weight) || isNaN(height)) {
    alert("Enter Valid Value !");
  }
  if (weight === " " || height == " ") {
    alert("Please Enter Some Value !");
  } else {
    let total = (weight / (height * height)) * 10000;
    var tot = total.toFixed(1);
    console.log(tot);
    if (tot <= 18.5) {
      screen.innerText = "Underweight:" + tot;
      document.getElementById("show").style.background = "yellow";
      screen.style.color = "black";
    } else if (tot <= 24.9) {
      screen.innerText = "Normal:" + tot;
      document.getElementById("show").style.background = "green";
      screen.style.color = "white";
    } else if (tot <= 29.9) {
      screen.innerText = "Overweight:" + tot;
      document.getElementById("show").style.background = "tomato";
    } else if (tot >= 30) {
      screen.innerText = "Obese:" + tot;
      document.getElementById("show").style.background = "red";
      screen.style.color = "white";
    }
  }
});
