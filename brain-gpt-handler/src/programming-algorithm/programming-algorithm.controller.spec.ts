import { Test, TestingModule } from '@nestjs/testing';
import { ProgrammingAlgorithmController as ProgrammingAlgorithmController } from './programming-algorithm.controller';


describe('ProgrammingAlgorithmController', () => {
  let controller: ProgrammingAlgorithmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgrammingAlgorithmController],
    }).compile();

    controller = module.get<ProgrammingAlgorithmController>(ProgrammingAlgorithmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
