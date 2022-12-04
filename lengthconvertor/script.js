var inptval = document.getElementById("getval");
inptval.addEventListener(
  "keyup",
  (cal = () => {
    var val = document.getElementById("getval").value;
    let firstone = document.getElementById("firstop").value;
    let secondone = document.getElementById("secondop").value;
    if (firstone == secondone) {
      alert("Not Valid Conversion");
    }
    if (isNaN(val)) {
      alert("Enter Some Integers...");
    }

    if (firstone == "Metre" && secondone == "Inch") {
      document.getElementById("giveval").value = val * 39.37 + "inch";
    }
    if (firstone == "Metre" && secondone == "Feet") {
      document.getElementById("giveval").value = val * 3.281 + "ft";
    }
    if (firstone == "Metre" && secondone == "Centimeter") {
      document.getElementById("giveval").value = val * 100 + "cm";
    }

    if (firstone == "Inch" && secondone == "Metre") {
      document.getElementById("giveval").value = val / 39.37 + "metre";
    }
    if (firstone == "Inch" && secondone == "Centimeter") {
      document.getElementById("giveval").value = val * 2.54 + "cm";
    }
    if (firstone == "Inch" && secondone == "Feet") {
      document.getElementById("giveval").value = val / 12 + "ft";
    }

    if (firstone == "Feet" && secondone == "Inch") {
      document.getElementById("giveval").value = val * 12 + "inch";
    }
    if (firstone == "Feet" && secondone == "Metre") {
      document.getElementById("giveval").value = val / 3.281 + "meter";
    }
    if (firstone == "Feet" && secondone == "Centimeter") {
      document.getElementById("giveval").value = val * 30.48 + "cm";
    }

    if (firstone == "Centimeter" && secondone == "Feet") {
      document.getElementById("giveval").value = val / 30.48 + "ft";
    }
    if (firstone == "Centimeter" && secondone == "Metre") {
      document.getElementById("giveval").value = val / 100 + "metre";
    }
    if (firstone == "Centimeter" && secondone == "Inch") {
      document.getElementById("giveval").value = val / 2.54 + "inch";
    }
  })
);
