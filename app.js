let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
// let idx = 0;
let btns = ["orange", "pink", "blue", "green"];


let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {   //yaha hmne sidha documnet pe hi event listner laga diya jisse koi bhi key press hone pe game chale
    if (started == false) {
        console.log("game started");
        started = true;
        levelup();
    }
    ///yaha se hatya thalevel up 
});


function levelup() {
    userseq = [];
    level++
    h2.innerText = `Level ${level}`;

    //random nutton chose 
    let random = Math.floor(Math.random() * 4);      /// ye puraa level up vala code samjh mao nahi aya hai and yaad rakh hmne btn1 btn2 ye class rakhi hai button ki mam ne yelllow purple ye 
    let rancolor = btns[random]            // yahs bhi rancolor enke naam ayaye hai 
    let ranbutton = document.querySelector(`.${rancolor}`)
    gameseq.push(rancolor);
    console.log(gameseq);

    gameflash(ranbutton);
}

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}



// when user press the button 

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}



function checkAns(idx) {
    // let idx = level - 1;
    console.log(userseq);
    console.log(gameseq);

    // console.log(`current level ${level}`); // yaha mam ne douybke cot uysekiye the main

    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelup, 1000);

        }
    } else {
        h2.innerHTML = `Game Over! Your Score Was <b>${level}</br> <br>Press any key to Restart again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "blanchedalmond";
        }, 250)
        reset();
    }
}





function btnpress() {
    let btn = this;   // yaha ye btn alag hai matlb 
    userflash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    checkAns(userseq.length - 1);
}


let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {        // ye upper vale btn se alg hai 
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
