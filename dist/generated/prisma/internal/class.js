"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.7.0",
    "engineVersion": "75cbdc1eb7150937890ad5465d861175c6624711",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider     = \"prisma-client\"\n  output       = \"../generated/prisma\"\n  moduleFormat = \"commonjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel Sheet {\n  id        Int      @id @default(autoincrement())\n  title     String\n  key       String\n  lyrics    String\n  notation  String\n  img_url   String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @default(now())\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Sheet\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"key\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lyrics\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"notation\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"img_url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"Sheet.findUnique\",\"Sheet.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"Sheet.findFirst\",\"Sheet.findFirstOrThrow\",\"Sheet.findMany\",\"data\",\"Sheet.createOne\",\"Sheet.createMany\",\"Sheet.createManyAndReturn\",\"Sheet.updateOne\",\"Sheet.updateMany\",\"Sheet.updateManyAndReturn\",\"create\",\"update\",\"Sheet.upsertOne\",\"Sheet.deleteOne\",\"Sheet.deleteMany\",\"having\",\"_count\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"Sheet.groupBy\",\"Sheet.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"title\",\"key\",\"lyrics\",\"notation\",\"img_url\",\"createdAt\",\"updatedAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"set\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "MAsQCxwAACUAMB0AAAQAEB4AACUAMB8CAAAAASABACcAISEBACcAISIBACcAISMBACcAISQBACcAISVAACgAISZAACgAIQEAAAABACABAAAAAQAgCxwAACUAMB0AAAQAEB4AACUAMB8CACYAISABACcAISEBACcAISIBACcAISMBACcAISQBACcAISVAACgAISZAACgAIQADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAIHwIAAAABIAEAAAABIQEAAAABIgEAAAABIwEAAAABJAEAAAABJUAAAAABJkAAAAABAQgAAAkAIAgfAgAAAAEgAQAAAAEhAQAAAAEiAQAAAAEjAQAAAAEkAQAAAAElQAAAAAEmQAAAAAEBCAAACwAwAQgAAAsAMAgfAgAwACEgAQAuACEhAQAuACEiAQAuACEjAQAuACEkAQAuACElQAAvACEmQAAvACECAAAAAQAgCAAADgAgCB8CADAAISABAC4AISEBAC4AISIBAC4AISMBAC4AISQBAC4AISVAAC8AISZAAC8AIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgBRUAACkAIBYAACoAIBcAAC0AIBgAACwAIBkAACsAIAscAAAaADAdAAAXABAeAAAaADAfAgAbACEgAQAcACEhAQAcACEiAQAcACEjAQAcACEkAQAcACElQAAdACEmQAAdACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIAscAAAaADAdAAAXABAeAAAaADAfAgAbACEgAQAcACEhAQAcACEiAQAcACEjAQAcACEkAQAcACElQAAdACEmQAAdACENFQAAHwAgFgAAJAAgFwAAHwAgGAAAHwAgGQAAHwAgJwIAAAABKAIAAAAEKQIAAAAEKgIAAAABKwIAAAABLAIAAAABLQIAAAABLgIAIwAhDhUAAB8AIBgAACIAIBkAACIAICcBAAAAASgBAAAABCkBAAAABCoBAAAAASsBAAAAASwBAAAAAS0BAAAAAS4BACEAIS8BAAAAATABAAAAATEBAAAAAQsVAAAfACAYAAAgACAZAAAgACAnQAAAAAEoQAAAAAQpQAAAAAQqQAAAAAErQAAAAAEsQAAAAAEtQAAAAAEuQAAeACELFQAAHwAgGAAAIAAgGQAAIAAgJ0AAAAABKEAAAAAEKUAAAAAEKkAAAAABK0AAAAABLEAAAAABLUAAAAABLkAAHgAhCCcCAAAAASgCAAAABCkCAAAABCoCAAAAASsCAAAAASwCAAAAAS0CAAAAAS4CAB8AIQgnQAAAAAEoQAAAAAQpQAAAAAQqQAAAAAErQAAAAAEsQAAAAAEtQAAAAAEuQAAgACEOFQAAHwAgGAAAIgAgGQAAIgAgJwEAAAABKAEAAAAEKQEAAAAEKgEAAAABKwEAAAABLAEAAAABLQEAAAABLgEAIQAhLwEAAAABMAEAAAABMQEAAAABCycBAAAAASgBAAAABCkBAAAABCoBAAAAASsBAAAAASwBAAAAAS0BAAAAAS4BACIAIS8BAAAAATABAAAAATEBAAAAAQ0VAAAfACAWAAAkACAXAAAfACAYAAAfACAZAAAfACAnAgAAAAEoAgAAAAQpAgAAAAQqAgAAAAErAgAAAAEsAgAAAAEtAgAAAAEuAgAjACEIJwgAAAABKAgAAAAEKQgAAAAEKggAAAABKwgAAAABLAgAAAABLQgAAAABLggAJAAhCxwAACUAMB0AAAQAEB4AACUAMB8CACYAISABACcAISEBACcAISIBACcAISMBACcAISQBACcAISVAACgAISZAACgAIQgnAgAAAAEoAgAAAAQpAgAAAAQqAgAAAAErAgAAAAEsAgAAAAEtAgAAAAEuAgAfACELJwEAAAABKAEAAAAEKQEAAAAEKgEAAAABKwEAAAABLAEAAAABLQEAAAABLgEAIgAhLwEAAAABMAEAAAABMQEAAAABCCdAAAAAAShAAAAABClAAAAABCpAAAAAAStAAAAAASxAAAAAAS1AAAAAAS5AACAAIQAAAAAAATIBAAAAAQEyQAAAAAEFMgIAAAABMwIAAAABNAIAAAABNQIAAAABNgIAAAABAAAAAAUVAAYWAAcXAAgYAAkZAAoAAAAAAAUVAAYWAAcXAAgYAAkZAAoBAgECAwEFBgEGBwEHCAEJCgEKDAILDQMMDwENEQIOEgQREwESFAETFQIaGAUbGQs"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map