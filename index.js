/* Given Code, don't edit */
function greet(input) {
  let time = parseInt(input, 10);
  if (time < 12) {
    return "Good Morning"
  } else if (time > 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

function displayMessage(message) {
  document.querySelector('#greeting').innerText = message
}

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
