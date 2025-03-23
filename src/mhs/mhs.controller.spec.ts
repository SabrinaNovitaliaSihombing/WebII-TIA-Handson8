import { Test, TestingModule } from '@nestjs/testing';
import { MhsController } from './mhs.controller';

describe('MhsController', () => {
  let controller: MhsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MhsController],
    }).compile();

    controller = module.get<MhsController>(MhsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
