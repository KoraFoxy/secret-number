//Computer's choice
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const genNumber = () => randomIntFromInterval(1, 20);
let computerNumber = genNumber();

// User's choice
document.getElementById("checkButton").addEventListener("click", () => {
    const Input = document.getElementById("playerGuess");
    const playerNumber = parseInt(Input.value);
    const resultGame = document.getElementById("result");

    //game function
    //when Player enter the same number as computer
    if (playerNumber===computerNumber){
        resultGame.className = "alert alert-success text-center";
        resultGame.innerText = `You answered ${playerNumber}. This is correct answer. You won!`;
        resultGame.style.display = "block";
    }
    //when Player enter a number, that less than computer's number
    else if (playerNumber < computerNumber){
        resultGame.className = "alert alert-info text-center";
        resultGame.innerText = `You answered ${playerNumber}. The correct answer is bigger. Try one more time`;
        resultGame.style.display = "block";
    }
    //when Player enter a number, that bigger than computer's number
    else {
        resultGame.className = "alert alert-info text-center";
        resultGame.innerText = `You answered ${playerNumber}. The correct answer is less. Try one more time`;
        resultGame.style.display = "block";
    };
});

//Game reset
document.getElementById("resetButton").addEventListener("click", () => {
    document.getElementById("playerGuess").value = "";
    const resultGame = document.getElementById("result");
    resultGame.style.display = "none";
    computerNumber = genNumber();
});
