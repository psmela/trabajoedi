import { Test, TestingModule } from '@nestjs/testing';
import { PameService } from './pame.service';

describe('PameService', () => {
  let service: PameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PameService],
    }).compile();

    service = module.get<PameService>(PameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
