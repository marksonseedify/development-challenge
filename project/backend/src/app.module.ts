import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ShortenerModule } from './shortener/shortener.module';

@Module({
  imports: [ShortenerModule],
  providers: [AppService],
})
export class AppModule {}
