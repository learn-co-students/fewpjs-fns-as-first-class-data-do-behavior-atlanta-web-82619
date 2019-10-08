/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const timeValues = timeString.split(":");
  const hour = timeValues[0];
  const parsedHour = parseInt(hour, 10);
  const minutes = timeValues[1];
  const parsedMinutes = parseInt(minutes, 10);
  if (parsedHour >= 0 && parsedHour < 12) {
    return 'Good Morning';
  } else if (parsedHour >= 19) {
    return 'Good Evening';
  } else {
    return 'Good Afternoon';
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(callback) {
  document.getElementById('greeting').innerText = callback;
}


