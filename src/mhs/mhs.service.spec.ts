import { Test, TestingModule } from '@nestjs/testing';
import { MhsService } from './mhs.service';

describe('MhsService', () => {
  let service: MhsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MhsService],
    }).compile();

    service = module.get<MhsService>(MhsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
