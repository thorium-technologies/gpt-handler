import { Test, TestingModule } from '@nestjs/testing';
import { CompactObjectService } from './compact-object.service';

describe('CompactObjectService', () => {
  let service: CompactObjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompactObjectService],
    }).compile();

    service = module.get<CompactObjectService>(CompactObjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
