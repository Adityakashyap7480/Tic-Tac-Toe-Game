let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")


let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"
            box.style.color = "blue"
            turnO = false;
            box.disabled = true;
        } else {
            box.innerText = "X"
            box.style.color = "orange"
            turnO = true;
            box.disabled = true;
        }
        checkWinner();
    })
})

let checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    };
}

let resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide")

}
let disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
let enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

let showWinner = (Winner) => {
    msg.innerText = `Congratulations, winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}


newBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)

