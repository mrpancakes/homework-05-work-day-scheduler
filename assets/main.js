// Create variable with today's date, format it, and add it as text to the id referenced in the HTML
let todaysDate = moment().format("dddd, MMMM, Do");
$("#currentDay").text(todaysDate);

let currentTime = moment().format("h:mm:ss a");

let timeAtNine = moment("#9am").format("h:mm:ss a")

console.log(currentTime);

console.log(timeAtNine);