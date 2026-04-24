"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeWhitespace = removeWhitespace;
function removeWhitespace(value) {
    if (typeof value === 'string') {
        return value.replace(/\s+/g, '');
    }
    return value.map((str) => str.replace(/\s+/g, '')).join('');
}
//# sourceMappingURL=remove-whitepsace.js.map