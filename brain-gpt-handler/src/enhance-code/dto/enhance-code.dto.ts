import { IsString } from 'class-validator';

export class EnhanceCodeDto {
  @IsString()
  code: string;

  @IsString()
  language: string;
}
