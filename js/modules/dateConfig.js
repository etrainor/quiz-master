function getMonth(date) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var monthIndex = date.getMonth();

    return months[monthIndex];
}

function getFormattedDate(date) {
    var newDate = new Date(date)
    var month = getMonth(newDate); //month
    var day = newDate.getDate(); //day of the month
    var year = newDate.getFullYear(); //4 digit getFullYear

    var formattedDate = `${month} ${day}, ${year}`;

    return formattedDate;
}