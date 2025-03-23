import { Module } from '@nestjs/common';
import { MhsController } from './mhs.controller';
import { MhsService } from './mhs.service';

@Module({
  controllers: [MhsController],
  providers: [MhsService]
})
export class MhsModule {}
