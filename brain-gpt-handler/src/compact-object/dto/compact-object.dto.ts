import { IsString } from 'class-validator';

/**
 * DTO for the request body when asking for code
 * to obtain a compact object in a desired language.
 */
export class CompactObjectDto {
  @IsString()
  language: string;
}
