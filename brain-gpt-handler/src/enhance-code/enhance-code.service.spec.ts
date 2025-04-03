import { Test, TestingModule } from '@nestjs/testing';
import { EnhanceCodeService } from './enhance-code.service';

describe('EnhanceCodeService', () => {
  let service: EnhanceCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnhanceCodeService],
    }).compile();

    service = module.get<EnhanceCodeService>(EnhanceCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
