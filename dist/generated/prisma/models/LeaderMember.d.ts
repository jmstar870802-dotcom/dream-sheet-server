import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LeaderMemberModel = runtime.Types.Result.DefaultSelection<Prisma.$LeaderMemberPayload>;
export type AggregateLeaderMember = {
    _count: LeaderMemberCountAggregateOutputType | null;
    _avg: LeaderMemberAvgAggregateOutputType | null;
    _sum: LeaderMemberSumAggregateOutputType | null;
    _min: LeaderMemberMinAggregateOutputType | null;
    _max: LeaderMemberMaxAggregateOutputType | null;
};
export type LeaderMemberAvgAggregateOutputType = {
    id: number | null;
    LeaderId: number | null;
};
export type LeaderMemberSumAggregateOutputType = {
    id: number | null;
    LeaderId: number | null;
};
export type LeaderMemberMinAggregateOutputType = {
    id: number | null;
    LeaderId: number | null;
    UseYn: string | null;
};
export type LeaderMemberMaxAggregateOutputType = {
    id: number | null;
    LeaderId: number | null;
    UseYn: string | null;
};
export type LeaderMemberCountAggregateOutputType = {
    id: number;
    LeaderId: number;
    UseYn: number;
    _all: number;
};
export type LeaderMemberAvgAggregateInputType = {
    id?: true;
    LeaderId?: true;
};
export type LeaderMemberSumAggregateInputType = {
    id?: true;
    LeaderId?: true;
};
export type LeaderMemberMinAggregateInputType = {
    id?: true;
    LeaderId?: true;
    UseYn?: true;
};
export type LeaderMemberMaxAggregateInputType = {
    id?: true;
    LeaderId?: true;
    UseYn?: true;
};
export type LeaderMemberCountAggregateInputType = {
    id?: true;
    LeaderId?: true;
    UseYn?: true;
    _all?: true;
};
export type LeaderMemberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaderMemberWhereInput;
    orderBy?: Prisma.LeaderMemberOrderByWithRelationInput | Prisma.LeaderMemberOrderByWithRelationInput[];
    cursor?: Prisma.LeaderMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LeaderMemberCountAggregateInputType;
    _avg?: LeaderMemberAvgAggregateInputType;
    _sum?: LeaderMemberSumAggregateInputType;
    _min?: LeaderMemberMinAggregateInputType;
    _max?: LeaderMemberMaxAggregateInputType;
};
export type GetLeaderMemberAggregateType<T extends LeaderMemberAggregateArgs> = {
    [P in keyof T & keyof AggregateLeaderMember]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLeaderMember[P]> : Prisma.GetScalarType<T[P], AggregateLeaderMember[P]>;
};
export type LeaderMemberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaderMemberWhereInput;
    orderBy?: Prisma.LeaderMemberOrderByWithAggregationInput | Prisma.LeaderMemberOrderByWithAggregationInput[];
    by: Prisma.LeaderMemberScalarFieldEnum[] | Prisma.LeaderMemberScalarFieldEnum;
    having?: Prisma.LeaderMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeaderMemberCountAggregateInputType | true;
    _avg?: LeaderMemberAvgAggregateInputType;
    _sum?: LeaderMemberSumAggregateInputType;
    _min?: LeaderMemberMinAggregateInputType;
    _max?: LeaderMemberMaxAggregateInputType;
};
export type LeaderMemberGroupByOutputType = {
    id: number;
    LeaderId: number;
    UseYn: string;
    _count: LeaderMemberCountAggregateOutputType | null;
    _avg: LeaderMemberAvgAggregateOutputType | null;
    _sum: LeaderMemberSumAggregateOutputType | null;
    _min: LeaderMemberMinAggregateOutputType | null;
    _max: LeaderMemberMaxAggregateOutputType | null;
};
export type GetLeaderMemberGroupByPayload<T extends LeaderMemberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LeaderMemberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LeaderMemberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LeaderMemberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LeaderMemberGroupByOutputType[P]>;
}>>;
export type LeaderMemberWhereInput = {
    AND?: Prisma.LeaderMemberWhereInput | Prisma.LeaderMemberWhereInput[];
    OR?: Prisma.LeaderMemberWhereInput[];
    NOT?: Prisma.LeaderMemberWhereInput | Prisma.LeaderMemberWhereInput[];
    id?: Prisma.IntFilter<"LeaderMember"> | number;
    LeaderId?: Prisma.IntFilter<"LeaderMember"> | number;
    UseYn?: Prisma.StringFilter<"LeaderMember"> | string;
    member?: Prisma.XOR<Prisma.MemberScalarRelationFilter, Prisma.MemberWhereInput>;
    cellMember?: Prisma.CellMemberListRelationFilter;
    reportHeader?: Prisma.ReportHeaderListRelationFilter;
};
export type LeaderMemberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
    UseYn?: Prisma.SortOrder;
    member?: Prisma.MemberOrderByWithRelationInput;
    cellMember?: Prisma.CellMemberOrderByRelationAggregateInput;
    reportHeader?: Prisma.ReportHeaderOrderByRelationAggregateInput;
};
export type LeaderMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    LeaderId?: number;
    AND?: Prisma.LeaderMemberWhereInput | Prisma.LeaderMemberWhereInput[];
    OR?: Prisma.LeaderMemberWhereInput[];
    NOT?: Prisma.LeaderMemberWhereInput | Prisma.LeaderMemberWhereInput[];
    UseYn?: Prisma.StringFilter<"LeaderMember"> | string;
    member?: Prisma.XOR<Prisma.MemberScalarRelationFilter, Prisma.MemberWhereInput>;
    cellMember?: Prisma.CellMemberListRelationFilter;
    reportHeader?: Prisma.ReportHeaderListRelationFilter;
}, "id" | "LeaderId">;
export type LeaderMemberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
    UseYn?: Prisma.SortOrder;
    _count?: Prisma.LeaderMemberCountOrderByAggregateInput;
    _avg?: Prisma.LeaderMemberAvgOrderByAggregateInput;
    _max?: Prisma.LeaderMemberMaxOrderByAggregateInput;
    _min?: Prisma.LeaderMemberMinOrderByAggregateInput;
    _sum?: Prisma.LeaderMemberSumOrderByAggregateInput;
};
export type LeaderMemberScalarWhereWithAggregatesInput = {
    AND?: Prisma.LeaderMemberScalarWhereWithAggregatesInput | Prisma.LeaderMemberScalarWhereWithAggregatesInput[];
    OR?: Prisma.LeaderMemberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LeaderMemberScalarWhereWithAggregatesInput | Prisma.LeaderMemberScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"LeaderMember"> | number;
    LeaderId?: Prisma.IntWithAggregatesFilter<"LeaderMember"> | number;
    UseYn?: Prisma.StringWithAggregatesFilter<"LeaderMember"> | string;
};
export type LeaderMemberCreateInput = {
    UseYn: string;
    member: Prisma.MemberCreateNestedOneWithoutLeaderMemberInput;
    cellMember?: Prisma.CellMemberCreateNestedManyWithoutLeaderMemberInput;
    reportHeader?: Prisma.ReportHeaderCreateNestedManyWithoutLeaderMemberInput;
};
export type LeaderMemberUncheckedCreateInput = {
    id?: number;
    LeaderId: number;
    UseYn: string;
    cellMember?: Prisma.CellMemberUncheckedCreateNestedManyWithoutLeaderMemberInput;
    reportHeader?: Prisma.ReportHeaderUncheckedCreateNestedManyWithoutLeaderMemberInput;
};
export type LeaderMemberUpdateInput = {
    UseYn?: Prisma.StringFieldUpdateOperationsInput | string;
    member?: Prisma.MemberUpdateOneRequiredWithoutLeaderMemberNestedInput;
    cellMember?: Prisma.CellMemberUpdateManyWithoutLeaderMemberNestedInput;
    reportHeader?: Prisma.ReportHeaderUpdateManyWithoutLeaderMemberNestedInput;
};
export type LeaderMemberUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    LeaderId?: Prisma.IntFieldUpdateOperationsInput | number;
    UseYn?: Prisma.StringFieldUpdateOperationsInput | string;
    cellMember?: Prisma.CellMemberUncheckedUpdateManyWithoutLeaderMemberNestedInput;
    reportHeader?: Prisma.ReportHeaderUncheckedUpdateManyWithoutLeaderMemberNestedInput;
};
export type LeaderMemberCreateManyInput = {
    id?: number;
    LeaderId: number;
    UseYn: string;
};
export type LeaderMemberUpdateManyMutationInput = {
    UseYn?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LeaderMemberUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    LeaderId?: Prisma.IntFieldUpdateOperationsInput | number;
    UseYn?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LeaderMemberListRelationFilter = {
    every?: Prisma.LeaderMemberWhereInput;
    some?: Prisma.LeaderMemberWhereInput;
    none?: Prisma.LeaderMemberWhereInput;
};
export type LeaderMemberOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LeaderMemberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
    UseYn?: Prisma.SortOrder;
};
export type LeaderMemberAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
};
export type LeaderMemberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
    UseYn?: Prisma.SortOrder;
};
export type LeaderMemberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
    UseYn?: Prisma.SortOrder;
};
export type LeaderMemberSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    LeaderId?: Prisma.SortOrder;
};
export type LeaderMemberScalarRelationFilter = {
    is?: Prisma.LeaderMemberWhereInput;
    isNot?: Prisma.LeaderMemberWhereInput;
};
export type LeaderMemberCreateNestedManyWithoutMemberInput = {
    create?: Prisma.XOR<Prisma.LeaderMemberCreateWithoutMemberInput, Prisma.LeaderMemberUncheckedCreateWithoutMemberInput> | Prisma.LeaderMemberCreateWithoutMemberInput[] | Prisma.LeaderMemberUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.LeaderMemberCreateOrConnectWithoutMemberInput | Prisma.LeaderMemberCreateOrConnectWithoutMemberInput[];
    createMany?: Prisma.LeaderMemberCreateManyMemberInputEnvelope;
    connect?: Prisma.LeaderMemberWhereUniqueInput | Prisma.LeaderMemberWhereUniqueInput[];
};
export type LeaderMemberUncheckedCreateNestedManyWithoutMemberInput = {
    create?: Prisma.XOR<Prisma.LeaderMemberCreateWithoutMemberInput, Prisma.LeaderMemberUncheckedCreateWithoutMemberInput> | Prisma.LeaderMemberCreateWithoutMemberInput[] | Prisma.LeaderMemberUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.LeaderMemberCreateOrConnectWithoutMemberInput | Prisma.LeaderMemberCreateOrConnectWithoutMemberInput[];
    createMany?: Prisma.LeaderMemberCreateManyMemberInputEnvelope;
    connect?: Prisma.LeaderMemberWhereUniqueInput | Prisma.LeaderMemberWhereUniqueInput[];
};
export type LeaderMemberUpdateManyWithoutMemberNestedInput = {
    create?: Prisma.XOR<Prisma.LeaderMemberCreateWithoutMemberInput, Prisma.LeaderMemberUncheckedCreateWithoutMemberInput> | Prisma.LeaderMemberCreateWithoutMemberInput[] | Prisma.LeaderMemberUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.LeaderMemberCreateOrConnectWithoutMemberInput | Prisma.LeaderMemberCreateOrConnectWithoutMemberInput[];
    upsert?: Prisma.LeaderMemberUpsertWithWhereUniqueWithoutMemberInput | Prisma.LeaderMemberUpsertWithWhereUniqueWithoutMemberInput[];
    createMany?: Prisma.LeaderMemberCreateManyMemberInputEnvelope;
    set?: Prisma.LeaderMemberWhereUniqueInput | Prisma.LeaderMemberWhereUniqueInput[];
    disconnect?: Prisma.LeaderMemberWhereUniqueInput | Prisma.LeaderMemberWhereUniqueInput[];
    delete?: Prisma.LeaderMemberWhereUniqueInput | Prisma.LeaderMemberWhereUniqueInput[];
    connect?: Prisma.LeaderMemberWhereUniqueInput | Prisma.LeaderMemberWhereUniqueInput[];
    update?: Prisma.LeaderMemberUpdateWithWhereUniqueWithoutMemberInput | Prisma.LeaderMemberUpdateWithWhereUniqueWithoutMemberInput[];
    updateMany?: Prisma.LeaderMemberUpdateManyWithWhereWithoutMemberInput | Prisma.LeaderMemberUpdateManyWithWhereWithoutMemberInput[];
    deleteMany?: Prisma.LeaderMemberScalarWhereInput | Prisma.LeaderMemberScalarWhereInput[];
};
export type LeaderMemberUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: Prisma.XOR<Prisma.LeaderMemberCreateWithoutMemberInput, Prisma.LeaderMemberUncheckedCreateWithoutMemberInput> | Prisma.LeaderMemberCreateWithoutMemberInput[] | Prisma.LeaderMemberUncheckedCreateWithoutMemberInput[];
    connectOrCreate?: Prisma.LeaderMemberCreateOrConnectWithoutMemberInput | Prisma.LeaderMemberCreateOrConnectWithoutMemberInput[];
    upsert?: Prisma.LeaderMemberUpsertWithWhereUniqueWithoutMemberInput | Prisma.LeaderMemberUpsertWithWhereUniqueWithoutMemberInput[];
    createMany?: Prisma.LeaderMemberCreateManyMemberInputEnvelope;
    set?: Prisma.LeaderMemberWhereUniqueInput | Prisma.LeaderMemberWhereUniqueInput[];
    disconnect?: Prisma.LeaderMemberWhereUniqueInput | Prisma.LeaderMemberWhereUniqueInput[];
    delete?: Prisma.LeaderMemberWhereUniqueInput | Prisma.LeaderMemberWhereUniqueInput[];
    connect?: Prisma.LeaderMemberWhereUniqueInput | Prisma.LeaderMemberWhereUniqueInput[];
    update?: Prisma.LeaderMemberUpdateWithWhereUniqueWithoutMemberInput | Prisma.LeaderMemberUpdateWithWhereUniqueWithoutMemberInput[];
    updateMany?: Prisma.LeaderMemberUpdateManyWithWhereWithoutMemberInput | Prisma.LeaderMemberUpdateManyWithWhereWithoutMemberInput[];
    deleteMany?: Prisma.LeaderMemberScalarWhereInput | Prisma.LeaderMemberScalarWhereInput[];
};
export type LeaderMemberCreateNestedOneWithoutCellMemberInput = {
    create?: Prisma.XOR<Prisma.LeaderMemberCreateWithoutCellMemberInput, Prisma.LeaderMemberUncheckedCreateWithoutCellMemberInput>;
    connectOrCreate?: Prisma.LeaderMemberCreateOrConnectWithoutCellMemberInput;
    connect?: Prisma.LeaderMemberWhereUniqueInput;
};
export type LeaderMemberUpdateOneRequiredWithoutCellMemberNestedInput = {
    create?: Prisma.XOR<Prisma.LeaderMemberCreateWithoutCellMemberInput, Prisma.LeaderMemberUncheckedCreateWithoutCellMemberInput>;
    connectOrCreate?: Prisma.LeaderMemberCreateOrConnectWithoutCellMemberInput;
    upsert?: Prisma.LeaderMemberUpsertWithoutCellMemberInput;
    connect?: Prisma.LeaderMemberWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeaderMemberUpdateToOneWithWhereWithoutCellMemberInput, Prisma.LeaderMemberUpdateWithoutCellMemberInput>, Prisma.LeaderMemberUncheckedUpdateWithoutCellMemberInput>;
};
export type LeaderMemberCreateNestedOneWithoutReportHeaderInput = {
    create?: Prisma.XOR<Prisma.LeaderMemberCreateWithoutReportHeaderInput, Prisma.LeaderMemberUncheckedCreateWithoutReportHeaderInput>;
    connectOrCreate?: Prisma.LeaderMemberCreateOrConnectWithoutReportHeaderInput;
    connect?: Prisma.LeaderMemberWhereUniqueInput;
};
export type LeaderMemberUpdateOneRequiredWithoutReportHeaderNestedInput = {
    create?: Prisma.XOR<Prisma.LeaderMemberCreateWithoutReportHeaderInput, Prisma.LeaderMemberUncheckedCreateWithoutReportHeaderInput>;
    connectOrCreate?: Prisma.LeaderMemberCreateOrConnectWithoutReportHeaderInput;
    upsert?: Prisma.LeaderMemberUpsertWithoutReportHeaderInput;
    connect?: Prisma.LeaderMemberWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeaderMemberUpdateToOneWithWhereWithoutReportHeaderInput, Prisma.LeaderMemberUpdateWithoutReportHeaderInput>, Prisma.LeaderMemberUncheckedUpdateWithoutReportHeaderInput>;
};
export type LeaderMemberCreateWithoutMemberInput = {
    UseYn: string;
    cellMember?: Prisma.CellMemberCreateNestedManyWithoutLeaderMemberInput;
    reportHeader?: Prisma.ReportHeaderCreateNestedManyWithoutLeaderMemberInput;
};
export type LeaderMemberUncheckedCreateWithoutMemberInput = {
    id?: number;
    UseYn: string;
    cellMember?: Prisma.CellMemberUncheckedCreateNestedManyWithoutLeaderMemberInput;
    reportHeader?: Prisma.ReportHeaderUncheckedCreateNestedManyWithoutLeaderMemberInput;
};
export type LeaderMemberCreateOrConnectWithoutMemberInput = {
    where: Prisma.LeaderMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaderMemberCreateWithoutMemberInput, Prisma.LeaderMemberUncheckedCreateWithoutMemberInput>;
};
export type LeaderMemberCreateManyMemberInputEnvelope = {
    data: Prisma.LeaderMemberCreateManyMemberInput | Prisma.LeaderMemberCreateManyMemberInput[];
    skipDuplicates?: boolean;
};
export type LeaderMemberUpsertWithWhereUniqueWithoutMemberInput = {
    where: Prisma.LeaderMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeaderMemberUpdateWithoutMemberInput, Prisma.LeaderMemberUncheckedUpdateWithoutMemberInput>;
    create: Prisma.XOR<Prisma.LeaderMemberCreateWithoutMemberInput, Prisma.LeaderMemberUncheckedCreateWithoutMemberInput>;
};
export type LeaderMemberUpdateWithWhereUniqueWithoutMemberInput = {
    where: Prisma.LeaderMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeaderMemberUpdateWithoutMemberInput, Prisma.LeaderMemberUncheckedUpdateWithoutMemberInput>;
};
export type LeaderMemberUpdateManyWithWhereWithoutMemberInput = {
    where: Prisma.LeaderMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.LeaderMemberUpdateManyMutationInput, Prisma.LeaderMemberUncheckedUpdateManyWithoutMemberInput>;
};
export type LeaderMemberScalarWhereInput = {
    AND?: Prisma.LeaderMemberScalarWhereInput | Prisma.LeaderMemberScalarWhereInput[];
    OR?: Prisma.LeaderMemberScalarWhereInput[];
    NOT?: Prisma.LeaderMemberScalarWhereInput | Prisma.LeaderMemberScalarWhereInput[];
    id?: Prisma.IntFilter<"LeaderMember"> | number;
    LeaderId?: Prisma.IntFilter<"LeaderMember"> | number;
    UseYn?: Prisma.StringFilter<"LeaderMember"> | string;
};
export type LeaderMemberCreateWithoutCellMemberInput = {
    UseYn: string;
    member: Prisma.MemberCreateNestedOneWithoutLeaderMemberInput;
    reportHeader?: Prisma.ReportHeaderCreateNestedManyWithoutLeaderMemberInput;
};
export type LeaderMemberUncheckedCreateWithoutCellMemberInput = {
    id?: number;
    LeaderId: number;
    UseYn: string;
    reportHeader?: Prisma.ReportHeaderUncheckedCreateNestedManyWithoutLeaderMemberInput;
};
export type LeaderMemberCreateOrConnectWithoutCellMemberInput = {
    where: Prisma.LeaderMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaderMemberCreateWithoutCellMemberInput, Prisma.LeaderMemberUncheckedCreateWithoutCellMemberInput>;
};
export type LeaderMemberUpsertWithoutCellMemberInput = {
    update: Prisma.XOR<Prisma.LeaderMemberUpdateWithoutCellMemberInput, Prisma.LeaderMemberUncheckedUpdateWithoutCellMemberInput>;
    create: Prisma.XOR<Prisma.LeaderMemberCreateWithoutCellMemberInput, Prisma.LeaderMemberUncheckedCreateWithoutCellMemberInput>;
    where?: Prisma.LeaderMemberWhereInput;
};
export type LeaderMemberUpdateToOneWithWhereWithoutCellMemberInput = {
    where?: Prisma.LeaderMemberWhereInput;
    data: Prisma.XOR<Prisma.LeaderMemberUpdateWithoutCellMemberInput, Prisma.LeaderMemberUncheckedUpdateWithoutCellMemberInput>;
};
export type LeaderMemberUpdateWithoutCellMemberInput = {
    UseYn?: Prisma.StringFieldUpdateOperationsInput | string;
    member?: Prisma.MemberUpdateOneRequiredWithoutLeaderMemberNestedInput;
    reportHeader?: Prisma.ReportHeaderUpdateManyWithoutLeaderMemberNestedInput;
};
export type LeaderMemberUncheckedUpdateWithoutCellMemberInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    LeaderId?: Prisma.IntFieldUpdateOperationsInput | number;
    UseYn?: Prisma.StringFieldUpdateOperationsInput | string;
    reportHeader?: Prisma.ReportHeaderUncheckedUpdateManyWithoutLeaderMemberNestedInput;
};
export type LeaderMemberCreateWithoutReportHeaderInput = {
    UseYn: string;
    member: Prisma.MemberCreateNestedOneWithoutLeaderMemberInput;
    cellMember?: Prisma.CellMemberCreateNestedManyWithoutLeaderMemberInput;
};
export type LeaderMemberUncheckedCreateWithoutReportHeaderInput = {
    id?: number;
    LeaderId: number;
    UseYn: string;
    cellMember?: Prisma.CellMemberUncheckedCreateNestedManyWithoutLeaderMemberInput;
};
export type LeaderMemberCreateOrConnectWithoutReportHeaderInput = {
    where: Prisma.LeaderMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaderMemberCreateWithoutReportHeaderInput, Prisma.LeaderMemberUncheckedCreateWithoutReportHeaderInput>;
};
export type LeaderMemberUpsertWithoutReportHeaderInput = {
    update: Prisma.XOR<Prisma.LeaderMemberUpdateWithoutReportHeaderInput, Prisma.LeaderMemberUncheckedUpdateWithoutReportHeaderInput>;
    create: Prisma.XOR<Prisma.LeaderMemberCreateWithoutReportHeaderInput, Prisma.LeaderMemberUncheckedCreateWithoutReportHeaderInput>;
    where?: Prisma.LeaderMemberWhereInput;
};
export type LeaderMemberUpdateToOneWithWhereWithoutReportHeaderInput = {
    where?: Prisma.LeaderMemberWhereInput;
    data: Prisma.XOR<Prisma.LeaderMemberUpdateWithoutReportHeaderInput, Prisma.LeaderMemberUncheckedUpdateWithoutReportHeaderInput>;
};
export type LeaderMemberUpdateWithoutReportHeaderInput = {
    UseYn?: Prisma.StringFieldUpdateOperationsInput | string;
    member?: Prisma.MemberUpdateOneRequiredWithoutLeaderMemberNestedInput;
    cellMember?: Prisma.CellMemberUpdateManyWithoutLeaderMemberNestedInput;
};
export type LeaderMemberUncheckedUpdateWithoutReportHeaderInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    LeaderId?: Prisma.IntFieldUpdateOperationsInput | number;
    UseYn?: Prisma.StringFieldUpdateOperationsInput | string;
    cellMember?: Prisma.CellMemberUncheckedUpdateManyWithoutLeaderMemberNestedInput;
};
export type LeaderMemberCreateManyMemberInput = {
    id?: number;
    UseYn: string;
};
export type LeaderMemberUpdateWithoutMemberInput = {
    UseYn?: Prisma.StringFieldUpdateOperationsInput | string;
    cellMember?: Prisma.CellMemberUpdateManyWithoutLeaderMemberNestedInput;
    reportHeader?: Prisma.ReportHeaderUpdateManyWithoutLeaderMemberNestedInput;
};
export type LeaderMemberUncheckedUpdateWithoutMemberInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    UseYn?: Prisma.StringFieldUpdateOperationsInput | string;
    cellMember?: Prisma.CellMemberUncheckedUpdateManyWithoutLeaderMemberNestedInput;
    reportHeader?: Prisma.ReportHeaderUncheckedUpdateManyWithoutLeaderMemberNestedInput;
};
export type LeaderMemberUncheckedUpdateManyWithoutMemberInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    UseYn?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LeaderMemberCountOutputType = {
    cellMember: number;
    reportHeader: number;
};
export type LeaderMemberCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cellMember?: boolean | LeaderMemberCountOutputTypeCountCellMemberArgs;
    reportHeader?: boolean | LeaderMemberCountOutputTypeCountReportHeaderArgs;
};
export type LeaderMemberCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderMemberCountOutputTypeSelect<ExtArgs> | null;
};
export type LeaderMemberCountOutputTypeCountCellMemberArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CellMemberWhereInput;
};
export type LeaderMemberCountOutputTypeCountReportHeaderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportHeaderWhereInput;
};
export type LeaderMemberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    LeaderId?: boolean;
    UseYn?: boolean;
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    cellMember?: boolean | Prisma.LeaderMember$cellMemberArgs<ExtArgs>;
    reportHeader?: boolean | Prisma.LeaderMember$reportHeaderArgs<ExtArgs>;
    _count?: boolean | Prisma.LeaderMemberCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaderMember"]>;
export type LeaderMemberSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    LeaderId?: boolean;
    UseYn?: boolean;
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaderMember"]>;
export type LeaderMemberSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    LeaderId?: boolean;
    UseYn?: boolean;
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaderMember"]>;
export type LeaderMemberSelectScalar = {
    id?: boolean;
    LeaderId?: boolean;
    UseYn?: boolean;
};
export type LeaderMemberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "LeaderId" | "UseYn", ExtArgs["result"]["leaderMember"]>;
export type LeaderMemberInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
    cellMember?: boolean | Prisma.LeaderMember$cellMemberArgs<ExtArgs>;
    reportHeader?: boolean | Prisma.LeaderMember$reportHeaderArgs<ExtArgs>;
    _count?: boolean | Prisma.LeaderMemberCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LeaderMemberIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
};
export type LeaderMemberIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    member?: boolean | Prisma.MemberDefaultArgs<ExtArgs>;
};
export type $LeaderMemberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LeaderMember";
    objects: {
        member: Prisma.$MemberPayload<ExtArgs>;
        cellMember: Prisma.$CellMemberPayload<ExtArgs>[];
        reportHeader: Prisma.$ReportHeaderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        LeaderId: number;
        UseYn: string;
    }, ExtArgs["result"]["leaderMember"]>;
    composites: {};
};
export type LeaderMemberGetPayload<S extends boolean | null | undefined | LeaderMemberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LeaderMemberPayload, S>;
export type LeaderMemberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LeaderMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeaderMemberCountAggregateInputType | true;
};
export interface LeaderMemberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LeaderMember'];
        meta: {
            name: 'LeaderMember';
        };
    };
    findUnique<T extends LeaderMemberFindUniqueArgs>(args: Prisma.SelectSubset<T, LeaderMemberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LeaderMemberClient<runtime.Types.Result.GetResult<Prisma.$LeaderMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LeaderMemberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LeaderMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaderMemberClient<runtime.Types.Result.GetResult<Prisma.$LeaderMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LeaderMemberFindFirstArgs>(args?: Prisma.SelectSubset<T, LeaderMemberFindFirstArgs<ExtArgs>>): Prisma.Prisma__LeaderMemberClient<runtime.Types.Result.GetResult<Prisma.$LeaderMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LeaderMemberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LeaderMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaderMemberClient<runtime.Types.Result.GetResult<Prisma.$LeaderMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LeaderMemberFindManyArgs>(args?: Prisma.SelectSubset<T, LeaderMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaderMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LeaderMemberCreateArgs>(args: Prisma.SelectSubset<T, LeaderMemberCreateArgs<ExtArgs>>): Prisma.Prisma__LeaderMemberClient<runtime.Types.Result.GetResult<Prisma.$LeaderMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LeaderMemberCreateManyArgs>(args?: Prisma.SelectSubset<T, LeaderMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LeaderMemberCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LeaderMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaderMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LeaderMemberDeleteArgs>(args: Prisma.SelectSubset<T, LeaderMemberDeleteArgs<ExtArgs>>): Prisma.Prisma__LeaderMemberClient<runtime.Types.Result.GetResult<Prisma.$LeaderMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LeaderMemberUpdateArgs>(args: Prisma.SelectSubset<T, LeaderMemberUpdateArgs<ExtArgs>>): Prisma.Prisma__LeaderMemberClient<runtime.Types.Result.GetResult<Prisma.$LeaderMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LeaderMemberDeleteManyArgs>(args?: Prisma.SelectSubset<T, LeaderMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LeaderMemberUpdateManyArgs>(args: Prisma.SelectSubset<T, LeaderMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LeaderMemberUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LeaderMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaderMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LeaderMemberUpsertArgs>(args: Prisma.SelectSubset<T, LeaderMemberUpsertArgs<ExtArgs>>): Prisma.Prisma__LeaderMemberClient<runtime.Types.Result.GetResult<Prisma.$LeaderMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LeaderMemberCountArgs>(args?: Prisma.Subset<T, LeaderMemberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LeaderMemberCountAggregateOutputType> : number>;
    aggregate<T extends LeaderMemberAggregateArgs>(args: Prisma.Subset<T, LeaderMemberAggregateArgs>): Prisma.PrismaPromise<GetLeaderMemberAggregateType<T>>;
    groupBy<T extends LeaderMemberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LeaderMemberGroupByArgs['orderBy'];
    } : {
        orderBy?: LeaderMemberGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LeaderMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaderMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LeaderMemberFieldRefs;
}
export interface Prisma__LeaderMemberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    member<T extends Prisma.MemberDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MemberDefaultArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    cellMember<T extends Prisma.LeaderMember$cellMemberArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaderMember$cellMemberArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CellMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reportHeader<T extends Prisma.LeaderMember$reportHeaderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaderMember$reportHeaderArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportHeaderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LeaderMemberFieldRefs {
    readonly id: Prisma.FieldRef<"LeaderMember", 'Int'>;
    readonly LeaderId: Prisma.FieldRef<"LeaderMember", 'Int'>;
    readonly UseYn: Prisma.FieldRef<"LeaderMember", 'String'>;
}
export type LeaderMemberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderMemberSelect<ExtArgs> | null;
    omit?: Prisma.LeaderMemberOmit<ExtArgs> | null;
    include?: Prisma.LeaderMemberInclude<ExtArgs> | null;
    where: Prisma.LeaderMemberWhereUniqueInput;
};
export type LeaderMemberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderMemberSelect<ExtArgs> | null;
    omit?: Prisma.LeaderMemberOmit<ExtArgs> | null;
    include?: Prisma.LeaderMemberInclude<ExtArgs> | null;
    where: Prisma.LeaderMemberWhereUniqueInput;
};
export type LeaderMemberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeaderMemberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeaderMemberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeaderMemberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderMemberSelect<ExtArgs> | null;
    omit?: Prisma.LeaderMemberOmit<ExtArgs> | null;
    include?: Prisma.LeaderMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaderMemberCreateInput, Prisma.LeaderMemberUncheckedCreateInput>;
};
export type LeaderMemberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LeaderMemberCreateManyInput | Prisma.LeaderMemberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LeaderMemberCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderMemberSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaderMemberOmit<ExtArgs> | null;
    data: Prisma.LeaderMemberCreateManyInput | Prisma.LeaderMemberCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LeaderMemberIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LeaderMemberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderMemberSelect<ExtArgs> | null;
    omit?: Prisma.LeaderMemberOmit<ExtArgs> | null;
    include?: Prisma.LeaderMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaderMemberUpdateInput, Prisma.LeaderMemberUncheckedUpdateInput>;
    where: Prisma.LeaderMemberWhereUniqueInput;
};
export type LeaderMemberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LeaderMemberUpdateManyMutationInput, Prisma.LeaderMemberUncheckedUpdateManyInput>;
    where?: Prisma.LeaderMemberWhereInput;
    limit?: number;
};
export type LeaderMemberUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderMemberSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaderMemberOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaderMemberUpdateManyMutationInput, Prisma.LeaderMemberUncheckedUpdateManyInput>;
    where?: Prisma.LeaderMemberWhereInput;
    limit?: number;
    include?: Prisma.LeaderMemberIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LeaderMemberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderMemberSelect<ExtArgs> | null;
    omit?: Prisma.LeaderMemberOmit<ExtArgs> | null;
    include?: Prisma.LeaderMemberInclude<ExtArgs> | null;
    where: Prisma.LeaderMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaderMemberCreateInput, Prisma.LeaderMemberUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LeaderMemberUpdateInput, Prisma.LeaderMemberUncheckedUpdateInput>;
};
export type LeaderMemberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderMemberSelect<ExtArgs> | null;
    omit?: Prisma.LeaderMemberOmit<ExtArgs> | null;
    include?: Prisma.LeaderMemberInclude<ExtArgs> | null;
    where: Prisma.LeaderMemberWhereUniqueInput;
};
export type LeaderMemberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaderMemberWhereInput;
    limit?: number;
};
export type LeaderMember$cellMemberArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeaderMember$reportHeaderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeaderMemberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderMemberSelect<ExtArgs> | null;
    omit?: Prisma.LeaderMemberOmit<ExtArgs> | null;
    include?: Prisma.LeaderMemberInclude<ExtArgs> | null;
};
