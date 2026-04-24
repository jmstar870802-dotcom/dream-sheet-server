"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaExclude = prismaExclude;
const client_1 = require("../../generated/prisma/client");
function prismaExclude(type, omit) {
    const result = {};
    for (const key in client_1.Prisma[`${type}ScalarFieldEnum`]) {
        if (!omit.includes(key)) {
            result[key] = true;
        }
    }
    return result;
}
//# sourceMappingURL=prisma-exclude.js.map