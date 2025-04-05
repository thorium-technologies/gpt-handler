import { Test, TestingModule } from '@nestjs/testing';
import { ProgrammingAlgorithmService } from './programming-algorithm.service';

describe('ProgrammingAlgorithmService', () => {
  let service: ProgrammingAlgorithmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgrammingAlgorithmService],
    }).compile();

    service = module.get<ProgrammingAlgorithmService>(ProgrammingAlgorithmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
