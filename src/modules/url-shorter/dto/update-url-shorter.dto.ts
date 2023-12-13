import { PartialType } from '@nestjs/mapped-types';
import { CreateUrlShorterDto } from './create-url-shorter.dto';

export class UpdateUrlShorterDto extends PartialType(CreateUrlShorterDto) {}
