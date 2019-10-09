/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString){
  const hour = timeString.split(':');
  if (hour[0] < 12) {
    return 'Good Morning'
  }
  // else if (hour[0] > 12 ) {
  //   return 'Good Afternoon'
  // }
  else if (hour[0] > 17) {
  return 'Good Evening'
  }
  else {
    return 'Good Afternoon'
  }
}

