import { Body, Controller, Post } from '@nestjs/common';
import { CompactObjectService } from './compact-object.service';
import { CompactObjectDto } from './dto/compact-object.dto';

@Controller('compact-object')
export class CompactObjectController {
  constructor(private readonly compactObjectService: CompactObjectService) {}

  @Post()
  async generateCode(@Body() dto: CompactObjectDto) {
    const result = await this.compactObjectService.getCompactObjectCode(dto.language);
    return result; // { codeSnippet: "some python code..." }
  }
}
