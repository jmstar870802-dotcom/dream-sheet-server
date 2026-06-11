import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ContiModel = runtime.Types.Result.DefaultSelection<Prisma.$ContiPayload>;
export type AggregateConti = {
    _count: ContiCountAggregateOutputType | null;
    _avg: ContiAvgAggregateOutputType | null;
    _sum: ContiSumAggregateOutputType | null;
    _min: ContiMinAggregateOutputType | null;
    _max: ContiMaxAggregateOutputType | null;
};
export type ContiAvgAggregateOutputType = {
    id: number | null;
};
export type ContiSumAggregateOutputType = {
    id: number | null;
};
export type ContiMinAggregateOutputType = {
    id: number | null;
    contiDate: string | null;
    contiNote: string | null;
    contiLeader: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ContiMaxAggregateOutputType = {
    id: number | null;
    contiDate: string | null;
    contiNote: string | null;
    contiLeader: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ContiCountAggregateOutputType = {
    id: number;
    contiDate: number;
    contiNote: number;
    contiLeader: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ContiAvgAggregateInputType = {
    id?: true;
};
export type ContiSumAggregateInputType = {
    id?: true;
};
export type ContiMinAggregateInputType = {
    id?: true;
    contiDate?: true;
    contiNote?: true;
    contiLeader?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ContiMaxAggregateInputType = {
    id?: true;
    contiDate?: true;
    contiNote?: true;
    contiLeader?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ContiCountAggregateInputType = {
    id?: true;
    contiDate?: true;
    contiNote?: true;
    contiLeader?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ContiAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContiWhereInput;
    orderBy?: Prisma.ContiOrderByWithRelationInput | Prisma.ContiOrderByWithRelationInput[];
    cursor?: Prisma.ContiWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContiCountAggregateInputType;
    _avg?: ContiAvgAggregateInputType;
    _sum?: ContiSumAggregateInputType;
    _min?: ContiMinAggregateInputType;
    _max?: ContiMaxAggregateInputType;
};
export type GetContiAggregateType<T extends ContiAggregateArgs> = {
    [P in keyof T & keyof AggregateConti]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConti[P]> : Prisma.GetScalarType<T[P], AggregateConti[P]>;
};
export type ContiGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContiWhereInput;
    orderBy?: Prisma.ContiOrderByWithAggregationInput | Prisma.ContiOrderByWithAggregationInput[];
    by: Prisma.ContiScalarFieldEnum[] | Prisma.ContiScalarFieldEnum;
    having?: Prisma.ContiScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContiCountAggregateInputType | true;
    _avg?: ContiAvgAggregateInputType;
    _sum?: ContiSumAggregateInputType;
    _min?: ContiMinAggregateInputType;
    _max?: ContiMaxAggregateInputType;
};
export type ContiGroupByOutputType = {
    id: number;
    contiDate: string;
    contiNote: string;
    contiLeader: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ContiCountAggregateOutputType | null;
    _avg: ContiAvgAggregateOutputType | null;
    _sum: ContiSumAggregateOutputType | null;
    _min: ContiMinAggregateOutputType | null;
    _max: ContiMaxAggregateOutputType | null;
};
export type GetContiGroupByPayload<T extends ContiGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContiGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContiGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContiGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContiGroupByOutputType[P]>;
}>>;
export type ContiWhereInput = {
    AND?: Prisma.ContiWhereInput | Prisma.ContiWhereInput[];
    OR?: Prisma.ContiWhereInput[];
    NOT?: Prisma.ContiWhereInput | Prisma.ContiWhereInput[];
    id?: Prisma.IntFilter<"Conti"> | number;
    contiDate?: Prisma.StringFilter<"Conti"> | string;
    contiNote?: Prisma.StringFilter<"Conti"> | string;
    contiLeader?: Prisma.StringFilter<"Conti"> | string;
    createdAt?: Prisma.DateTimeFilter<"Conti"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Conti"> | Date | string;
    contiDtl?: Prisma.ContiDtlListRelationFilter;
};
export type ContiOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    contiDate?: Prisma.SortOrder;
    contiNote?: Prisma.SortOrder;
    contiLeader?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    contiDtl?: Prisma.ContiDtlOrderByRelationAggregateInput;
};
export type ContiWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ContiWhereInput | Prisma.ContiWhereInput[];
    OR?: Prisma.ContiWhereInput[];
    NOT?: Prisma.ContiWhereInput | Prisma.ContiWhereInput[];
    contiDate?: Prisma.StringFilter<"Conti"> | string;
    contiNote?: Prisma.StringFilter<"Conti"> | string;
    contiLeader?: Prisma.StringFilter<"Conti"> | string;
    createdAt?: Prisma.DateTimeFilter<"Conti"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Conti"> | Date | string;
    contiDtl?: Prisma.ContiDtlListRelationFilter;
}, "id">;
export type ContiOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    contiDate?: Prisma.SortOrder;
    contiNote?: Prisma.SortOrder;
    contiLeader?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ContiCountOrderByAggregateInput;
    _avg?: Prisma.ContiAvgOrderByAggregateInput;
    _max?: Prisma.ContiMaxOrderByAggregateInput;
    _min?: Prisma.ContiMinOrderByAggregateInput;
    _sum?: Prisma.ContiSumOrderByAggregateInput;
};
export type ContiScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContiScalarWhereWithAggregatesInput | Prisma.ContiScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContiScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContiScalarWhereWithAggregatesInput | Prisma.ContiScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Conti"> | number;
    contiDate?: Prisma.StringWithAggregatesFilter<"Conti"> | string;
    contiNote?: Prisma.StringWithAggregatesFilter<"Conti"> | string;
    contiLeader?: Prisma.StringWithAggregatesFilter<"Conti"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Conti"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Conti"> | Date | string;
};
export type ContiCreateInput = {
    contiDate: string;
    contiNote: string;
    contiLeader: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    contiDtl?: Prisma.ContiDtlCreateNestedManyWithoutContiInput;
};
export type ContiUncheckedCreateInput = {
    id?: number;
    contiDate: string;
    contiNote: string;
    contiLeader: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    contiDtl?: Prisma.ContiDtlUncheckedCreateNestedManyWithoutContiInput;
};
export type ContiUpdateInput = {
    contiDate?: Prisma.StringFieldUpdateOperationsInput | string;
    contiNote?: Prisma.StringFieldUpdateOperationsInput | string;
    contiLeader?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contiDtl?: Prisma.ContiDtlUpdateManyWithoutContiNestedInput;
};
export type ContiUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    contiDate?: Prisma.StringFieldUpdateOperationsInput | string;
    contiNote?: Prisma.StringFieldUpdateOperationsInput | string;
    contiLeader?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contiDtl?: Prisma.ContiDtlUncheckedUpdateManyWithoutContiNestedInput;
};
export type ContiCreateManyInput = {
    id?: number;
    contiDate: string;
    contiNote: string;
    contiLeader: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ContiUpdateManyMutationInput = {
    contiDate?: Prisma.StringFieldUpdateOperationsInput | string;
    contiNote?: Prisma.StringFieldUpdateOperationsInput | string;
    contiLeader?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContiUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    contiDate?: Prisma.StringFieldUpdateOperationsInput | string;
    contiNote?: Prisma.StringFieldUpdateOperationsInput | string;
    contiLeader?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContiCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contiDate?: Prisma.SortOrder;
    contiNote?: Prisma.SortOrder;
    contiLeader?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ContiAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ContiMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contiDate?: Prisma.SortOrder;
    contiNote?: Prisma.SortOrder;
    contiLeader?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ContiMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contiDate?: Prisma.SortOrder;
    contiNote?: Prisma.SortOrder;
    contiLeader?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ContiSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ContiScalarRelationFilter = {
    is?: Prisma.ContiWhereInput;
    isNot?: Prisma.ContiWhereInput;
};
export type ContiCreateNestedOneWithoutContiDtlInput = {
    create?: Prisma.XOR<Prisma.ContiCreateWithoutContiDtlInput, Prisma.ContiUncheckedCreateWithoutContiDtlInput>;
    connectOrCreate?: Prisma.ContiCreateOrConnectWithoutContiDtlInput;
    connect?: Prisma.ContiWhereUniqueInput;
};
export type ContiUpdateOneRequiredWithoutContiDtlNestedInput = {
    create?: Prisma.XOR<Prisma.ContiCreateWithoutContiDtlInput, Prisma.ContiUncheckedCreateWithoutContiDtlInput>;
    connectOrCreate?: Prisma.ContiCreateOrConnectWithoutContiDtlInput;
    upsert?: Prisma.ContiUpsertWithoutContiDtlInput;
    connect?: Prisma.ContiWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContiUpdateToOneWithWhereWithoutContiDtlInput, Prisma.ContiUpdateWithoutContiDtlInput>, Prisma.ContiUncheckedUpdateWithoutContiDtlInput>;
};
export type ContiCreateWithoutContiDtlInput = {
    contiDate: string;
    contiNote: string;
    contiLeader: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ContiUncheckedCreateWithoutContiDtlInput = {
    id?: number;
    contiDate: string;
    contiNote: string;
    contiLeader: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ContiCreateOrConnectWithoutContiDtlInput = {
    where: Prisma.ContiWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContiCreateWithoutContiDtlInput, Prisma.ContiUncheckedCreateWithoutContiDtlInput>;
};
export type ContiUpsertWithoutContiDtlInput = {
    update: Prisma.XOR<Prisma.ContiUpdateWithoutContiDtlInput, Prisma.ContiUncheckedUpdateWithoutContiDtlInput>;
    create: Prisma.XOR<Prisma.ContiCreateWithoutContiDtlInput, Prisma.ContiUncheckedCreateWithoutContiDtlInput>;
    where?: Prisma.ContiWhereInput;
};
export type ContiUpdateToOneWithWhereWithoutContiDtlInput = {
    where?: Prisma.ContiWhereInput;
    data: Prisma.XOR<Prisma.ContiUpdateWithoutContiDtlInput, Prisma.ContiUncheckedUpdateWithoutContiDtlInput>;
};
export type ContiUpdateWithoutContiDtlInput = {
    contiDate?: Prisma.StringFieldUpdateOperationsInput | string;
    contiNote?: Prisma.StringFieldUpdateOperationsInput | string;
    contiLeader?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContiUncheckedUpdateWithoutContiDtlInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    contiDate?: Prisma.StringFieldUpdateOperationsInput | string;
    contiNote?: Prisma.StringFieldUpdateOperationsInput | string;
    contiLeader?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContiCountOutputType = {
    contiDtl: number;
};
export type ContiCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contiDtl?: boolean | ContiCountOutputTypeCountContiDtlArgs;
};
export type ContiCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiCountOutputTypeSelect<ExtArgs> | null;
};
export type ContiCountOutputTypeCountContiDtlArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContiDtlWhereInput;
};
export type ContiSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contiDate?: boolean;
    contiNote?: boolean;
    contiLeader?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    contiDtl?: boolean | Prisma.Conti$contiDtlArgs<ExtArgs>;
    _count?: boolean | Prisma.ContiCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["conti"]>;
export type ContiSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contiDate?: boolean;
    contiNote?: boolean;
    contiLeader?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["conti"]>;
export type ContiSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contiDate?: boolean;
    contiNote?: boolean;
    contiLeader?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["conti"]>;
export type ContiSelectScalar = {
    id?: boolean;
    contiDate?: boolean;
    contiNote?: boolean;
    contiLeader?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ContiOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "contiDate" | "contiNote" | "contiLeader" | "createdAt" | "updatedAt", ExtArgs["result"]["conti"]>;
export type ContiInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contiDtl?: boolean | Prisma.Conti$contiDtlArgs<ExtArgs>;
    _count?: boolean | Prisma.ContiCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ContiIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ContiIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ContiPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Conti";
    objects: {
        contiDtl: Prisma.$ContiDtlPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        contiDate: string;
        contiNote: string;
        contiLeader: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["conti"]>;
    composites: {};
};
export type ContiGetPayload<S extends boolean | null | undefined | ContiDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContiPayload, S>;
export type ContiCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContiCountAggregateInputType | true;
};
export interface ContiDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Conti'];
        meta: {
            name: 'Conti';
        };
    };
    findUnique<T extends ContiFindUniqueArgs>(args: Prisma.SelectSubset<T, ContiFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContiClient<runtime.Types.Result.GetResult<Prisma.$ContiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContiFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContiFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContiClient<runtime.Types.Result.GetResult<Prisma.$ContiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContiFindFirstArgs>(args?: Prisma.SelectSubset<T, ContiFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContiClient<runtime.Types.Result.GetResult<Prisma.$ContiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContiFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContiFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContiClient<runtime.Types.Result.GetResult<Prisma.$ContiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContiFindManyArgs>(args?: Prisma.SelectSubset<T, ContiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContiCreateArgs>(args: Prisma.SelectSubset<T, ContiCreateArgs<ExtArgs>>): Prisma.Prisma__ContiClient<runtime.Types.Result.GetResult<Prisma.$ContiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContiCreateManyArgs>(args?: Prisma.SelectSubset<T, ContiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContiCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContiDeleteArgs>(args: Prisma.SelectSubset<T, ContiDeleteArgs<ExtArgs>>): Prisma.Prisma__ContiClient<runtime.Types.Result.GetResult<Prisma.$ContiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContiUpdateArgs>(args: Prisma.SelectSubset<T, ContiUpdateArgs<ExtArgs>>): Prisma.Prisma__ContiClient<runtime.Types.Result.GetResult<Prisma.$ContiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContiDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContiUpdateManyArgs>(args: Prisma.SelectSubset<T, ContiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContiUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContiUpsertArgs>(args: Prisma.SelectSubset<T, ContiUpsertArgs<ExtArgs>>): Prisma.Prisma__ContiClient<runtime.Types.Result.GetResult<Prisma.$ContiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContiCountArgs>(args?: Prisma.Subset<T, ContiCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContiCountAggregateOutputType> : number>;
    aggregate<T extends ContiAggregateArgs>(args: Prisma.Subset<T, ContiAggregateArgs>): Prisma.PrismaPromise<GetContiAggregateType<T>>;
    groupBy<T extends ContiGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContiGroupByArgs['orderBy'];
    } : {
        orderBy?: ContiGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContiFieldRefs;
}
export interface Prisma__ContiClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    contiDtl<T extends Prisma.Conti$contiDtlArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Conti$contiDtlArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContiDtlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContiFieldRefs {
    readonly id: Prisma.FieldRef<"Conti", 'Int'>;
    readonly contiDate: Prisma.FieldRef<"Conti", 'String'>;
    readonly contiNote: Prisma.FieldRef<"Conti", 'String'>;
    readonly contiLeader: Prisma.FieldRef<"Conti", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Conti", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Conti", 'DateTime'>;
}
export type ContiFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiSelect<ExtArgs> | null;
    omit?: Prisma.ContiOmit<ExtArgs> | null;
    include?: Prisma.ContiInclude<ExtArgs> | null;
    where: Prisma.ContiWhereUniqueInput;
};
export type ContiFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiSelect<ExtArgs> | null;
    omit?: Prisma.ContiOmit<ExtArgs> | null;
    include?: Prisma.ContiInclude<ExtArgs> | null;
    where: Prisma.ContiWhereUniqueInput;
};
export type ContiFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiSelect<ExtArgs> | null;
    omit?: Prisma.ContiOmit<ExtArgs> | null;
    include?: Prisma.ContiInclude<ExtArgs> | null;
    where?: Prisma.ContiWhereInput;
    orderBy?: Prisma.ContiOrderByWithRelationInput | Prisma.ContiOrderByWithRelationInput[];
    cursor?: Prisma.ContiWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContiScalarFieldEnum | Prisma.ContiScalarFieldEnum[];
};
export type ContiFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiSelect<ExtArgs> | null;
    omit?: Prisma.ContiOmit<ExtArgs> | null;
    include?: Prisma.ContiInclude<ExtArgs> | null;
    where?: Prisma.ContiWhereInput;
    orderBy?: Prisma.ContiOrderByWithRelationInput | Prisma.ContiOrderByWithRelationInput[];
    cursor?: Prisma.ContiWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContiScalarFieldEnum | Prisma.ContiScalarFieldEnum[];
};
export type ContiFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiSelect<ExtArgs> | null;
    omit?: Prisma.ContiOmit<ExtArgs> | null;
    include?: Prisma.ContiInclude<ExtArgs> | null;
    where?: Prisma.ContiWhereInput;
    orderBy?: Prisma.ContiOrderByWithRelationInput | Prisma.ContiOrderByWithRelationInput[];
    cursor?: Prisma.ContiWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContiScalarFieldEnum | Prisma.ContiScalarFieldEnum[];
};
export type ContiCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiSelect<ExtArgs> | null;
    omit?: Prisma.ContiOmit<ExtArgs> | null;
    include?: Prisma.ContiInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContiCreateInput, Prisma.ContiUncheckedCreateInput>;
};
export type ContiCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContiCreateManyInput | Prisma.ContiCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContiCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContiOmit<ExtArgs> | null;
    data: Prisma.ContiCreateManyInput | Prisma.ContiCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContiUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiSelect<ExtArgs> | null;
    omit?: Prisma.ContiOmit<ExtArgs> | null;
    include?: Prisma.ContiInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContiUpdateInput, Prisma.ContiUncheckedUpdateInput>;
    where: Prisma.ContiWhereUniqueInput;
};
export type ContiUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContiUpdateManyMutationInput, Prisma.ContiUncheckedUpdateManyInput>;
    where?: Prisma.ContiWhereInput;
    limit?: number;
};
export type ContiUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContiOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContiUpdateManyMutationInput, Prisma.ContiUncheckedUpdateManyInput>;
    where?: Prisma.ContiWhereInput;
    limit?: number;
};
export type ContiUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiSelect<ExtArgs> | null;
    omit?: Prisma.ContiOmit<ExtArgs> | null;
    include?: Prisma.ContiInclude<ExtArgs> | null;
    where: Prisma.ContiWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContiCreateInput, Prisma.ContiUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContiUpdateInput, Prisma.ContiUncheckedUpdateInput>;
};
export type ContiDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiSelect<ExtArgs> | null;
    omit?: Prisma.ContiOmit<ExtArgs> | null;
    include?: Prisma.ContiInclude<ExtArgs> | null;
    where: Prisma.ContiWhereUniqueInput;
};
export type ContiDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContiWhereInput;
    limit?: number;
};
export type Conti$contiDtlArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContiDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContiSelect<ExtArgs> | null;
    omit?: Prisma.ContiOmit<ExtArgs> | null;
    include?: Prisma.ContiInclude<ExtArgs> | null;
};
