import { Test, TestingModule } from '@nestjs/testing';
import { KwangController } from './kwang.controller';

describe('Kwang Controller', () => {
  let controller: KwangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KwangController],
    }).compile();

    controller = module.get<KwangController>(KwangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
