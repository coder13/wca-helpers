"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isWcaId(wcaId) {
    return /^\d{4}[A-Z]{4}\d{2}$/.test(wcaId.toUpperCase());
}
exports.isWcaId = isWcaId;
//# sourceMappingURL=wcaId.js.map