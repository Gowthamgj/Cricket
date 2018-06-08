"use strict";
exports.__esModule = true;
var Player = /** @class */ (function () {
    // name: string;
    // constructor(playerName: string) {
    //     this.name = playerName;
    // }
    function Player(name) {
        this.name = name;
    }
    Object.defineProperty(Player.prototype, "playerName", {
        // getName(): string {
        //     return this.name;
        // }
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}());
exports.Player = Player;
