import { Module } from '@nestjs/common';
import { CompactObjectController } from './compact-object.controller';
import { CompactObjectService } from './compact-object.service';
import { CompactObjectHandler } from './response-handlers/compact-object.handler';
import { OpenAiModule } from '../common/openai/openai.module';

@Module({
  imports: [OpenAiModule],
  controllers: [CompactObjectController],
  providers: [CompactObjectService, CompactObjectHandler],
})
export class CompactObjectModule {}
