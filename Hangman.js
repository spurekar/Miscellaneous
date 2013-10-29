var gamestate = {
    guesses: 0,
    numwrong: 0,
    lettersleft: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    currentword: "HANGMAN",
    currentguess: "_______",

    gameover: function() {
        if (this.currentword === this.currentguess) {
            console.log("Yay you win!");
            return true;
        }
        else if (this.numwrong == 5) {
            console.log("Sucks, you lost!");
            return true;
        }
        else if (this.lettersleft.length == 0) {
            console.log("You've run out of letters.");
            return true;
        }
        else {
            return false;
        };
    }
};

function main() {
    while (true) {
        var place = -2;
        var found = false;

        //Print current game
        console.log("current guess: " + gamestate.currentguess);
        console.log("you have " + (5-gamestate.numwrong) + " guesses left" );

        //ask for user letter guess
        guess = prompt("guess a letter:").toUpperCase();

        // if guess is in letters left
        if (gamestate.lettersleft.indexOf(guess) != -1) {

            //find if in the word
            place = gamestate.currentword.indexOf(guess);

            //find where in the word
            while (place > -1) {
                found = true;
                //add to current guess
                gamestate.currentguess = gamestate.currentguess.substr(0,place) + guess + gamestate.currentguess.substr(place + 1);

                //search the rest of the string
                place = gamestate.currentword.indexOf(guess,place+1);
            };

            //guessed a wrong letter
            if (found == false) {
                //increase number wrong
                gamestate.numwrong ++;
            };

            //remove from letters left
            place = gamestate.lettersleft.indexOf(guess);
            gamestate.lettersleft.splice(place,1);
            console.log(gamestate.lettersleft);

            //check if game is over
            over = gamestate.gameover();
        };
        if (over == true) {
           break;
        } 
    }; 
    console.log("Game over!");
    console.log("The word was: " + gamestate.currentword);
};

