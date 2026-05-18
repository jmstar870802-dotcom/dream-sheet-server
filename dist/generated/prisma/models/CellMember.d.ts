import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CellMemberModel = runtime.Types.Result.DefaultSelection<Prisma.$CellMemberPayload>;
export type AggregateCellMember = {
    _count: CellMemberCountAggregateOutputType | null;
    _avg: CellMemberAvgAggregateOutputType | null;
    _sum: CellMemberSumAggregateOutputType | null;
    _min: CellMemberMinAggregateOutputType | null;
    _max: CellMemberMaxAggregateOutputType | null;
};
export type CellMemberAvgAggregateOutputType = {
    id: number | null;
    MemberId: number | null;
    LeaderId: number | null;
};
export type CellMemberSumAggregateOutputType = {
    id: number | null;
    MemberId: number | null;
    LeaderId: number | null;
};
export type CellMemberMinAggregateOutputType = {
    id: number | null;
    MemberId: number | null;
    LeaderId: number | null;
};
export type CellMemberMaxAggregateOutputType = {
    id: number | null;
    MemberId: number | null;
    LeaderId: number | null;
};
export type CellMemberCountAggregateOutputType = {
    id: number;
    MemberId: number;
    LeaderId: number;
    _all: number;
};
export type CellMemberAvgAggregateInputType = {
    id?: true;
    MemberId?: true;
    LeaderId?: true;
};
export type CellMemberSumAggregateInputType = {
    id?: true;
    MemberId?: true;
    LeaderId?: true;
};
export type CellMemberMinAggregateInputType = {
    id?: true;
    MemberId?: true;
    LeaderId?: true;
};
export type CellMemberMaxAggregateInputType = {
    id?: true;
    MemberId?: true;
    LeaderId?: true;
};
export type CellMemberCountAggregateInputType = {
    id?: true;
    MemberId?: true;
    LeaderId?: true;
    _all?: true;
};
export type CellMemberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CellMemberWhereInput;
    orderBy?: Prisma.CellMemberOrderByWithRelationInput | Prisma.CellMemberOrderByWithRelationInput[];
    cursor?: Prisma.CellMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CellMemberCountAggregateInputType;
    _avg?: CellMemberAvgAggregateInputType;
    _sum?: CellMemberSumAggregateInputType;
    _min?: CellMemberMinAggregateInputType;
    _max?: CellMemberMaxAggregateInputType;
};
export type GetCellMemberAggregateType<T extends CellMemberAggregateArgs> = {
    [P in keyof T & keyof AggregateCellMember]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCellMember[P]> : Prisma.GetScalarType<T[P], AggregateCellMember[P]>;
};
export type CellMemberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CellMemberWhereInput;
    orderBy?: Prisma.CellMemberOrderByWithAggregationInput | Prisma.CellMemberOrderByWithAggregationInput[];
    by: Prisma.CellMemberScalarFieldEnum[] | Prisma.CellMemberScalarFieldEnum;
    having?: Prisma.CellMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CellMemberCountAggregateInputType | true;
    _avg?: CellMemberAvgAggregateInputType;
    _sum?: CellMemberSumAggregateInputType;
    _min?: CellMemberMinAggregateInputType;
    _max?: CellMemberMaxAggregateInputType;
};
export type CellMemberGroupByOutputType = {
    id: number;
    MemberId: number;
    LeaderId: number;
    _count: CellMemberCountAggregateOutputType | null;
    _avg: CellMemberAvgAggregateOutputType | null;
    _sum: CellMemberSumAggregateOutputType | null;
    _min: CellMemberMinAggregateOutputType | null;
    _max: CellMemberMaxAggregateOutputType | null;
};
export type GetCellMemberGroupByPayload<T extends CellMemberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CellMemberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CellMemberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CellMemberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CellMemberGroupByOutputType[P]>;
}>>;
export type CellMemberWhereInput = {
    AND?: Prisma.CellMemberWhereInput | Prisma.CellMemberWhereInput[];
    OR?: Prisma.CellMemberWhereInput[];
    NOT?: Prisma.CellMemberWhereInput | Prisma.CellMemberWhereInput[];
    id?: Prisma.IntFilter<"CellMember"> | number;
    MemberId?: Prisma.IntFilter<"CellMember"> | number;
    LeaderId?: Prisma.IntFilter<"CellMember"> | number;
    leaderMember?: Prisma.XOR<Prisma.LeaderMemberScalarRelationFilter, Prisma.LeaderMemberWhereInput>;
};
export type CellMemberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    MemberId?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
    leaderMember?: Prisma.LeaderMemberOrderByWithRelationInput;
};
export type CellMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    MemberId?: number;
    AND?: Prisma.CellMemberWhereInput | Prisma.CellMemberWhereInput[];
    OR?: Prisma.CellMemberWhereInput[];
    NOT?: Prisma.CellMemberWhereInput | Prisma.CellMemberWhereInput[];
    LeaderId?: Prisma.IntFilter<"CellMember"> | number;
    leaderMember?: Prisma.XOR<Prisma.LeaderMemberScalarRelationFilter, Prisma.LeaderMemberWhereInput>;
}, "id" | "MemberId">;
export type CellMemberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    MemberId?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
    _count?: Prisma.CellMemberCountOrderByAggregateInput;
    _avg?: Prisma.CellMemberAvgOrderByAggregateInput;
    _max?: Prisma.CellMemberMaxOrderByAggregateInput;
    _min?: Prisma.CellMemberMinOrderByAggregateInput;
    _sum?: Prisma.CellMemberSumOrderByAggregateInput;
};
export type CellMemberScalarWhereWithAggregatesInput = {
    AND?: Prisma.CellMemberScalarWhereWithAggregatesInput | Prisma.CellMemberScalarWhereWithAggregatesInput[];
    OR?: Prisma.CellMemberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CellMemberScalarWhereWithAggregatesInput | Prisma.CellMemberScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"CellMember"> | number;
    MemberId?: Prisma.IntWithAggregatesFilter<"CellMember"> | number;
    LeaderId?: Prisma.IntWithAggregatesFilter<"CellMember"> | number;
};
export type CellMemberCreateInput = {
    MemberId: number;
    leaderMember: Prisma.LeaderMemberCreateNestedOneWithoutCellMemberInput;
};
export type CellMemberUncheckedCreateInput = {
    id?: number;
    MemberId: number;
    LeaderId: number;
};
export type CellMemberUpdateInput = {
    MemberId?: Prisma.IntFieldUpdateOperationsInput | number;
    leaderMember?: Prisma.LeaderMemberUpdateOneRequiredWithoutCellMemberNestedInput;
};
export type CellMemberUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    MemberId?: Prisma.IntFieldUpdateOperationsInput | number;
    LeaderId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CellMemberCreateManyInput = {
    id?: number;
    MemberId: number;
    LeaderId: number;
};
export type CellMemberUpdateManyMutationInput = {
    MemberId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CellMemberUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    MemberId?: Prisma.IntFieldUpdateOperationsInput | number;
    LeaderId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CellMemberListRelationFilter = {
    every?: Prisma.CellMemberWhereInput;
    some?: Prisma.CellMemberWhereInput;
    none?: Prisma.CellMemberWhereInput;
};
export type CellMemberOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CellMemberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    MemberId?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
};
export type CellMemberAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    MemberId?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
};
export type CellMemberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    MemberId?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
};
export type CellMemberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    MemberId?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
};
export type CellMemberSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    MemberId?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
};
export type CellMemberCreateNestedManyWithoutLeaderMemberInput = {
    create?: Prisma.XOR<Prisma.CellMemberCreateWithoutLeaderMemberInput, Prisma.CellMemberUncheckedCreateWithoutLeaderMemberInput> | Prisma.CellMemberCreateWithoutLeaderMemberInput[] | Prisma.CellMemberUncheckedCreateWithoutLeaderMemberInput[];
    connectOrCreate?: Prisma.CellMemberCreateOrConnectWithoutLeaderMemberInput | Prisma.CellMemberCreateOrConnectWithoutLeaderMemberInput[];
    createMany?: Prisma.CellMemberCreateManyLeaderMemberInputEnvelope;
    connect?: Prisma.CellMemberWhereUniqueInput | Prisma.CellMemberWhereUniqueInput[];
};
export type CellMemberUncheckedCreateNestedManyWithoutLeaderMemberInput = {
    create?: Prisma.XOR<Prisma.CellMemberCreateWithoutLeaderMemberInput, Prisma.CellMemberUncheckedCreateWithoutLeaderMemberInput> | Prisma.CellMemberCreateWithoutLeaderMemberInput[] | Prisma.CellMemberUncheckedCreateWithoutLeaderMemberInput[];
    connectOrCreate?: Prisma.CellMemberCreateOrConnectWithoutLeaderMemberInput | Prisma.CellMemberCreateOrConnectWithoutLeaderMemberInput[];
    createMany?: Prisma.CellMemberCreateManyLeaderMemberInputEnvelope;
    connect?: Prisma.CellMemberWhereUniqueInput | Prisma.CellMemberWhereUniqueInput[];
};
export type CellMemberUpdateManyWithoutLeaderMemberNestedInput = {
    create?: Prisma.XOR<Prisma.CellMemberCreateWithoutLeaderMemberInput, Prisma.CellMemberUncheckedCreateWithoutLeaderMemberInput> | Prisma.CellMemberCreateWithoutLeaderMemberInput[] | Prisma.CellMemberUncheckedCreateWithoutLeaderMemberInput[];
    connectOrCreate?: Prisma.CellMemberCreateOrConnectWithoutLeaderMemberInput | Prisma.CellMemberCreateOrConnectWithoutLeaderMemberInput[];
    upsert?: Prisma.CellMemberUpsertWithWhereUniqueWithoutLeaderMemberInput | Prisma.CellMemberUpsertWithWhereUniqueWithoutLeaderMemberInput[];
    createMany?: Prisma.CellMemberCreateManyLeaderMemberInputEnvelope;
    set?: Prisma.CellMemberWhereUniqueInput | Prisma.CellMemberWhereUniqueInput[];
    disconnect?: Prisma.CellMemberWhereUniqueInput | Prisma.CellMemberWhereUniqueInput[];
    delete?: Prisma.CellMemberWhereUniqueInput | Prisma.CellMemberWhereUniqueInput[];
    connect?: Prisma.CellMemberWhereUniqueInput | Prisma.CellMemberWhereUniqueInput[];
    update?: Prisma.CellMemberUpdateWithWhereUniqueWithoutLeaderMemberInput | Prisma.CellMemberUpdateWithWhereUniqueWithoutLeaderMemberInput[];
    updateMany?: Prisma.CellMemberUpdateManyWithWhereWithoutLeaderMemberInput | Prisma.CellMemberUpdateManyWithWhereWithoutLeaderMemberInput[];
    deleteMany?: Prisma.CellMemberScalarWhereInput | Prisma.CellMemberScalarWhereInput[];
};
export type CellMemberUncheckedUpdateManyWithoutLeaderMemberNestedInput = {
    create?: Prisma.XOR<Prisma.CellMemberCreateWithoutLeaderMemberInput, Prisma.CellMemberUncheckedCreateWithoutLeaderMemberInput> | Prisma.CellMemberCreateWithoutLeaderMemberInput[] | Prisma.CellMemberUncheckedCreateWithoutLeaderMemberInput[];
    connectOrCreate?: Prisma.CellMemberCreateOrConnectWithoutLeaderMemberInput | Prisma.CellMemberCreateOrConnectWithoutLeaderMemberInput[];
    upsert?: Prisma.CellMemberUpsertWithWhereUniqueWithoutLeaderMemberInput | Prisma.CellMemberUpsertWithWhereUniqueWithoutLeaderMemberInput[];
    createMany?: Prisma.CellMemberCreateManyLeaderMemberInputEnvelope;
    set?: Prisma.CellMemberWhereUniqueInput | Prisma.CellMemberWhereUniqueInput[];
    disconnect?: Prisma.CellMemberWhereUniqueInput | Prisma.CellMemberWhereUniqueInput[];
    delete?: Prisma.CellMemberWhereUniqueInput | Prisma.CellMemberWhereUniqueInput[];
    connect?: Prisma.CellMemberWhereUniqueInput | Prisma.CellMemberWhereUniqueInput[];
    update?: Prisma.CellMemberUpdateWithWhereUniqueWithoutLeaderMemberInput | Prisma.CellMemberUpdateWithWhereUniqueWithoutLeaderMemberInput[];
    updateMany?: Prisma.CellMemberUpdateManyWithWhereWithoutLeaderMemberInput | Prisma.CellMemberUpdateManyWithWhereWithoutLeaderMemberInput[];
    deleteMany?: Prisma.CellMemberScalarWhereInput | Prisma.CellMemberScalarWhereInput[];
};
export type CellMemberCreateWithoutLeaderMemberInput = {
    MemberId: number;
};
export type CellMemberUncheckedCreateWithoutLeaderMemberInput = {
    id?: number;
    MemberId: number;
};
export type CellMemberCreateOrConnectWithoutLeaderMemberInput = {
    where: Prisma.CellMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.CellMemberCreateWithoutLeaderMemberInput, Prisma.CellMemberUncheckedCreateWithoutLeaderMemberInput>;
};
export type CellMemberCreateManyLeaderMemberInputEnvelope = {
    data: Prisma.CellMemberCreateManyLeaderMemberInput | Prisma.CellMemberCreateManyLeaderMemberInput[];
    skipDuplicates?: boolean;
};
export type CellMemberUpsertWithWhereUniqueWithoutLeaderMemberInput = {
    where: Prisma.CellMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.CellMemberUpdateWithoutLeaderMemberInput, Prisma.CellMemberUncheckedUpdateWithoutLeaderMemberInput>;
    create: Prisma.XOR<Prisma.CellMemberCreateWithoutLeaderMemberInput, Prisma.CellMemberUncheckedCreateWithoutLeaderMemberInput>;
};
export type CellMemberUpdateWithWhereUniqueWithoutLeaderMemberInput = {
    where: Prisma.CellMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.CellMemberUpdateWithoutLeaderMemberInput, Prisma.CellMemberUncheckedUpdateWithoutLeaderMemberInput>;
};
export type CellMemberUpdateManyWithWhereWithoutLeaderMemberInput = {
    where: Prisma.CellMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.CellMemberUpdateManyMutationInput, Prisma.CellMemberUncheckedUpdateManyWithoutLeaderMemberInput>;
};
export type CellMemberScalarWhereInput = {
    AND?: Prisma.CellMemberScalarWhereInput | Prisma.CellMemberScalarWhereInput[];
    OR?: Prisma.CellMemberScalarWhereInput[];
    NOT?: Prisma.CellMemberScalarWhereInput | Prisma.CellMemberScalarWhereInput[];
    id?: Prisma.IntFilter<"CellMember"> | number;
    MemberId?: Prisma.IntFilter<"CellMember"> | number;
    LeaderId?: Prisma.IntFilter<"CellMember"> | number;
};
export type CellMemberCreateManyLeaderMemberInput = {
    id?: number;
    MemberId: number;
};
export type CellMemberUpdateWithoutLeaderMemberInput = {
    MemberId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CellMemberUncheckedUpdateWithoutLeaderMemberInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    MemberId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CellMemberUncheckedUpdateManyWithoutLeaderMemberInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    MemberId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CellMemberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    MemberId?: boolean;
    LeaderId?: boolean;
    leaderMember?: boolean | Prisma.LeaderMemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cellMember"]>;
export type CellMemberSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    MemberId?: boolean;
    LeaderId?: boolean;
    leaderMember?: boolean | Prisma.LeaderMemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cellMember"]>;
export type CellMemberSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    MemberId?: boolean;
    LeaderId?: boolean;
    leaderMember?: boolean | Prisma.LeaderMemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cellMember"]>;
export type CellMemberSelectScalar = {
    id?: boolean;
    MemberId?: boolean;
    LeaderId?: boolean;
};
export type CellMemberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "MemberId" | "LeaderId", ExtArgs["result"]["cellMember"]>;
export type CellMemberInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    leaderMember?: boolean | Prisma.LeaderMemberDefaultArgs<ExtArgs>;
};
export type CellMemberIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    leaderMember?: boolean | Prisma.LeaderMemberDefaultArgs<ExtArgs>;
};
export type CellMemberIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    leaderMember?: boolean | Prisma.LeaderMemberDefaultArgs<ExtArgs>;
};
export type $CellMemberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CellMember";
    objects: {
        leaderMember: Prisma.$LeaderMemberPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        MemberId: number;
        LeaderId: number;
    }, ExtArgs["result"]["cellMember"]>;
    composites: {};
};
export type CellMemberGetPayload<S extends boolean | null | undefined | CellMemberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CellMemberPayload, S>;
export type CellMemberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CellMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CellMemberCountAggregateInputType | true;
};
export interface CellMemberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CellMember'];
        meta: {
            name: 'CellMember';
        };
    };
    findUnique<T extends CellMemberFindUniqueArgs>(args: Prisma.SelectSubset<T, CellMemberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CellMemberClient<runtime.Types.Result.GetResult<Prisma.$CellMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CellMemberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CellMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CellMemberClient<runtime.Types.Result.GetResult<Prisma.$CellMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CellMemberFindFirstArgs>(args?: Prisma.SelectSubset<T, CellMemberFindFirstArgs<ExtArgs>>): Prisma.Prisma__CellMemberClient<runtime.Types.Result.GetResult<Prisma.$CellMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CellMemberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CellMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CellMemberClient<runtime.Types.Result.GetResult<Prisma.$CellMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CellMemberFindManyArgs>(args?: Prisma.SelectSubset<T, CellMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CellMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CellMemberCreateArgs>(args: Prisma.SelectSubset<T, CellMemberCreateArgs<ExtArgs>>): Prisma.Prisma__CellMemberClient<runtime.Types.Result.GetResult<Prisma.$CellMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CellMemberCreateManyArgs>(args?: Prisma.SelectSubset<T, CellMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CellMemberCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CellMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CellMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CellMemberDeleteArgs>(args: Prisma.SelectSubset<T, CellMemberDeleteArgs<ExtArgs>>): Prisma.Prisma__CellMemberClient<runtime.Types.Result.GetResult<Prisma.$CellMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CellMemberUpdateArgs>(args: Prisma.SelectSubset<T, CellMemberUpdateArgs<ExtArgs>>): Prisma.Prisma__CellMemberClient<runtime.Types.Result.GetResult<Prisma.$CellMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CellMemberDeleteManyArgs>(args?: Prisma.SelectSubset<T, CellMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CellMemberUpdateManyArgs>(args: Prisma.SelectSubset<T, CellMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CellMemberUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CellMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CellMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CellMemberUpsertArgs>(args: Prisma.SelectSubset<T, CellMemberUpsertArgs<ExtArgs>>): Prisma.Prisma__CellMemberClient<runtime.Types.Result.GetResult<Prisma.$CellMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CellMemberCountArgs>(args?: Prisma.Subset<T, CellMemberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CellMemberCountAggregateOutputType> : number>;
    aggregate<T extends CellMemberAggregateArgs>(args: Prisma.Subset<T, CellMemberAggregateArgs>): Prisma.PrismaPromise<GetCellMemberAggregateType<T>>;
    groupBy<T extends CellMemberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CellMemberGroupByArgs['orderBy'];
    } : {
        orderBy?: CellMemberGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CellMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCellMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CellMemberFieldRefs;
}
export interface Prisma__CellMemberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    leaderMember<T extends Prisma.LeaderMemberDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaderMemberDefaultArgs<ExtArgs>>): Prisma.Prisma__LeaderMemberClient<runtime.Types.Result.GetResult<Prisma.$LeaderMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CellMemberFieldRefs {
    readonly id: Prisma.FieldRef<"CellMember", 'Int'>;
    readonly MemberId: Prisma.FieldRef<"CellMember", 'Int'>;
    readonly LeaderId: Prisma.FieldRef<"CellMember", 'Int'>;
}
export type CellMemberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CellMemberSelect<ExtArgs> | null;
    omit?: Prisma.CellMemberOmit<ExtArgs> | null;
    include?: Prisma.CellMemberInclude<ExtArgs> | null;
    where: Prisma.CellMemberWhereUniqueInput;
};
export type CellMemberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CellMemberSelect<ExtArgs> | null;
    omit?: Prisma.CellMemberOmit<ExtArgs> | null;
    include?: Prisma.CellMemberInclude<ExtArgs> | null;
    where: Prisma.CellMemberWhereUniqueInput;
};
export type CellMemberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CellMemberSelect<ExtArgs> | null;
    omit?: Prisma.CellMemberOmit<ExtArgs> | null;
    include?: Prisma.CellMemberInclude<ExtArgs> | null;
    where?: Prisma.CellMemberWhereInput;
    orderBy?: Prisma.CellMemberOrderByWithRelationInput | Prisma.CellMemberOrderByWithRelationInput[];
    cursor?: Prisma.CellMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CellMemberScalarFieldEnum | Prisma.CellMemberScalarFieldEnum[];
};
export type CellMemberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CellMemberSelect<ExtArgs> | null;
    omit?: Prisma.CellMemberOmit<ExtArgs> | null;
    include?: Prisma.CellMemberInclude<ExtArgs> | null;
    where?: Prisma.CellMemberWhereInput;
    orderBy?: Prisma.CellMemberOrderByWithRelationInput | Prisma.CellMemberOrderByWithRelationInput[];
    cursor?: Prisma.CellMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CellMemberScalarFieldEnum | Prisma.CellMemberScalarFieldEnum[];
};
export type CellMemberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CellMemberSelect<ExtArgs> | null;
    omit?: Prisma.CellMemberOmit<ExtArgs> | null;
    include?: Prisma.CellMemberInclude<ExtArgs> | null;
    where?: Prisma.CellMemberWhereInput;
    orderBy?: Prisma.CellMemberOrderByWithRelationInput | Prisma.CellMemberOrderByWithRelationInput[];
    cursor?: Prisma.CellMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CellMemberScalarFieldEnum | Prisma.CellMemberScalarFieldEnum[];
};
export type CellMemberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CellMemberSelect<ExtArgs> | null;
    omit?: Prisma.CellMemberOmit<ExtArgs> | null;
    include?: Prisma.CellMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CellMemberCreateInput, Prisma.CellMemberUncheckedCreateInput>;
};
export type CellMemberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CellMemberCreateManyInput | Prisma.CellMemberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CellMemberCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CellMemberSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CellMemberOmit<ExtArgs> | null;
    data: Prisma.CellMemberCreateManyInput | Prisma.CellMemberCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CellMemberIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CellMemberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CellMemberSelect<ExtArgs> | null;
    omit?: Prisma.CellMemberOmit<ExtArgs> | null;
    include?: Prisma.CellMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CellMemberUpdateInput, Prisma.CellMemberUncheckedUpdateInput>;
    where: Prisma.CellMemberWhereUniqueInput;
};
export type CellMemberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CellMemberUpdateManyMutationInput, Prisma.CellMemberUncheckedUpdateManyInput>;
    where?: Prisma.CellMemberWhereInput;
    limit?: number;
};
export type CellMemberUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CellMemberSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CellMemberOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CellMemberUpdateManyMutationInput, Prisma.CellMemberUncheckedUpdateManyInput>;
    where?: Prisma.CellMemberWhereInput;
    limit?: number;
    include?: Prisma.CellMemberIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CellMemberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CellMemberSelect<ExtArgs> | null;
    omit?: Prisma.CellMemberOmit<ExtArgs> | null;
    include?: Prisma.CellMemberInclude<ExtArgs> | null;
    where: Prisma.CellMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.CellMemberCreateInput, Prisma.CellMemberUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CellMemberUpdateInput, Prisma.CellMemberUncheckedUpdateInput>;
};
export type CellMemberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CellMemberSelect<ExtArgs> | null;
    omit?: Prisma.CellMemberOmit<ExtArgs> | null;
    include?: Prisma.CellMemberInclude<ExtArgs> | null;
    where: Prisma.CellMemberWhereUniqueInput;
};
export type CellMemberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CellMemberWhereInput;
    limit?: number;
};
export type CellMemberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CellMemberSelect<ExtArgs> | null;
    omit?: Prisma.CellMemberOmit<ExtArgs> | null;
    include?: Prisma.CellMemberInclude<ExtArgs> | null;
};
