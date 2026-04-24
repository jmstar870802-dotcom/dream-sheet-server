import { SheetService } from './sheet.service';
import { CreateSheetDto } from './dto/create-sheet.dto';
import { UpdateSheetDto } from './dto/update-sheet.dto';
export declare class SheetController {
    private readonly sheetService;
    constructor(sheetService: SheetService);
    findAll(query: any): Promise<{
        id: number;
        title: string;
        key: string;
        lyrics: string;
        notation: string;
        img_url: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        title: string;
        key: string;
        lyrics: string;
        notation: string;
        img_url: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    create(createSheetDto: CreateSheetDto): Promise<{
        id: number;
        title: string;
        key: string;
        lyrics: string;
        notation: string;
        img_url: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateSheetDto: UpdateSheetDto): Promise<{
        id: number;
        title: string;
        key: string;
        lyrics: string;
        notation: string;
        img_url: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<void>;
}
