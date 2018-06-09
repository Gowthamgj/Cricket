"use strict";
exports.__esModule = true;
var DismissalInfo = /** @class */ (function () {
    function DismissalInfo() {
        this.fielderName = null;
        this.bowlerName = null;
    }
    Object.defineProperty(DismissalInfo.prototype, "fname", {
        get: function () {
            return this.fielderName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DismissalInfo.prototype, "bname", {
        get: function () {
            return this.bowlerName;
        },
        enumerable: true,
        configurable: true
    });
    DismissalInfo.prototype.fixOutInfo = function (fname, bname) {
        this.fielderName = fname;
        this.bowlerName = bname;
    };
    return DismissalInfo;
}());
exports.DismissalInfo = DismissalInfo;
