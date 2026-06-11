import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ContiDtlModel = runtime.Types.Result.DefaultSelection<Prisma.$ContiDtlPayload>;
export type AggregateContiDtl = {
    _count: ContiDtlCountAggregateOutputType | null;
    _avg: ContiDtlAvgAggregateOutputType | null;
    _sum: ContiDtlSumAggregateOutputType | null;
    _min: ContiDtlMinAggregateOutputType | null;
    _max: ContiDtlMaxAggregateOutputType | null;
};
export type ContiDtlAvgAggregateOutputType = {
    id: number | null;
    contiOrder: number | null;
    ContiId: number | null;
    SheetId: number | null;
};
export type ContiDtlSumAggregateOutputType = {
    id: number | null;
    contiOrder: number | null;
    ContiId: number | null;
    SheetId: number | null;
};
export type ContiDtlMinAggregateOutputType = {
    id: number | null;
    contiNotation: string | null;
    conti_img_url: string | null;
    contiOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    ContiId: number | null;
    SheetId: number | null;
};
export type ContiDtlMaxAggregateOutputType = {
    id: number | null;
    contiNotation: string | null;
    conti_img_url: string | null;
    contiOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    ContiId: number | null;
    SheetId: number | null;
};
export type ContiDtlCountAggregateOutputType = {
    id: number;
    contiNotation: number;
    conti_img_url: number;
    contiOrder: number;
    createdAt: number;
    updatedAt: number;
    ContiId: number;
    SheetId: number;
    _all: number;
};
export type ContiDtlAvgAggregateInputType = {
    id?: true;
    contiOrder?: true;
    ContiId?: true;
    SheetId?: true;
};
export type ContiDtlSumAggregateInputType = {
    id?: true;
    contiOrder?: true;
    ContiId?: true;
    SheetId?: true;
};
export type ContiDtlMinAggregateInputType = {
    id?: true;
    contiNotation?: true;
    conti_img_url?: true;
    contiOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    ContiId?: true;
    SheetId?: true;
};
export type ContiDtlMaxAggregateInputType = {
    id?: true;
    contiNotation?: true;
    conti_img_url?: true;
    contiOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    ContiId?: true;
    SheetId?: true;
};
export type ContiDtlCountAggregateInputType = {
    id?: true;
    contiNotation?: true;
    conti_img_url?: true;
    contiOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    ContiId?: true;
    SheetId?: true;
    _all?: true;
};
export type ContiDtlAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContiDtlWhereInput;
    orderBy?: Prisma.ContiDtlOrderByWithRelationInput | Prisma.ContiDtlOrderByWithRelationInput[];
    cursor?: Prisma.ContiDtlWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContiDtlCountAggregateInputType;
    _avg?: ContiDtlAvgAggregateInputType;
    _sum?: ContiDtlSumAggregateInputType;
    _min?: ContiDtlMinAggregateInputType;
    _max?: ContiDtlMaxAggregateInputType;
};
export type GetContiDtlAggregateType<T extends ContiDtlAggregateArgs> = {
    [P in keyof T & keyof AggregateContiDtl]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContiDtl[P]> : Prisma.GetScalarType<T[P], AggregateContiDtl[P]>;
};
export type ContiDtlGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContiDtlWhereInput;
    orderBy?: Prisma.ContiDtlOrderByWithAggregationInput | Prisma.ContiDtlOrderByWithAggregationInput[];
    by: Prisma.ContiDtlScalarFieldEnum[] | Prisma.ContiDtlScalarFieldEnum;
    having?: Prisma.ContiDtlScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContiDtlCountAggregateInputType | true;
    _avg?: ContiDtlAvgAggregateInputType;
    _sum?: ContiDtlSumAggregateInputType;
    _min?: ContiDtlMinAggregateInputType;
    _max?: ContiDtlMaxAggregateInputType;
};
export type ContiDtlGroupByOutputType = {
    id: number;
    contiNotation: string | null;
    conti_img_url: string | null;
    contiOrder: number;
    createdAt: Date;
    updatedAt: Date;
    ContiId: number;
    SheetId: number;
    _count: ContiDtlCountAggregateOutputType | null;
    _avg: ContiDtlAvgAggregateOutputType | null;
    _sum: ContiDtlSumAggregateOutputType | null;
    _min: ContiDtlMinAggregateOutputType | null;
    _max: ContiDtlMaxAggregateOutputType | null;
};
export type GetContiDtlGroupByPayload<T extends ContiDtlGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContiDtlGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContiDtlGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContiDtlGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContiDtlGroupByOutputType[P]>;
}>>;
export type ContiDtlWhereInput = {
    AND?: Prisma.ContiDtlWhereInput | Prisma.ContiDtlWhereInput[];
    OR?: Prisma.ContiDtlWhereInput[];
    NOT?: Prisma.ContiDtlWhereInput | Prisma.ContiDtlWhereInput[];
    id?: Prisma.IntFilter<"ContiDtl"> | number;
    contiNotation?: Prisma.StringNullableFilter<"ContiDtl"> | string | null;
    conti_img_url?: Prisma.StringNullableFilter<"ContiDtl"> | string | null;
    contiOrder?: Prisma.IntFilter<"ContiDtl"> | number;
    createdAt?: Prisma.DateTimeFilter<"ContiDtl"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ContiDtl"> | Date | string;
    ContiId?: Prisma.IntFilter<"ContiDtl"> | number;
    SheetId?: Prisma.IntFilter<"ContiDtl"> | number;
    conti?: Prisma.XOR<Prisma.ContiScalarRelationFilter, Prisma.ContiWhereInput>;
    sheet?: Prisma.XOR<Prisma.SheetScalarRelationFilter, Prisma.SheetWhereInput>;
};
export type ContiDtlOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    contiNotation?: Prisma.SortOrderInput | Prisma.SortOrder;
    conti_img_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    contiOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    ContiId?: Prisma.SortOrder;
    SheetId?: Prisma.SortOrder;
    conti?: Prisma.ContiOrderByWithRelationInput;
    sheet?: Prisma.SheetOrderByWithRelationInput;
};
export type ContiDtlWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ContiDtlWhereInput | Prisma.ContiDtlWhereInput[];
    OR?: Prisma.ContiDtlWhereInput[];
    NOT?: Prisma.ContiDtlWhereInput | Prisma.ContiDtlWhereInput[];
    contiNotation?: Prisma.StringNullableFilter<"ContiDtl"> | string | null;
    conti_img_url?: Prisma.StringNullableFilter<"ContiDtl"> | string | null;
    contiOrder?: Prisma.IntFilter<"ContiDtl"> | number;
    createdAt?: Prisma.DateTimeFilter<"ContiDtl"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ContiDtl"> | Date | string;
    ContiId?: Prisma.IntFilter<"ContiDtl"> | number;
    SheetId?: Prisma.IntFilter<"ContiDtl"> | number;
    conti?: Prisma.XOR<Prisma.ContiScalarRelationFilter, Prisma.ContiWhereInput>;
    sheet?: Prisma.XOR<Prisma.SheetScalarRelationFilter, Prisma.SheetWhereInput>;
}, "id">;
export type ContiDtlOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    contiNotation?: Prisma.SortOrderInput | Prisma.SortOrder;
    conti_img_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    contiOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    ContiId?: Prisma.SortOrder;
    SheetId?: Prisma.SortOrder;
    _count?: Prisma.ContiDtlCountOrderByAggregateInput;
    _avg?: Prisma.ContiDtlAvgOrderByAggregateInput;
    _max?: Prisma.ContiDtlMaxOrderByAggregateInput;
    _min?: Prisma.ContiDtlMinOrderByAggregateInput;
    _sum?: Prisma.ContiDtlSumOrderByAggregateInput;
};
export type ContiDtlScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContiDtlScalarWhereWithAggregatesInput | Prisma.ContiDtlScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContiDtlScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContiDtlScalarWhereWithAggregatesInput | Prisma.ContiDtlScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ContiDtl"> | number;
    contiNotation?: Prisma.StringNullableWithAggregatesFilter<"ContiDtl"> | string | null;
    conti_img_url?: Prisma.StringNullableWithAggregatesFilter<"ContiDtl"> | string | null;
    contiOrder?: Prisma.IntWithAggregatesFilter<"ContiDtl"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ContiDtl"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ContiDtl"> | Date | string;
    ContiId?: Prisma.IntWithAggregatesFilter<"ContiDtl"> | number;
    SheetId?: Prisma.IntWithAggregatesFilter<"ContiDtl"> | number;
};
export type ContiDtlCreateInput = {
    contiNotation?: string | null;
    conti_img_url?: string | null;
    contiOrder: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    conti: Prisma.ContiCreateNestedOneWithoutContiDtlInput;
    sheet: Prisma.SheetCreateNestedOneWithoutContiDtlInput;
};
export type ContiDtlUncheckedCreateInput = {
    id?: number;
    contiNotation?: string | null;
    conti_img_url?: string | null;
    contiOrder: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ContiId: number;
    SheetId: number;
};
export type ContiDtlUpdateInput = {
    contiNotation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conti_img_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contiOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    conti?: Prisma.ContiUpdateOneRequiredWithoutContiDtlNestedInput;
    sheet?: Prisma.SheetUpdateOneRequiredWithoutContiDtlNestedInput;
};
export type ContiDtlUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    contiNotation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conti_img_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contiOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ContiId?: Prisma.IntFieldUpdateOperationsInput | number;
    SheetId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContiDtlCreateManyInput = {
    id?: number;
    contiNotation?: string | null;
    conti_img_url?: string | null;
    contiOrder: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ContiId: number;
    SheetId: number;
};
export type ContiDtlUpdateManyMutationInput = {
    contiNotation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conti_img_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contiOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContiDtlUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    contiNotation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conti_img_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contiOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ContiId?: Prisma.IntFieldUpdateOperationsInput | number;
    SheetId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContiDtlListRelationFilter = {
    every?: Prisma.ContiDtlWhereInput;
    some?: Prisma.ContiDtlWhereInput;
    none?: Prisma.ContiDtlWhereInput;
};
export type ContiDtlOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ContiDtlCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contiNotation?: Prisma.SortOrder;
    conti_img_url?: Prisma.SortOrder;
    contiOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    ContiId?: Prisma.SortOrder;
    SheetId?: Prisma.SortOrder;
};
export type ContiDtlAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contiOrder?: Prisma.SortOrder;
    ContiId?: Prisma.SortOrder;
    SheetId?: Prisma.SortOrder;
};
export type ContiDtlMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contiNotation?: Prisma.SortOrder;
    conti_img_url?: Prisma.SortOrder;
    contiOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    ContiId?: Prisma.SortOrder;
    SheetId?: Prisma.SortOrder;
};
export type ContiDtlMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contiNotation?: Prisma.SortOrder;
    conti_img_url?: Prisma.SortOrder;
    contiOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    ContiId?: Prisma.SortOrder;
    SheetId?: Prisma.SortOrder;
};
export type ContiDtlSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contiOrder?: Prisma.SortOrder;
    ContiId?: Prisma.SortOrder;
    SheetId?: Prisma.SortOrder;
};
export type ContiDtlCreateNestedManyWithoutSheetInput = {
    create?: Prisma.XOR<Prisma.ContiDtlCreateWithoutSheetInput, Prisma.ContiDtlUncheckedCreateWithoutSheetInput> | Prisma.ContiDtlCreateWithoutSheetInput[] | Prisma.ContiDtlUncheckedCreateWithoutSheetInput[];
    connectOrCreate?: Prisma.ContiDtlCreateOrConnectWithoutSheetInput | Prisma.ContiDtlCreateOrConnectWithoutSheetInput[];
    createMany?: Prisma.ContiDtlCreateManySheetInputEnvelope;
    connect?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
};
export type ContiDtlUncheckedCreateNestedManyWithoutSheetInput = {
    create?: Prisma.XOR<Prisma.ContiDtlCreateWithoutSheetInput, Prisma.ContiDtlUncheckedCreateWithoutSheetInput> | Prisma.ContiDtlCreateWithoutSheetInput[] | Prisma.ContiDtlUncheckedCreateWithoutSheetInput[];
    connectOrCreate?: Prisma.ContiDtlCreateOrConnectWithoutSheetInput | Prisma.ContiDtlCreateOrConnectWithoutSheetInput[];
    createMany?: Prisma.ContiDtlCreateManySheetInputEnvelope;
    connect?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
};
export type ContiDtlUpdateManyWithoutSheetNestedInput = {
    create?: Prisma.XOR<Prisma.ContiDtlCreateWithoutSheetInput, Prisma.ContiDtlUncheckedCreateWithoutSheetInput> | Prisma.ContiDtlCreateWithoutSheetInput[] | Prisma.ContiDtlUncheckedCreateWithoutSheetInput[];
    connectOrCreate?: Prisma.ContiDtlCreateOrConnectWithoutSheetInput | Prisma.ContiDtlCreateOrConnectWithoutSheetInput[];
    upsert?: Prisma.ContiDtlUpsertWithWhereUniqueWithoutSheetInput | Prisma.ContiDtlUpsertWithWhereUniqueWithoutSheetInput[];
    createMany?: Prisma.ContiDtlCreateManySheetInputEnvelope;
    set?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
    disconnect?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
    delete?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
    connect?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
    update?: Prisma.ContiDtlUpdateWithWhereUniqueWithoutSheetInput | Prisma.ContiDtlUpdateWithWhereUniqueWithoutSheetInput[];
    updateMany?: Prisma.ContiDtlUpdateManyWithWhereWithoutSheetInput | Prisma.ContiDtlUpdateManyWithWhereWithoutSheetInput[];
    deleteMany?: Prisma.ContiDtlScalarWhereInput | Prisma.ContiDtlScalarWhereInput[];
};
export type ContiDtlUncheckedUpdateManyWithoutSheetNestedInput = {
    create?: Prisma.XOR<Prisma.ContiDtlCreateWithoutSheetInput, Prisma.ContiDtlUncheckedCreateWithoutSheetInput> | Prisma.ContiDtlCreateWithoutSheetInput[] | Prisma.ContiDtlUncheckedCreateWithoutSheetInput[];
    connectOrCreate?: Prisma.ContiDtlCreateOrConnectWithoutSheetInput | Prisma.ContiDtlCreateOrConnectWithoutSheetInput[];
    upsert?: Prisma.ContiDtlUpsertWithWhereUniqueWithoutSheetInput | Prisma.ContiDtlUpsertWithWhereUniqueWithoutSheetInput[];
    createMany?: Prisma.ContiDtlCreateManySheetInputEnvelope;
    set?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
    disconnect?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
    delete?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
    connect?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
    update?: Prisma.ContiDtlUpdateWithWhereUniqueWithoutSheetInput | Prisma.ContiDtlUpdateWithWhereUniqueWithoutSheetInput[];
    updateMany?: Prisma.ContiDtlUpdateManyWithWhereWithoutSheetInput | Prisma.ContiDtlUpdateManyWithWhereWithoutSheetInput[];
    deleteMany?: Prisma.ContiDtlScalarWhereInput | Prisma.ContiDtlScalarWhereInput[];
};
export type ContiDtlCreateNestedManyWithoutContiInput = {
    create?: Prisma.XOR<Prisma.ContiDtlCreateWithoutContiInput, Prisma.ContiDtlUncheckedCreateWithoutContiInput> | Prisma.ContiDtlCreateWithoutContiInput[] | Prisma.ContiDtlUncheckedCreateWithoutContiInput[];
    connectOrCreate?: Prisma.ContiDtlCreateOrConnectWithoutContiInput | Prisma.ContiDtlCreateOrConnectWithoutContiInput[];
    createMany?: Prisma.ContiDtlCreateManyContiInputEnvelope;
    connect?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
};
export type ContiDtlUncheckedCreateNestedManyWithoutContiInput = {
    create?: Prisma.XOR<Prisma.ContiDtlCreateWithoutContiInput, Prisma.ContiDtlUncheckedCreateWithoutContiInput> | Prisma.ContiDtlCreateWithoutContiInput[] | Prisma.ContiDtlUncheckedCreateWithoutContiInput[];
    connectOrCreate?: Prisma.ContiDtlCreateOrConnectWithoutContiInput | Prisma.ContiDtlCreateOrConnectWithoutContiInput[];
    createMany?: Prisma.ContiDtlCreateManyContiInputEnvelope;
    connect?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
};
export type ContiDtlUpdateManyWithoutContiNestedInput = {
    create?: Prisma.XOR<Prisma.ContiDtlCreateWithoutContiInput, Prisma.ContiDtlUncheckedCreateWithoutContiInput> | Prisma.ContiDtlCreateWithoutContiInput[] | Prisma.ContiDtlUncheckedCreateWithoutContiInput[];
    connectOrCreate?: Prisma.ContiDtlCreateOrConnectWithoutContiInput | Prisma.ContiDtlCreateOrConnectWithoutContiInput[];
    upsert?: Prisma.ContiDtlUpsertWithWhereUniqueWithoutContiInput | Prisma.ContiDtlUpsertWithWhereUniqueWithoutContiInput[];
    createMany?: Prisma.ContiDtlCreateManyContiInputEnvelope;
    set?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
    disconnect?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
    delete?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
    connect?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
    update?: Prisma.ContiDtlUpdateWithWhereUniqueWithoutContiInput | Prisma.ContiDtlUpdateWithWhereUniqueWithoutContiInput[];
    updateMany?: Prisma.ContiDtlUpdateManyWithWhereWithoutContiInput | Prisma.ContiDtlUpdateManyWithWhereWithoutContiInput[];
    deleteMany?: Prisma.ContiDtlScalarWhereInput | Prisma.ContiDtlScalarWhereInput[];
};
export type ContiDtlUncheckedUpdateManyWithoutContiNestedInput = {
    create?: Prisma.XOR<Prisma.ContiDtlCreateWithoutContiInput, Prisma.ContiDtlUncheckedCreateWithoutContiInput> | Prisma.ContiDtlCreateWithoutContiInput[] | Prisma.ContiDtlUncheckedCreateWithoutContiInput[];
    connectOrCreate?: Prisma.ContiDtlCreateOrConnectWithoutContiInput | Prisma.ContiDtlCreateOrConnectWithoutContiInput[];
    upsert?: Prisma.ContiDtlUpsertWithWhereUniqueWithoutContiInput | Prisma.ContiDtlUpsertWithWhereUniqueWithoutContiInput[];
    createMany?: Prisma.ContiDtlCreateManyContiInputEnvelope;
    set?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
    disconnect?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
    delete?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
    connect?: Prisma.ContiDtlWhereUniqueInput | Prisma.ContiDtlWhereUniqueInput[];
    update?: Prisma.ContiDtlUpdateWithWhereUniqueWithoutContiInput | Prisma.ContiDtlUpdateWithWhereUniqueWithoutContiInput[];
    updateMany?: Prisma.ContiDtlUpdateManyWithWhereWithoutContiInput | Prisma.ContiDtlUpdateManyWithWhereWithoutContiInput[];
    deleteMany?: Prisma.ContiDtlScalarWhereInput | Prisma.ContiDtlScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type ContiDtlCreateWithoutSheetInput = {
    contiNotation?: string | null;
    conti_img_url?: string | null;
    contiOrder: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    conti: Prisma.ContiCreateNestedOneWithoutContiDtlInput;
};
export type ContiDtlUncheckedCreateWithoutSheetInput = {
    id?: number;
    contiNotation?: string | null;
    conti_img_url?: string | null;
    contiOrder: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ContiId: number;
};
export type ContiDtlCreateOrConnectWithoutSheetInput = {
    where: Prisma.ContiDtlWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContiDtlCreateWithoutSheetInput, Prisma.ContiDtlUncheckedCreateWithoutSheetInput>;
};
export type ContiDtlCreateManySheetInputEnvelope = {
    data: Prisma.ContiDtlCreateManySheetInput | Prisma.ContiDtlCreateManySheetInput[];
    skipDuplicates?: boolean;
};
export type ContiDtlUpsertWithWhereUniqueWithoutSheetInput = {
    where: Prisma.ContiDtlWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContiDtlUpdateWithoutSheetInput, Prisma.ContiDtlUncheckedUpdateWithoutSheetInput>;
    create: Prisma.XOR<Prisma.ContiDtlCreateWithoutSheetInput, Prisma.ContiDtlUncheckedCreateWithoutSheetInput>;
};
export type ContiDtlUpdateWithWhereUniqueWithoutSheetInput = {
    where: Prisma.ContiDtlWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContiDtlUpdateWithoutSheetInput, Prisma.ContiDtlUncheckedUpdateWithoutSheetInput>;
};
export type ContiDtlUpdateManyWithWhereWithoutSheetInput = {
    where: Prisma.ContiDtlScalarWhereInput;
    data: Prisma.XOR<Prisma.ContiDtlUpdateManyMutationInput, Prisma.ContiDtlUncheckedUpdateManyWithoutSheetInput>;
};
export type ContiDtlScalarWhereInput = {
    AND?: Prisma.ContiDtlScalarWhereInput | Prisma.ContiDtlScalarWhereInput[];
    OR?: Prisma.ContiDtlScalarWhereInput[];
    NOT?: Prisma.ContiDtlScalarWhereInput | Prisma.ContiDtlScalarWhereInput[];
    id?: Prisma.IntFilter<"ContiDtl"> | number;
    contiNotation?: Prisma.StringNullableFilter<"ContiDtl"> | string | null;
    conti_img_url?: Prisma.StringNullableFilter<"ContiDtl"> | string | null;
    contiOrder?: Prisma.IntFilter<"ContiDtl"> | number;
    createdAt?: Prisma.DateTimeFilter<"ContiDtl"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ContiDtl"> | Date | string;
    ContiId?: Prisma.IntFilter<"ContiDtl"> | number;
    SheetId?: Prisma.IntFilter<"ContiDtl"> | number;
};
export type ContiDtlCreateWithoutContiInput = {
    contiNotation?: string | null;
    conti_img_url?: string | null;
    contiOrder: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sheet: Prisma.SheetCreateNestedOneWithoutContiDtlInput;
};
export type ContiDtlUncheckedCreateWithoutContiInput = {
    id?: number;
    contiNotation?: string | null;
    conti_img_url?: string | null;
    contiOrder: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    SheetId: number;
};
export type ContiDtlCreateOrConnectWithoutContiInput = {
    where: Prisma.ContiDtlWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContiDtlCreateWithoutContiInput, Prisma.ContiDtlUncheckedCreateWithoutContiInput>;
};
export type ContiDtlCreateManyContiInputEnvelope = {
    data: Prisma.ContiDtlCreateManyContiInput | Prisma.ContiDtlCreateManyContiInput[];
    skipDuplicates?: boolean;
};
export type ContiDtlUpsertWithWhereUniqueWithoutContiInput = {
    where: Prisma.ContiDtlWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContiDtlUpdateWithoutContiInput, Prisma.ContiDtlUncheckedUpdateWithoutContiInput>;
    create: Prisma.XOR<Prisma.ContiDtlCreateWithoutContiInput, Prisma.ContiDtlUncheckedCreateWithoutContiInput>;
};
export type ContiDtlUpdateWithWhereUniqueWithoutContiInput = {
    where: Prisma.ContiDtlWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContiDtlUpdateWithoutContiInput, Prisma.ContiDtlUncheckedUpdateWithoutContiInput>;
};
export type ContiDtlUpdateManyWithWhereWithoutContiInput = {
    where: Prisma.ContiDtlScalarWhereInput;
    data: Prisma.XOR<Prisma.ContiDtlUpdateManyMutationInput, Prisma.ContiDtlUncheckedUpdateManyWithoutContiInput>;
};
export type ContiDtlCreateManySheetInput = {
    id?: number;
    contiNotation?: string | null;
    conti_img_url?: string | null;
    contiOrder: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ContiId: number;
};
export type ContiDtlUpdateWithoutSheetInput = {
    contiNotation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conti_img_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contiOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    conti?: Prisma.ContiUpdateOneRequiredWithoutContiDtlNestedInput;
};
export type ContiDtlUncheckedUpdateWithoutSheetInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    contiNotation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conti_img_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contiOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ContiId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContiDtlUncheckedUpdateManyWithoutSheetInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    contiNotation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conti_img_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contiOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ContiId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContiDtlCreateManyContiInput = {
    id?: number;
    contiNotation?: string | null;
    conti_img_url?: string | null;
    contiOrder: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    SheetId: number;
};
export type ContiDtlUpdateWithoutContiInput = {
    contiNotation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conti_img_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contiOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sheet?: Prisma.SheetUpdateOneRequiredWithoutContiDtlNestedInput;
};
export type ContiDtlUncheckedUpdateWithoutContiInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    contiNotation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conti_img_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contiOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    SheetId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContiDtlUncheckedUpdateManyWithoutContiInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    contiNotation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conti_img_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contiOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    SheetId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContiDtlSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contiNotation?: boolean;
    conti_img_url?: boolean;
    contiOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    ContiId?: boolean;
    SheetId?: boolean;
    conti?: boolean | Prisma.ContiDefaultArgs<ExtArgs>;
    sheet?: boolean | Prisma.SheetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contiDtl"]>;
export type ContiDtlSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contiNotation?: boolean;
    conti_img_url?: boolean;
    contiOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    ContiId?: boolean;
    SheetId?: boolean;
    conti?: boolean | Prisma.ContiDefaultArgs<ExtArgs>;
    sheet?: boolean | Prisma.SheetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contiDtl"]>;
export type ContiDtlSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contiNotation?: boolean;
    conti_img_url?: boolean;
    contiOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    ContiId?: boolean;
    SheetId?: boolean;
    conti?: boolean | Prisma.ContiDefaultArgs<ExtArgs>;
    sheet?: boolean | Prisma.SheetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contiDtl"]>;
export type ContiDtlSelectScalar = {
    id?: boolean;
    contiNotation?: boolean;
    conti_img_url?: boolean;
    contiOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    ContiId?: boolean;
    SheetId?: boolean;
};
export type ContiDtlOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "contiNotation" | "conti_img_url" | "contiOrder" | "createdAt" | "updatedAt" | "ContiId" | "SheetId", ExtArgs["result"]["contiDtl"]>;
export type ContiDtlInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    conti?: boolean | Prisma.ContiDefaultArgs<ExtArgs>;
    sheet?: boolean | Prisma.SheetDefaultArgs<ExtArgs>;
};
export type ContiDtlIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    conti?: boolean | Prisma.ContiDefaultArgs<ExtArgs>;
    sheet?: boolean | Prisma.SheetDefaultArgs<ExtArgs>;
};
export type ContiDtlIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    conti?: boolean | Prisma.ContiDefaultArgs<ExtArgs>;
    sheet?: boolean | Prisma.SheetDefaultArgs<ExtArgs>;
};
export type $ContiDtlPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ContiDtl";
    objects: {
        conti: Prisma.$ContiPayload<ExtArgs>;
        sheet: Prisma.$SheetPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        contiNotation: string | null;
        conti_img_url: string | null;
        contiOrder: number;
        createdAt: Date;
        updatedAt: Date;
        ContiId: number;
        SheetId: number;
    }, ExtArgs["result"]["contiDtl"]>;
    composites: {};
};
export type ContiDtlGetPayload<S extends boolean | null | undefined | ContiDtlDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContiDtlPayload, S>;
export type ContiDtlCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContiDtlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContiDtlCountAggregateInputType | true;
};
export interface ContiDtlDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ContiDtl'];
        meta: {
            name: 'ContiDtl';
        };
    };
    findUnique<T extends ContiDtlFindUniqueArgs>(args: Prisma.SelectSubset<T, ContiDtlFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContiDtlClient<runtime.Types.Result.GetResult<Prisma.$ContiDtlPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContiDtlFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContiDtlFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContiDtlClient<runtime.Types.Result.GetResult<Prisma.$ContiDtlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContiDtlFindFirstArgs>(args?: Prisma.SelectSubset<T, ContiDtlFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContiDtlClient<runtime.Types.Result.GetResult<Prisma.$ContiDtlPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContiDtlFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContiDtlFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContiDtlClient<runtime.Types.Result.GetResult<Prisma.$ContiDtlPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContiDtlFindManyArgs>(args?: Prisma.SelectSubset<T, ContiDtlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContiDtlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContiDtlCreateArgs>(args: Prisma.SelectSubset<T, ContiDtlCreateArgs<ExtArgs>>): Prisma.Prisma__ContiDtlClient<runtime.Types.Result.GetResult<Prisma.$ContiDtlPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContiDtlCreateManyArgs>(args?: Prisma.SelectSubset<T, ContiDtlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContiDtlCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContiDtlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContiDtlPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContiDtlDeleteArgs>(args: Prisma.SelectSubset<T, ContiDtlDeleteArgs<ExtArgs>>): Prisma.Prisma__ContiDtlClient<runtime.Types.Result.GetResult<Prisma.$ContiDtlPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContiDtlUpdateArgs>(args: Prisma.SelectSubset<T, ContiDtlUpdateArgs<ExtArgs>>): Prisma.Prisma__ContiDtlClient<runtime.Types.Result.GetResult<Prisma.$ContiDtlPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContiDtlDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContiDtlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContiDtlUpdateManyArgs>(args: Prisma.SelectSubset<T, ContiDtlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContiDtlUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContiDtlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContiDtlPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContiDtlUpsertArgs>(args: Prisma.SelectSubset<T, ContiDtlUpsertArgs<ExtArgs>>): Prisma.Prisma__ContiDtlClient<runtime.Types.Result.GetResult<Prisma.$ContiDtlPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContiDtlCountArgs>(args?: Prisma.Subset<T, ContiDtlCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContiDtlCountAggregateOutputType> : number>;
    aggregate<T extends ContiDtlAggregateArgs>(args: Prisma.Subset<T, ContiDtlAggregateArgs>): Prisma.PrismaPromise<GetContiDtlAggregateType<T>>;
    groupBy<T extends ContiDtlGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContiDtlGroupByArgs['orderBy'];
    } : {
        orderBy?: ContiDtlGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContiDtlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContiDtlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContiDtlFieldRefs;
}
export interface Prisma__ContiDtlClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    conti<T extends Prisma.ContiDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ContiDefaultArgs<ExtArgs>>): Prisma.Prisma__ContiClient<runtime.Types.Result.GetResult<Prisma.$ContiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    sheet<T extends Prisma.SheetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SheetDefaultArgs<ExtArgs>>): Prisma.Prisma__SheetClient<runtime.Types.Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContiDtlFieldRefs {
    readonly id: Prisma.FieldRef<"ContiDtl", 'Int'>;
    readonly contiNotation: Prisma.FieldRef<"ContiDtl", 'String'>;
    readonly conti_img_url: Prisma.FieldRef<"ContiDtl", 'String'>;
    readonly contiOrder: Prisma.FieldRef<"ContiDtl", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"ContiDtl", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ContiDtl", 'DateTime'>;
    readonly ContiId: Prisma.FieldRef<"ContiDtl", 'Int'>;
    readonly SheetId: Prisma.FieldRef<"ContiDtl", 'Int'>;
}
export type ContiDtlFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiDtlSelect<ExtArgs> | null;
    omit?: Prisma.ContiDtlOmit<ExtArgs> | null;
    include?: Prisma.ContiDtlInclude<ExtArgs> | null;
    where: Prisma.ContiDtlWhereUniqueInput;
};
export type ContiDtlFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiDtlSelect<ExtArgs> | null;
    omit?: Prisma.ContiDtlOmit<ExtArgs> | null;
    include?: Prisma.ContiDtlInclude<ExtArgs> | null;
    where: Prisma.ContiDtlWhereUniqueInput;
};
export type ContiDtlFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiDtlSelect<ExtArgs> | null;
    omit?: Prisma.ContiDtlOmit<ExtArgs> | null;
    include?: Prisma.ContiDtlInclude<ExtArgs> | null;
    where?: Prisma.ContiDtlWhereInput;
    orderBy?: Prisma.ContiDtlOrderByWithRelationInput | Prisma.ContiDtlOrderByWithRelationInput[];
    cursor?: Prisma.ContiDtlWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContiDtlScalarFieldEnum | Prisma.ContiDtlScalarFieldEnum[];
};
export type ContiDtlFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiDtlSelect<ExtArgs> | null;
    omit?: Prisma.ContiDtlOmit<ExtArgs> | null;
    include?: Prisma.ContiDtlInclude<ExtArgs> | null;
    where?: Prisma.ContiDtlWhereInput;
    orderBy?: Prisma.ContiDtlOrderByWithRelationInput | Prisma.ContiDtlOrderByWithRelationInput[];
    cursor?: Prisma.ContiDtlWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContiDtlScalarFieldEnum | Prisma.ContiDtlScalarFieldEnum[];
};
export type ContiDtlFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiDtlSelect<ExtArgs> | null;
    omit?: Prisma.ContiDtlOmit<ExtArgs> | null;
    include?: Prisma.ContiDtlInclude<ExtArgs> | null;
    where?: Prisma.ContiDtlWhereInput;
    orderBy?: Prisma.ContiDtlOrderByWithRelationInput | Prisma.ContiDtlOrderByWithRelationInput[];
    cursor?: Prisma.ContiDtlWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContiDtlScalarFieldEnum | Prisma.ContiDtlScalarFieldEnum[];
};
export type ContiDtlCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiDtlSelect<ExtArgs> | null;
    omit?: Prisma.ContiDtlOmit<ExtArgs> | null;
    include?: Prisma.ContiDtlInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContiDtlCreateInput, Prisma.ContiDtlUncheckedCreateInput>;
};
export type ContiDtlCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContiDtlCreateManyInput | Prisma.ContiDtlCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContiDtlCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiDtlSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContiDtlOmit<ExtArgs> | null;
    data: Prisma.ContiDtlCreateManyInput | Prisma.ContiDtlCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ContiDtlIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ContiDtlUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiDtlSelect<ExtArgs> | null;
    omit?: Prisma.ContiDtlOmit<ExtArgs> | null;
    include?: Prisma.ContiDtlInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContiDtlUpdateInput, Prisma.ContiDtlUncheckedUpdateInput>;
    where: Prisma.ContiDtlWhereUniqueInput;
};
export type ContiDtlUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContiDtlUpdateManyMutationInput, Prisma.ContiDtlUncheckedUpdateManyInput>;
    where?: Prisma.ContiDtlWhereInput;
    limit?: number;
};
export type ContiDtlUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiDtlSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContiDtlOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContiDtlUpdateManyMutationInput, Prisma.ContiDtlUncheckedUpdateManyInput>;
    where?: Prisma.ContiDtlWhereInput;
    limit?: number;
    include?: Prisma.ContiDtlIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ContiDtlUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiDtlSelect<ExtArgs> | null;
    omit?: Prisma.ContiDtlOmit<ExtArgs> | null;
    include?: Prisma.ContiDtlInclude<ExtArgs> | null;
    where: Prisma.ContiDtlWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContiDtlCreateInput, Prisma.ContiDtlUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContiDtlUpdateInput, Prisma.ContiDtlUncheckedUpdateInput>;
};
export type ContiDtlDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiDtlSelect<ExtArgs> | null;
    omit?: Prisma.ContiDtlOmit<ExtArgs> | null;
    include?: Prisma.ContiDtlInclude<ExtArgs> | null;
    where: Prisma.ContiDtlWhereUniqueInput;
};
export type ContiDtlDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContiDtlWhereInput;
    limit?: number;
};
export type ContiDtlDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiDtlSelect<ExtArgs> | null;
    omit?: Prisma.ContiDtlOmit<ExtArgs> | null;
    include?: Prisma.ContiDtlInclude<ExtArgs> | null;
};
