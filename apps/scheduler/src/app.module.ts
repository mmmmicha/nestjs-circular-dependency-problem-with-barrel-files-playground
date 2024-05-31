import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from 'libs/common/src';
import { JobModule } from '../job';

@Module({
  imports: [CommonModule, JobModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
