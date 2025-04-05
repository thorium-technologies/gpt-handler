import { Module } from '@nestjs/common';
import { ProgrammingAlgorithmController } from './programming-algorithm.controller';
import { ProgrammingAlgorithmService as ProgrammingAlgorithmService } from './programming-algorithm.service';
import { OpenAiModule } from '../common/openai/openai.module';
import { ChatCompletionHandler } from 'src/common/openai/response-handlers/chat-completion.handler';

@Module({
  imports: [OpenAiModule],
  controllers: [ProgrammingAlgorithmController],
  providers: [ProgrammingAlgorithmService, ChatCompletionHandler],
})
export class CompactObjectModule { }
