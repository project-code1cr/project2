let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const gencompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawgame = () => {
  // console.log(" game was draw");
  msg.innerText = "Draw!";
};

const showwinner = (userwin, choiceId, compchoice) => {
  if (userwin) {
    userscore++;
    userscorePara.innerText = userscore;
    // console.log("YOU WIN");
    msg.innerText = "You Win !";
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorePara.innerText = compscore;
    // console.log("You Lose");
    msg.innerText = "You Lose !";
    msg.style.backgroundColor = "red";
  }
};

const playgame = (choiceId) => {
  console.log("user choice = ", choiceId);
  const compchoice = gencompchoice();
  console.log("Comp Choice = ", compchoice);

  if (choiceId === compchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (choiceId === " rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (choiceId === "paper") {
      userwin = compchoice === "scissors" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin, choiceId, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    // console.log("choice was clicked", choiceId);
    playgame(choiceId);
  });
});
