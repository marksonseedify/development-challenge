import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ShortenedLinks } from '@prisma/client';

@Injectable()
export class ShortenerService {
  constructor(private prisma: PrismaService) {}

  async getAllShortenedLink(): Promise<ShortenedLinks[]> {
    return this.prisma.shortenedLinks.findMany({
      orderBy: { counter: 'desc' }
    });
  }

  async getShortenedLink(hash: string): Promise<ShortenedLinks | null> {
    const result = await this.prisma.shortenedLinks.findFirstOrThrow({
      where: { hash },
    });

    if (result) {
      await this.prisma.shortenedLinks.update({
        where: { id: result.id },
        data: { counter: result.counter + 1 },
      });
    }

    return result;
  }

  async createShortenedLink(url: string): Promise<ShortenedLinks> {
    const hash = Math.random().toString(36).slice(5);

    const result = await this.prisma.shortenedLinks.create({
      data: {
        url,
        hash,
      },
    });

    return result;
  }

  async deleteShortenedLinks(id: number): Promise<ShortenedLinks> {
    return this.prisma.shortenedLinks.delete({
      where: { id: Number(id) },
    });
  }
}
