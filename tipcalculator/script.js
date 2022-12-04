cal.addEventListener("click", function calc() {
  // if (amount<='a' || amount>='z' || amount<='A'|| amount>='Z') {
  //     alert('Enter valid Amount')
  // }
  var amount = document.getElementById("billamount").value;
  var percent = document.getElementById("tippercent").value;
  parseInt(amount);
  parseInt(percent);
  if (amount < 0 || amount == NaN) {
    alert("Enter a Valid Amount");
  } else {
    let tip = amount * (percent / 100);
    parseInt(tip);
    document.getElementById("tipamount").value = tip;
    let total = parseInt(amount) + parseInt(tip);
    document.getElementById("totalbill").value = total;
  }
});
