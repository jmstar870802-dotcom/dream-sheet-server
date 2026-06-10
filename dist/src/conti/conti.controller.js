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
exports.ContiController = void 0;
const common_1 = require("@nestjs/common");
const conti_service_1 = require("./conti.service");
const create_conti_dto_1 = require("./dto/create-conti.dto");
const update_conti_dto_1 = require("./dto/update-conti.dto");
const query_conti_dto_1 = require("./dto/query-conti.dto");
let ContiController = class ContiController {
    contiService;
    constructor(contiService) {
        this.contiService = contiService;
    }
    findAll(query) {
        return this.contiService.findAll(query);
    }
    findOne(id) {
        return this.contiService.findOne(+id);
    }
    create(createContiDto) {
        return this.contiService.create(createContiDto);
    }
    update(id, updateContiDto) {
        return this.contiService.update(+id, updateContiDto);
    }
    remove(id) {
        return this.contiService.remove(+id);
    }
};
exports.ContiController = ContiController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_conti_dto_1.QueryContiDto]),
    __metadata("design:returntype", void 0)
], ContiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_conti_dto_1.CreateContiDto]),
    __metadata("design:returntype", void 0)
], ContiController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_conti_dto_1.UpdateContiDto]),
    __metadata("design:returntype", void 0)
], ContiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContiController.prototype, "remove", null);
exports.ContiController = ContiController = __decorate([
    (0, common_1.Controller)("conti"),
    __metadata("design:paramtypes", [conti_service_1.ContiService])
], ContiController);
//# sourceMappingURL=conti.controller.js.map