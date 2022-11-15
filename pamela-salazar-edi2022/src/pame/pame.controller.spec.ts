import { Test, TestingModule } from '@nestjs/testing';
import { PameController } from './pame.controller';

describe('PameController', () => {
  let controller: PameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PameController],
    }).compile();

    controller = module.get<PameController>(PameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
