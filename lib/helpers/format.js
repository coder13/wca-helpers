"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFormatName(format) {
    switch (format) {
        case '1': return 'Best of 1';
        case '2': return 'Best of 2';
        case '3': return 'Best of 3';
        case 'a': return 'Average of 5';
        case 'm': return 'Mean of 3';
    }
}
exports.getFormatName = getFormatName;
function getFormatRanking(format) {
    switch (format) {
        case '1':
        case '2':
        case '3':
            return ['single'];
        case 'a':
        case 'm':
            return ['average', 'single'];
    }
}
exports.getFormatRanking = getFormatRanking;
function getFormatExpectedSolves(format) {
    switch (format) {
        case '1': return 1;
        case '2': return 2;
        case '3': return 3;
        case 'a': return 5;
        case 'm': return 3;
    }
}
exports.getFormatExpectedSolves = getFormatExpectedSolves;
function getFormatTrimBest(format) {
    switch (format) {
        case '1':
        case '2':
        case '3':
        case 'm':
            return 0;
        case 'a':
            return 1;
    }
}
exports.getFormatTrimBest = getFormatTrimBest;
function getFormatTrimWorst(format) {
    switch (format) {
        case '1':
        case '2':
        case '3':
        case 'm':
            return 0;
        case 'a':
            return 1;
    }
}
exports.getFormatTrimWorst = getFormatTrimWorst;
//# sourceMappingURL=format.js.map