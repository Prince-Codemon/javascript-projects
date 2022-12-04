date = new Date().getDay();
var a = new Array(7);
a[0] = "Sunday";
a[1] = "Monday";

a[2] = "Tuesday";
a[3] = "Wednesday";
a[4] = "Thursday";
a[6] = "Saturday";
a[5] = "Friday";

var today = "Today is : " + a[date];
document.getElementById("mydate").innerHTML = today;
