"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SheetService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SheetService = class SheetService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllSheet(title) {
        const sheet_list = await this.prisma.sheet.findMany({
            where: {
                title: {
                    contains: title
                }
            }
        });
        return sheet_list;
    }
    async findOne(id) {
        const sheet_list = await this.prisma.sheet.findUnique({
            where: {
                id
            }
        });
        return sheet_list;
    }
    async create(createSheetDto) {
        return await this.prisma.sheet.create({ data: createSheetDto });
    }
    async update(id, updateSheetDto) {
        const beforeUpdateData = await this.prisma.sheet
            .findUnique({
            where: {
                id: id,
            },
        })
            .catch((err) => console.log(err));
        if (!beforeUpdateData) {
            throw new common_1.NotFoundException(`${id}번 도서는 존재하지 않습니다`);
        }
        return await this.prisma.sheet.update({
            where: {
                id: id,
            },
            data: updateSheetDto,
        });
    }
    async remove(id) {
        await this.prisma.sheet.delete({
            where: {
                id: id,
            },
        });
    }
};
exports.SheetService = SheetService;
exports.SheetService = SheetService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SheetService);
//# sourceMappingURL=sheet.service.js.map