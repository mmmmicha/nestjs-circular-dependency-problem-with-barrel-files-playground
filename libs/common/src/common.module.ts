import { Module } from '@nestjs/common';
import { SharedModule, SharedService } from './shared';
import { CachingModule, CachingService } from './caching';

@Module({
  imports: [SharedModule, CachingModule],
  providers: [SharedService, CachingService],
  exports: [SharedModule, CachingModule],
})
export class CommonModule {}
