import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SheetService } from './sheet.service';
import { CreateSheetDto } from './dto/create-sheet.dto';
import { UpdateSheetDto } from './dto/update-sheet.dto';

@Controller('sheet')
export class SheetController {
  constructor(private readonly sheetService: SheetService) {}

  @Get()
  async findAll(
    @Query() query ) {
    return this.sheetService.findAllSheet(query.title);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {

    return this.sheetService.findOne(+id);
  }

  @Post()
  create(@Body() createSheetDto: CreateSheetDto) {
    return this.sheetService.create(createSheetDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSheetDto: UpdateSheetDto) {
    return this.sheetService.update(+id, updateSheetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sheetService.remove(+id);
  }
}
