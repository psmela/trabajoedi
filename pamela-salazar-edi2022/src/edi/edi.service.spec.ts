import { Test, TestingModule } from '@nestjs/testing';
import { EdiService } from './edi.service';

describe('EdiService', () => {
  let service: EdiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EdiService],
    }).compile();

    service = module.get<EdiService>(EdiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
