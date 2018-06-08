"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var player_1 = require("./player");
var Bowler = /** @class */ (function (_super) {
    __extends(Bowler, _super);
    function Bowler(name) {
        var _this = _super.call(this, name) || this;
        _this.oversBowled = 0;
        _this.runsConsider = 0;
        _this.maidenOvers = 0;
        _this.wicketsTaken = 0;
        return _this;
    }
    Object.defineProperty(Bowler.prototype, "bowledOver", {
        get: function () {
            return this.oversBowled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bowler.prototype, "maidenOver", {
        get: function () {
            return this.maidenOvers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bowler.prototype, "considerRuns", {
        get: function () {
            return this.runsConsider;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bowler.prototype, "wickets", {
        get: function () {
            return this.wicketsTaken;
        },
        enumerable: true,
        configurable: true
    });
    Bowler.prototype.addOvers = function () {
        this.oversBowled += 1;
    };
    Bowler.prototype.addMaiden = function () {
        this.maidenOvers += 1;
    };
    Bowler.prototype.addbowlerRuns = function (runs) {
        this.runsConsider += runs;
    };
    Bowler.prototype.addwicketsTaken = function () {
        this.wicketsTaken += 1;
    };
    return Bowler;
}(player_1.Player));
exports.Bowler = Bowler;
