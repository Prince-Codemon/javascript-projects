var a = [];
(a[0] = "scissor"), (a[1] = "paper"), (a[2] = "stone");
btns = document.querySelectorAll("button");
var screen = document.getElementById("display");
var screenbox = document.getElementById("displaybox");
var uwin = 0;
var cwin = 0;
var compChose = document.getElementById('compchose')
for (item of btns) {
  item.addEventListener("click", (e) => {
    var rand = Math.floor(Math.random() * 3);
    text = e.target.value;
    console.log(text);
    console.log(rand);
    if (text == a[rand]) {
      screen.innerText = "Tie";
      screenbox.style.background = "grey";
      compChose.innerHTML = "Comp : "+ a[rand]
      
    } else if (text == "scissor" && a[rand] == "paper") {
      screen.innerText = "You Win";
      screenbox.style.background = "green";
      document.getElementById("youcount").innerHTML = "You :" + ++uwin;
      compChose.innerHTML = "Comp : "+ a[rand]

    } else if (text == "scissor" && a[rand] == "stone") {
      screen.innerText = "You Loose";
      screenbox.style.background = "red";
      document.getElementById("compcount").innerHTML = "Comp :" + ++cwin;
      compChose.innerHTML = "Comp : "+ a[rand]

    } else if (text == "stone" && a[rand] == "paper") {
      screen.innerText = "You Loose";
      screenbox.style.background = "red";
      document.getElementById("compcount").innerHTML = "Comp :" + ++cwin;
      compChose.innerHTML = "Comp : "+ a[rand]

    } else if (text == "stone" && a[rand] == "scissor") {
      screen.innerText = "You Won";
      screenbox.style.background = "green";
      document.getElementById("youcount").innerHTML = "You :" + ++uwin;
      compChose.innerHTML = "Comp : "+ a[rand]

    } else if (text == "paper" && a[rand] == "stone") {
      screen.innerText = "You Won";
      screenbox.style.background = "green";
      document.getElementById("youcount").innerHTML = "You :" + ++uwin;
      compChose.innerHTML = "Comp : "+ a[rand]

    } else if (text == "paper" && a[rand] == "scissor") {
      screen.innerText = "You Loose";
      screenbox.style.background = "red";
      document.getElementById("compcount").innerHTML = "Comp :" + ++cwin;
      compChose.innerHTML = "Comp : "+ a[rand]

    }
  });
}
function guess() {}
console.log(rand);
