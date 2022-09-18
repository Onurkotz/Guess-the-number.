const getClick = document.getElementById("guesses");
const answer = Math.floor(Math.random() * 100) + 1;
let getAnswer = 0;
getAnswer = answer;
console.log(answer);
let countClick = 0;
document.getElementById("try").addEventListener("click", onSubmit);
document.getElementById("new").addEventListener("click", newTry);
function onSubmit(e) {
  e.preventDefault();
  const getNumber = document.getElementById("guess").value;
  const header = document.getElementById("header");
  if (getNumber < getAnswer) {
    header.innerHTML = "My number is greater than " + getNumber + ".";
    countClick++;
    getClick.innerHTML = countClick + " times you have guessed.";
  } else if (getNumber > getAnswer) {
    header.innerHTML = "My number is less than " + getNumber + ".";
    countClick++;
    getClick.innerHTML = countClick + " times you have guessed.";
  } else {
    header.innerHTML =
      "Congratulations. You got it. My number is " + getNumber + ".";
  }
}
function newTry(e) {
  const newAnswer = Math.floor(Math.random() * 100) + 1;
  getAnswer = newAnswer;
  getClick.innerHTML = "You did not guess yet.";
  document.getElementById("guess").value = 0;
  countClick = 0;
  console.log(getAnswer);
}
