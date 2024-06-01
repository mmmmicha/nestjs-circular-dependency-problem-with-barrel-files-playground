import { Module } from '@nestjs/common';
import { SharedService } from '.';
import { TestHandler } from './test.handler';
import { CachingModule } from '../caching';

@Module({
  imports: [CachingModule],
  providers: [SharedService, TestHandler],
  exports: [SharedService, TestHandler],
})
export class SharedModule {}
