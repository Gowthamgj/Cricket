"use strict";
exports.__esModule = true;
var DismissalInfo = /** @class */ (function () {
    function DismissalInfo() {
        this.fielderName = null;
        this.bowlerName = null;
    }
    DismissalInfo.prototype.fixOutInfo = function (fname, bname) {
        this.fielderName = fname;
        this.bowlerName = bname;
    };
    return DismissalInfo;
}());
exports.DismissalInfo = DismissalInfo;
