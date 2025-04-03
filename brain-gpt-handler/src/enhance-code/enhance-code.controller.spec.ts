import { Test, TestingModule } from '@nestjs/testing';
import { EnhanceCodeController } from './enhance-code.controller';

describe('EnhanceCodeController', () => {
  let controller: EnhanceCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnhanceCodeController],
    }).compile();

    controller = module.get<EnhanceCodeController>(EnhanceCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
