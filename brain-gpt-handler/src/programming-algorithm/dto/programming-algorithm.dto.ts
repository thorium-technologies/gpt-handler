import { IsString } from 'class-validator';

export class ProgrammingAlgorithmDto {
  @IsString()
  language: string;

  @IsString()
  algorithm_name: string;
}
