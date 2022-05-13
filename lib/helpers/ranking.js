"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var average_1 = require("./average");
function rank(results, rankingOrder) {
    var averageCache = {};
    var bestCache = {};
    // first calc bests and averages where applicable
    results.forEach(function (r) {
        var plain = r.attempts.map(function (a) { return a.result; });
        if (rankingOrder.indexOf('average') > -1) {
            var average = r.attempts.length === 5 ? average_1.Ao5(plain) : average_1.Mo3(plain);
            if (average < 0) {
                average = Number.MAX_VALUE; // average can only be DNF, so no need to distinguish between DNF and DNS
            }
            averageCache[r.personId] = average;
        }
        var valid = plain.map(function (x) { return parseInt("" + x, 10); }).filter(function (x) { return x > 0; });
        if (valid.length > 0) {
            bestCache[r.personId] = Math.min.apply(Math, valid);
        }
    });
    // then order the results
    results.sort(function (a, b) {
        for (var i = 0; i < rankingOrder.length; i++) {
            switch (rankingOrder[i]) {
                case 'average':
                    if (averageCache[a.personId] && averageCache[b.personId]) {
                        if (averageCache[a.personId] < averageCache[b.personId])
                            return -1;
                        if (averageCache[a.personId] > averageCache[b.personId])
                            return 1;
                    }
                    if (averageCache[a.personId] && !averageCache[b.personId])
                        return -1;
                    if (!averageCache[a.personId] && averageCache[b.personId])
                        return 1;
                    break;
                case 'single':
                    if (bestCache[a.personId] && bestCache[b.personId]) {
                        if (bestCache[a.personId] < bestCache[b.personId])
                            return -1;
                        if (bestCache[a.personId] > bestCache[b.personId])
                            return 1;
                    }
                    if (bestCache[a.personId] && !bestCache[b.personId])
                        return -1;
                    if (!bestCache[a.personId] && bestCache[b.personId])
                        return 1;
            }
        }
        // neither has a better average or single, so normally we'd sort by name here
        // as name is unavailable here however, we'll sort by personId, as that's all we have...
        if (a.personId < b.personId)
            return -1;
        if (a.personId > b.personId)
            return 1;
        return 0;
    });
    // then calculate and set rankings
    var currentRanking = 1;
    var numWithCurrentRanking = 0;
    results.forEach(function (result, ix) {
        if (ix > 0) {
            // compare with previous to see if we start a new ranking, or if this is the same ranking
            var sameRanking_1 = true;
            var cpid_1 = result.personId;
            var ppid_1 = results[ix - 1].personId;
            rankingOrder.forEach(function (ro) {
                switch (ro) {
                    case 'average':
                        if (averageCache[cpid_1] !== averageCache[ppid_1])
                            sameRanking_1 = false;
                        break;
                    case 'single':
                        if (bestCache[cpid_1] !== bestCache[ppid_1])
                            sameRanking_1 = false;
                        break;
                }
            });
            if (!sameRanking_1) {
                currentRanking += numWithCurrentRanking;
                numWithCurrentRanking = 0;
            }
        }
        result.ranking = currentRanking;
        numWithCurrentRanking++;
    });
    // now return the results ordered and with ranking applied
    return results;
}
exports.rank = rank;
//# sourceMappingURL=ranking.js.map