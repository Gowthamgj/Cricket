"use strict";
exports.__esModule = true;
var batsman_1 = require("./batsman");
var scorer_1 = require("./scorer");
var bowler_1 = require("./bowler");
var scorer = new scorer_1.Scorer();
var ballCount = 1;
var given = [
    {
        runsScored: 0,
        isOut: true,
        dismissalType: 'Run Out',
        dismissalInfo: {
            fielderName: 'Root',
            hasBatsmanCrossed: true
        },
        batsmanName: 'Rahul',
        bowlerName: 'Anderson'
    },
    {
        runsScored: 1,
        isOut: false,
        batsmanName: 'Rohit',
        bowlerName: 'Anderson'
    },
    {
        runsScored: 4,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'Anderson'
    },
    {
        runsScored: 1,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'Anderson'
    }, {
        runsScored: 6,
        isOut: false,
        batsmanName: 'Rohit',
        bowlerName: 'Anderson'
    },
    {
        runsScored: 6,
        isOut: false,
        batsmanName: 'Rohit',
        bowlerName: 'Anderson'
    },
    {
        runsScored: 6,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'woakes'
    },
    {
        runsScored: 1,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'woakes'
    },
    {
        runsScored: 0,
        isOut: true,
        dismissalType: 'Caught',
        dismissalInfo: {
            fielderName: 'Butcher',
            hasBatsmanCrossed: false
        },
        batsmanName: 'Rohit',
        bowlerName: 'woakes'
    },
    {
        runsScored: 4,
        isOut: false,
        batsmanName: 'Yuvraj',
        bowlerName: 'woakes'
    },
];
var set1 = new Set();
given.forEach(function (ball) {
    set1.add(ball.batsmanName);
});
function check(ele) {
    return ele.playerName == currentBowler.playerName;
}
var battingOrder = set1[Symbol.iterator]();
var batsman1 = new batsman_1.Batsman(battingOrder.next()['value']);
var batsman2 = new batsman_1.Batsman(battingOrder.next()['value']);
var currentBowler = new bowler_1.Bowler(given[0].bowlerName);
currentBowler.addOvers();
scorer.addBatsman(batsman1);
scorer.addBatsman(batsman2);
given.forEach(function (ball) {
    if (currentBowler.playerName != ball.bowlerName) {
        scorer.bowlingOrder.push(currentBowler);
        currentBowler = new bowler_1.Bowler(ball.bowlerName);
        if (scorer.bowlingOrder.find(check) != undefined) {
            currentBowler = scorer.bowlingOrder.find(check);
        }
        currentBowler.addOvers();
    }
    if (ball.isOut === false) {
        scorer.calculateScore(ball.runsScored, ballCount, currentBowler);
    }
    else if (ball.isOut === true) {
        //console.log("true block"+ball.runsScored);
        scorer.calculateScore(ball.runsScored, ballCount, currentBowler);
        scorer.outStatus(ball.isOut, ball.dismissalType, ball.dismissalInfo.fielderName, ball.bowlerName);
        var batsman1_1 = new batsman_1.Batsman(battingOrder.next()['value']);
        scorer.insertNewPlayer(batsman1_1);
        if (ball.dismissalInfo.hasBatsmanCrossed === true) {
            scorer.swap();
        }
        if (ball.dismissalType != "Run Out") {
            currentBowler.addwicketsTaken();
        }
    }
    ballCount++;
});
scorer.printScore();
