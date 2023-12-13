import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<UrlShorterModel>;

@Schema()
export class UrlShorterModel {
  @Prop()
  url: string;

  @Prop()
  hash: string;

  @Prop()
  name: string;
}

export const UrlShorterSchema = SchemaFactory.createForClass(UrlShorterModel);
