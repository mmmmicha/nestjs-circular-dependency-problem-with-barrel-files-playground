import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { CommonModule, SharedModule } from '../../../libs/common/src';

@Module({
  imports: [CommonModule, SharedModule],
  providers: [JobService],
  exports: [JobService],
})
export class JobModule {}
