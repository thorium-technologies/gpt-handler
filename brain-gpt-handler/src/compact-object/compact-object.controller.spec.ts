import { Test, TestingModule } from '@nestjs/testing';
import { CompactObjectController } from './compact-object.controller';


describe('CompactObjectController', () => {
  let controller: CompactObjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompactObjectController],
    }).compile();

    controller = module.get<CompactObjectController>(CompactObjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
