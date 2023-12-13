import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';

import { UrlShorterModule } from './url-shortner/url-shorter.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/test'),
    UrlShorterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
