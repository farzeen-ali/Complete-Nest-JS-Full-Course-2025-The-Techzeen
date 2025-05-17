import { Test, TestingModule } from '@nestjs/testing';
import { EvController } from './ev.controller';

describe('EvController', () => {
  let controller: EvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvController],
    }).compile();

    controller = module.get<EvController>(EvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
