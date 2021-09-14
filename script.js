document.getElementById("enter").addEventListener("submit", birthDay);
function birthDay(event) {
  //event.preventDefault();
  var day = document.getElementById("day").value;
  var DD = parseInt(day);

  var month = document.getElementById("month").value;
  var MM = parseInt(month);

  var year = document.getElementById("year").value;
  var YY = parseInt(year);

  var CC = (YY - 1) / 100 + 1;

  var weekDay =
    parseInt(CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) %
    7;

  var maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];

  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var dayOfBirth = new Date(MM + "/" + DD + "/" + YY);
  var dayOfWeek = dayOfBirth.getDay();

  if (document.getElementById("sex").checked) {
    var sex = "male";
  } else {
    var sex = "female";
  }

  if (MM < 1 || MM > 12 || (MM == 2 && dd > 29)) {
    alert("The month you entered is invalid!");
  } else if (DD < 1 || DD > 31) {
    alert("You entered an invalid day of birth");
  } else if (YY < 1900 || YY > 2021) {
    alert("You entered an invalid year");
  }

  if (Math.round(weekDay) == 0 && sex === "male") {
    document.getElementById("akan").innerHTML =
      "Your day of birth is " +
      days[dayOfWeek] +
      ",Your Akan name is " +
      maleName[0];
  } else if (Math.round(weekDay) == 1 && sex === "male") {
    document.getElementById("akan").innerHTML =
      "Your day of birth is " +
      days[dayOfWeek] +
      "  ,Your akan name is " +
      maleName[1];
  } else if (Math.round(weekDay) == 2 && sex === "male") {
    document.getElementById("akan").innerHTML =
      "Your day of birth  is " +
      days[dayOfWeek] +
      "  ,Your akan name is " +
      maleName[2];
  } else if (Math.round(weekDay) == 3 && sex === "male") {
    document.getElementById("akan").innerHTML =
      "Your day of birth is" +
      days[dayOfWeek] +
      "  ,Your akan name is " +
      maleName[3];
  } else if (Math.round(weekDay) == 4 && sex === "male") {
    document.getElementById("akan").innerHTML =
      "Your day of birth is " +
      days[dayOfWeek] +
      "  ,Your akan name is " +
      maleName[4];
  } else if (Math.round(weekDay) == 5 && sex === "male") {
    document.getElementById("akan").innerHTML =
      "Your day of birth is " +
      days[dayOfWeek] +
      "  ,Your akan name is " +
      maleName[5];
  } else if (Math.round(weekDay) == 6 && sex === "male") {
    document.getElementById("akan").innerHTML =
      "Your day of birth is " +
      days[dayOfWeek] +
      "  ,Your akan name is " +
      maleName[6];
  } else if (Math.round(weekDay) == 0 && sex === "female") {
    document.getElementById("akan").innerHTML =
      "Your day of birth is " +
      days[dayOfWeek] +
      "  ,Your akan name is " +
      femaleName[0];
  } else if (Math.round(weekDay) == 1 && sex === "female") {
    document.getElementById("akan").innerHTML =
      "Your day of birth is " +
      days[dayOfWeek] +
      "  ,Your akan name is " +
      femaleName[1];
  } else if (Math.round(weekDay) == 2 && sex === "female") {
    document.getElementById("akan").innerHTML =
      "Your day of birth is " +
      days[dayOfWeek] +
      "  ,Your akan name is " +
      femaleName[2];
  } else if (Math.round(weekDay) == 3 && sex === "female") {
    document.getElementById("akan").innerHTML =
      "Your day of birth is " +
      days[dayOfWeek] +
      "  ,Your akan name is " +
      femaleName[3];
  } else if (Math.round(weekDay) == 4 && sex === "female") {
    document.getElementById("akan").innerHTML =
      "Your day of birth is " +
      days[dayOfWeek] +
      "  ,Your akan name is " +
      femaleName[4];
  } else if (Math.round(weekDay) == 5 && sex === "female") {
    document.getElementById("akan").innerHTML =
      "Your day of birth is " +
      days[dayOfWeek] +
      "  ,Your akan name is " +
      femaleName[5];
  } else if (Math.round(weekDay) == 6 && sex === "female") {
    document.getElementById("akan").innerHTML =
      "Your day of birth is " +
      days[dayOfWeek] +
      "  ,Your akan name is " +
      femaleName[6];
  } else {
    alert("All fields are mandatory !");
  }
}
