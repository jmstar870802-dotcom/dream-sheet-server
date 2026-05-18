import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Sheet: "Sheet";
    readonly Member: "Member";
    readonly LeaderMember: "LeaderMember";
    readonly CellMember: "CellMember";
    readonly ReportHeader: "ReportHeader";
    readonly ReportContent: "ReportContent";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "sheet" | "member" | "leaderMember" | "cellMember" | "reportHeader" | "reportContent";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Sheet: {
            payload: Prisma.$SheetPayload<ExtArgs>;
            fields: Prisma.SheetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SheetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SheetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SheetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SheetPayload>;
                };
                findFirst: {
                    args: Prisma.SheetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SheetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SheetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SheetPayload>;
                };
                findMany: {
                    args: Prisma.SheetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SheetPayload>[];
                };
                create: {
                    args: Prisma.SheetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SheetPayload>;
                };
                createMany: {
                    args: Prisma.SheetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SheetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SheetPayload>[];
                };
                delete: {
                    args: Prisma.SheetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SheetPayload>;
                };
                update: {
                    args: Prisma.SheetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SheetPayload>;
                };
                deleteMany: {
                    args: Prisma.SheetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SheetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SheetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SheetPayload>[];
                };
                upsert: {
                    args: Prisma.SheetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SheetPayload>;
                };
                aggregate: {
                    args: Prisma.SheetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSheet>;
                };
                groupBy: {
                    args: Prisma.SheetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SheetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SheetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SheetCountAggregateOutputType> | number;
                };
            };
        };
        Member: {
            payload: Prisma.$MemberPayload<ExtArgs>;
            fields: Prisma.MemberFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MemberFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberPayload>;
                };
                findFirst: {
                    args: Prisma.MemberFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberPayload>;
                };
                findMany: {
                    args: Prisma.MemberFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberPayload>[];
                };
                create: {
                    args: Prisma.MemberCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberPayload>;
                };
                createMany: {
                    args: Prisma.MemberCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MemberCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberPayload>[];
                };
                delete: {
                    args: Prisma.MemberDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberPayload>;
                };
                update: {
                    args: Prisma.MemberUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberPayload>;
                };
                deleteMany: {
                    args: Prisma.MemberDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MemberUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MemberUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberPayload>[];
                };
                upsert: {
                    args: Prisma.MemberUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberPayload>;
                };
                aggregate: {
                    args: Prisma.MemberAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMember>;
                };
                groupBy: {
                    args: Prisma.MemberGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MemberGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MemberCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MemberCountAggregateOutputType> | number;
                };
            };
        };
        LeaderMember: {
            payload: Prisma.$LeaderMemberPayload<ExtArgs>;
            fields: Prisma.LeaderMemberFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LeaderMemberFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderMemberPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LeaderMemberFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderMemberPayload>;
                };
                findFirst: {
                    args: Prisma.LeaderMemberFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderMemberPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LeaderMemberFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderMemberPayload>;
                };
                findMany: {
                    args: Prisma.LeaderMemberFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderMemberPayload>[];
                };
                create: {
                    args: Prisma.LeaderMemberCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderMemberPayload>;
                };
                createMany: {
                    args: Prisma.LeaderMemberCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LeaderMemberCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderMemberPayload>[];
                };
                delete: {
                    args: Prisma.LeaderMemberDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderMemberPayload>;
                };
                update: {
                    args: Prisma.LeaderMemberUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderMemberPayload>;
                };
                deleteMany: {
                    args: Prisma.LeaderMemberDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LeaderMemberUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LeaderMemberUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderMemberPayload>[];
                };
                upsert: {
                    args: Prisma.LeaderMemberUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderMemberPayload>;
                };
                aggregate: {
                    args: Prisma.LeaderMemberAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLeaderMember>;
                };
                groupBy: {
                    args: Prisma.LeaderMemberGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaderMemberGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LeaderMemberCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaderMemberCountAggregateOutputType> | number;
                };
            };
        };
        CellMember: {
            payload: Prisma.$CellMemberPayload<ExtArgs>;
            fields: Prisma.CellMemberFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CellMemberFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CellMemberPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CellMemberFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CellMemberPayload>;
                };
                findFirst: {
                    args: Prisma.CellMemberFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CellMemberPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CellMemberFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CellMemberPayload>;
                };
                findMany: {
                    args: Prisma.CellMemberFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CellMemberPayload>[];
                };
                create: {
                    args: Prisma.CellMemberCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CellMemberPayload>;
                };
                createMany: {
                    args: Prisma.CellMemberCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CellMemberCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CellMemberPayload>[];
                };
                delete: {
                    args: Prisma.CellMemberDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CellMemberPayload>;
                };
                update: {
                    args: Prisma.CellMemberUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CellMemberPayload>;
                };
                deleteMany: {
                    args: Prisma.CellMemberDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CellMemberUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CellMemberUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CellMemberPayload>[];
                };
                upsert: {
                    args: Prisma.CellMemberUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CellMemberPayload>;
                };
                aggregate: {
                    args: Prisma.CellMemberAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCellMember>;
                };
                groupBy: {
                    args: Prisma.CellMemberGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CellMemberGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CellMemberCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CellMemberCountAggregateOutputType> | number;
                };
            };
        };
        ReportHeader: {
            payload: Prisma.$ReportHeaderPayload<ExtArgs>;
            fields: Prisma.ReportHeaderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReportHeaderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportHeaderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReportHeaderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportHeaderPayload>;
                };
                findFirst: {
                    args: Prisma.ReportHeaderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportHeaderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReportHeaderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportHeaderPayload>;
                };
                findMany: {
                    args: Prisma.ReportHeaderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportHeaderPayload>[];
                };
                create: {
                    args: Prisma.ReportHeaderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportHeaderPayload>;
                };
                createMany: {
                    args: Prisma.ReportHeaderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReportHeaderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportHeaderPayload>[];
                };
                delete: {
                    args: Prisma.ReportHeaderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportHeaderPayload>;
                };
                update: {
                    args: Prisma.ReportHeaderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportHeaderPayload>;
                };
                deleteMany: {
                    args: Prisma.ReportHeaderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReportHeaderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReportHeaderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportHeaderPayload>[];
                };
                upsert: {
                    args: Prisma.ReportHeaderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportHeaderPayload>;
                };
                aggregate: {
                    args: Prisma.ReportHeaderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReportHeader>;
                };
                groupBy: {
                    args: Prisma.ReportHeaderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReportHeaderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReportHeaderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReportHeaderCountAggregateOutputType> | number;
                };
            };
        };
        ReportContent: {
            payload: Prisma.$ReportContentPayload<ExtArgs>;
            fields: Prisma.ReportContentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReportContentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportContentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReportContentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportContentPayload>;
                };
                findFirst: {
                    args: Prisma.ReportContentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportContentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReportContentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportContentPayload>;
                };
                findMany: {
                    args: Prisma.ReportContentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportContentPayload>[];
                };
                create: {
                    args: Prisma.ReportContentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportContentPayload>;
                };
                createMany: {
                    args: Prisma.ReportContentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReportContentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportContentPayload>[];
                };
                delete: {
                    args: Prisma.ReportContentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportContentPayload>;
                };
                update: {
                    args: Prisma.ReportContentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportContentPayload>;
                };
                deleteMany: {
                    args: Prisma.ReportContentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReportContentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReportContentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportContentPayload>[];
                };
                upsert: {
                    args: Prisma.ReportContentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportContentPayload>;
                };
                aggregate: {
                    args: Prisma.ReportContentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReportContent>;
                };
                groupBy: {
                    args: Prisma.ReportContentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReportContentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReportContentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReportContentCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    sheet?: Prisma.SheetOmit;
    member?: Prisma.MemberOmit;
    leaderMember?: Prisma.LeaderMemberOmit;
    cellMember?: Prisma.CellMemberOmit;
    reportHeader?: Prisma.ReportHeaderOmit;
    reportContent?: Prisma.ReportContentOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
