"use strict";
exports.__esModule = true;
var playerOnStrike = null;
var chalk = require('chalk');
var tab = require('table-master');
console.log(chalk.blue('India') + ' Vs ' + chalk.red('England'));
var Scorer = /** @class */ (function () {
    function Scorer() {
        this.totalScore = 0;
        this.listOfBatsman = [];
        this.battingOrder = [];
        this.bowlingOrder = [];
        this.totalOver = 0;
        this.ballRuns = [];
        this.totalWickets = 0;
    }
    Scorer.prototype.addBatsman = function (batsman) {
        this.listOfBatsman.push(batsman);
        playerOnStrike = this.listOfBatsman[0];
    };
    Object.defineProperty(Scorer.prototype, "strikeBatsMan", {
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
            this.battingOrder.push(this.listOfBatsman[0]);
            this.listOfBatsman[0] = player;
            playerOnStrike = this.listOfBatsman[0];
        }
        else {
            this.battingOrder.push(this.listOfBatsman[1]);
            this.listOfBatsman[1] = player;
            playerOnStrike = this.listOfBatsman[1];
        }
    };
    Scorer.prototype.calculateScore = function (run, ballNumber, bowler) {
        // Computation Logic
        // 1. Check if the run scored is odd or even.
        // 2. If odd, update score of player on strike and change strike
        // 3. If even, update score of player on strike.
        // 4. Increment total score by the run scored.
        // 5. If number of balls bowled is a mutiple of six, change strike.
        var maidenFlag = 0;
        this.ballRuns.push(run);
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
            for (var iter = 0; iter < this.ballRuns.length; iter++) {
                if (this.ballRuns[iter] != 0) {
                    maidenFlag = 1;
                    break;
                }
            }
            if (maidenFlag == 0) {
                bowler.addMaiden();
            }
            //this.totalOver++;
            this.ballRuns = [];
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
        //console.log(playerOnStrike.playerName+"inoutstatus");
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
        //console.log(`Total score: ${this.totalScore}`);
        var outputBat = [];
        this.battingOrder.forEach(function (batsman) {
            // console.log(`${batsman.playerName} scored ${batsman.numberOfRuns} faced ${batsman.numberOfBallsBatted} status ${batsman.outStatus}`);
            var batting = {};
            if (batsman.outStatus == true) {
                batting["Batsman Name"] = batsman.playerName;
                if (batsman.outType == "Run Out") {
                    batting["status"] = "(Run Out)";
                }
                else if (batsman.outType == "Caught") {
                    if (batsman.outInfo.fname == batsman.outInfo.bname) {
                        batting["status"] = "c & b" + batsman.outInfo.bname;
                    }
                    else {
                        batting["status"] = "c " + batsman.outInfo.fname + " b  " + batsman.outInfo.bname;
                    }
                }
            }
            else if (batsman.outStatus == false) {
                batting["Batsman Name"] = chalk.green(batsman.playerName + "*");
                batting["status"] = "Not Out";
            }
            batting["score"] = batsman.numberOfRuns + "(" + batsman.numberOfBallsBatted + ")";
            outputBat.push(batting);
        });
        var outputBall = [];
        this.bowlingOrder.forEach(function (bowl) {
            var bowlObj = {};
            bowlObj["Bowler"] = bowl.playerName;
            bowlObj["Overs"] = bowl.bowledOver;
            // console.log(bowl.considerRuns);
            if (bowl.maidenOver === 0) {
                bowlObj["Maiden"] = "0";
            }
            else {
                bowlObj["Maiden"] = bowl.maidenOver;
            }
            if (bowl.considerRuns === 0) {
                bowlObj["Runs"] = "0";
            }
            else {
                bowlObj["Runs"] = bowl.considerRuns;
            }
            if (bowl.wickets === 0) {
                bowlObj["Wickets"] = "0";
            }
            else {
                bowlObj["Wickets"] = bowl.wickets;
            }
            outputBall.push(bowlObj);
        });
        console.table(outputBat, "lcc");
        console.log("Total Score\t\t" + chalk.yellow(this.totalScore) + "  for " + chalk.red(this.totalWickets) + "  in " + this.totalOver + "  Overs " + "(RR -" + (this.totalScore / this.totalOver) + ")");
        console.table(outputBall, "lcccc");
    };
    return Scorer;
}());
exports.Scorer = Scorer;
