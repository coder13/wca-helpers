"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var time_1 = require("./time");
function isDnf(result) {
    return "" + result === '-1';
}
exports.isDnf = isDnf;
function isDns(result) {
    return "" + result === '-2';
}
exports.isDns = isDns;
function isMultiResult(result) {
    return /^(0|1)\d{9}/.test("" + result);
    // this is a save check, as the lowest MBLD formatted result would be 0010000000.
    // this equates to 100000 seconds, which is nearly 28 hours
}
exports.isMultiResult = isMultiResult;
function decodeMultiResult(result) {
    var r = "" + result;
    if (r === '-1') {
        return { isDnf: true };
    }
    if (r === '-2') {
        return { isDns: true };
    }
    return r[0] === '1' ? decodeOldMultiResult(result) : decodeNewMultiResult(result);
}
exports.decodeMultiResult = decodeMultiResult;
function encodeMultiResult(result) {
    if (isDnfMultiResult(result))
        return '-1';
    if (isDnsMultiResult(result))
        return '-2';
    if (isMultiResultDnf(result))
        return '-1';
    var missed = result.attempted - result.solved;
    var dd = '' + (99 - (result.solved - missed));
    var tt = '' + Math.round((result.centiseconds || 9999900) / 100); // multi results are always rounded to seconds, 99999 is used for 'unknown'
    var mm = '' + missed;
    return "0" + padZero(dd, 2) + padZero(tt, 5) + padZero(mm, 2);
}
exports.encodeMultiResult = encodeMultiResult;
function isMultiResultDnf(result) {
    if (isDnfMultiResult(result))
        return true;
    if (isDnsMultiResult(result))
        return true;
    if (result.solved < 2)
        return true;
    var solved = result.solved;
    var notSolved = result.attempted - solved;
    if (solved - notSolved < 0)
        return true;
    return false;
}
exports.isMultiResultDnf = isMultiResultDnf;
function formatMultiResult(result) {
    if (isDnfMultiResult(result))
        return 'DNF';
    if (isDnsMultiResult(result))
        return 'DNS';
    if (isMultiResultDnf(result))
        return 'DNF';
    var formatted = result.solved + "/" + result.attempted;
    if (result.centiseconds && result.centiseconds !== 9999900) {
        var fcs = time_1.formatCentiseconds(result.centiseconds);
        formatted += " " + fcs.substring(0, fcs.length - 3); // chop off the decimal part
    }
    return formatted;
}
exports.formatMultiResult = formatMultiResult;
function isDnfMultiResult(result) {
    return result.hasOwnProperty('isDnf');
}
function isDnsMultiResult(result) {
    return result.hasOwnProperty('isDns');
}
function decodeOldMultiResult(result) {
    var r = "" + result;
    var ss = parseInt(r.substr(1, 2), 10);
    var aa = parseInt(r.substr(3, 2), 10);
    var tt = parseInt(r.substr(5, 5), 10);
    var res = { attempted: aa, solved: 99 - ss };
    if (tt !== 99999) {
        res.centiseconds = tt * 100;
    }
    return res;
}
function decodeNewMultiResult(result) {
    var r = "" + result;
    var dd = parseInt(r.substr(1, 2), 10);
    var tt = parseInt(r.substr(3, 5), 10);
    var mm = parseInt(r.substr(8, 2), 10);
    var difference = 99 - dd;
    var solved = difference + mm;
    var attempted = solved + mm;
    var res = { attempted: attempted, solved: solved };
    if (tt !== 99999) {
        res.centiseconds = tt * 100;
    }
    return res;
}
function padZero(str, length) {
    var s = str;
    for (var i = 0; i < length; i++) {
        s = '0' + s;
    }
    return s.substr(-1 * length, length);
}
//# sourceMappingURL=result.js.map