// ---------------------------------
// -------- GLOBAL VARIABLE --------
// ---------------------------------

// Player and game state
var player1Turn, player2Turn, gamePlaying;
// Total marked boxes:
var marked = [null, null, null, null, null, null, null, null, null]
// Player 1 marked values:
var markPlayer1 = [null, null, null, null, null, null, null, null, null]
// Player 2 marked values:
var markPlayer2 = [null, null, null, null, null, null, null, null, null]
// Win count & win states:
var player1Win, player2Win, matchTied;
var gameCount = 0, tieCount = 0;
var player1WinCount = 0, player2WinCount = 0;

// ---------------------------------------------------------------------------
// -------------------------------- FUNCTIONS --------------------------------
// ---------------------------------------------------------------------------

// Init/Newgame Function:
function init() {
    // Reset players and game states:
    gamePlaying = true; player1Turn = true; player2Turn = false;
    // Reset marked values:
    marked = [null, null, null, null, null, null, null, null, null]
    // Reset Player 1, marked values:
    markPlayer1 = [null, null, null, null, null, null, null, null, null]
    // Reset Player 2, marked values:
    markPlayer2 = [null, null, null, null, null, null, null, null, null]
    // Default / reset, winning / tie status:
    player1Win = undefined; player2Win = undefined; matchTied = undefined;
    // Default / reset, all marked images:
    document.getElementById("b11-img").src = "";
    document.getElementById("b12-img").src = "";
    document.getElementById("b13-img").src = "";
    document.getElementById("b21-img").src = "";
    document.getElementById("b22-img").src = "";
    document.getElementById("b23-img").src = "";
    document.getElementById("b31-img").src = "";
    document.getElementById("b32-img").src = "";
    document.getElementById("b33-img").src = "";
    // Removing winner Classes:
    document.getElementById("sub-b11").classList.remove("winner-class");
    document.getElementById("sub-b12").classList.remove("winner-class");
    document.getElementById("sub-b13").classList.remove("winner-class");
    document.getElementById("sub-b21").classList.remove("winner-class");
    document.getElementById("sub-b22").classList.remove("winner-class");
    document.getElementById("sub-b23").classList.remove("winner-class");
    document.getElementById("sub-b31").classList.remove("winner-class");
    document.getElementById("sub-b32").classList.remove("winner-class");
    document.getElementById("sub-b33").classList.remove("winner-class");
    // Default/reset result-box:
    document.getElementById("result-box").innerHTML = "&nbsp;";
}

// Match Reset Function:
function resetMatch(){
    tieCount = 0; gameCount = 0; player1WinCount = 0; player2WinCount = 0;
    document.getElementById("tieCountBox").innerText = tieCount;
    document.getElementById("gameCountBox").innerText = gameCount;
    document.getElementById("player1WinCountBox").innerText = player1WinCount;
    document.getElementById("player2WinCountBox").innerText = player2WinCount;
    init();
}


// Check Result Function:
function checkResult() {

    // Winning possiblities:
        // Row: 0 1 2 (B11 B12 B13)
        if(markPlayer1[0] && markPlayer1[1] && markPlayer1[2]){
            player1Win = true; gamePlaying = false;
            document.getElementById("sub-b11").classList.add("winner-class");
            document.getElementById("sub-b12").classList.add("winner-class");
            document.getElementById("sub-b13").classList.add("winner-class");
        } else if(markPlayer2[0] && markPlayer2[1] && markPlayer2[2]){
            player2Win = true; gamePlaying = false;
            document.getElementById("sub-b11").classList.add("winner-class");
            document.getElementById("sub-b12").classList.add("winner-class");
            document.getElementById("sub-b13").classList.add("winner-class");
        }
        // Row: 3 4 5 (B21 B22 B23)
        if(markPlayer1[3] && markPlayer1[4] && markPlayer1[5]){
            player1Win = true; gamePlaying = false;
            document.getElementById("sub-b21").classList.add("winner-class");
            document.getElementById("sub-b22").classList.add("winner-class");
            document.getElementById("sub-b23").classList.add("winner-class");
        } else if(markPlayer2[3] && markPlayer2[4] && markPlayer2[5]){
            player2Win = true; gamePlaying = false;
            document.getElementById("sub-b21").classList.add("winner-class");
            document.getElementById("sub-b22").classList.add("winner-class");
            document.getElementById("sub-b23").classList.add("winner-class");
        }
        // Row: 6 7 8 (B31 B32 B33)
        if(markPlayer1[6] && markPlayer1[7] && markPlayer1[8]){
            player1Win = true; gamePlaying = false;
            document.getElementById("sub-b31").classList.add("winner-class");
            document.getElementById("sub-b32").classList.add("winner-class");
            document.getElementById("sub-b33").classList.add("winner-class");
        } else if(markPlayer2[6] && markPlayer2[7] && markPlayer2[8]){
            player2Win = true; gamePlaying = false;
            document.getElementById("sub-b31").classList.add("winner-class");
            document.getElementById("sub-b32").classList.add("winner-class");
            document.getElementById("sub-b33").classList.add("winner-class");
        }
        // Column: 0 3 6 (B11 B21 B31)
        if(markPlayer1[0] && markPlayer1[3] && markPlayer1[6]){
            player1Win = true; gamePlaying = false;
            document.getElementById("sub-b11").classList.add("winner-class");
            document.getElementById("sub-b21").classList.add("winner-class");
            document.getElementById("sub-b31").classList.add("winner-class");
        } else if(markPlayer2[0] && markPlayer2[3] && markPlayer2[6]){
            player2Win = true; gamePlaying = false; 
            document.getElementById("sub-b11").classList.add("winner-class");
            document.getElementById("sub-b21").classList.add("winner-class");
            document.getElementById("sub-b31").classList.add("winner-class");
        }
        // Column: 1 4 7 (B12 B22 B32)
        if(markPlayer1[1] && markPlayer1[4] && markPlayer1[7]){
            player1Win = true; gamePlaying = false;
            document.getElementById("sub-b12").classList.add("winner-class");
            document.getElementById("sub-b22").classList.add("winner-class");
            document.getElementById("sub-b32").classList.add("winner-class");
        } else if(markPlayer2[1] && markPlayer2[4] && markPlayer2[7]){
            player2Win = true; gamePlaying = false;
            document.getElementById("sub-b12").classList.add("winner-class");
            document.getElementById("sub-b22").classList.add("winner-class");
            document.getElementById("sub-b32").classList.add("winner-class");
        }
        // Column: 2 5 8 (B13 B23 B33)
        if(markPlayer1[2] && markPlayer1[5] && markPlayer1[8]){
            player1Win = true; gamePlaying = false;
            document.getElementById("sub-b13").classList.add("winner-class");
            document.getElementById("sub-b23").classList.add("winner-class");
            document.getElementById("sub-b33").classList.add("winner-class");
        } else if(markPlayer2[2] && markPlayer2[5] && markPlayer2[8]){
            player1Win = true; gamePlaying = false;
            document.getElementById("sub-b13").classList.add("winner-class");
            document.getElementById("sub-b23").classList.add("player1-win");
            document.getElementById("sub-b33").classList.add("winner-class");
        }
        // Cross: 0 4 8 (B11 B22 B33)
        if(markPlayer1[0] && markPlayer1[4] && markPlayer1[8]){
            player1Win = true; gamePlaying = false;
            document.getElementById("sub-b11").classList.add("winner-class");
            document.getElementById("sub-b22").classList.add("winner-class");
            document.getElementById("sub-b33").classList.add("winner-class");
        } else if(markPlayer2[0] && markPlayer2[4] && markPlayer2[8]){
            player2Win = true; gamePlaying = false;
            document.getElementById("sub-b11").classList.add("winner-class");
            document.getElementById("sub-b22").classList.add("winner-class");
            document.getElementById("sub-b33").classList.add("winner-class");
        }
        // Cross: 2 4 6 (B13 B22 B31)
        if(markPlayer1[2] && markPlayer1[4] && markPlayer1[6]){
            player1Win = true; gamePlaying = false;
            document.getElementById("sub-b13").classList.add("winner-class");
            document.getElementById("sub-b22").classList.add("winner-class");
            document.getElementById("sub-b31").classList.add("winner-class");
        } else if(markPlayer2[2] && markPlayer2[4] && markPlayer2[6]){
            player1Win = true; gamePlaying = false;
            document.getElementById("sub-b13").classList.add("winner-class");
            document.getElementById("sub-b22").classList.add("winner-class");
            document.getElementById("sub-b31").classList.add("winner-class");
        }

    // Tie possiblity:
        if(marked[0]){
            if(marked[1]){
                if(marked[2]){
                    if(marked[3]){
                        if(marked[4]){
                            if(marked[5]){
                                if(marked[6]){
                                    if(marked[7]){
                                        if(marked[8]){
                                            matchTied = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    // Check the Results:
        if(player1Win) {
            gameCount += 1; player1WinCount += 1;
            document.getElementById("gameCountBox").innerText = gameCount;
            document.getElementById("player1WinCountBox").innerText = player1WinCount;
            document.getElementById("result-box").innerText = "Player 1 wins!";
        } else if (player2Win) {
            gameCount += 1; player2WinCount += 1;
            document.getElementById("gameCountBox").innerText = gameCount;
            document.getElementById("player2WinCountBox").innerText = player2WinCount;
            document.getElementById("result-box").innerText = "Player 2 wins!";
        } else if(matchTied) {
            tieCount += 1; gameCount += 1; 
            document.getElementById("tieCountBox").innerText = tieCount;
            document.getElementById("gameCountBox").innerText = gameCount;
            document.getElementById("result-box").innerText = "Match is Tied!";
        }
}



// ------------------------------------------------------------------------------
// -------------------------------- Game Playing --------------------------------
// ------------------------------------------------------------------------------

init();
resetMatch();
checkResult();

// B11
document.getElementById("b11").addEventListener("click", function(){
    if(!marked[0] && gamePlaying) {
        if(player1Turn){
            document.getElementById("b11-img").src = "resources/img/circle.png";
            player1Turn = false; player2Turn = true;
            // Mark Value:
            markPlayer1[0] = true;
        } else if (player2Turn) {
            document.getElementById("b11-img").src = "resources/img/cross.png";
            player1Turn = true; player2Turn = false;
            // Mark Value:
            markPlayer2[0] = true;
        }
    marked[0] = true;
    checkResult();
    }
});

// B12
document.getElementById("b12").addEventListener("click", function(){
    if(!marked[1] && gamePlaying) {
        if(player1Turn){
            document.getElementById("b12-img").src = "resources/img/circle.png";
            player1Turn = false; player2Turn = true;
            // Mark Value:
            markPlayer1[1] = true;
        } else if (player2Turn) {
            document.getElementById("b12-img").src = "resources/img/cross.png";
            player1Turn = true; player2Turn = false;
            // Mark Value:
            markPlayer2[1] = true;
        }
    marked[1] = true;
    checkResult();
    }
});

// B13
document.getElementById("b13").addEventListener("click", function(){
    if(!marked[2] && gamePlaying) {
        if(player1Turn){
            document.getElementById("b13-img").src = "resources/img/circle.png";
            player1Turn = false; player2Turn = true;
            // Mark Value:
            markPlayer1[2] = true;
        } else if (player2Turn) {
            document.getElementById("b13-img").src = "resources/img/cross.png";
            player1Turn = true; player2Turn = false;
            // Mark Value: 
            markPlayer2[2] = true;
        }
    marked[2] = true;
    checkResult();
    }
});

// B21
document.getElementById("b21").addEventListener("click", function(){
    if(!marked[3] && gamePlaying) {
        if(player1Turn){
            document.getElementById("b21-img").src = "resources/img/circle.png";
            player1Turn = false; player2Turn = true;
            // Mark Value:
            markPlayer1[3] = true;
        } else if (player2Turn) {
            document.getElementById("b21-img").src = "resources/img/cross.png";
            player1Turn = true; player2Turn = false;
            // Mark Value:
            markPlayer2[3] = true;
        }
    marked[3] = true;
    checkResult();
    }
});

// B22
document.getElementById("b22").addEventListener("click", function(){
    if(!marked[4] && gamePlaying) {
        if(player1Turn){
            document.getElementById("b22-img").src = "resources/img/circle.png";
            player1Turn = false; player2Turn = true;
            // Mark Value:
            markPlayer1[4] = true;
        } else if (player2Turn) {
            document.getElementById("b22-img").src = "resources/img/cross.png";
            player1Turn = true; player2Turn = false;
            // Mark Value:
            markPlayer2[4] = true;
        }
    marked[4] = true;
    checkResult();
    }
});

// B23
document.getElementById("b23").addEventListener("click", function(){
    if(!marked[5] && gamePlaying) {
        if(player1Turn){
            document.getElementById("b23-img").src = "resources/img/circle.png";
            player1Turn = false; player2Turn = true;
            // Mark Value:
            markPlayer1[5] = true;
        } else if (player2Turn) {
            document.getElementById("b23-img").src = "resources/img/cross.png";
            player1Turn = true; player2Turn = false;
            // Mark Value:
            markPlayer2[5] = true;
        }
    marked[5] = true;
    checkResult();
    }
});

// B31
document.getElementById("b31").addEventListener("click", function(){
    if(!marked[6] && gamePlaying){
        if(player1Turn){
            document.getElementById("b31-img").src = "resources/img/circle.png";
            player1Turn = false; player2Turn = true;
            // Mark Value:
            markPlayer1[6] = true;
        } else if (player2Turn) {
            document.getElementById("b31-img").src = "resources/img/cross.png";
            player1Turn = true; player2Turn = false;
            // Mark Value:
            markPlayer2[6] = true;
        }
    marked[6] = true;
    checkResult();
    }
});

// B32
document.getElementById("b32").addEventListener("click", function(){
    if(!marked[7] && gamePlaying){
        if(player1Turn){
            document.getElementById("b32-img").src = "resources/img/circle.png";
            player1Turn = false; player2Turn = true;
            // Mark Value:
            markPlayer1[7] = true;
        } else if (player2Turn) {
            document.getElementById("b32-img").src = "resources/img/cross.png";
            player1Turn = true; player2Turn = false;
            // Mark Value:
            markPlayer2[7] = true;
        }
    marked[7] = true;
    checkResult();
    }
});

// B33
document.getElementById("b33").addEventListener("click", function(){
    if(!marked[8] && gamePlaying){
        if(player1Turn){
            document.getElementById("b33-img").src = "resources/img/circle.png";
            player1Turn = false; player2Turn = true;
            // Mark Value:
            markPlayer1[8] = true;
        } else if (player2Turn) {
            document.getElementById("b33-img").src = "resources/img/cross.png";
            player1Turn = true; player2Turn = false;
            // Mark Value:
            markPlayer2[8] = true;
        }
    marked[8] = true;
    checkResult();
    }
});

// -------------------------------------------------------------------------
// -------------------------------- BUTTONS --------------------------------
// -------------------------------------------------------------------------
document.getElementById("newgame-btn").addEventListener("click", init);
document.getElementById("resetmatch-btn").addEventListener("click", resetMatch);



/*
(*) DEVELOPER DETAILS:
Developed by: Hamza Ahmad
Facebook: https://www.facebook.com/profile.php?id=100071784130712
LinkedIn: https://www.linkedin.com/in/hamza-ahmad-1506b31bb
Github: https://github.com/hamzalicious
*/