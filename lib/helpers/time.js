"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatCentiseconds(centiTime) {
    if (centiTime === -1) {
        return 'DNF';
    }
    if (centiTime === -2) {
        return 'DNS';
    }
    var cs = centiTime % 100;
    var s = Math.floor(centiTime / 100) % 60;
    var m = Math.floor(centiTime / 6000);
    if (m > 0) {
        return m + ":" + prefix(s) + "." + prefix(cs);
    }
    return s + "." + prefix(cs);
}
exports.formatCentiseconds = formatCentiseconds;
function prefix(n) {
    if (n < 10) {
        return "0" + n;
    }
    return "" + n;
}
//# sourceMappingURL=time.js.map