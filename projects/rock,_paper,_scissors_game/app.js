const btnRule = document.getElementById("rules");
const overlay = document.getElementById("overlay");
const btnClose = document.getElementById("close");
const playgroundPick = document.getElementById("playground-pick");
const playground = document.getElementById("playground");
const playerpick1 = document.getElementById("playerpick1");
const playerpick2 = document.getElementById("playerpick2");
const btnRestart = document.getElementById("btnRestart");
const message = document.getElementById("message");
const txtMessage = document.getElementById("txtMessage");
const scorepoints = document.getElementById("scorepoints");
var scores = 0;

const popup = () => {
    overlay.style.display = "block";
};
const popuphide = () => {
    overlay.style.display = "none";
};
const restartGame = () => {
    playgroundPick.style.display = "block";
    playground.style.display = "none";
    playerpick1.className = "";
    playerpick2.className = "";
    message.style.display = "none";
};

const main = () => {
    btnRule.addEventListener("click", popup);
    btnClose.addEventListener("click", popuphide);
    btnRestart.addEventListener("click", restartGame);
};

const randNum = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
};
const pick = (pickNum) => {
    playgroundPick.style.display = "none";
    playground.style.display = "block";
    playerpick1.classList.add(icon(pickNum));
    setTimeout(function () {
        var houseNum = randNum(1, 3);
        var houseCard = icon(houseNum);
        playerpick2.classList.add(houseCard);
        txtMessage.innerHTML = findWinner(pickNum, houseNum);
        scorepoints.textContent = scores;
        message.style.display = "block";
    }, 500);
};
const findWinner = (user, computer) => {
    var result = "";
    if (user == computer) {
        result = "Draw";
    } else if (
        (user == "1" && computer == "3") ||
        (user == "2" && computer == "1") ||
        (user == "3" && computer == "2")
    ) {
        result = "You Win";
        scores++;
    } else {
        result = "You Lose";
        scores--;
    }
    return result;
};
const icon = (num) => {
    switch (num) {
        case 1:
            return "paperpick";
            break;
        case 2:
            return "scissorspick";
            break;
        case 3:
            return "rockpick";
            break;
    }
};
main();
