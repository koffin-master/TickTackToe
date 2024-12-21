let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];

const resetGame = ()=>{
    let turn0 = true;
    enableBtn();
    msgContainer.classList.add("hide")

}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        // box.innerText = "clicked"
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBtn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBtn = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner)=>{
    msg.innerText = `Guddi urao ${winner} tum`;
    msgContainer.classList.remove("hide");
    disableBtn();
};


const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val && pos1val === pos3val) {
                console.log("winner", pos1val)

                showWinner(pos1val);
            }
        }
}
}

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);