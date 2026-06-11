import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Sheet: "Sheet";
    readonly Conti: "Conti";
    readonly ContiDtl: "ContiDtl";
    readonly Member: "Member";
    readonly LeaderMember: "LeaderMember";
    readonly CellMember: "CellMember";
    readonly ReportHeader: "ReportHeader";
    readonly ReportContent: "ReportContent";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const SheetScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly key: "key";
    readonly lyrics: "lyrics";
    readonly notation: "notation";
    readonly img_url: "img_url";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SheetScalarFieldEnum = (typeof SheetScalarFieldEnum)[keyof typeof SheetScalarFieldEnum];
export declare const ContiScalarFieldEnum: {
    readonly id: "id";
    readonly contiDate: "contiDate";
    readonly contiNote: "contiNote";
    readonly contiLeader: "contiLeader";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ContiScalarFieldEnum = (typeof ContiScalarFieldEnum)[keyof typeof ContiScalarFieldEnum];
export declare const ContiDtlScalarFieldEnum: {
    readonly id: "id";
    readonly contiNotation: "contiNotation";
    readonly conti_img_url: "conti_img_url";
    readonly contiOrder: "contiOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly ContiId: "ContiId";
    readonly SheetId: "SheetId";
};
export type ContiDtlScalarFieldEnum = (typeof ContiDtlScalarFieldEnum)[keyof typeof ContiDtlScalarFieldEnum];
export declare const MemberScalarFieldEnum: {
    readonly id: "id";
    readonly userName: "userName";
    readonly birthday: "birthday";
    readonly mngrSe: "mngrSe";
};
export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum];
export declare const LeaderMemberScalarFieldEnum: {
    readonly id: "id";
    readonly LeaderId: "LeaderId";
    readonly UseYn: "UseYn";
};
export type LeaderMemberScalarFieldEnum = (typeof LeaderMemberScalarFieldEnum)[keyof typeof LeaderMemberScalarFieldEnum];
export declare const CellMemberScalarFieldEnum: {
    readonly id: "id";
    readonly MemberId: "MemberId";
    readonly LeaderId: "LeaderId";
};
export type CellMemberScalarFieldEnum = (typeof CellMemberScalarFieldEnum)[keyof typeof CellMemberScalarFieldEnum];
export declare const ReportHeaderScalarFieldEnum: {
    readonly id: "id";
    readonly writeDt: "writeDt";
    readonly meetingPlace: "meetingPlace";
    readonly bigoMaster: "bigoMaster";
    readonly LeaderId: "LeaderId";
};
export type ReportHeaderScalarFieldEnum = (typeof ReportHeaderScalarFieldEnum)[keyof typeof ReportHeaderScalarFieldEnum];
export declare const ReportContentScalarFieldEnum: {
    readonly id: "id";
    readonly memberNm: "memberNm";
    readonly wesDay: "wesDay";
    readonly sundayAf: "sundayAf";
    readonly sundayNt: "sundayNt";
    readonly cellMeeting: "cellMeeting";
    readonly bigo: "bigo";
    readonly reportId: "reportId";
};
export type ReportContentScalarFieldEnum = (typeof ReportContentScalarFieldEnum)[keyof typeof ReportContentScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
