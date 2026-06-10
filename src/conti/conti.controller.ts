// 콘티 REST API 컨트롤러
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { ContiService } from "./conti.service";
import { CreateContiDto } from "./dto/create-conti.dto";
import { UpdateContiDto } from "./dto/update-conti.dto";
import { QueryContiDto } from "./dto/query-conti.dto";

@Controller("conti")
export class ContiController {
  constructor(private readonly contiService: ContiService) {}

  @Get()
  findAll(@Query() query: QueryContiDto) {
    return this.contiService.findAll(query);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.contiService.findOne(+id);
  }

  @Post()
  create(@Body() createContiDto: CreateContiDto) {
    return this.contiService.create(createContiDto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateContiDto: UpdateContiDto) {
    return this.contiService.update(+id, updateContiDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.contiService.remove(+id);
  }
}
