import { Module } from '@nestjs/common';
import { CachingService } from '.';

@Module({
  providers: [CachingService],
  exports: [CachingService],
})
export class CachingModule {}
