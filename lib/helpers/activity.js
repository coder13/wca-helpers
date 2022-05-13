"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = require("./event");
function parseActivityCode(activityCode) {
    var _a = activityCode.match(/^(\w+)(?:-r(\d+))?(?:-g(\d+))?(?:-a(\d+))?$/), e = _a[1], r = _a[2], g = _a[3], a = _a[4];
    return {
        eventId: e,
        roundNumber: r ? parseInt(r, 10) : null,
        groupNumber: g ? parseInt(g, 10) : null,
        attemptNumber: a ? parseInt(a, 10) : null
    };
}
exports.parseActivityCode = parseActivityCode;
;
function activityCodeToName(activityCode) {
    var _a = parseActivityCode(activityCode), eventId = _a.eventId, roundNumber = _a.roundNumber, groupNumber = _a.groupNumber, attemptNumber = _a.attemptNumber;
    return [
        eventId && event_1.getEventName(eventId),
        roundNumber && "Round " + roundNumber,
        groupNumber && "Group " + groupNumber,
        attemptNumber && "Attempt " + attemptNumber
    ].filter(function (x) { return x; }).join(', ');
}
exports.activityCodeToName = activityCodeToName;
;
//# sourceMappingURL=activity.js.map