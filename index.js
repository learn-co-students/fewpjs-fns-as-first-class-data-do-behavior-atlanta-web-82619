function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

function greet(input) {
  let time = parseInt(input);
  if (time < 12) {
    return "Good Morning";
  } else if (time >= 12 && time < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(message){
  document.querySelector('#greeting').innerText = message
}
