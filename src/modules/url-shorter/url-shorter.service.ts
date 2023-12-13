import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUrlShorterDto } from './dto/create-url-shorter.dto';
import { UpdateUrlShorterDto } from './dto/update-url-shorter.dto';
import { Model } from 'mongoose';
import { UrlShorterModel } from './entities/url-shorter.entity';
import { generateRandomText } from 'src/utils/string/random';

@Injectable()
export class UrlShorterService {
  constructor(
    @InjectModel(UrlShorterModel.name)
    private UrlShorterModel: Model<UrlShorterModel>,
  ) {}
  async create(createUrlShorterDto: CreateUrlShorterDto) {
    let hash = generateRandomText(6);
    let data = await this.UrlShorterModel.find({ hash });
    while (data.length) {
      hash = generateRandomText(6);
      data = await this.UrlShorterModel.find({ hash });
    }
    const newUrlShort = new this.UrlShorterModel({
      ...createUrlShorterDto,
      hash,
    });

    return await newUrlShort.save();
  }

  async findAll() {
    const data = await this.UrlShorterModel.find();
    return { msg: `This action returns all urlShortner`, data };
  }

  async findOne(id: string) {
    const shortUrl = await this.UrlShorterModel.findOne({ hash: id });
    return shortUrl.url;
  }

  update(id: string, updateUrlShorterDto: UpdateUrlShorterDto) {
    return `This action updates a #${id} urlShortner`;
  }

  remove(id: string) {
    return `This action removes a #${id} urlShortner`;
  }
}
