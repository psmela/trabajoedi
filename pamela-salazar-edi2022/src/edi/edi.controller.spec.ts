import { Test, TestingModule } from '@nestjs/testing';
import { EdiController } from './edi.controller';

describe('EdiController', () => {
  let controller: EdiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EdiController],
    }).compile();

    controller = module.get<EdiController>(EdiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
