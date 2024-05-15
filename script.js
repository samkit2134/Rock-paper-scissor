let userscore = 0;
let computerscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const messagecontainer = document.querySelector(".msg-container");
const usersco = document.querySelector("#user-score");
const computersco = document.querySelector("#computer-score");
const reset = document.querySelector("#btn");

const genComputerchoice = () => {
  //rock , paper,scissor;
  const options = ["rock", "paper", "scissor"];
  let index = Math.floor(Math.random() * 3); // jis bhi no k beech mai chahiye usse multiply kro
  const computerchoice = options[index];
  return computerchoice;
};
const showwinner = (userwin) => {
  if (userwin) {
    userscore++;
    msg.innerText = "You are the winner 🤩🤩";
    usersco.innerText = userscore;
  } else {
    computerscore++;
    msg.innerText = "computer has won 😭😢 ";
    computersco.innerText = computerscore;
  }
};

const playgame = (userchoice) => {
  let userwin = true;
  console.log("user choice = ", userchoice);
  const computerchoice = genComputerchoice();
  console.log("computer choice is =", computerchoice);
  //generate computer choice - use a function for that ;
  if (userchoice === computerchoice) {
    console.log(" The game is draw");
    msg.innerText = "Game is draw,play again";
  } else {
    if (userchoice === "rock") {
      userwin = computerchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = computerchoice === "scissor" ? false : true;
    } else {
      //userchoice===scissor
      userwin = computerchoice === "rock" ? false : true;
    }
    showwinner(userwin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    choice.classList.add("notselected");
    const userchoice = choice.getAttribute("id");
    choice.classList.remove("notselected");

    playgame(userchoice);
  });
});
reset.addEventListener("click", () => {
  console.log(" trying to reset");
  usersco.innerText = 0;
  computersco.innerText = 0;
});
