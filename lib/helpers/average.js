"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("./result");
function Ao5(results) {
    results = results.filter(function (r) { return r !== 0; });
    if (results.some(result_1.isMultiResult))
        return null; // cannot calculate average or mean for MBLD
    if (results.length !== 5)
        return null;
    if (results.filter(function (r) { return r < 0; }).length > 1) {
        // can have at most 1 DNF or DNS for Ao5
        return -1;
    }
    var comparableResults = results.map(function (result) {
        var r = parseInt("" + result, 10);
        if (r === -1)
            return Number.MAX_VALUE - 2; // normalize DNS and DNF to high numbers, so we can treat them as normal results, while
        if (r === -2)
            return Number.MAX_VALUE - 1; // keeping DNF better than DNS
        return r;
    });
    var best = Math.min.apply(Math, comparableResults);
    var worst = Math.max.apply(Math, comparableResults);
    delete comparableResults[comparableResults.indexOf(best)];
    delete comparableResults[comparableResults.indexOf(worst)];
    var avg = Math.round(comparableResults.reduce(function (a, b) { return parseInt("" + a, 10) + parseInt("" + b, 10); }, 0) / 3);
    if (avg > 60000) {
        avg = Math.round(avg / 100) * 100;
    }
    return avg;
}
exports.Ao5 = Ao5;
function Mo3(results) {
    results = results.filter(function (r) { return r !== 0; }); // remove non-existing attempts
    if (results.some(result_1.isMultiResult))
        return null; // cannot calculate average or mean for MBLD
    if (results.length !== 3)
        return null;
    if (results.filter(function (r) { return r < 0; }).length > 0) {
        // we have at least 1 DNF or DNS, so mean is DNF by default
        return -1;
    }
    var avg = Math.round(results.reduce(function (a, b) { return parseInt("" + a, 10) + parseInt("" + b, 10); }, 0) / 3);
    if (avg > 60000) {
        avg = Math.round(avg / 100) * 100;
    }
    return avg;
}
exports.Mo3 = Mo3;
//# sourceMappingURL=average.js.map