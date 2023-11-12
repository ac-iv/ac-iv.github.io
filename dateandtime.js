const datetimeElement = document.getElementById('datetime');

function updateDatetime() {
    const currentDatetime = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    const formattedDatetime = currentDatetime.toLocaleDateString(undefined, options);
    datetimeElement.textContent = ` ${formattedDatetime}`;
}

// Call updateDatetime function initially to display the current date and time
updateDatetime();

// Update the date and time every second
setInterval(updateDatetime, 1000);