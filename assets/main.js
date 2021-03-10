let today = moment(); // Current day's date
let currentHour = moment().hours(); // Current day's time
$("#currentDay").text(today.format("dddd, MMMM, Do")); // Displays the current date in the header


$("textarea").each(function () {
    let  hourBlock = $(this).attr("id");

    if (hourBlock < currentHour){
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    } else if (hourBlock > currentHour){
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    } else {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    }
})


displayEntries();
