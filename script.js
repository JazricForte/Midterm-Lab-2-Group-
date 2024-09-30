function RandomNumber(max) {
    return Math.floor(Math.random() * max);
}

var player;

function TryAgain() {
    player = prompt("Select 0, 1, or 2");
}

//0 = rock
//1 = paper
//2 = scissor
//rock > scissor but rock < paper
//paper > rock but paper < scissor
// scissor > paper but scissor < rock
function PlayButton() {
    var opponent = RandomNumber(3);

    TryAgain();
    if((player != 0) && (player != 1) && (player != 2)) {
        TryAgain();
    }
    else {
        if(player == opponent) {
            console.log("TIE!");
        }
        else if((player == 0) && (opponent == 2)) {
            console.log("You win!");
        }
        else if((player == 2) && (opponent == 0)) {
            console.log("You lose!");
        }
        else if((player == 1) && (opponent == 0)) {
            console.log("You win!");
        }
        else if((player == 0) && (opponent == 1)) {
            console.log("You lose!");
        }
        else if((player == 2) && (opponent == 1)) {
            console.log("You win!");
        }
        else if((player == 1) && (opponent == 2)) {
            console.log("You lose!");
        }
    }
}

