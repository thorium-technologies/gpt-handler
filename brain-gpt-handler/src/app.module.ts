import { Module } from '@nestjs/common';
import { EnhanceCodeModule } from './enhance-code/enhance-code.module';

@Module({
  imports: [EnhanceCodeModule],
})
export class AppModule {}
