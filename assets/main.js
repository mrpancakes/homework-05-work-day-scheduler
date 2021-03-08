let today = moment(); // Current day's date
let currentHour = moment().format("HH"); // Current day's time

// let scheduleEl = document.querySelector("#schedule");

$("#currentDay").text(today.format("dddd, MMMM, Do")); // Displays the current date in the header

today = today.format("YYYY-MM-DD"); // Changing value of Today with a new format to be able to do conditionals


console.log(moment(`${today} 9:00:00`).isBefore(`${today} ${currentHour}`));


function scheduleStyling() {
    document.querySelectorAll("#schedule").forEach(element => {

        if (moment(`${today} ${element.dataset.time}`).isBefore(`${today} ${currentHour}`)) {
            element.textContent = "This time already passed";
            element.setAttribute("class", "col-lg-10 col-8 p-4 past")
        } else if (moment(`${today} ${element.dataset.time}`).isAfter(`${today} ${currentHour}`)){
            element.textContent = "This is the future";
            element.setAttribute("class", "col-lg-10 col-8 p-4 future")
        } else {
            element.textContent = "Current hour";
            element.setAttribute("class", "col-lg-10 col-8 p-4 present")
        }

    })
}
    scheduleStyling();




// let workHours = [
//     "9:00",
//     "10:00",
//     "11:00",
//     "12:00",
//     "13:00",
//     "14:00",
//     "15:00",
//     "16:00",
//     "17:00"
// ]

// console.log(moment(`${today} ${workHours[0]}`).isBefore(`${today} ${currentHour}`));

// function scheduleStyling() {
//     for (let i = 0; i < workHours.length; i++) {

//         if (moment(`${today} ${workHours[i]}`).isBefore(`${today} ${currentHour}`)) {
//             console.log("The time has passed");
//             document.querySelectorAll("#schedule").forEach(element =>{
//                 element.textContent = "hey";
//             })

//         } else if (moment(`${today} ${workHours[i]}`).isAfter(`${today} ${currentHour}`)) {
//             console.log("This time is in the future");
//         } else {
//             console.log(`We are in the ${currentHour}th hour currently`);
//         }
//     }
// }

// scheduleStyling();
