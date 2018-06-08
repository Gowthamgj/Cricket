"use strict";
exports.__esModule = true;
var playerOnStrike = null;
var Scorer = /** @class */ (function () {
    function Scorer() {
        this.totalScore = 0;
        this.listOfBatsman = [];
        this.battingOrder = [];
        this.bowlingOrder = [];
        this.totalOver = 0;
    }
    Scorer.prototype.addBatsman = function (batsman) {
        this.listOfBatsman.push(batsman);
        //playerOnStrike = this.listOfBatsman[0];
    };
    Object.defineProperty(Scorer.prototype, "strikeBatsMan", {
        // changeStrike() {
        //     if (playerOnStrike === this.listOfBatsman[0]) {
        //         playerOnStrike = this.listOfBatsman[1];
        //     } else {
        //         playerOnStrike = this.listOfBatsman[0];
        //     }
        // }
        get: function () {
            return playerOnStrike;
        },
        enumerable: true,
        configurable: true
    });
    Scorer.prototype.changeStrike = function (currentPlayerOnStrike) {
        //have to change values 
        var newPlayerOnStrike;
        if (currentPlayerOnStrike === this.listOfBatsman[0]) {
            newPlayerOnStrike = this.listOfBatsman[1];
        }
        else {
            newPlayerOnStrike = this.listOfBatsman[0];
        }
        return newPlayerOnStrike;
    };
    Scorer.prototype.insertNewPlayer = function (player) {
        if (playerOnStrike === this.listOfBatsman[0]) {
            this.battingOrder.push(this.listOfBatsman[1]);
            this.listOfBatsman[1] = player;
        }
        else {
            this.battingOrder.push(this.listOfBatsman[0]);
            this.listOfBatsman[0] = player;
        }
    };
    Scorer.prototype.calculateScore = function (run, ballNumber, bowler) {
        // Computation Logic
        // 1. Check if the run scored is odd or even.
        // 2. If odd, update score of player on strike and change strike
        // 3. If even, update score of player on strike.
        // 4. Increment total score by the run scored.
        // 5. If number of balls bowled is a mutiple of six, change strike.
        if (run % 2 === 1) {
            if (playerOnStrike) {
                //console.log(playerOnStrike.playerName+"his run"+run);
                playerOnStrike.addRuns(run);
                // Change strike
                playerOnStrike = this.changeStrike(playerOnStrike);
            }
        }
        else if (run % 2 === 0) {
            if (playerOnStrike) {
                //console.log(playerOnStrike.playerName+"his run"+run);                
                playerOnStrike.addRuns(run);
            }
        }
        this.totalScore += run;
        if ((ballNumber) % 6 === 0) {
            if (playerOnStrike) {
                playerOnStrike = this.changeStrike(playerOnStrike);
            }
            this.totalOver += 1;
        }
        bowler.addbowlerRuns(run);
    };
    Scorer.prototype.swap = function () {
        var temp;
        temp = this.listOfBatsman[0];
        this.listOfBatsman[0] = this.listOfBatsman[1];
        this.listOfBatsman[1] = temp;
        playerOnStrike = this.changeStrike(playerOnStrike);
    };
    Scorer.prototype.outStatus = function (status, type, fname, bname) {
        //have to change index values
        if (this.listOfBatsman[0] === playerOnStrike) {
            this.listOfBatsman[0].changeStatus(status, type, fname, bname);
        }
        else {
            this.listOfBatsman[1].changeStatus(status, type, fname, bname);
        }
    };
    Scorer.prototype.printScore = function () {
        this.battingOrder.push(this.listOfBatsman[0]);
        this.battingOrder.push(this.listOfBatsman[1]);
        console.log("Total score: " + this.totalScore);
        this.battingOrder.forEach(function (batsman) {
            console.log(batsman.playerName + " scored " + batsman.numberOfRuns + " faced " + batsman.numberOfBallsBatted + " status " + batsman.outStatus);
        });
        this.bowlingOrder.forEach(function (bowler) {
            console.log(bowler.playerName + "overs" + bowler.considerRuns + "overs" + bowler.bowledOver);
        });
    };
    return Scorer;
}());
exports.Scorer = Scorer;
