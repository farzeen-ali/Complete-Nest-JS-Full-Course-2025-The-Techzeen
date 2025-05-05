import { Test, TestingModule } from '@nestjs/testing';
import { MynameController } from './myname.controller';

describe('MynameController', () => {
  let controller: MynameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MynameController],
    }).compile();

    controller = module.get<MynameController>(MynameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
