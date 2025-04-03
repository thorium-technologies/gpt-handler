import { Module } from '@nestjs/common';
import { EnhanceCodeModule } from './enhance-code/enhance-code.module';
import { CompactObjectModule } from './compact-object/compact-object.module';

@Module({
  imports: [
    EnhanceCodeModule,
    CompactObjectModule,
  ],
})
export class AppModule {}