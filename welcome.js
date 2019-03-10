let computerGuess = Math.floor(Math.random() * 100) + 1;

const guessElement = document.getElementById("enterGuess")
const guessButton = document.getElementById("guess")
const clearButton = document.getElementById("clear")
const recentGuess = document.getElementById("recentGuess")

function checkGuess(){
  let userGuess = Number(guessElement.value);
  let max = Number(guessElement.max);
  let min = Number(guessElement.min);

  if (isNaN(userGuess)){
    recentGuess.innerHTML = "guess need to be a number";
    console.log(recentGuess)
  } else if (userGuess > max || userGuess < min) {
    recentGuess.innerHTML = "number has to be between 1 and 100";
    lastGuess.innerHTML = userGuess;
    console.log(recentGuess)
  } else if (userGuess === computerGuess) {
    recentGuess.innerHTML = "BOOM!";
    lastGuess.innerHTML = userGuess;
    console.log(recentGuess)
  } else if (userGuess > computerGuess) {
    recentGuess.innerHTML = "That is too high";
    lastGuess.innerHTML = userGuess;
    console.log(recentGuess)
  } else if (userGuess < computerGuess) {
    recentGuess.innerHTML = "That is too low";
    lastGuess.innerHTML = userGuess;
    console.log(recentGuess)
  }
}
function showClear(){
  document.getElementById('clear').style.visibility = 'visible'
}
function clearInput(){
  guessElement.value = "";
  document.getElementById('clear').style.visibility = 'hidden'
}
clearButton.addEventListener('click', clearInput)
guessButton.addEventListener('click', checkGuess)
