import { Module } from '@nestjs/common';
import { SharedService } from '.';
import { TestHandler } from './test.handler';

@Module({
  imports: [],
  providers: [SharedService, TestHandler],
  exports: [SharedService, TestHandler],
})
export class SharedModule {}
