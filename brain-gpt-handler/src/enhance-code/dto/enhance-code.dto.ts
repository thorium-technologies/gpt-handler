// src/enhance-code/dto/enhance-code.dto.ts
import { IsString } from 'class-validator';

export class EnhanceCodeDto {
  @IsString()
  code: string;

  @IsString()
  language: string;
}
