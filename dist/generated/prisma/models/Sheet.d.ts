import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SheetModel = runtime.Types.Result.DefaultSelection<Prisma.$SheetPayload>;
export type AggregateSheet = {
    _count: SheetCountAggregateOutputType | null;
    _avg: SheetAvgAggregateOutputType | null;
    _sum: SheetSumAggregateOutputType | null;
    _min: SheetMinAggregateOutputType | null;
    _max: SheetMaxAggregateOutputType | null;
};
export type SheetAvgAggregateOutputType = {
    id: number | null;
};
export type SheetSumAggregateOutputType = {
    id: number | null;
};
export type SheetMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    key: string | null;
    lyrics: string | null;
    notation: string | null;
    img_url: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SheetMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    key: string | null;
    lyrics: string | null;
    notation: string | null;
    img_url: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SheetCountAggregateOutputType = {
    id: number;
    title: number;
    key: number;
    lyrics: number;
    notation: number;
    img_url: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SheetAvgAggregateInputType = {
    id?: true;
};
export type SheetSumAggregateInputType = {
    id?: true;
};
export type SheetMinAggregateInputType = {
    id?: true;
    title?: true;
    key?: true;
    lyrics?: true;
    notation?: true;
    img_url?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SheetMaxAggregateInputType = {
    id?: true;
    title?: true;
    key?: true;
    lyrics?: true;
    notation?: true;
    img_url?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SheetCountAggregateInputType = {
    id?: true;
    title?: true;
    key?: true;
    lyrics?: true;
    notation?: true;
    img_url?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SheetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SheetWhereInput;
    orderBy?: Prisma.SheetOrderByWithRelationInput | Prisma.SheetOrderByWithRelationInput[];
    cursor?: Prisma.SheetWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SheetCountAggregateInputType;
    _avg?: SheetAvgAggregateInputType;
    _sum?: SheetSumAggregateInputType;
    _min?: SheetMinAggregateInputType;
    _max?: SheetMaxAggregateInputType;
};
export type GetSheetAggregateType<T extends SheetAggregateArgs> = {
    [P in keyof T & keyof AggregateSheet]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSheet[P]> : Prisma.GetScalarType<T[P], AggregateSheet[P]>;
};
export type SheetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SheetWhereInput;
    orderBy?: Prisma.SheetOrderByWithAggregationInput | Prisma.SheetOrderByWithAggregationInput[];
    by: Prisma.SheetScalarFieldEnum[] | Prisma.SheetScalarFieldEnum;
    having?: Prisma.SheetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SheetCountAggregateInputType | true;
    _avg?: SheetAvgAggregateInputType;
    _sum?: SheetSumAggregateInputType;
    _min?: SheetMinAggregateInputType;
    _max?: SheetMaxAggregateInputType;
};
export type SheetGroupByOutputType = {
    id: number;
    title: string;
    key: string;
    lyrics: string;
    notation: string;
    img_url: string;
    createdAt: Date;
    updatedAt: Date;
    _count: SheetCountAggregateOutputType | null;
    _avg: SheetAvgAggregateOutputType | null;
    _sum: SheetSumAggregateOutputType | null;
    _min: SheetMinAggregateOutputType | null;
    _max: SheetMaxAggregateOutputType | null;
};
export type GetSheetGroupByPayload<T extends SheetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SheetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SheetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SheetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SheetGroupByOutputType[P]>;
}>>;
export type SheetWhereInput = {
    AND?: Prisma.SheetWhereInput | Prisma.SheetWhereInput[];
    OR?: Prisma.SheetWhereInput[];
    NOT?: Prisma.SheetWhereInput | Prisma.SheetWhereInput[];
    id?: Prisma.IntFilter<"Sheet"> | number;
    title?: Prisma.StringFilter<"Sheet"> | string;
    key?: Prisma.StringFilter<"Sheet"> | string;
    lyrics?: Prisma.StringFilter<"Sheet"> | string;
    notation?: Prisma.StringFilter<"Sheet"> | string;
    img_url?: Prisma.StringFilter<"Sheet"> | string;
    createdAt?: Prisma.DateTimeFilter<"Sheet"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Sheet"> | Date | string;
    contiDtl?: Prisma.ContiDtlListRelationFilter;
};
export type SheetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    lyrics?: Prisma.SortOrder;
    notation?: Prisma.SortOrder;
    img_url?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    contiDtl?: Prisma.ContiDtlOrderByRelationAggregateInput;
};
export type SheetWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SheetWhereInput | Prisma.SheetWhereInput[];
    OR?: Prisma.SheetWhereInput[];
    NOT?: Prisma.SheetWhereInput | Prisma.SheetWhereInput[];
    title?: Prisma.StringFilter<"Sheet"> | string;
    key?: Prisma.StringFilter<"Sheet"> | string;
    lyrics?: Prisma.StringFilter<"Sheet"> | string;
    notation?: Prisma.StringFilter<"Sheet"> | string;
    img_url?: Prisma.StringFilter<"Sheet"> | string;
    createdAt?: Prisma.DateTimeFilter<"Sheet"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Sheet"> | Date | string;
    contiDtl?: Prisma.ContiDtlListRelationFilter;
}, "id">;
export type SheetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    lyrics?: Prisma.SortOrder;
    notation?: Prisma.SortOrder;
    img_url?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SheetCountOrderByAggregateInput;
    _avg?: Prisma.SheetAvgOrderByAggregateInput;
    _max?: Prisma.SheetMaxOrderByAggregateInput;
    _min?: Prisma.SheetMinOrderByAggregateInput;
    _sum?: Prisma.SheetSumOrderByAggregateInput;
};
export type SheetScalarWhereWithAggregatesInput = {
    AND?: Prisma.SheetScalarWhereWithAggregatesInput | Prisma.SheetScalarWhereWithAggregatesInput[];
    OR?: Prisma.SheetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SheetScalarWhereWithAggregatesInput | Prisma.SheetScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Sheet"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Sheet"> | string;
    key?: Prisma.StringWithAggregatesFilter<"Sheet"> | string;
    lyrics?: Prisma.StringWithAggregatesFilter<"Sheet"> | string;
    notation?: Prisma.StringWithAggregatesFilter<"Sheet"> | string;
    img_url?: Prisma.StringWithAggregatesFilter<"Sheet"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Sheet"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Sheet"> | Date | string;
};
export type SheetCreateInput = {
    title: string;
    key: string;
    lyrics: string;
    notation: string;
    img_url: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    contiDtl?: Prisma.ContiDtlCreateNestedManyWithoutSheetInput;
};
export type SheetUncheckedCreateInput = {
    id?: number;
    title: string;
    key: string;
    lyrics: string;
    notation: string;
    img_url: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    contiDtl?: Prisma.ContiDtlUncheckedCreateNestedManyWithoutSheetInput;
};
export type SheetUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    lyrics?: Prisma.StringFieldUpdateOperationsInput | string;
    notation?: Prisma.StringFieldUpdateOperationsInput | string;
    img_url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contiDtl?: Prisma.ContiDtlUpdateManyWithoutSheetNestedInput;
};
export type SheetUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    lyrics?: Prisma.StringFieldUpdateOperationsInput | string;
    notation?: Prisma.StringFieldUpdateOperationsInput | string;
    img_url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contiDtl?: Prisma.ContiDtlUncheckedUpdateManyWithoutSheetNestedInput;
};
export type SheetCreateManyInput = {
    id?: number;
    title: string;
    key: string;
    lyrics: string;
    notation: string;
    img_url: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SheetUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    lyrics?: Prisma.StringFieldUpdateOperationsInput | string;
    notation?: Prisma.StringFieldUpdateOperationsInput | string;
    img_url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SheetUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    lyrics?: Prisma.StringFieldUpdateOperationsInput | string;
    notation?: Prisma.StringFieldUpdateOperationsInput | string;
    img_url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SheetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    lyrics?: Prisma.SortOrder;
    notation?: Prisma.SortOrder;
    img_url?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SheetAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type SheetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    lyrics?: Prisma.SortOrder;
    notation?: Prisma.SortOrder;
    img_url?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SheetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    lyrics?: Prisma.SortOrder;
    notation?: Prisma.SortOrder;
    img_url?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SheetSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type SheetScalarRelationFilter = {
    is?: Prisma.SheetWhereInput;
    isNot?: Prisma.SheetWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type SheetCreateNestedOneWithoutContiDtlInput = {
    create?: Prisma.XOR<Prisma.SheetCreateWithoutContiDtlInput, Prisma.SheetUncheckedCreateWithoutContiDtlInput>;
    connectOrCreate?: Prisma.SheetCreateOrConnectWithoutContiDtlInput;
    connect?: Prisma.SheetWhereUniqueInput;
};
export type SheetUpdateOneRequiredWithoutContiDtlNestedInput = {
    create?: Prisma.XOR<Prisma.SheetCreateWithoutContiDtlInput, Prisma.SheetUncheckedCreateWithoutContiDtlInput>;
    connectOrCreate?: Prisma.SheetCreateOrConnectWithoutContiDtlInput;
    upsert?: Prisma.SheetUpsertWithoutContiDtlInput;
    connect?: Prisma.SheetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SheetUpdateToOneWithWhereWithoutContiDtlInput, Prisma.SheetUpdateWithoutContiDtlInput>, Prisma.SheetUncheckedUpdateWithoutContiDtlInput>;
};
export type SheetCreateWithoutContiDtlInput = {
    title: string;
    key: string;
    lyrics: string;
    notation: string;
    img_url: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SheetUncheckedCreateWithoutContiDtlInput = {
    id?: number;
    title: string;
    key: string;
    lyrics: string;
    notation: string;
    img_url: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SheetCreateOrConnectWithoutContiDtlInput = {
    where: Prisma.SheetWhereUniqueInput;
    create: Prisma.XOR<Prisma.SheetCreateWithoutContiDtlInput, Prisma.SheetUncheckedCreateWithoutContiDtlInput>;
};
export type SheetUpsertWithoutContiDtlInput = {
    update: Prisma.XOR<Prisma.SheetUpdateWithoutContiDtlInput, Prisma.SheetUncheckedUpdateWithoutContiDtlInput>;
    create: Prisma.XOR<Prisma.SheetCreateWithoutContiDtlInput, Prisma.SheetUncheckedCreateWithoutContiDtlInput>;
    where?: Prisma.SheetWhereInput;
};
export type SheetUpdateToOneWithWhereWithoutContiDtlInput = {
    where?: Prisma.SheetWhereInput;
    data: Prisma.XOR<Prisma.SheetUpdateWithoutContiDtlInput, Prisma.SheetUncheckedUpdateWithoutContiDtlInput>;
};
export type SheetUpdateWithoutContiDtlInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    lyrics?: Prisma.StringFieldUpdateOperationsInput | string;
    notation?: Prisma.StringFieldUpdateOperationsInput | string;
    img_url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SheetUncheckedUpdateWithoutContiDtlInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    lyrics?: Prisma.StringFieldUpdateOperationsInput | string;
    notation?: Prisma.StringFieldUpdateOperationsInput | string;
    img_url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SheetCountOutputType = {
    contiDtl: number;
};
export type SheetCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contiDtl?: boolean | SheetCountOutputTypeCountContiDtlArgs;
};
export type SheetCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SheetCountOutputTypeSelect<ExtArgs> | null;
};
export type SheetCountOutputTypeCountContiDtlArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContiDtlWhereInput;
};
export type SheetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    key?: boolean;
    lyrics?: boolean;
    notation?: boolean;
    img_url?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    contiDtl?: boolean | Prisma.Sheet$contiDtlArgs<ExtArgs>;
    _count?: boolean | Prisma.SheetCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sheet"]>;
export type SheetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    key?: boolean;
    lyrics?: boolean;
    notation?: boolean;
    img_url?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["sheet"]>;
export type SheetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    key?: boolean;
    lyrics?: boolean;
    notation?: boolean;
    img_url?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["sheet"]>;
export type SheetSelectScalar = {
    id?: boolean;
    title?: boolean;
    key?: boolean;
    lyrics?: boolean;
    notation?: boolean;
    img_url?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SheetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "key" | "lyrics" | "notation" | "img_url" | "createdAt" | "updatedAt", ExtArgs["result"]["sheet"]>;
export type SheetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contiDtl?: boolean | Prisma.Sheet$contiDtlArgs<ExtArgs>;
    _count?: boolean | Prisma.SheetCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SheetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type SheetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $SheetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Sheet";
    objects: {
        contiDtl: Prisma.$ContiDtlPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        key: string;
        lyrics: string;
        notation: string;
        img_url: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["sheet"]>;
    composites: {};
};
export type SheetGetPayload<S extends boolean | null | undefined | SheetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SheetPayload, S>;
export type SheetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SheetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SheetCountAggregateInputType | true;
};
export interface SheetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Sheet'];
        meta: {
            name: 'Sheet';
        };
    };
    findUnique<T extends SheetFindUniqueArgs>(args: Prisma.SelectSubset<T, SheetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SheetClient<runtime.Types.Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SheetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SheetClient<runtime.Types.Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SheetFindFirstArgs>(args?: Prisma.SelectSubset<T, SheetFindFirstArgs<ExtArgs>>): Prisma.Prisma__SheetClient<runtime.Types.Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SheetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SheetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SheetClient<runtime.Types.Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SheetFindManyArgs>(args?: Prisma.SelectSubset<T, SheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SheetCreateArgs>(args: Prisma.SelectSubset<T, SheetCreateArgs<ExtArgs>>): Prisma.Prisma__SheetClient<runtime.Types.Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SheetCreateManyArgs>(args?: Prisma.SelectSubset<T, SheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SheetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SheetDeleteArgs>(args: Prisma.SelectSubset<T, SheetDeleteArgs<ExtArgs>>): Prisma.Prisma__SheetClient<runtime.Types.Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SheetUpdateArgs>(args: Prisma.SelectSubset<T, SheetUpdateArgs<ExtArgs>>): Prisma.Prisma__SheetClient<runtime.Types.Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SheetDeleteManyArgs>(args?: Prisma.SelectSubset<T, SheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SheetUpdateManyArgs>(args: Prisma.SelectSubset<T, SheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SheetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SheetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SheetUpsertArgs>(args: Prisma.SelectSubset<T, SheetUpsertArgs<ExtArgs>>): Prisma.Prisma__SheetClient<runtime.Types.Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SheetCountArgs>(args?: Prisma.Subset<T, SheetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SheetCountAggregateOutputType> : number>;
    aggregate<T extends SheetAggregateArgs>(args: Prisma.Subset<T, SheetAggregateArgs>): Prisma.PrismaPromise<GetSheetAggregateType<T>>;
    groupBy<T extends SheetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SheetGroupByArgs['orderBy'];
    } : {
        orderBy?: SheetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SheetFieldRefs;
}
export interface Prisma__SheetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    contiDtl<T extends Prisma.Sheet$contiDtlArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sheet$contiDtlArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContiDtlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SheetFieldRefs {
    readonly id: Prisma.FieldRef<"Sheet", 'Int'>;
    readonly title: Prisma.FieldRef<"Sheet", 'String'>;
    readonly key: Prisma.FieldRef<"Sheet", 'String'>;
    readonly lyrics: Prisma.FieldRef<"Sheet", 'String'>;
    readonly notation: Prisma.FieldRef<"Sheet", 'String'>;
    readonly img_url: Prisma.FieldRef<"Sheet", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Sheet", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Sheet", 'DateTime'>;
}
export type SheetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SheetSelect<ExtArgs> | null;
    omit?: Prisma.SheetOmit<ExtArgs> | null;
    include?: Prisma.SheetInclude<ExtArgs> | null;
    where: Prisma.SheetWhereUniqueInput;
};
export type SheetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SheetSelect<ExtArgs> | null;
    omit?: Prisma.SheetOmit<ExtArgs> | null;
    include?: Prisma.SheetInclude<ExtArgs> | null;
    where: Prisma.SheetWhereUniqueInput;
};
export type SheetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SheetSelect<ExtArgs> | null;
    omit?: Prisma.SheetOmit<ExtArgs> | null;
    include?: Prisma.SheetInclude<ExtArgs> | null;
    where?: Prisma.SheetWhereInput;
    orderBy?: Prisma.SheetOrderByWithRelationInput | Prisma.SheetOrderByWithRelationInput[];
    cursor?: Prisma.SheetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SheetScalarFieldEnum | Prisma.SheetScalarFieldEnum[];
};
export type SheetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SheetSelect<ExtArgs> | null;
    omit?: Prisma.SheetOmit<ExtArgs> | null;
    include?: Prisma.SheetInclude<ExtArgs> | null;
    where?: Prisma.SheetWhereInput;
    orderBy?: Prisma.SheetOrderByWithRelationInput | Prisma.SheetOrderByWithRelationInput[];
    cursor?: Prisma.SheetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SheetScalarFieldEnum | Prisma.SheetScalarFieldEnum[];
};
export type SheetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SheetSelect<ExtArgs> | null;
    omit?: Prisma.SheetOmit<ExtArgs> | null;
    include?: Prisma.SheetInclude<ExtArgs> | null;
    where?: Prisma.SheetWhereInput;
    orderBy?: Prisma.SheetOrderByWithRelationInput | Prisma.SheetOrderByWithRelationInput[];
    cursor?: Prisma.SheetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SheetScalarFieldEnum | Prisma.SheetScalarFieldEnum[];
};
export type SheetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SheetSelect<ExtArgs> | null;
    omit?: Prisma.SheetOmit<ExtArgs> | null;
    include?: Prisma.SheetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SheetCreateInput, Prisma.SheetUncheckedCreateInput>;
};
export type SheetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SheetCreateManyInput | Prisma.SheetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SheetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SheetSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SheetOmit<ExtArgs> | null;
    data: Prisma.SheetCreateManyInput | Prisma.SheetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SheetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SheetSelect<ExtArgs> | null;
    omit?: Prisma.SheetOmit<ExtArgs> | null;
    include?: Prisma.SheetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SheetUpdateInput, Prisma.SheetUncheckedUpdateInput>;
    where: Prisma.SheetWhereUniqueInput;
};
export type SheetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SheetUpdateManyMutationInput, Prisma.SheetUncheckedUpdateManyInput>;
    where?: Prisma.SheetWhereInput;
    limit?: number;
};
export type SheetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SheetSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SheetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SheetUpdateManyMutationInput, Prisma.SheetUncheckedUpdateManyInput>;
    where?: Prisma.SheetWhereInput;
    limit?: number;
};
export type SheetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SheetSelect<ExtArgs> | null;
    omit?: Prisma.SheetOmit<ExtArgs> | null;
    include?: Prisma.SheetInclude<ExtArgs> | null;
    where: Prisma.SheetWhereUniqueInput;
    create: Prisma.XOR<Prisma.SheetCreateInput, Prisma.SheetUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SheetUpdateInput, Prisma.SheetUncheckedUpdateInput>;
};
export type SheetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SheetSelect<ExtArgs> | null;
    omit?: Prisma.SheetOmit<ExtArgs> | null;
    include?: Prisma.SheetInclude<ExtArgs> | null;
    where: Prisma.SheetWhereUniqueInput;
};
export type SheetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SheetWhereInput;
    limit?: number;
};
export type Sheet$contiDtlArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SheetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SheetSelect<ExtArgs> | null;
    omit?: Prisma.SheetOmit<ExtArgs> | null;
    include?: Prisma.SheetInclude<ExtArgs> | null;
};
