import { Body, Controller, Post } from '@nestjs/common';
import { ProgrammingAlgorithmService } from './programming-algorithm.service';
import { ProgrammingAlgorithmDto } from './dto/programming-algorithm.dto';

@Controller('programming-algorithm')
export class ProgrammingAlgorithmController {
  constructor(private readonly compactObjectService: ProgrammingAlgorithmService) { }

  @Post()
  async generateCode(@Body() dto: ProgrammingAlgorithmDto) {
    return await this.compactObjectService.getProgrammingAlgorithmCode(dto.language, dto.algorithm_name);
  }
}
