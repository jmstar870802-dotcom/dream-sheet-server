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
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.ReportContentScalarFieldEnum = exports.ReportHeaderScalarFieldEnum = exports.CellMemberScalarFieldEnum = exports.LeaderMemberScalarFieldEnum = exports.MemberScalarFieldEnum = exports.ContiDtlScalarFieldEnum = exports.ContiScalarFieldEnum = exports.SheetScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Sheet: 'Sheet',
    Conti: 'Conti',
    ContiDtl: 'ContiDtl',
    Member: 'Member',
    LeaderMember: 'LeaderMember',
    CellMember: 'CellMember',
    ReportHeader: 'ReportHeader',
    ReportContent: 'ReportContent'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.SheetScalarFieldEnum = {
    id: 'id',
    title: 'title',
    key: 'key',
    lyrics: 'lyrics',
    notation: 'notation',
    img_url: 'img_url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ContiScalarFieldEnum = {
    id: 'id',
    contiDate: 'contiDate',
    contiNote: 'contiNote',
    contiLeader: 'contiLeader',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ContiDtlScalarFieldEnum = {
    id: 'id',
    contiNotation: 'contiNotation',
    conti_img_url: 'conti_img_url',
    contiOrder: 'contiOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ContiId: 'ContiId',
    SheetId: 'SheetId'
};
exports.MemberScalarFieldEnum = {
    id: 'id',
    userName: 'userName',
    birthday: 'birthday',
    mngrSe: 'mngrSe'
};
exports.LeaderMemberScalarFieldEnum = {
    id: 'id',
    LeaderId: 'LeaderId',
    UseYn: 'UseYn'
};
exports.CellMemberScalarFieldEnum = {
    id: 'id',
    MemberId: 'MemberId',
    LeaderId: 'LeaderId'
};
exports.ReportHeaderScalarFieldEnum = {
    id: 'id',
    writeDt: 'writeDt',
    meetingPlace: 'meetingPlace',
    bigoMaster: 'bigoMaster',
    LeaderId: 'LeaderId'
};
exports.ReportContentScalarFieldEnum = {
    id: 'id',
    memberNm: 'memberNm',
    wesDay: 'wesDay',
    sundayAf: 'sundayAf',
    sundayNt: 'sundayNt',
    cellMeeting: 'cellMeeting',
    bigo: 'bigo',
    reportId: 'reportId'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map