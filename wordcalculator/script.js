calcbtn.addEventListener("click", function calc() {
  var text = document.getElementById("inptext").value;
  var count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      continue;
    } else {
      count++;
    }
  }
  let now = document.getElementById('inptext').value
  now = now.match(/\w+/g)
  now = now.length
  
  document.getElementById('total').style.height = '15%'
  var total = "Total No of Characters : " + count + "\n" + "Total No of Words : " + now 
  document.getElementById('totalch').innerHTML = total
  console.log(count);
  console.log(text.length);
});
