import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReportContentModel = runtime.Types.Result.DefaultSelection<Prisma.$ReportContentPayload>;
export type AggregateReportContent = {
    _count: ReportContentCountAggregateOutputType | null;
    _avg: ReportContentAvgAggregateOutputType | null;
    _sum: ReportContentSumAggregateOutputType | null;
    _min: ReportContentMinAggregateOutputType | null;
    _max: ReportContentMaxAggregateOutputType | null;
};
export type ReportContentAvgAggregateOutputType = {
    id: number | null;
    reportId: number | null;
};
export type ReportContentSumAggregateOutputType = {
    id: number | null;
    reportId: number | null;
};
export type ReportContentMinAggregateOutputType = {
    id: number | null;
    memberNm: string | null;
    wesDay: boolean | null;
    sundayAf: boolean | null;
    sundayNt: boolean | null;
    cellMeeting: boolean | null;
    bigo: string | null;
    reportId: number | null;
};
export type ReportContentMaxAggregateOutputType = {
    id: number | null;
    memberNm: string | null;
    wesDay: boolean | null;
    sundayAf: boolean | null;
    sundayNt: boolean | null;
    cellMeeting: boolean | null;
    bigo: string | null;
    reportId: number | null;
};
export type ReportContentCountAggregateOutputType = {
    id: number;
    memberNm: number;
    wesDay: number;
    sundayAf: number;
    sundayNt: number;
    cellMeeting: number;
    bigo: number;
    reportId: number;
    _all: number;
};
export type ReportContentAvgAggregateInputType = {
    id?: true;
    reportId?: true;
};
export type ReportContentSumAggregateInputType = {
    id?: true;
    reportId?: true;
};
export type ReportContentMinAggregateInputType = {
    id?: true;
    memberNm?: true;
    wesDay?: true;
    sundayAf?: true;
    sundayNt?: true;
    cellMeeting?: true;
    bigo?: true;
    reportId?: true;
};
export type ReportContentMaxAggregateInputType = {
    id?: true;
    memberNm?: true;
    wesDay?: true;
    sundayAf?: true;
    sundayNt?: true;
    cellMeeting?: true;
    bigo?: true;
    reportId?: true;
};
export type ReportContentCountAggregateInputType = {
    id?: true;
    memberNm?: true;
    wesDay?: true;
    sundayAf?: true;
    sundayNt?: true;
    cellMeeting?: true;
    bigo?: true;
    reportId?: true;
    _all?: true;
};
export type ReportContentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportContentWhereInput;
    orderBy?: Prisma.ReportContentOrderByWithRelationInput | Prisma.ReportContentOrderByWithRelationInput[];
    cursor?: Prisma.ReportContentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReportContentCountAggregateInputType;
    _avg?: ReportContentAvgAggregateInputType;
    _sum?: ReportContentSumAggregateInputType;
    _min?: ReportContentMinAggregateInputType;
    _max?: ReportContentMaxAggregateInputType;
};
export type GetReportContentAggregateType<T extends ReportContentAggregateArgs> = {
    [P in keyof T & keyof AggregateReportContent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReportContent[P]> : Prisma.GetScalarType<T[P], AggregateReportContent[P]>;
};
export type ReportContentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportContentWhereInput;
    orderBy?: Prisma.ReportContentOrderByWithAggregationInput | Prisma.ReportContentOrderByWithAggregationInput[];
    by: Prisma.ReportContentScalarFieldEnum[] | Prisma.ReportContentScalarFieldEnum;
    having?: Prisma.ReportContentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReportContentCountAggregateInputType | true;
    _avg?: ReportContentAvgAggregateInputType;
    _sum?: ReportContentSumAggregateInputType;
    _min?: ReportContentMinAggregateInputType;
    _max?: ReportContentMaxAggregateInputType;
};
export type ReportContentGroupByOutputType = {
    id: number;
    memberNm: string;
    wesDay: boolean;
    sundayAf: boolean;
    sundayNt: boolean;
    cellMeeting: boolean;
    bigo: string;
    reportId: number;
    _count: ReportContentCountAggregateOutputType | null;
    _avg: ReportContentAvgAggregateOutputType | null;
    _sum: ReportContentSumAggregateOutputType | null;
    _min: ReportContentMinAggregateOutputType | null;
    _max: ReportContentMaxAggregateOutputType | null;
};
export type GetReportContentGroupByPayload<T extends ReportContentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReportContentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReportContentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReportContentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReportContentGroupByOutputType[P]>;
}>>;
export type ReportContentWhereInput = {
    AND?: Prisma.ReportContentWhereInput | Prisma.ReportContentWhereInput[];
    OR?: Prisma.ReportContentWhereInput[];
    NOT?: Prisma.ReportContentWhereInput | Prisma.ReportContentWhereInput[];
    id?: Prisma.IntFilter<"ReportContent"> | number;
    memberNm?: Prisma.StringFilter<"ReportContent"> | string;
    wesDay?: Prisma.BoolFilter<"ReportContent"> | boolean;
    sundayAf?: Prisma.BoolFilter<"ReportContent"> | boolean;
    sundayNt?: Prisma.BoolFilter<"ReportContent"> | boolean;
    cellMeeting?: Prisma.BoolFilter<"ReportContent"> | boolean;
    bigo?: Prisma.StringFilter<"ReportContent"> | string;
    reportId?: Prisma.IntFilter<"ReportContent"> | number;
    reportHeader?: Prisma.XOR<Prisma.ReportHeaderScalarRelationFilter, Prisma.ReportHeaderWhereInput>;
};
export type ReportContentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    memberNm?: Prisma.SortOrder;
    wesDay?: Prisma.SortOrder;
    sundayAf?: Prisma.SortOrder;
    sundayNt?: Prisma.SortOrder;
    cellMeeting?: Prisma.SortOrder;
    bigo?: Prisma.SortOrder;
    reportId?: Prisma.SortOrder;
    reportHeader?: Prisma.ReportHeaderOrderByWithRelationInput;
};
export type ReportContentWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ReportContentWhereInput | Prisma.ReportContentWhereInput[];
    OR?: Prisma.ReportContentWhereInput[];
    NOT?: Prisma.ReportContentWhereInput | Prisma.ReportContentWhereInput[];
    memberNm?: Prisma.StringFilter<"ReportContent"> | string;
    wesDay?: Prisma.BoolFilter<"ReportContent"> | boolean;
    sundayAf?: Prisma.BoolFilter<"ReportContent"> | boolean;
    sundayNt?: Prisma.BoolFilter<"ReportContent"> | boolean;
    cellMeeting?: Prisma.BoolFilter<"ReportContent"> | boolean;
    bigo?: Prisma.StringFilter<"ReportContent"> | string;
    reportId?: Prisma.IntFilter<"ReportContent"> | number;
    reportHeader?: Prisma.XOR<Prisma.ReportHeaderScalarRelationFilter, Prisma.ReportHeaderWhereInput>;
}, "id">;
export type ReportContentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    memberNm?: Prisma.SortOrder;
    wesDay?: Prisma.SortOrder;
    sundayAf?: Prisma.SortOrder;
    sundayNt?: Prisma.SortOrder;
    cellMeeting?: Prisma.SortOrder;
    bigo?: Prisma.SortOrder;
    reportId?: Prisma.SortOrder;
    _count?: Prisma.ReportContentCountOrderByAggregateInput;
    _avg?: Prisma.ReportContentAvgOrderByAggregateInput;
    _max?: Prisma.ReportContentMaxOrderByAggregateInput;
    _min?: Prisma.ReportContentMinOrderByAggregateInput;
    _sum?: Prisma.ReportContentSumOrderByAggregateInput;
};
export type ReportContentScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReportContentScalarWhereWithAggregatesInput | Prisma.ReportContentScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReportContentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReportContentScalarWhereWithAggregatesInput | Prisma.ReportContentScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ReportContent"> | number;
    memberNm?: Prisma.StringWithAggregatesFilter<"ReportContent"> | string;
    wesDay?: Prisma.BoolWithAggregatesFilter<"ReportContent"> | boolean;
    sundayAf?: Prisma.BoolWithAggregatesFilter<"ReportContent"> | boolean;
    sundayNt?: Prisma.BoolWithAggregatesFilter<"ReportContent"> | boolean;
    cellMeeting?: Prisma.BoolWithAggregatesFilter<"ReportContent"> | boolean;
    bigo?: Prisma.StringWithAggregatesFilter<"ReportContent"> | string;
    reportId?: Prisma.IntWithAggregatesFilter<"ReportContent"> | number;
};
export type ReportContentCreateInput = {
    memberNm: string;
    wesDay: boolean;
    sundayAf: boolean;
    sundayNt: boolean;
    cellMeeting: boolean;
    bigo: string;
    reportHeader: Prisma.ReportHeaderCreateNestedOneWithoutReportContentInput;
};
export type ReportContentUncheckedCreateInput = {
    id?: number;
    memberNm: string;
    wesDay: boolean;
    sundayAf: boolean;
    sundayNt: boolean;
    cellMeeting: boolean;
    bigo: string;
    reportId: number;
};
export type ReportContentUpdateInput = {
    memberNm?: Prisma.StringFieldUpdateOperationsInput | string;
    wesDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sundayAf?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sundayNt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cellMeeting?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bigo?: Prisma.StringFieldUpdateOperationsInput | string;
    reportHeader?: Prisma.ReportHeaderUpdateOneRequiredWithoutReportContentNestedInput;
};
export type ReportContentUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    memberNm?: Prisma.StringFieldUpdateOperationsInput | string;
    wesDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sundayAf?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sundayNt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cellMeeting?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bigo?: Prisma.StringFieldUpdateOperationsInput | string;
    reportId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ReportContentCreateManyInput = {
    id?: number;
    memberNm: string;
    wesDay: boolean;
    sundayAf: boolean;
    sundayNt: boolean;
    cellMeeting: boolean;
    bigo: string;
    reportId: number;
};
export type ReportContentUpdateManyMutationInput = {
    memberNm?: Prisma.StringFieldUpdateOperationsInput | string;
    wesDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sundayAf?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sundayNt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cellMeeting?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bigo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ReportContentUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    memberNm?: Prisma.StringFieldUpdateOperationsInput | string;
    wesDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sundayAf?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sundayNt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cellMeeting?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bigo?: Prisma.StringFieldUpdateOperationsInput | string;
    reportId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ReportContentListRelationFilter = {
    every?: Prisma.ReportContentWhereInput;
    some?: Prisma.ReportContentWhereInput;
    none?: Prisma.ReportContentWhereInput;
};
export type ReportContentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReportContentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    memberNm?: Prisma.SortOrder;
    wesDay?: Prisma.SortOrder;
    sundayAf?: Prisma.SortOrder;
    sundayNt?: Prisma.SortOrder;
    cellMeeting?: Prisma.SortOrder;
    bigo?: Prisma.SortOrder;
    reportId?: Prisma.SortOrder;
};
export type ReportContentAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reportId?: Prisma.SortOrder;
};
export type ReportContentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    memberNm?: Prisma.SortOrder;
    wesDay?: Prisma.SortOrder;
    sundayAf?: Prisma.SortOrder;
    sundayNt?: Prisma.SortOrder;
    cellMeeting?: Prisma.SortOrder;
    bigo?: Prisma.SortOrder;
    reportId?: Prisma.SortOrder;
};
export type ReportContentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    memberNm?: Prisma.SortOrder;
    wesDay?: Prisma.SortOrder;
    sundayAf?: Prisma.SortOrder;
    sundayNt?: Prisma.SortOrder;
    cellMeeting?: Prisma.SortOrder;
    bigo?: Prisma.SortOrder;
    reportId?: Prisma.SortOrder;
};
export type ReportContentSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reportId?: Prisma.SortOrder;
};
export type ReportContentCreateNestedManyWithoutReportHeaderInput = {
    create?: Prisma.XOR<Prisma.ReportContentCreateWithoutReportHeaderInput, Prisma.ReportContentUncheckedCreateWithoutReportHeaderInput> | Prisma.ReportContentCreateWithoutReportHeaderInput[] | Prisma.ReportContentUncheckedCreateWithoutReportHeaderInput[];
    connectOrCreate?: Prisma.ReportContentCreateOrConnectWithoutReportHeaderInput | Prisma.ReportContentCreateOrConnectWithoutReportHeaderInput[];
    createMany?: Prisma.ReportContentCreateManyReportHeaderInputEnvelope;
    connect?: Prisma.ReportContentWhereUniqueInput | Prisma.ReportContentWhereUniqueInput[];
};
export type ReportContentUncheckedCreateNestedManyWithoutReportHeaderInput = {
    create?: Prisma.XOR<Prisma.ReportContentCreateWithoutReportHeaderInput, Prisma.ReportContentUncheckedCreateWithoutReportHeaderInput> | Prisma.ReportContentCreateWithoutReportHeaderInput[] | Prisma.ReportContentUncheckedCreateWithoutReportHeaderInput[];
    connectOrCreate?: Prisma.ReportContentCreateOrConnectWithoutReportHeaderInput | Prisma.ReportContentCreateOrConnectWithoutReportHeaderInput[];
    createMany?: Prisma.ReportContentCreateManyReportHeaderInputEnvelope;
    connect?: Prisma.ReportContentWhereUniqueInput | Prisma.ReportContentWhereUniqueInput[];
};
export type ReportContentUpdateManyWithoutReportHeaderNestedInput = {
    create?: Prisma.XOR<Prisma.ReportContentCreateWithoutReportHeaderInput, Prisma.ReportContentUncheckedCreateWithoutReportHeaderInput> | Prisma.ReportContentCreateWithoutReportHeaderInput[] | Prisma.ReportContentUncheckedCreateWithoutReportHeaderInput[];
    connectOrCreate?: Prisma.ReportContentCreateOrConnectWithoutReportHeaderInput | Prisma.ReportContentCreateOrConnectWithoutReportHeaderInput[];
    upsert?: Prisma.ReportContentUpsertWithWhereUniqueWithoutReportHeaderInput | Prisma.ReportContentUpsertWithWhereUniqueWithoutReportHeaderInput[];
    createMany?: Prisma.ReportContentCreateManyReportHeaderInputEnvelope;
    set?: Prisma.ReportContentWhereUniqueInput | Prisma.ReportContentWhereUniqueInput[];
    disconnect?: Prisma.ReportContentWhereUniqueInput | Prisma.ReportContentWhereUniqueInput[];
    delete?: Prisma.ReportContentWhereUniqueInput | Prisma.ReportContentWhereUniqueInput[];
    connect?: Prisma.ReportContentWhereUniqueInput | Prisma.ReportContentWhereUniqueInput[];
    update?: Prisma.ReportContentUpdateWithWhereUniqueWithoutReportHeaderInput | Prisma.ReportContentUpdateWithWhereUniqueWithoutReportHeaderInput[];
    updateMany?: Prisma.ReportContentUpdateManyWithWhereWithoutReportHeaderInput | Prisma.ReportContentUpdateManyWithWhereWithoutReportHeaderInput[];
    deleteMany?: Prisma.ReportContentScalarWhereInput | Prisma.ReportContentScalarWhereInput[];
};
export type ReportContentUncheckedUpdateManyWithoutReportHeaderNestedInput = {
    create?: Prisma.XOR<Prisma.ReportContentCreateWithoutReportHeaderInput, Prisma.ReportContentUncheckedCreateWithoutReportHeaderInput> | Prisma.ReportContentCreateWithoutReportHeaderInput[] | Prisma.ReportContentUncheckedCreateWithoutReportHeaderInput[];
    connectOrCreate?: Prisma.ReportContentCreateOrConnectWithoutReportHeaderInput | Prisma.ReportContentCreateOrConnectWithoutReportHeaderInput[];
    upsert?: Prisma.ReportContentUpsertWithWhereUniqueWithoutReportHeaderInput | Prisma.ReportContentUpsertWithWhereUniqueWithoutReportHeaderInput[];
    createMany?: Prisma.ReportContentCreateManyReportHeaderInputEnvelope;
    set?: Prisma.ReportContentWhereUniqueInput | Prisma.ReportContentWhereUniqueInput[];
    disconnect?: Prisma.ReportContentWhereUniqueInput | Prisma.ReportContentWhereUniqueInput[];
    delete?: Prisma.ReportContentWhereUniqueInput | Prisma.ReportContentWhereUniqueInput[];
    connect?: Prisma.ReportContentWhereUniqueInput | Prisma.ReportContentWhereUniqueInput[];
    update?: Prisma.ReportContentUpdateWithWhereUniqueWithoutReportHeaderInput | Prisma.ReportContentUpdateWithWhereUniqueWithoutReportHeaderInput[];
    updateMany?: Prisma.ReportContentUpdateManyWithWhereWithoutReportHeaderInput | Prisma.ReportContentUpdateManyWithWhereWithoutReportHeaderInput[];
    deleteMany?: Prisma.ReportContentScalarWhereInput | Prisma.ReportContentScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type ReportContentCreateWithoutReportHeaderInput = {
    memberNm: string;
    wesDay: boolean;
    sundayAf: boolean;
    sundayNt: boolean;
    cellMeeting: boolean;
    bigo: string;
};
export type ReportContentUncheckedCreateWithoutReportHeaderInput = {
    id?: number;
    memberNm: string;
    wesDay: boolean;
    sundayAf: boolean;
    sundayNt: boolean;
    cellMeeting: boolean;
    bigo: string;
};
export type ReportContentCreateOrConnectWithoutReportHeaderInput = {
    where: Prisma.ReportContentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReportContentCreateWithoutReportHeaderInput, Prisma.ReportContentUncheckedCreateWithoutReportHeaderInput>;
};
export type ReportContentCreateManyReportHeaderInputEnvelope = {
    data: Prisma.ReportContentCreateManyReportHeaderInput | Prisma.ReportContentCreateManyReportHeaderInput[];
    skipDuplicates?: boolean;
};
export type ReportContentUpsertWithWhereUniqueWithoutReportHeaderInput = {
    where: Prisma.ReportContentWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReportContentUpdateWithoutReportHeaderInput, Prisma.ReportContentUncheckedUpdateWithoutReportHeaderInput>;
    create: Prisma.XOR<Prisma.ReportContentCreateWithoutReportHeaderInput, Prisma.ReportContentUncheckedCreateWithoutReportHeaderInput>;
};
export type ReportContentUpdateWithWhereUniqueWithoutReportHeaderInput = {
    where: Prisma.ReportContentWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReportContentUpdateWithoutReportHeaderInput, Prisma.ReportContentUncheckedUpdateWithoutReportHeaderInput>;
};
export type ReportContentUpdateManyWithWhereWithoutReportHeaderInput = {
    where: Prisma.ReportContentScalarWhereInput;
    data: Prisma.XOR<Prisma.ReportContentUpdateManyMutationInput, Prisma.ReportContentUncheckedUpdateManyWithoutReportHeaderInput>;
};
export type ReportContentScalarWhereInput = {
    AND?: Prisma.ReportContentScalarWhereInput | Prisma.ReportContentScalarWhereInput[];
    OR?: Prisma.ReportContentScalarWhereInput[];
    NOT?: Prisma.ReportContentScalarWhereInput | Prisma.ReportContentScalarWhereInput[];
    id?: Prisma.IntFilter<"ReportContent"> | number;
    memberNm?: Prisma.StringFilter<"ReportContent"> | string;
    wesDay?: Prisma.BoolFilter<"ReportContent"> | boolean;
    sundayAf?: Prisma.BoolFilter<"ReportContent"> | boolean;
    sundayNt?: Prisma.BoolFilter<"ReportContent"> | boolean;
    cellMeeting?: Prisma.BoolFilter<"ReportContent"> | boolean;
    bigo?: Prisma.StringFilter<"ReportContent"> | string;
    reportId?: Prisma.IntFilter<"ReportContent"> | number;
};
export type ReportContentCreateManyReportHeaderInput = {
    id?: number;
    memberNm: string;
    wesDay: boolean;
    sundayAf: boolean;
    sundayNt: boolean;
    cellMeeting: boolean;
    bigo: string;
};
export type ReportContentUpdateWithoutReportHeaderInput = {
    memberNm?: Prisma.StringFieldUpdateOperationsInput | string;
    wesDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sundayAf?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sundayNt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cellMeeting?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bigo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ReportContentUncheckedUpdateWithoutReportHeaderInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    memberNm?: Prisma.StringFieldUpdateOperationsInput | string;
    wesDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sundayAf?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sundayNt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cellMeeting?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bigo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ReportContentUncheckedUpdateManyWithoutReportHeaderInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    memberNm?: Prisma.StringFieldUpdateOperationsInput | string;
    wesDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sundayAf?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sundayNt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cellMeeting?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bigo?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ReportContentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    memberNm?: boolean;
    wesDay?: boolean;
    sundayAf?: boolean;
    sundayNt?: boolean;
    cellMeeting?: boolean;
    bigo?: boolean;
    reportId?: boolean;
    reportHeader?: boolean | Prisma.ReportHeaderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reportContent"]>;
export type ReportContentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    memberNm?: boolean;
    wesDay?: boolean;
    sundayAf?: boolean;
    sundayNt?: boolean;
    cellMeeting?: boolean;
    bigo?: boolean;
    reportId?: boolean;
    reportHeader?: boolean | Prisma.ReportHeaderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reportContent"]>;
export type ReportContentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    memberNm?: boolean;
    wesDay?: boolean;
    sundayAf?: boolean;
    sundayNt?: boolean;
    cellMeeting?: boolean;
    bigo?: boolean;
    reportId?: boolean;
    reportHeader?: boolean | Prisma.ReportHeaderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reportContent"]>;
export type ReportContentSelectScalar = {
    id?: boolean;
    memberNm?: boolean;
    wesDay?: boolean;
    sundayAf?: boolean;
    sundayNt?: boolean;
    cellMeeting?: boolean;
    bigo?: boolean;
    reportId?: boolean;
};
export type ReportContentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "memberNm" | "wesDay" | "sundayAf" | "sundayNt" | "cellMeeting" | "bigo" | "reportId", ExtArgs["result"]["reportContent"]>;
export type ReportContentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reportHeader?: boolean | Prisma.ReportHeaderDefaultArgs<ExtArgs>;
};
export type ReportContentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reportHeader?: boolean | Prisma.ReportHeaderDefaultArgs<ExtArgs>;
};
export type ReportContentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reportHeader?: boolean | Prisma.ReportHeaderDefaultArgs<ExtArgs>;
};
export type $ReportContentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ReportContent";
    objects: {
        reportHeader: Prisma.$ReportHeaderPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        memberNm: string;
        wesDay: boolean;
        sundayAf: boolean;
        sundayNt: boolean;
        cellMeeting: boolean;
        bigo: string;
        reportId: number;
    }, ExtArgs["result"]["reportContent"]>;
    composites: {};
};
export type ReportContentGetPayload<S extends boolean | null | undefined | ReportContentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReportContentPayload, S>;
export type ReportContentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReportContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReportContentCountAggregateInputType | true;
};
export interface ReportContentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ReportContent'];
        meta: {
            name: 'ReportContent';
        };
    };
    findUnique<T extends ReportContentFindUniqueArgs>(args: Prisma.SelectSubset<T, ReportContentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReportContentClient<runtime.Types.Result.GetResult<Prisma.$ReportContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReportContentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReportContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReportContentClient<runtime.Types.Result.GetResult<Prisma.$ReportContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReportContentFindFirstArgs>(args?: Prisma.SelectSubset<T, ReportContentFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReportContentClient<runtime.Types.Result.GetResult<Prisma.$ReportContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReportContentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReportContentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReportContentClient<runtime.Types.Result.GetResult<Prisma.$ReportContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReportContentFindManyArgs>(args?: Prisma.SelectSubset<T, ReportContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReportContentCreateArgs>(args: Prisma.SelectSubset<T, ReportContentCreateArgs<ExtArgs>>): Prisma.Prisma__ReportContentClient<runtime.Types.Result.GetResult<Prisma.$ReportContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReportContentCreateManyArgs>(args?: Prisma.SelectSubset<T, ReportContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ReportContentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReportContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ReportContentDeleteArgs>(args: Prisma.SelectSubset<T, ReportContentDeleteArgs<ExtArgs>>): Prisma.Prisma__ReportContentClient<runtime.Types.Result.GetResult<Prisma.$ReportContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReportContentUpdateArgs>(args: Prisma.SelectSubset<T, ReportContentUpdateArgs<ExtArgs>>): Prisma.Prisma__ReportContentClient<runtime.Types.Result.GetResult<Prisma.$ReportContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReportContentDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReportContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReportContentUpdateManyArgs>(args: Prisma.SelectSubset<T, ReportContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ReportContentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReportContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ReportContentUpsertArgs>(args: Prisma.SelectSubset<T, ReportContentUpsertArgs<ExtArgs>>): Prisma.Prisma__ReportContentClient<runtime.Types.Result.GetResult<Prisma.$ReportContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReportContentCountArgs>(args?: Prisma.Subset<T, ReportContentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReportContentCountAggregateOutputType> : number>;
    aggregate<T extends ReportContentAggregateArgs>(args: Prisma.Subset<T, ReportContentAggregateArgs>): Prisma.PrismaPromise<GetReportContentAggregateType<T>>;
    groupBy<T extends ReportContentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReportContentGroupByArgs['orderBy'];
    } : {
        orderBy?: ReportContentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReportContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReportContentFieldRefs;
}
export interface Prisma__ReportContentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    reportHeader<T extends Prisma.ReportHeaderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReportHeaderDefaultArgs<ExtArgs>>): Prisma.Prisma__ReportHeaderClient<runtime.Types.Result.GetResult<Prisma.$ReportHeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReportContentFieldRefs {
    readonly id: Prisma.FieldRef<"ReportContent", 'Int'>;
    readonly memberNm: Prisma.FieldRef<"ReportContent", 'String'>;
    readonly wesDay: Prisma.FieldRef<"ReportContent", 'Boolean'>;
    readonly sundayAf: Prisma.FieldRef<"ReportContent", 'Boolean'>;
    readonly sundayNt: Prisma.FieldRef<"ReportContent", 'Boolean'>;
    readonly cellMeeting: Prisma.FieldRef<"ReportContent", 'Boolean'>;
    readonly bigo: Prisma.FieldRef<"ReportContent", 'String'>;
    readonly reportId: Prisma.FieldRef<"ReportContent", 'Int'>;
}
export type ReportContentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportContentSelect<ExtArgs> | null;
    omit?: Prisma.ReportContentOmit<ExtArgs> | null;
    include?: Prisma.ReportContentInclude<ExtArgs> | null;
    where: Prisma.ReportContentWhereUniqueInput;
};
export type ReportContentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportContentSelect<ExtArgs> | null;
    omit?: Prisma.ReportContentOmit<ExtArgs> | null;
    include?: Prisma.ReportContentInclude<ExtArgs> | null;
    where: Prisma.ReportContentWhereUniqueInput;
};
export type ReportContentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReportContentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReportContentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReportContentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportContentSelect<ExtArgs> | null;
    omit?: Prisma.ReportContentOmit<ExtArgs> | null;
    include?: Prisma.ReportContentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReportContentCreateInput, Prisma.ReportContentUncheckedCreateInput>;
};
export type ReportContentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReportContentCreateManyInput | Prisma.ReportContentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReportContentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportContentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReportContentOmit<ExtArgs> | null;
    data: Prisma.ReportContentCreateManyInput | Prisma.ReportContentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ReportContentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ReportContentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportContentSelect<ExtArgs> | null;
    omit?: Prisma.ReportContentOmit<ExtArgs> | null;
    include?: Prisma.ReportContentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReportContentUpdateInput, Prisma.ReportContentUncheckedUpdateInput>;
    where: Prisma.ReportContentWhereUniqueInput;
};
export type ReportContentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReportContentUpdateManyMutationInput, Prisma.ReportContentUncheckedUpdateManyInput>;
    where?: Prisma.ReportContentWhereInput;
    limit?: number;
};
export type ReportContentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportContentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReportContentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReportContentUpdateManyMutationInput, Prisma.ReportContentUncheckedUpdateManyInput>;
    where?: Prisma.ReportContentWhereInput;
    limit?: number;
    include?: Prisma.ReportContentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ReportContentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportContentSelect<ExtArgs> | null;
    omit?: Prisma.ReportContentOmit<ExtArgs> | null;
    include?: Prisma.ReportContentInclude<ExtArgs> | null;
    where: Prisma.ReportContentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReportContentCreateInput, Prisma.ReportContentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReportContentUpdateInput, Prisma.ReportContentUncheckedUpdateInput>;
};
export type ReportContentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportContentSelect<ExtArgs> | null;
    omit?: Prisma.ReportContentOmit<ExtArgs> | null;
    include?: Prisma.ReportContentInclude<ExtArgs> | null;
    where: Prisma.ReportContentWhereUniqueInput;
};
export type ReportContentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportContentWhereInput;
    limit?: number;
};
export type ReportContentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportContentSelect<ExtArgs> | null;
    omit?: Prisma.ReportContentOmit<ExtArgs> | null;
    include?: Prisma.ReportContentInclude<ExtArgs> | null;
};
