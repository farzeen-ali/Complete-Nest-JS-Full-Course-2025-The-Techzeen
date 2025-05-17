import { Test, TestingModule } from '@nestjs/testing';
import { EvService } from './ev.service';

describe('EvService', () => {
  let service: EvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvService],
    }).compile();

    service = module.get<EvService>(EvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
