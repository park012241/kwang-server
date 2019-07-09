import { Test, TestingModule } from '@nestjs/testing';
import { KwangService } from './kwang.service';

describe('KwangService', () => {
  let service: KwangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KwangService],
    }).compile();

    service = module.get<KwangService>(KwangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
