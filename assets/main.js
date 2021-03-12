let today = moment(); // Current day's date
let currentHour = moment().hours(); // Current day's time
$("#currentDay").text(today.format("dddd, MMMM, Do")); // Displays the current date in the header

$(".saveBtn").click(function () {
    let btn = $(this);
    let textarea = btn.siblings("textarea");   // grab the sibling of the button with the tag name of textarea
    let textareaValue = textarea.val();  // jquery method of getting the value of our textarea;
    let time = textarea.attr("id");
    localStorage.setItem(time, textareaValue);
});


function displayEntries() {
    const localStorageKeys = Object.entries(localStorage);
    for (let i = 0; i < localStorageKeys.length; i++) {
        const info = localStorageKeys[i];
        console.log(info);
        const id = info[0];
        const value = info[1];
        console.log(id, value);
        $(`#${id}`).val(value);
    }
}


$("textarea").each(function () {
    let hourBlock = $(this).attr("id");

    if (currentHour > hourBlock) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    } else if (currentHour < hourBlock) {
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