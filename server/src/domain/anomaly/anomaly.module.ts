import { Module } from '@nestjs/common';
import { AnomalyService } from './anomaly.service';
import { AnomalyController } from './anomaly.controller';

@Module({
  controllers: [AnomalyController],
  providers: [AnomalyService]
})
export class AnomalyModule {}
