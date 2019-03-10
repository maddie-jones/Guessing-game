let computerGuess = Math.floor(Math.random() * 100) + 1;
// this line creates a random guess for the computer

const guessElement = document.getElementById("enterGuess")
const guessButton = document.getElementById("guess")
const clearButton = document.getElementById("clear")
const recentGuess = document.getElementById("recentGuess")
// these four lines save elements of the HTML to constants so they can be accessed in JS

function checkGuess(){
  // declares a function
  let userGuess = Number(guessElement.value);
  // gets the value of the input field element, changes it into a number and saves it to a variable
  let max = Number(guessElement.max);
  // gets the  max value for the input field and saves it to a variable
  let min = Number(guessElement.min);
  // gets the min value for the input field and saves it to a variable

  if (isNaN(userGuess)){
    // creates the first if statement that checks that value of the input field has to be a number
    recentGuess.innerHTML = "guess need to be a number";
    // if value is not a number it changes the HTML of the recentGuess HTML element to send a message
    console.log(recentGuess)
    // logs the value of recent guess to the console
  } else if (userGuess > max || userGuess < min) {
    // creates an else if statement that checks that the guess value is in the range 1-100
    recentGuess.innerHTML = "number has to be between 1 and 100";
    // if value is not in that range it changes the HTML of the recentGuess HTML element to send a message
    lastGuess.innerHTML = userGuess;
    // print the value of the input field to the screen
    console.log(recentGuess)
    // logs the value of recent guess to the console
  } else if (userGuess === computerGuess) {
    recentGuess.innerHTML = "BOOM!";
    // if value is not equal to the computer guess it changes the HTML of the recentGuess HTML element to send a message
    lastGuess.innerHTML = userGuess;
    // print the value of the input field to the screen
    console.log(recentGuess)
    // logs the value of recent guess to the console
  } else if (userGuess > computerGuess) {
    recentGuess.innerHTML = "That is too high";
    // if value is more than the computer guess it changes the HTML of the recentGuess HTML element to send a message
    lastGuess.innerHTML = userGuess;
    // print the value of the input field to the screen
    console.log(recentGuess)
    // logs the value of recent guess to the console
  } else if (userGuess < computerGuess) {
    recentGuess.innerHTML = "That is too low";
    // if value is less than the computer guess it changes the HTML of the recentGuess HTML element to send a message
    lastGuess.innerHTML = userGuess;
    // print the value of the input field to the screen
    console.log(recentGuess)
    // logs the value of recent guess to the console
  }
}
function showClear(){
  // declares a new function
  document.getElementById('clear').style.visibility = 'visible'
  // when fuction is called it changes the style of the css for an element (in this situation a button, from hidden to visible)
}
function clearInput(){
  guessElement.value = "";
  // when this fuction is called the value of the input field is set to an empty string
  document.getElementById('clear').style.visibility = 'hidden'
  // when fuction is called it changes the style of the css for an element (in this situation a button, from visible to hidden)
}
clearButton.addEventListener('click', clearInput)
// adds an event listener for a click on the clear button and calls the clearInput function
guessButton.addEventListener('click', checkGuess)
// adds an event listener for a click on the guess button and triggers the fuction checkGuess
