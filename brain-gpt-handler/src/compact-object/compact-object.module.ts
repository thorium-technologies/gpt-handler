import { Module } from '@nestjs/common';
import { CompactObjectController } from './compact-object.controller';
import { CompactObjectService } from './compact-object.service';
import { OpenAiModule } from '../common/openai/openai.module';
import { ChatCompletionHandler } from 'src/common/openai/response-handlers/chat-completion.handler';

@Module({
  imports: [OpenAiModule],
  controllers: [CompactObjectController],
  providers: [CompactObjectService, ChatCompletionHandler],
})
export class CompactObjectModule {}
