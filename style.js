let userScore = 0;
let compScore = 0;
let userScore_Span = document.getElementById("user-score");
let compScore_Span = document.getElementById("comp-score");
let scoreBord_div = document.querySelector(".score-bord");

let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");

function getCompChoise() {
  const choise = ["r", "p", "s"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choise[randomNumber];
}

function convertToWord(letter) {
  if (letter == "r") return "rock";
  if (letter == "p") return "paper";
  return "scissors";
}

function win(useChoise, compChoise) {
  userScore++;
  userScore_Span.innerHTML = userScore;
  var smallUserChoice = "user".fontsize(3).sub();
  var smallCompChoice = "comp".fontsize(3).sub();
  result_p.innerHTML =
    convertToWord(useChoise) +
    smallUserChoice +
    "beat" +
    "  " +
    convertToWord(compChoise) +
    smallCompChoice +
    "you wins ";
  document.getElementById(useChoise).classList.add("green_glow");
  setTimeout(
    () => document.getElementById(useChoise).classList.remove("green_glow"),
    555
  );
}
//setTimeout(function(){console.log('lipu sweety')
//},3000);
function lose(useChoise, compChoise) {
  compScore += 1;
  compScore_Span.innerHTML = compScore;
  var smallUserChoice = "user".fontsize(3).sub();
  var smallCompChoice = "comp".fontsize(3).sub();
  result_p.innerHTML =
    convertToWord(compChoise) +
    smallCompChoice +
    "beat" +
    "  " +
    convertToWord(useChoise) +
    smallUserChoice +
    "you lose ";
  document.getElementById(useChoise).classList.add("red_glow");
  setTimeout(
    () => document.getElementById(useChoise).classList.remove("red_glow"),
    555
  );
}
function draw(useChoise, compChoise) {
  var smallUserChoice = "user".fontsize(3).sub();
  var smallCompChoice = "comp".fontsize(3).sub();
  result_p.innerHTML =
    convertToWord(compChoise) +
    smallCompChoice +
    "equal" +
    "  " +
    convertToWord(useChoise) +
    smallUserChoice +
    "match is draw";
  document.getElementById(useChoise).classList.add("brawn_glow");
  setTimeout(
    () => document.getElementById(useChoise).classList.remove("brawn_glow"),
    555
  );
}

function game(userChoise) {
  let compChoise = getCompChoise();
  switch (userChoise + compChoise) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoise, compChoise);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoise, compChoise);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoise, compChoise);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}
main();
