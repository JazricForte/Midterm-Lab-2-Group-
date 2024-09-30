//0 = rock
//1 = paper
//2 = scissor
//rock > scissor but rock < paper
//paper > rock but paper < scissor
// scissor > paper but scissor < rock

var player;
var totalscore;
var tie = 0;
    var win = 0;
    var lose = 0;

function RandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function RockButton() {
    player = 0;
}

function PaperButton() {
    player = 1;
}

function ScissorButton() {
    player = 2;
}

function PlayButton() {
    var opponent = RandomNumber(3);

        if(player == opponent) {
            console.log("TIE!");
            tie++;
        }
        else if((player == 0) && (opponent == 2)) {
            console.log("You win!");
            win++;
        }
        else if((player == 2) && (opponent == 0)) {
            console.log("You lose!");
            lose++;
        }
        else if((player == 1) && (opponent == 0)) {
            console.log("You win!");
            win++;
        }
        else if((player == 0) && (opponent == 1)) {
            console.log("You lose!");
            lose++;
        }
        else if((player == 2) && (opponent == 1)) {
            console.log("You win!");
            win++;
        }
        else if((player == 1) && (opponent == 2)) {
            console.log("You lose!");
            lose++;
        }

    
}

function Scoreboard() {
    var container = document.getElementById('')

}

function Roundcount() {

}



function RemoveButtons() {

}


function RetryButton() {

}

