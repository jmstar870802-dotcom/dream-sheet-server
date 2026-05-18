import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MemberModel = runtime.Types.Result.DefaultSelection<Prisma.$MemberPayload>;
export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null;
    _avg: MemberAvgAggregateOutputType | null;
    _sum: MemberSumAggregateOutputType | null;
    _min: MemberMinAggregateOutputType | null;
    _max: MemberMaxAggregateOutputType | null;
};
export type MemberAvgAggregateOutputType = {
    id: number | null;
};
export type MemberSumAggregateOutputType = {
    id: number | null;
};
export type MemberMinAggregateOutputType = {
    id: number | null;
    userName: string | null;
    birthday: string | null;
    mngrSe: string | null;
};
export type MemberMaxAggregateOutputType = {
    id: number | null;
    userName: string | null;
    birthday: string | null;
    mngrSe: string | null;
};
export type MemberCountAggregateOutputType = {
    id: number;
    userName: number;
    birthday: number;
    mngrSe: number;
    _all: number;
};
export type MemberAvgAggregateInputType = {
    id?: true;
};
export type MemberSumAggregateInputType = {
    id?: true;
};
export type MemberMinAggregateInputType = {
    id?: true;
    userName?: true;
    birthday?: true;
    mngrSe?: true;
};
export type MemberMaxAggregateInputType = {
    id?: true;
    userName?: true;
    birthday?: true;
    mngrSe?: true;
};
export type MemberCountAggregateInputType = {
    id?: true;
    userName?: true;
    birthday?: true;
    mngrSe?: true;
    _all?: true;
};
export type MemberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemberWhereInput;
    orderBy?: Prisma.MemberOrderByWithRelationInput | Prisma.MemberOrderByWithRelationInput[];
    cursor?: Prisma.MemberWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MemberCountAggregateInputType;
    _avg?: MemberAvgAggregateInputType;
    _sum?: MemberSumAggregateInputType;
    _min?: MemberMinAggregateInputType;
    _max?: MemberMaxAggregateInputType;
};
export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
    [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMember[P]> : Prisma.GetScalarType<T[P], AggregateMember[P]>;
};
export type MemberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemberWhereInput;
    orderBy?: Prisma.MemberOrderByWithAggregationInput | Prisma.MemberOrderByWithAggregationInput[];
    by: Prisma.MemberScalarFieldEnum[] | Prisma.MemberScalarFieldEnum;
    having?: Prisma.MemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MemberCountAggregateInputType | true;
    _avg?: MemberAvgAggregateInputType;
    _sum?: MemberSumAggregateInputType;
    _min?: MemberMinAggregateInputType;
    _max?: MemberMaxAggregateInputType;
};
export type MemberGroupByOutputType = {
    id: number;
    userName: string;
    birthday: string;
    mngrSe: string;
    _count: MemberCountAggregateOutputType | null;
    _avg: MemberAvgAggregateOutputType | null;
    _sum: MemberSumAggregateOutputType | null;
    _min: MemberMinAggregateOutputType | null;
    _max: MemberMaxAggregateOutputType | null;
};
export type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MemberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MemberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MemberGroupByOutputType[P]>;
}>>;
export type MemberWhereInput = {
    AND?: Prisma.MemberWhereInput | Prisma.MemberWhereInput[];
    OR?: Prisma.MemberWhereInput[];
    NOT?: Prisma.MemberWhereInput | Prisma.MemberWhereInput[];
    id?: Prisma.IntFilter<"Member"> | number;
    userName?: Prisma.StringFilter<"Member"> | string;
    birthday?: Prisma.StringFilter<"Member"> | string;
    mngrSe?: Prisma.StringFilter<"Member"> | string;
    leaderMember?: Prisma.LeaderMemberListRelationFilter;
};
export type MemberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userName?: Prisma.SortOrder;
    birthday?: Prisma.SortOrder;
    mngrSe?: Prisma.SortOrder;
    leaderMember?: Prisma.LeaderMemberOrderByRelationAggregateInput;
};
export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MemberWhereInput | Prisma.MemberWhereInput[];
    OR?: Prisma.MemberWhereInput[];
    NOT?: Prisma.MemberWhereInput | Prisma.MemberWhereInput[];
    userName?: Prisma.StringFilter<"Member"> | string;
    birthday?: Prisma.StringFilter<"Member"> | string;
    mngrSe?: Prisma.StringFilter<"Member"> | string;
    leaderMember?: Prisma.LeaderMemberListRelationFilter;
}, "id">;
export type MemberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userName?: Prisma.SortOrder;
    birthday?: Prisma.SortOrder;
    mngrSe?: Prisma.SortOrder;
    _count?: Prisma.MemberCountOrderByAggregateInput;
    _avg?: Prisma.MemberAvgOrderByAggregateInput;
    _max?: Prisma.MemberMaxOrderByAggregateInput;
    _min?: Prisma.MemberMinOrderByAggregateInput;
    _sum?: Prisma.MemberSumOrderByAggregateInput;
};
export type MemberScalarWhereWithAggregatesInput = {
    AND?: Prisma.MemberScalarWhereWithAggregatesInput | Prisma.MemberScalarWhereWithAggregatesInput[];
    OR?: Prisma.MemberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MemberScalarWhereWithAggregatesInput | Prisma.MemberScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Member"> | number;
    userName?: Prisma.StringWithAggregatesFilter<"Member"> | string;
    birthday?: Prisma.StringWithAggregatesFilter<"Member"> | string;
    mngrSe?: Prisma.StringWithAggregatesFilter<"Member"> | string;
};
export type MemberCreateInput = {
    userName: string;
    birthday: string;
    mngrSe: string;
    leaderMember?: Prisma.LeaderMemberCreateNestedManyWithoutMemberInput;
};
export type MemberUncheckedCreateInput = {
    id?: number;
    userName: string;
    birthday: string;
    mngrSe: string;
    leaderMember?: Prisma.LeaderMemberUncheckedCreateNestedManyWithoutMemberInput;
};
export type MemberUpdateInput = {
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthday?: Prisma.StringFieldUpdateOperationsInput | string;
    mngrSe?: Prisma.StringFieldUpdateOperationsInput | string;
    leaderMember?: Prisma.LeaderMemberUpdateManyWithoutMemberNestedInput;
};
export type MemberUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthday?: Prisma.StringFieldUpdateOperationsInput | string;
    mngrSe?: Prisma.StringFieldUpdateOperationsInput | string;
    leaderMember?: Prisma.LeaderMemberUncheckedUpdateManyWithoutMemberNestedInput;
};
export type MemberCreateManyInput = {
    id?: number;
    userName: string;
    birthday: string;
    mngrSe: string;
};
export type MemberUpdateManyMutationInput = {
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthday?: Prisma.StringFieldUpdateOperationsInput | string;
    mngrSe?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MemberUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthday?: Prisma.StringFieldUpdateOperationsInput | string;
    mngrSe?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MemberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userName?: Prisma.SortOrder;
    birthday?: Prisma.SortOrder;
    mngrSe?: Prisma.SortOrder;
};
export type MemberAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MemberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userName?: Prisma.SortOrder;
    birthday?: Prisma.SortOrder;
    mngrSe?: Prisma.SortOrder;
};
export type MemberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userName?: Prisma.SortOrder;
    birthday?: Prisma.SortOrder;
    mngrSe?: Prisma.SortOrder;
};
export type MemberSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MemberScalarRelationFilter = {
    is?: Prisma.MemberWhereInput;
    isNot?: Prisma.MemberWhereInput;
};
export type MemberCreateNestedOneWithoutLeaderMemberInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutLeaderMemberInput, Prisma.MemberUncheckedCreateWithoutLeaderMemberInput>;
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutLeaderMemberInput;
    connect?: Prisma.MemberWhereUniqueInput;
};
export type MemberUpdateOneRequiredWithoutLeaderMemberNestedInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutLeaderMemberInput, Prisma.MemberUncheckedCreateWithoutLeaderMemberInput>;
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutLeaderMemberInput;
    upsert?: Prisma.MemberUpsertWithoutLeaderMemberInput;
    connect?: Prisma.MemberWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MemberUpdateToOneWithWhereWithoutLeaderMemberInput, Prisma.MemberUpdateWithoutLeaderMemberInput>, Prisma.MemberUncheckedUpdateWithoutLeaderMemberInput>;
};
export type MemberCreateWithoutLeaderMemberInput = {
    userName: string;
    birthday: string;
    mngrSe: string;
};
export type MemberUncheckedCreateWithoutLeaderMemberInput = {
    id?: number;
    userName: string;
    birthday: string;
    mngrSe: string;
};
export type MemberCreateOrConnectWithoutLeaderMemberInput = {
    where: Prisma.MemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemberCreateWithoutLeaderMemberInput, Prisma.MemberUncheckedCreateWithoutLeaderMemberInput>;
};
export type MemberUpsertWithoutLeaderMemberInput = {
    update: Prisma.XOR<Prisma.MemberUpdateWithoutLeaderMemberInput, Prisma.MemberUncheckedUpdateWithoutLeaderMemberInput>;
    create: Prisma.XOR<Prisma.MemberCreateWithoutLeaderMemberInput, Prisma.MemberUncheckedCreateWithoutLeaderMemberInput>;
    where?: Prisma.MemberWhereInput;
};
export type MemberUpdateToOneWithWhereWithoutLeaderMemberInput = {
    where?: Prisma.MemberWhereInput;
    data: Prisma.XOR<Prisma.MemberUpdateWithoutLeaderMemberInput, Prisma.MemberUncheckedUpdateWithoutLeaderMemberInput>;
};
export type MemberUpdateWithoutLeaderMemberInput = {
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthday?: Prisma.StringFieldUpdateOperationsInput | string;
    mngrSe?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MemberUncheckedUpdateWithoutLeaderMemberInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthday?: Prisma.StringFieldUpdateOperationsInput | string;
    mngrSe?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MemberCountOutputType = {
    leaderMember: number;
};
export type MemberCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    leaderMember?: boolean | MemberCountOutputTypeCountLeaderMemberArgs;
};
export type MemberCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberCountOutputTypeSelect<ExtArgs> | null;
};
export type MemberCountOutputTypeCountLeaderMemberArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaderMemberWhereInput;
};
export type MemberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userName?: boolean;
    birthday?: boolean;
    mngrSe?: boolean;
    leaderMember?: boolean | Prisma.Member$leaderMemberArgs<ExtArgs>;
    _count?: boolean | Prisma.MemberCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["member"]>;
export type MemberSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userName?: boolean;
    birthday?: boolean;
    mngrSe?: boolean;
}, ExtArgs["result"]["member"]>;
export type MemberSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userName?: boolean;
    birthday?: boolean;
    mngrSe?: boolean;
}, ExtArgs["result"]["member"]>;
export type MemberSelectScalar = {
    id?: boolean;
    userName?: boolean;
    birthday?: boolean;
    mngrSe?: boolean;
};
export type MemberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userName" | "birthday" | "mngrSe", ExtArgs["result"]["member"]>;
export type MemberInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    leaderMember?: boolean | Prisma.Member$leaderMemberArgs<ExtArgs>;
    _count?: boolean | Prisma.MemberCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MemberIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type MemberIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $MemberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Member";
    objects: {
        leaderMember: Prisma.$LeaderMemberPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userName: string;
        birthday: string;
        mngrSe: string;
    }, ExtArgs["result"]["member"]>;
    composites: {};
};
export type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MemberPayload, S>;
export type MemberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MemberCountAggregateInputType | true;
};
export interface MemberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Member'];
        meta: {
            name: 'Member';
        };
    };
    findUnique<T extends MemberFindUniqueArgs>(args: Prisma.SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MemberFindFirstArgs>(args?: Prisma.SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MemberFindManyArgs>(args?: Prisma.SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MemberCreateArgs>(args: Prisma.SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MemberCreateManyArgs>(args?: Prisma.SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MemberDeleteArgs>(args: Prisma.SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MemberUpdateArgs>(args: Prisma.SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MemberDeleteManyArgs>(args?: Prisma.SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MemberUpdateManyArgs>(args: Prisma.SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MemberUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MemberUpsertArgs>(args: Prisma.SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MemberCountArgs>(args?: Prisma.Subset<T, MemberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MemberCountAggregateOutputType> : number>;
    aggregate<T extends MemberAggregateArgs>(args: Prisma.Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>;
    groupBy<T extends MemberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MemberGroupByArgs['orderBy'];
    } : {
        orderBy?: MemberGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MemberFieldRefs;
}
export interface Prisma__MemberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    leaderMember<T extends Prisma.Member$leaderMemberArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Member$leaderMemberArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaderMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MemberFieldRefs {
    readonly id: Prisma.FieldRef<"Member", 'Int'>;
    readonly userName: Prisma.FieldRef<"Member", 'String'>;
    readonly birthday: Prisma.FieldRef<"Member", 'String'>;
    readonly mngrSe: Prisma.FieldRef<"Member", 'String'>;
}
export type MemberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where: Prisma.MemberWhereUniqueInput;
};
export type MemberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where: Prisma.MemberWhereUniqueInput;
};
export type MemberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where?: Prisma.MemberWhereInput;
    orderBy?: Prisma.MemberOrderByWithRelationInput | Prisma.MemberOrderByWithRelationInput[];
    cursor?: Prisma.MemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MemberScalarFieldEnum | Prisma.MemberScalarFieldEnum[];
};
export type MemberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where?: Prisma.MemberWhereInput;
    orderBy?: Prisma.MemberOrderByWithRelationInput | Prisma.MemberOrderByWithRelationInput[];
    cursor?: Prisma.MemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MemberScalarFieldEnum | Prisma.MemberScalarFieldEnum[];
};
export type MemberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where?: Prisma.MemberWhereInput;
    orderBy?: Prisma.MemberOrderByWithRelationInput | Prisma.MemberOrderByWithRelationInput[];
    cursor?: Prisma.MemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MemberScalarFieldEnum | Prisma.MemberScalarFieldEnum[];
};
export type MemberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MemberCreateInput, Prisma.MemberUncheckedCreateInput>;
};
export type MemberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MemberCreateManyInput | Prisma.MemberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MemberCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    data: Prisma.MemberCreateManyInput | Prisma.MemberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MemberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MemberUpdateInput, Prisma.MemberUncheckedUpdateInput>;
    where: Prisma.MemberWhereUniqueInput;
};
export type MemberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MemberUpdateManyMutationInput, Prisma.MemberUncheckedUpdateManyInput>;
    where?: Prisma.MemberWhereInput;
    limit?: number;
};
export type MemberUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MemberUpdateManyMutationInput, Prisma.MemberUncheckedUpdateManyInput>;
    where?: Prisma.MemberWhereInput;
    limit?: number;
};
export type MemberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where: Prisma.MemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemberCreateInput, Prisma.MemberUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MemberUpdateInput, Prisma.MemberUncheckedUpdateInput>;
};
export type MemberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where: Prisma.MemberWhereUniqueInput;
};
export type MemberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemberWhereInput;
    limit?: number;
};
export type Member$leaderMemberArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderMemberSelect<ExtArgs> | null;
    omit?: Prisma.LeaderMemberOmit<ExtArgs> | null;
    include?: Prisma.LeaderMemberInclude<ExtArgs> | null;
    where?: Prisma.LeaderMemberWhereInput;
    orderBy?: Prisma.LeaderMemberOrderByWithRelationInput | Prisma.LeaderMemberOrderByWithRelationInput[];
    cursor?: Prisma.LeaderMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaderMemberScalarFieldEnum | Prisma.LeaderMemberScalarFieldEnum[];
};
export type MemberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
};
