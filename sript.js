let boxes = document.querySelectorAll(".gamebox");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let playerO = true;

const winner = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


boxes.forEach ((gamebox) =>{
    gamebox.addEventListener("click", () => {
        console.log("clicked");
        if(playerO){
            gamebox.innerText = "O";
            playerO = false;
            gamebox.color = "green";
        }
        else{
            gamebox.innerText = "X";
            playerO = true;
            gamebox.color = "yellow";
        }
        gamebox.disabled = true;
        checkWinner();
        
    });
});

const deactivate = () =>{

    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const activate = () =>{

    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
};


const resetgame = ()=>{

    playerO = true;
    activate();
    msgcontainer.classList.add("hide");

};


const showWinner = (winner) => {

    msg.innerText = `Yayy! You Won ${winner}`;
    msgcontainer.classList.remove("hide");
    deactivate();
    
};

const checkWinner = () => {

    for (let pattern of winner){

    let p1 = boxes[pattern[0]].innerText;
    let p2 = boxes[pattern[1]].innerText;
    let p3 = boxes[pattern[2]].innerText;
    
    if(p1 != "" && p2 != "" && p3 != "")
    {
        if(p1===p2 && p2===p3)
        {
            console.log("Winner",p1);
            showWinner(p1);
        }
    }
    
}
};

newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
