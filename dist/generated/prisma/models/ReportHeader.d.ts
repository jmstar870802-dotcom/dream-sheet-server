import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReportHeaderModel = runtime.Types.Result.DefaultSelection<Prisma.$ReportHeaderPayload>;
export type AggregateReportHeader = {
    _count: ReportHeaderCountAggregateOutputType | null;
    _avg: ReportHeaderAvgAggregateOutputType | null;
    _sum: ReportHeaderSumAggregateOutputType | null;
    _min: ReportHeaderMinAggregateOutputType | null;
    _max: ReportHeaderMaxAggregateOutputType | null;
};
export type ReportHeaderAvgAggregateOutputType = {
    id: number | null;
    LeaderId: number | null;
};
export type ReportHeaderSumAggregateOutputType = {
    id: number | null;
    LeaderId: number | null;
};
export type ReportHeaderMinAggregateOutputType = {
    id: number | null;
    writeDt: string | null;
    meetingPlace: string | null;
    bigoMaster: string | null;
    LeaderId: number | null;
};
export type ReportHeaderMaxAggregateOutputType = {
    id: number | null;
    writeDt: string | null;
    meetingPlace: string | null;
    bigoMaster: string | null;
    LeaderId: number | null;
};
export type ReportHeaderCountAggregateOutputType = {
    id: number;
    writeDt: number;
    meetingPlace: number;
    bigoMaster: number;
    LeaderId: number;
    _all: number;
};
export type ReportHeaderAvgAggregateInputType = {
    id?: true;
    LeaderId?: true;
};
export type ReportHeaderSumAggregateInputType = {
    id?: true;
    LeaderId?: true;
};
export type ReportHeaderMinAggregateInputType = {
    id?: true;
    writeDt?: true;
    meetingPlace?: true;
    bigoMaster?: true;
    LeaderId?: true;
};
export type ReportHeaderMaxAggregateInputType = {
    id?: true;
    writeDt?: true;
    meetingPlace?: true;
    bigoMaster?: true;
    LeaderId?: true;
};
export type ReportHeaderCountAggregateInputType = {
    id?: true;
    writeDt?: true;
    meetingPlace?: true;
    bigoMaster?: true;
    LeaderId?: true;
    _all?: true;
};
export type ReportHeaderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportHeaderWhereInput;
    orderBy?: Prisma.ReportHeaderOrderByWithRelationInput | Prisma.ReportHeaderOrderByWithRelationInput[];
    cursor?: Prisma.ReportHeaderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReportHeaderCountAggregateInputType;
    _avg?: ReportHeaderAvgAggregateInputType;
    _sum?: ReportHeaderSumAggregateInputType;
    _min?: ReportHeaderMinAggregateInputType;
    _max?: ReportHeaderMaxAggregateInputType;
};
export type GetReportHeaderAggregateType<T extends ReportHeaderAggregateArgs> = {
    [P in keyof T & keyof AggregateReportHeader]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReportHeader[P]> : Prisma.GetScalarType<T[P], AggregateReportHeader[P]>;
};
export type ReportHeaderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportHeaderWhereInput;
    orderBy?: Prisma.ReportHeaderOrderByWithAggregationInput | Prisma.ReportHeaderOrderByWithAggregationInput[];
    by: Prisma.ReportHeaderScalarFieldEnum[] | Prisma.ReportHeaderScalarFieldEnum;
    having?: Prisma.ReportHeaderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReportHeaderCountAggregateInputType | true;
    _avg?: ReportHeaderAvgAggregateInputType;
    _sum?: ReportHeaderSumAggregateInputType;
    _min?: ReportHeaderMinAggregateInputType;
    _max?: ReportHeaderMaxAggregateInputType;
};
export type ReportHeaderGroupByOutputType = {
    id: number;
    writeDt: string;
    meetingPlace: string;
    bigoMaster: string;
    LeaderId: number;
    _count: ReportHeaderCountAggregateOutputType | null;
    _avg: ReportHeaderAvgAggregateOutputType | null;
    _sum: ReportHeaderSumAggregateOutputType | null;
    _min: ReportHeaderMinAggregateOutputType | null;
    _max: ReportHeaderMaxAggregateOutputType | null;
};
export type GetReportHeaderGroupByPayload<T extends ReportHeaderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReportHeaderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReportHeaderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReportHeaderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReportHeaderGroupByOutputType[P]>;
}>>;
export type ReportHeaderWhereInput = {
    AND?: Prisma.ReportHeaderWhereInput | Prisma.ReportHeaderWhereInput[];
    OR?: Prisma.ReportHeaderWhereInput[];
    NOT?: Prisma.ReportHeaderWhereInput | Prisma.ReportHeaderWhereInput[];
    id?: Prisma.IntFilter<"ReportHeader"> | number;
    writeDt?: Prisma.StringFilter<"ReportHeader"> | string;
    meetingPlace?: Prisma.StringFilter<"ReportHeader"> | string;
    bigoMaster?: Prisma.StringFilter<"ReportHeader"> | string;
    LeaderId?: Prisma.IntFilter<"ReportHeader"> | number;
    leaderMember?: Prisma.XOR<Prisma.LeaderMemberScalarRelationFilter, Prisma.LeaderMemberWhereInput>;
    reportContent?: Prisma.ReportContentListRelationFilter;
};
export type ReportHeaderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    writeDt?: Prisma.SortOrder;
    meetingPlace?: Prisma.SortOrder;
    bigoMaster?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
    leaderMember?: Prisma.LeaderMemberOrderByWithRelationInput;
    reportContent?: Prisma.ReportContentOrderByRelationAggregateInput;
};
export type ReportHeaderWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ReportHeaderWhereInput | Prisma.ReportHeaderWhereInput[];
    OR?: Prisma.ReportHeaderWhereInput[];
    NOT?: Prisma.ReportHeaderWhereInput | Prisma.ReportHeaderWhereInput[];
    writeDt?: Prisma.StringFilter<"ReportHeader"> | string;
    meetingPlace?: Prisma.StringFilter<"ReportHeader"> | string;
    bigoMaster?: Prisma.StringFilter<"ReportHeader"> | string;
    LeaderId?: Prisma.IntFilter<"ReportHeader"> | number;
    leaderMember?: Prisma.XOR<Prisma.LeaderMemberScalarRelationFilter, Prisma.LeaderMemberWhereInput>;
    reportContent?: Prisma.ReportContentListRelationFilter;
}, "id">;
export type ReportHeaderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    writeDt?: Prisma.SortOrder;
    meetingPlace?: Prisma.SortOrder;
    bigoMaster?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
    _count?: Prisma.ReportHeaderCountOrderByAggregateInput;
    _avg?: Prisma.ReportHeaderAvgOrderByAggregateInput;
    _max?: Prisma.ReportHeaderMaxOrderByAggregateInput;
    _min?: Prisma.ReportHeaderMinOrderByAggregateInput;
    _sum?: Prisma.ReportHeaderSumOrderByAggregateInput;
};
export type ReportHeaderScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReportHeaderScalarWhereWithAggregatesInput | Prisma.ReportHeaderScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReportHeaderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReportHeaderScalarWhereWithAggregatesInput | Prisma.ReportHeaderScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ReportHeader"> | number;
    writeDt?: Prisma.StringWithAggregatesFilter<"ReportHeader"> | string;
    meetingPlace?: Prisma.StringWithAggregatesFilter<"ReportHeader"> | string;
    bigoMaster?: Prisma.StringWithAggregatesFilter<"ReportHeader"> | string;
    LeaderId?: Prisma.IntWithAggregatesFilter<"ReportHeader"> | number;
};
export type ReportHeaderCreateInput = {
    writeDt: string;
    meetingPlace: string;
    bigoMaster: string;
    leaderMember: Prisma.LeaderMemberCreateNestedOneWithoutReportHeaderInput;
    reportContent?: Prisma.ReportContentCreateNestedManyWithoutReportHeaderInput;
};
export type ReportHeaderUncheckedCreateInput = {
    id?: number;
    writeDt: string;
    meetingPlace: string;
    bigoMaster: string;
    LeaderId: number;
    reportContent?: Prisma.ReportContentUncheckedCreateNestedManyWithoutReportHeaderInput;
};
export type ReportHeaderUpdateInput = {
    writeDt?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    bigoMaster?: Prisma.StringFieldUpdateOperationsInput | string;
    leaderMember?: Prisma.LeaderMemberUpdateOneRequiredWithoutReportHeaderNestedInput;
    reportContent?: Prisma.ReportContentUpdateManyWithoutReportHeaderNestedInput;
};
export type ReportHeaderUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    writeDt?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    bigoMaster?: Prisma.StringFieldUpdateOperationsInput | string;
    LeaderId?: Prisma.IntFieldUpdateOperationsInput | number;
    reportContent?: Prisma.ReportContentUncheckedUpdateManyWithoutReportHeaderNestedInput;
};
export type ReportHeaderCreateManyInput = {
    id?: number;
    writeDt: string;
    meetingPlace: string;
    bigoMaster: string;
    LeaderId: number;
};
export type ReportHeaderUpdateManyMutationInput = {
    writeDt?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    bigoMaster?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ReportHeaderUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    writeDt?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    bigoMaster?: Prisma.StringFieldUpdateOperationsInput | string;
    LeaderId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ReportHeaderListRelationFilter = {
    every?: Prisma.ReportHeaderWhereInput;
    some?: Prisma.ReportHeaderWhereInput;
    none?: Prisma.ReportHeaderWhereInput;
};
export type ReportHeaderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReportHeaderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    writeDt?: Prisma.SortOrder;
    meetingPlace?: Prisma.SortOrder;
    bigoMaster?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
};
export type ReportHeaderAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
};
export type ReportHeaderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    writeDt?: Prisma.SortOrder;
    meetingPlace?: Prisma.SortOrder;
    bigoMaster?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
};
export type ReportHeaderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    writeDt?: Prisma.SortOrder;
    meetingPlace?: Prisma.SortOrder;
    bigoMaster?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
};
export type ReportHeaderSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
};
export type ReportHeaderScalarRelationFilter = {
    is?: Prisma.ReportHeaderWhereInput;
    isNot?: Prisma.ReportHeaderWhereInput;
};
export type ReportHeaderCreateNestedManyWithoutLeaderMemberInput = {
    create?: Prisma.XOR<Prisma.ReportHeaderCreateWithoutLeaderMemberInput, Prisma.ReportHeaderUncheckedCreateWithoutLeaderMemberInput> | Prisma.ReportHeaderCreateWithoutLeaderMemberInput[] | Prisma.ReportHeaderUncheckedCreateWithoutLeaderMemberInput[];
    connectOrCreate?: Prisma.ReportHeaderCreateOrConnectWithoutLeaderMemberInput | Prisma.ReportHeaderCreateOrConnectWithoutLeaderMemberInput[];
    createMany?: Prisma.ReportHeaderCreateManyLeaderMemberInputEnvelope;
    connect?: Prisma.ReportHeaderWhereUniqueInput | Prisma.ReportHeaderWhereUniqueInput[];
};
export type ReportHeaderUncheckedCreateNestedManyWithoutLeaderMemberInput = {
    create?: Prisma.XOR<Prisma.ReportHeaderCreateWithoutLeaderMemberInput, Prisma.ReportHeaderUncheckedCreateWithoutLeaderMemberInput> | Prisma.ReportHeaderCreateWithoutLeaderMemberInput[] | Prisma.ReportHeaderUncheckedCreateWithoutLeaderMemberInput[];
    connectOrCreate?: Prisma.ReportHeaderCreateOrConnectWithoutLeaderMemberInput | Prisma.ReportHeaderCreateOrConnectWithoutLeaderMemberInput[];
    createMany?: Prisma.ReportHeaderCreateManyLeaderMemberInputEnvelope;
    connect?: Prisma.ReportHeaderWhereUniqueInput | Prisma.ReportHeaderWhereUniqueInput[];
};
export type ReportHeaderUpdateManyWithoutLeaderMemberNestedInput = {
    create?: Prisma.XOR<Prisma.ReportHeaderCreateWithoutLeaderMemberInput, Prisma.ReportHeaderUncheckedCreateWithoutLeaderMemberInput> | Prisma.ReportHeaderCreateWithoutLeaderMemberInput[] | Prisma.ReportHeaderUncheckedCreateWithoutLeaderMemberInput[];
    connectOrCreate?: Prisma.ReportHeaderCreateOrConnectWithoutLeaderMemberInput | Prisma.ReportHeaderCreateOrConnectWithoutLeaderMemberInput[];
    upsert?: Prisma.ReportHeaderUpsertWithWhereUniqueWithoutLeaderMemberInput | Prisma.ReportHeaderUpsertWithWhereUniqueWithoutLeaderMemberInput[];
    createMany?: Prisma.ReportHeaderCreateManyLeaderMemberInputEnvelope;
    set?: Prisma.ReportHeaderWhereUniqueInput | Prisma.ReportHeaderWhereUniqueInput[];
    disconnect?: Prisma.ReportHeaderWhereUniqueInput | Prisma.ReportHeaderWhereUniqueInput[];
    delete?: Prisma.ReportHeaderWhereUniqueInput | Prisma.ReportHeaderWhereUniqueInput[];
    connect?: Prisma.ReportHeaderWhereUniqueInput | Prisma.ReportHeaderWhereUniqueInput[];
    update?: Prisma.ReportHeaderUpdateWithWhereUniqueWithoutLeaderMemberInput | Prisma.ReportHeaderUpdateWithWhereUniqueWithoutLeaderMemberInput[];
    updateMany?: Prisma.ReportHeaderUpdateManyWithWhereWithoutLeaderMemberInput | Prisma.ReportHeaderUpdateManyWithWhereWithoutLeaderMemberInput[];
    deleteMany?: Prisma.ReportHeaderScalarWhereInput | Prisma.ReportHeaderScalarWhereInput[];
};
export type ReportHeaderUncheckedUpdateManyWithoutLeaderMemberNestedInput = {
    create?: Prisma.XOR<Prisma.ReportHeaderCreateWithoutLeaderMemberInput, Prisma.ReportHeaderUncheckedCreateWithoutLeaderMemberInput> | Prisma.ReportHeaderCreateWithoutLeaderMemberInput[] | Prisma.ReportHeaderUncheckedCreateWithoutLeaderMemberInput[];
    connectOrCreate?: Prisma.ReportHeaderCreateOrConnectWithoutLeaderMemberInput | Prisma.ReportHeaderCreateOrConnectWithoutLeaderMemberInput[];
    upsert?: Prisma.ReportHeaderUpsertWithWhereUniqueWithoutLeaderMemberInput | Prisma.ReportHeaderUpsertWithWhereUniqueWithoutLeaderMemberInput[];
    createMany?: Prisma.ReportHeaderCreateManyLeaderMemberInputEnvelope;
    set?: Prisma.ReportHeaderWhereUniqueInput | Prisma.ReportHeaderWhereUniqueInput[];
    disconnect?: Prisma.ReportHeaderWhereUniqueInput | Prisma.ReportHeaderWhereUniqueInput[];
    delete?: Prisma.ReportHeaderWhereUniqueInput | Prisma.ReportHeaderWhereUniqueInput[];
    connect?: Prisma.ReportHeaderWhereUniqueInput | Prisma.ReportHeaderWhereUniqueInput[];
    update?: Prisma.ReportHeaderUpdateWithWhereUniqueWithoutLeaderMemberInput | Prisma.ReportHeaderUpdateWithWhereUniqueWithoutLeaderMemberInput[];
    updateMany?: Prisma.ReportHeaderUpdateManyWithWhereWithoutLeaderMemberInput | Prisma.ReportHeaderUpdateManyWithWhereWithoutLeaderMemberInput[];
    deleteMany?: Prisma.ReportHeaderScalarWhereInput | Prisma.ReportHeaderScalarWhereInput[];
};
export type ReportHeaderCreateNestedOneWithoutReportContentInput = {
    create?: Prisma.XOR<Prisma.ReportHeaderCreateWithoutReportContentInput, Prisma.ReportHeaderUncheckedCreateWithoutReportContentInput>;
    connectOrCreate?: Prisma.ReportHeaderCreateOrConnectWithoutReportContentInput;
    connect?: Prisma.ReportHeaderWhereUniqueInput;
};
export type ReportHeaderUpdateOneRequiredWithoutReportContentNestedInput = {
    create?: Prisma.XOR<Prisma.ReportHeaderCreateWithoutReportContentInput, Prisma.ReportHeaderUncheckedCreateWithoutReportContentInput>;
    connectOrCreate?: Prisma.ReportHeaderCreateOrConnectWithoutReportContentInput;
    upsert?: Prisma.ReportHeaderUpsertWithoutReportContentInput;
    connect?: Prisma.ReportHeaderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ReportHeaderUpdateToOneWithWhereWithoutReportContentInput, Prisma.ReportHeaderUpdateWithoutReportContentInput>, Prisma.ReportHeaderUncheckedUpdateWithoutReportContentInput>;
};
export type ReportHeaderCreateWithoutLeaderMemberInput = {
    writeDt: string;
    meetingPlace: string;
    bigoMaster: string;
    reportContent?: Prisma.ReportContentCreateNestedManyWithoutReportHeaderInput;
};
export type ReportHeaderUncheckedCreateWithoutLeaderMemberInput = {
    id?: number;
    writeDt: string;
    meetingPlace: string;
    bigoMaster: string;
    reportContent?: Prisma.ReportContentUncheckedCreateNestedManyWithoutReportHeaderInput;
};
export type ReportHeaderCreateOrConnectWithoutLeaderMemberInput = {
    where: Prisma.ReportHeaderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReportHeaderCreateWithoutLeaderMemberInput, Prisma.ReportHeaderUncheckedCreateWithoutLeaderMemberInput>;
};
export type ReportHeaderCreateManyLeaderMemberInputEnvelope = {
    data: Prisma.ReportHeaderCreateManyLeaderMemberInput | Prisma.ReportHeaderCreateManyLeaderMemberInput[];
    skipDuplicates?: boolean;
};
export type ReportHeaderUpsertWithWhereUniqueWithoutLeaderMemberInput = {
    where: Prisma.ReportHeaderWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReportHeaderUpdateWithoutLeaderMemberInput, Prisma.ReportHeaderUncheckedUpdateWithoutLeaderMemberInput>;
    create: Prisma.XOR<Prisma.ReportHeaderCreateWithoutLeaderMemberInput, Prisma.ReportHeaderUncheckedCreateWithoutLeaderMemberInput>;
};
export type ReportHeaderUpdateWithWhereUniqueWithoutLeaderMemberInput = {
    where: Prisma.ReportHeaderWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReportHeaderUpdateWithoutLeaderMemberInput, Prisma.ReportHeaderUncheckedUpdateWithoutLeaderMemberInput>;
};
export type ReportHeaderUpdateManyWithWhereWithoutLeaderMemberInput = {
    where: Prisma.ReportHeaderScalarWhereInput;
    data: Prisma.XOR<Prisma.ReportHeaderUpdateManyMutationInput, Prisma.ReportHeaderUncheckedUpdateManyWithoutLeaderMemberInput>;
};
export type ReportHeaderScalarWhereInput = {
    AND?: Prisma.ReportHeaderScalarWhereInput | Prisma.ReportHeaderScalarWhereInput[];
    OR?: Prisma.ReportHeaderScalarWhereInput[];
    NOT?: Prisma.ReportHeaderScalarWhereInput | Prisma.ReportHeaderScalarWhereInput[];
    id?: Prisma.IntFilter<"ReportHeader"> | number;
    writeDt?: Prisma.StringFilter<"ReportHeader"> | string;
    meetingPlace?: Prisma.StringFilter<"ReportHeader"> | string;
    bigoMaster?: Prisma.StringFilter<"ReportHeader"> | string;
    LeaderId?: Prisma.IntFilter<"ReportHeader"> | number;
};
export type ReportHeaderCreateWithoutReportContentInput = {
    writeDt: string;
    meetingPlace: string;
    bigoMaster: string;
    leaderMember: Prisma.LeaderMemberCreateNestedOneWithoutReportHeaderInput;
};
export type ReportHeaderUncheckedCreateWithoutReportContentInput = {
    id?: number;
    writeDt: string;
    meetingPlace: string;
    bigoMaster: string;
    LeaderId: number;
};
export type ReportHeaderCreateOrConnectWithoutReportContentInput = {
    where: Prisma.ReportHeaderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReportHeaderCreateWithoutReportContentInput, Prisma.ReportHeaderUncheckedCreateWithoutReportContentInput>;
};
export type ReportHeaderUpsertWithoutReportContentInput = {
    update: Prisma.XOR<Prisma.ReportHeaderUpdateWithoutReportContentInput, Prisma.ReportHeaderUncheckedUpdateWithoutReportContentInput>;
    create: Prisma.XOR<Prisma.ReportHeaderCreateWithoutReportContentInput, Prisma.ReportHeaderUncheckedCreateWithoutReportContentInput>;
    where?: Prisma.ReportHeaderWhereInput;
};
export type ReportHeaderUpdateToOneWithWhereWithoutReportContentInput = {
    where?: Prisma.ReportHeaderWhereInput;
    data: Prisma.XOR<Prisma.ReportHeaderUpdateWithoutReportContentInput, Prisma.ReportHeaderUncheckedUpdateWithoutReportContentInput>;
};
export type ReportHeaderUpdateWithoutReportContentInput = {
    writeDt?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    bigoMaster?: Prisma.StringFieldUpdateOperationsInput | string;
    leaderMember?: Prisma.LeaderMemberUpdateOneRequiredWithoutReportHeaderNestedInput;
};
export type ReportHeaderUncheckedUpdateWithoutReportContentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    writeDt?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    bigoMaster?: Prisma.StringFieldUpdateOperationsInput | string;
    LeaderId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ReportHeaderCreateManyLeaderMemberInput = {
    id?: number;
    writeDt: string;
    meetingPlace: string;
    bigoMaster: string;
};
export type ReportHeaderUpdateWithoutLeaderMemberInput = {
    writeDt?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    bigoMaster?: Prisma.StringFieldUpdateOperationsInput | string;
    reportContent?: Prisma.ReportContentUpdateManyWithoutReportHeaderNestedInput;
};
export type ReportHeaderUncheckedUpdateWithoutLeaderMemberInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    writeDt?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    bigoMaster?: Prisma.StringFieldUpdateOperationsInput | string;
    reportContent?: Prisma.ReportContentUncheckedUpdateManyWithoutReportHeaderNestedInput;
};
export type ReportHeaderUncheckedUpdateManyWithoutLeaderMemberInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    writeDt?: Prisma.StringFieldUpdateOperationsInput | string;
    meetingPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    bigoMaster?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ReportHeaderCountOutputType = {
    reportContent: number;
};
export type ReportHeaderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reportContent?: boolean | ReportHeaderCountOutputTypeCountReportContentArgs;
};
export type ReportHeaderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportHeaderCountOutputTypeSelect<ExtArgs> | null;
};
export type ReportHeaderCountOutputTypeCountReportContentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportContentWhereInput;
};
export type ReportHeaderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    writeDt?: boolean;
    meetingPlace?: boolean;
    bigoMaster?: boolean;
    LeaderId?: boolean;
    leaderMember?: boolean | Prisma.LeaderMemberDefaultArgs<ExtArgs>;
    reportContent?: boolean | Prisma.ReportHeader$reportContentArgs<ExtArgs>;
    _count?: boolean | Prisma.ReportHeaderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reportHeader"]>;
export type ReportHeaderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    writeDt?: boolean;
    meetingPlace?: boolean;
    bigoMaster?: boolean;
    LeaderId?: boolean;
    leaderMember?: boolean | Prisma.LeaderMemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reportHeader"]>;
export type ReportHeaderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    writeDt?: boolean;
    meetingPlace?: boolean;
    bigoMaster?: boolean;
    LeaderId?: boolean;
    leaderMember?: boolean | Prisma.LeaderMemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reportHeader"]>;
export type ReportHeaderSelectScalar = {
    id?: boolean;
    writeDt?: boolean;
    meetingPlace?: boolean;
    bigoMaster?: boolean;
    LeaderId?: boolean;
};
export type ReportHeaderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "writeDt" | "meetingPlace" | "bigoMaster" | "LeaderId", ExtArgs["result"]["reportHeader"]>;
export type ReportHeaderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    leaderMember?: boolean | Prisma.LeaderMemberDefaultArgs<ExtArgs>;
    reportContent?: boolean | Prisma.ReportHeader$reportContentArgs<ExtArgs>;
    _count?: boolean | Prisma.ReportHeaderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ReportHeaderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    leaderMember?: boolean | Prisma.LeaderMemberDefaultArgs<ExtArgs>;
};
export type ReportHeaderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    leaderMember?: boolean | Prisma.LeaderMemberDefaultArgs<ExtArgs>;
};
export type $ReportHeaderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ReportHeader";
    objects: {
        leaderMember: Prisma.$LeaderMemberPayload<ExtArgs>;
        reportContent: Prisma.$ReportContentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        writeDt: string;
        meetingPlace: string;
        bigoMaster: string;
        LeaderId: number;
    }, ExtArgs["result"]["reportHeader"]>;
    composites: {};
};
export type ReportHeaderGetPayload<S extends boolean | null | undefined | ReportHeaderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReportHeaderPayload, S>;
export type ReportHeaderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReportHeaderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReportHeaderCountAggregateInputType | true;
};
export interface ReportHeaderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ReportHeader'];
        meta: {
            name: 'ReportHeader';
        };
    };
    findUnique<T extends ReportHeaderFindUniqueArgs>(args: Prisma.SelectSubset<T, ReportHeaderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReportHeaderClient<runtime.Types.Result.GetResult<Prisma.$ReportHeaderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReportHeaderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReportHeaderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReportHeaderClient<runtime.Types.Result.GetResult<Prisma.$ReportHeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReportHeaderFindFirstArgs>(args?: Prisma.SelectSubset<T, ReportHeaderFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReportHeaderClient<runtime.Types.Result.GetResult<Prisma.$ReportHeaderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReportHeaderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReportHeaderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReportHeaderClient<runtime.Types.Result.GetResult<Prisma.$ReportHeaderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReportHeaderFindManyArgs>(args?: Prisma.SelectSubset<T, ReportHeaderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportHeaderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReportHeaderCreateArgs>(args: Prisma.SelectSubset<T, ReportHeaderCreateArgs<ExtArgs>>): Prisma.Prisma__ReportHeaderClient<runtime.Types.Result.GetResult<Prisma.$ReportHeaderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReportHeaderCreateManyArgs>(args?: Prisma.SelectSubset<T, ReportHeaderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ReportHeaderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReportHeaderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportHeaderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ReportHeaderDeleteArgs>(args: Prisma.SelectSubset<T, ReportHeaderDeleteArgs<ExtArgs>>): Prisma.Prisma__ReportHeaderClient<runtime.Types.Result.GetResult<Prisma.$ReportHeaderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReportHeaderUpdateArgs>(args: Prisma.SelectSubset<T, ReportHeaderUpdateArgs<ExtArgs>>): Prisma.Prisma__ReportHeaderClient<runtime.Types.Result.GetResult<Prisma.$ReportHeaderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReportHeaderDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReportHeaderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReportHeaderUpdateManyArgs>(args: Prisma.SelectSubset<T, ReportHeaderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ReportHeaderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReportHeaderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportHeaderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ReportHeaderUpsertArgs>(args: Prisma.SelectSubset<T, ReportHeaderUpsertArgs<ExtArgs>>): Prisma.Prisma__ReportHeaderClient<runtime.Types.Result.GetResult<Prisma.$ReportHeaderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReportHeaderCountArgs>(args?: Prisma.Subset<T, ReportHeaderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReportHeaderCountAggregateOutputType> : number>;
    aggregate<T extends ReportHeaderAggregateArgs>(args: Prisma.Subset<T, ReportHeaderAggregateArgs>): Prisma.PrismaPromise<GetReportHeaderAggregateType<T>>;
    groupBy<T extends ReportHeaderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReportHeaderGroupByArgs['orderBy'];
    } : {
        orderBy?: ReportHeaderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReportHeaderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportHeaderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReportHeaderFieldRefs;
}
export interface Prisma__ReportHeaderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    leaderMember<T extends Prisma.LeaderMemberDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaderMemberDefaultArgs<ExtArgs>>): Prisma.Prisma__LeaderMemberClient<runtime.Types.Result.GetResult<Prisma.$LeaderMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reportContent<T extends Prisma.ReportHeader$reportContentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReportHeader$reportContentArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReportHeaderFieldRefs {
    readonly id: Prisma.FieldRef<"ReportHeader", 'Int'>;
    readonly writeDt: Prisma.FieldRef<"ReportHeader", 'String'>;
    readonly meetingPlace: Prisma.FieldRef<"ReportHeader", 'String'>;
    readonly bigoMaster: Prisma.FieldRef<"ReportHeader", 'String'>;
    readonly LeaderId: Prisma.FieldRef<"ReportHeader", 'Int'>;
}
export type ReportHeaderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportHeaderSelect<ExtArgs> | null;
    omit?: Prisma.ReportHeaderOmit<ExtArgs> | null;
    include?: Prisma.ReportHeaderInclude<ExtArgs> | null;
    where: Prisma.ReportHeaderWhereUniqueInput;
};
export type ReportHeaderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportHeaderSelect<ExtArgs> | null;
    omit?: Prisma.ReportHeaderOmit<ExtArgs> | null;
    include?: Prisma.ReportHeaderInclude<ExtArgs> | null;
    where: Prisma.ReportHeaderWhereUniqueInput;
};
export type ReportHeaderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportHeaderSelect<ExtArgs> | null;
    omit?: Prisma.ReportHeaderOmit<ExtArgs> | null;
    include?: Prisma.ReportHeaderInclude<ExtArgs> | null;
    where?: Prisma.ReportHeaderWhereInput;
    orderBy?: Prisma.ReportHeaderOrderByWithRelationInput | Prisma.ReportHeaderOrderByWithRelationInput[];
    cursor?: Prisma.ReportHeaderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReportHeaderScalarFieldEnum | Prisma.ReportHeaderScalarFieldEnum[];
};
export type ReportHeaderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportHeaderSelect<ExtArgs> | null;
    omit?: Prisma.ReportHeaderOmit<ExtArgs> | null;
    include?: Prisma.ReportHeaderInclude<ExtArgs> | null;
    where?: Prisma.ReportHeaderWhereInput;
    orderBy?: Prisma.ReportHeaderOrderByWithRelationInput | Prisma.ReportHeaderOrderByWithRelationInput[];
    cursor?: Prisma.ReportHeaderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReportHeaderScalarFieldEnum | Prisma.ReportHeaderScalarFieldEnum[];
};
export type ReportHeaderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportHeaderSelect<ExtArgs> | null;
    omit?: Prisma.ReportHeaderOmit<ExtArgs> | null;
    include?: Prisma.ReportHeaderInclude<ExtArgs> | null;
    where?: Prisma.ReportHeaderWhereInput;
    orderBy?: Prisma.ReportHeaderOrderByWithRelationInput | Prisma.ReportHeaderOrderByWithRelationInput[];
    cursor?: Prisma.ReportHeaderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReportHeaderScalarFieldEnum | Prisma.ReportHeaderScalarFieldEnum[];
};
export type ReportHeaderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportHeaderSelect<ExtArgs> | null;
    omit?: Prisma.ReportHeaderOmit<ExtArgs> | null;
    include?: Prisma.ReportHeaderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReportHeaderCreateInput, Prisma.ReportHeaderUncheckedCreateInput>;
};
export type ReportHeaderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReportHeaderCreateManyInput | Prisma.ReportHeaderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReportHeaderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportHeaderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReportHeaderOmit<ExtArgs> | null;
    data: Prisma.ReportHeaderCreateManyInput | Prisma.ReportHeaderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ReportHeaderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ReportHeaderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportHeaderSelect<ExtArgs> | null;
    omit?: Prisma.ReportHeaderOmit<ExtArgs> | null;
    include?: Prisma.ReportHeaderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReportHeaderUpdateInput, Prisma.ReportHeaderUncheckedUpdateInput>;
    where: Prisma.ReportHeaderWhereUniqueInput;
};
export type ReportHeaderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReportHeaderUpdateManyMutationInput, Prisma.ReportHeaderUncheckedUpdateManyInput>;
    where?: Prisma.ReportHeaderWhereInput;
    limit?: number;
};
export type ReportHeaderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportHeaderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReportHeaderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReportHeaderUpdateManyMutationInput, Prisma.ReportHeaderUncheckedUpdateManyInput>;
    where?: Prisma.ReportHeaderWhereInput;
    limit?: number;
    include?: Prisma.ReportHeaderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ReportHeaderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportHeaderSelect<ExtArgs> | null;
    omit?: Prisma.ReportHeaderOmit<ExtArgs> | null;
    include?: Prisma.ReportHeaderInclude<ExtArgs> | null;
    where: Prisma.ReportHeaderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReportHeaderCreateInput, Prisma.ReportHeaderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReportHeaderUpdateInput, Prisma.ReportHeaderUncheckedUpdateInput>;
};
export type ReportHeaderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportHeaderSelect<ExtArgs> | null;
    omit?: Prisma.ReportHeaderOmit<ExtArgs> | null;
    include?: Prisma.ReportHeaderInclude<ExtArgs> | null;
    where: Prisma.ReportHeaderWhereUniqueInput;
};
export type ReportHeaderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportHeaderWhereInput;
    limit?: number;
};
export type ReportHeader$reportContentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportContentSelect<ExtArgs> | null;
    omit?: Prisma.ReportContentOmit<ExtArgs> | null;
    include?: Prisma.ReportContentInclude<ExtArgs> | null;
    where?: Prisma.ReportContentWhereInput;
    orderBy?: Prisma.ReportContentOrderByWithRelationInput | Prisma.ReportContentOrderByWithRelationInput[];
    cursor?: Prisma.ReportContentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReportContentScalarFieldEnum | Prisma.ReportContentScalarFieldEnum[];
};
export type ReportHeaderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportHeaderSelect<ExtArgs> | null;
    omit?: Prisma.ReportHeaderOmit<ExtArgs> | null;
    include?: Prisma.ReportHeaderInclude<ExtArgs> | null;
};
