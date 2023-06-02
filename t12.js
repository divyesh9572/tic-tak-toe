console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let aq = document.querySelector(".info");
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;
let gamestartmusic = new Audio("ting.mp3");
let heading = document.querySelector(".heading");


// Function to change the turn
function changeTurn(turn) {
    // document.getElementsByClassName("info").style.color = "red";
    if (turn == 'X') {
        return '0'
    } else {
        return 'X';
    }
}


// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {

        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {

            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";

            gameover.play();
            setTimeout(clean, 5000);




        }
    })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.textContent === '') {
            boxtext.textContent = turn;

            turn = changeTurn(turn);



            checkWin();

            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                aq.style.color = "red";
                gamestartmusic.play();
                setInterval(highlight, 1000);
                removeclass();
                
               



            }
        }
    })
})

// Add onclick listener to reset button
let reset = document.getElementById("reset");
const a = reset.addEventListener('click', clean);



function clean() {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false

    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    aq.style.color = "black";

}


function highlight(){
    heading.classList.add("animate__bounceIn");
}

function removeclass(){
    heading.classList.remove("animate__bounceIn");
}


