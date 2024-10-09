//0 = rock
//1 = paper
//2 = scissor
//rock > scissor but rock < paper
//paper > rock but paper < scissor
// scissor > paper but scissor < rock

var player;
var tie = 0;
var win = 0;
var lose = 0;
var winning = 2;
var container = document.getElementById('result');
var container2 = document.getElementById('Retry');
var container3 = document.getElementById('playerChoice');
var container4 = document.getElementById('computerChoice');
var compChoice = "";
var bato = "bato.jpg";
var papel = "papel.jpg";
var scissor = "scissor.jpg";



function RandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function RockButton() {
    player = 0;
    ChoiceImage();
}

function PaperButton() {
    player = 1;
    ChoiceImage();
}

function ScissorButton() {
    player = 2;
    ChoiceImage();
}

function ChoiceImage() {
    let imgChoice = "";

    if(player == 0){
        imgChoice = bato;
    }
    else if(player == 1){
        imgChoice = papel;
    }
    else if(player == 2){
        imgChoice = scissor;
    }

    container3.innerHTML = '<img src="' + imgChoice + ' " alt="Player choice"> <img src="';
    container4.innerHTML = '';
    document.getElementById('loader').style.display = 'block';
}

function PlayButton() {
    var opponent = RandomNumber(3);

    if(opponent == 0){
        compChoice = bato;
    }
    else if(opponent == 1){
        compChoice = papel;
    }
    else if(opponent == 2){
        compChoice = scissor;
    }
    container4.innerHTML = '<img src="' + compChoice + ' " alt="Computer choice"></img>';
    document.getElementById('loader').style.display = 'none';

        if(player == opponent) {
            console.log("TIE!");
            tie++;
        }
        else if((player == 0) && (opponent == 2)) {
            console.log("You win!");
            win++;
            document.getElementById('score1').textContent = win;
            Check()
        }
        else if((player == 2) && (opponent == 0)) {
            console.log("You lose!");
            lose++;
            document.getElementById('score2').textContent = lose;
            Check()
        }
        else if((player == 1) && (opponent == 0)) {
            console.log("You win!");
            win++;
            document.getElementById('score1').textContent = win;
            Check()
        }
        else if((player == 0) && (opponent == 1)) {
            console.log("You lose!");
            lose++;
            document.getElementById('score2').textContent = lose;
            Check()
        }
        else if((player == 2) && (opponent == 1)) {
            console.log("You win!");
            win++;
            document.getElementById('score1').textContent = win;
            Check()
        }
        else if((player == 1) && (opponent == 2)) {
            console.log("You lose!");
            lose++;
            document.getElementById('score2').textContent = lose;
            Check()
        }
}

function RetryButton() {
    tie = 0;
    win = 0;
    lose = 0;
    document.getElementById('score1').textContent = win;
    document.getElementById('score2').textContent = lose;
    container.remove();
    container2.remove();
    document.querySelectorAll('button').forEach(button => {
        button.disabled = false;
    });
}


function Check() {
    console.log(lose, win, winning);
    if(win == winning) {
        document.body.appendChild(container);
        document.body.appendChild(container2);
        container.textContent = "Player Wins the Game!";
        disableButtons() 
        container2.innerHTML = '<button onclick = "RetryButton()">Retry</button>'
    }
    else if (lose == winning) {
        document.body.appendChild(container);
        document.body.appendChild(container2);
        container.textContent = "Computer Wins!";
        disableButtons()
        container2.innerHTML = '<button onclick = "RetryButton()">Retry</button>'
    }

    compChoice = "graybox.jpg";
}

function disableButtons() {
    document.querySelectorAll('button').forEach(button => {
        button.disabled = true;
    });
}