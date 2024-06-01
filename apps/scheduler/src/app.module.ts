import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobModule } from '../job';
import { CommonModule } from '../../../libs/common/src/common.module';

@Module({
  imports: [CommonModule, JobModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
