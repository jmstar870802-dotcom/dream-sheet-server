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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SheetController = void 0;
const common_1 = require("@nestjs/common");
const sheet_service_1 = require("./sheet.service");
const create_sheet_dto_1 = require("./dto/create-sheet.dto");
const update_sheet_dto_1 = require("./dto/update-sheet.dto");
let SheetController = class SheetController {
    sheetService;
    constructor(sheetService) {
        this.sheetService = sheetService;
    }
    async findAll(query) {
        return this.sheetService.findAllSheet(query.title);
    }
    findOne(id) {
        return this.sheetService.findOne(+id);
    }
    create(createSheetDto) {
        return this.sheetService.create(createSheetDto);
    }
    update(id, updateSheetDto) {
        return this.sheetService.update(+id, updateSheetDto);
    }
    remove(id) {
        return this.sheetService.remove(+id);
    }
};
exports.SheetController = SheetController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SheetController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SheetController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sheet_dto_1.CreateSheetDto]),
    __metadata("design:returntype", void 0)
], SheetController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sheet_dto_1.UpdateSheetDto]),
    __metadata("design:returntype", void 0)
], SheetController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SheetController.prototype, "remove", null);
exports.SheetController = SheetController = __decorate([
    (0, common_1.Controller)('sheet'),
    __metadata("design:paramtypes", [sheet_service_1.SheetService])
], SheetController);
//# sourceMappingURL=sheet.controller.js.map