let boxes= document.querySelectorAll(".box");
let newbtn= document.querySelector("#new-btn");
let rstbtn= document.querySelector("#reset-btn");
let msg= document.querySelector("#msg");
let msgcontainer= document.querySelector(".msg-container");
let turnO= true;
let count=0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        if (turnO) {
            box.innerText= "O";
            turnO= false;
        }
        else {
            box.innerText="X";
            turnO=true;
            }
        box.disabled= true;
        count++;
        let iswinner= checkwinner();
        if (count===9 && !iswinner) {
           gamedraw(); 
            
        }

    })
  })

  const gamedraw=()=>{
    msg.innerText="Game is draw."
    msgcontainer.classList.remove("hide");
    disableboxes();
    
  }

  const resetgame=()=>{
    turnO=true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");

}

  const enableboxes=()=>{
      for(let box of boxes){
          box.disabled=false;
          box.innerText="";
        }
  };

  const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
        }
 }
 
  const showwinner=(winner)=>{
    msg.innerText=`the winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
    };
   
  const checkwinner = () => {
    for(let pattern of winPatterns){
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;
        if (pos1!="" && pos2!=""&& pos3!="") {
            if (pos1===pos2 && pos2===pos3) {
                showwinner(pos1);
                return true;
            }

            
        }
    }
  };   

  rstbtn.addEventListener("click",resetgame);
  newbtn.addEventListener("click",resetgame);
  