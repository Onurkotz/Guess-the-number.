$(document).ready(function () {
  var answer = Math.floor(Math.random() * 100) + 1;
  console.log(answer);
  var guesscount = 0;
  console.log(guesscount);

  $("form").on("submit", function (e) {
    e.preventDefault();
    var guess = +$("input#guess").val();
    console.log(guess);
    guesscount++;
    $("#guesses").text(guesscount);

    if (guess > answer) {
      var highmessage = "My number is less than " + guess;
      $("#header").text(highmessage);
    } else if (guess < answer) {
      var lowmessage = "My number is greater than " + guess;
      $("#header").text(lowmessage);
    } else {
      var congrat = "Congratulations " + guess + "is the number";
      $("#header").text(congrat);
    }
  });

  $("input:text").focus(function () {
    $(this).val("");
  });

  $("a").on("click", function (e) {
    e.preventDefault();

    answer = Math.floor(Math.random() * 100) + 1;
    $("p").text("Guess a number from 1 to 100.");
    console.log(answer);
    guesscount = 0;
  });
});
