import { Injectable } from '@nestjs/common';
import { CachingService } from '../caching';

@Injectable()
export class TestHandler {
  constructor(private readonly cache: CachingService) {}
}
