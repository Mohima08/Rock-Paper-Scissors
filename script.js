let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
};

const updateScoreAndMessage = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        msg.innerText = "Game was a draw. Play again.";
        msg.style.backgroundColor = "#081b31";
    } else {
        const userWin = (userChoice === "rock" && compChoice === "scissors") ||
                        (userChoice === "paper" && compChoice === "rock") ||
                        (userChoice === "scissors" && compChoice === "paper");
        updateScoreAndMessage(userWin, userChoice, compChoice);
    }
};

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        playGame(userChoice);
    });
});
