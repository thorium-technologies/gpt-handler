// src/enhance-code/enhance-code.module.ts
import { Module } from '@nestjs/common';
import { EnhanceCodeService } from './enhance-code.service';
import { EnhanceCodeController } from './enhance-code.controller';
import { OpenAiModule } from '../common/openai/openai.module';
import { ChatCompletionHandler } from '../common/openai/response-handlers/chat-completion.handler';

@Module({
  imports: [OpenAiModule],
  providers: [EnhanceCodeService, ChatCompletionHandler],
  controllers: [EnhanceCodeController],
})
export class EnhanceCodeModule {}
