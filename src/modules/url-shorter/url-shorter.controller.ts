import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { UrlShorterService } from './url-shorter.service';
import { CreateUrlShorterDto } from './dto/create-url-shorter.dto';
import { UpdateUrlShorterDto } from './dto/update-url-shorter.dto';
import { Response } from 'express';

@Controller('url-shorter')
export class UrlShorterController {
  constructor(private readonly urlShorterService: UrlShorterService) {}

  @Post()
  create(@Body() createUrlShorterDto: CreateUrlShorterDto) {
    return this.urlShorterService.create(createUrlShorterDto);
  }

  @Get()
  async findAll() {
    return await this.urlShorterService.findAll();
  }

  @Get(':id')
  async findOne(@Res() response: Response, @Param('id') id: string) {
    const url = await this.urlShorterService.findOne(id);
    response.redirect(url);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUrlShorterDto: UpdateUrlShorterDto,
  ) {
    return this.urlShorterService.update(id, updateUrlShorterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.urlShorterService.remove(id);
  }
}
