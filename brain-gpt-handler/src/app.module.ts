import { Module } from '@nestjs/common';
import { EnhanceCodeModule } from './enhance-code/enhance-code.module';
import { CompactObjectModule as ProgrammingAlgorithmModule } from './programming-algorithm/programming-algorithm.module';

@Module({
  imports: [
    EnhanceCodeModule,
    ProgrammingAlgorithmModule,
  ],
})
export class AppModule {}