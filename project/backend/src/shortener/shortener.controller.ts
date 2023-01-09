import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Redirect,
} from '@nestjs/common';
import { ShortenerService } from './shortener.service';
import { ShortenedLinks } from '@prisma/client';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller()
export class ShortenerController {
  constructor(
    private readonly shortenerService: ShortenerService,
    private httpService: HttpService,
  ) {}
  @Get()
  async getAllShortenedLinks(): Promise<ShortenedLinks[]> {
    return this.shortenerService.getAllShortenedLink();
  }
  @Post()
  async createShortenedLink(@Body('url') url: string): Promise<ShortenedLinks> {
    try {
      await firstValueFrom(this.httpService.get(url));

      return this.shortenerService.createShortenedLink(url);
    } catch (error) {
      throw new HttpException('Invalid URL', HttpStatus.BAD_REQUEST);
    }
  }
  @Get(':hash')
  @Redirect()
  async getShortenedLink(@Param('hash') hash: string) {
    const result = await this.shortenerService.getShortenedLink(hash);

    return {
      url: result.url,
    };
  }
  
  @Delete(':id')
  async Delete(@Param('id') id: number): Promise<ShortenedLinks> {
    return this.shortenerService.deleteShortenedLinks(id);
  }
}
