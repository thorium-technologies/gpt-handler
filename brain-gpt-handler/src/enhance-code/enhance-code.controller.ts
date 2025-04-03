import { Body, Controller, Post } from '@nestjs/common';
import { EnhanceCodeDto } from './dto/enhance-code.dto';
import { EnhanceCodeService } from './enhance-code.service';

@Controller('enhance-code')
export class EnhanceCodeController {
  constructor(private readonly enhanceCodeService: EnhanceCodeService) {}

  @Post()
  async enhance(@Body() dto: EnhanceCodeDto) {
    const optimizedCode = await this.enhanceCodeService.enhance(dto.code, dto.language);
    return { optimizedCode };
  }
}