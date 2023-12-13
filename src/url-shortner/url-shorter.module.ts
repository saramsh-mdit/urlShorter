import { Module } from '@nestjs/common';
import { UrlShorterService } from './url-shorter.service';
import { UrlShorterController } from './url-shorter.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UrlShorterModel,
  UrlShorterSchema,
} from './entities/url-shortner.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UrlShorterModel.name, schema: UrlShorterSchema },
    ]),
  ],
  controllers: [UrlShorterController],
  providers: [UrlShorterService],
})
export class UrlShorterModule {}
