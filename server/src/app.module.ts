import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActionModule } from './domain/action/action.module';
import { AnomalyModule } from './domain/anomaly/anomaly.module';
import { AlertModule } from './domain/alert/alert.module';

@Module({
  imports: [
    ActionModule,
    MongooseModule.forRoot(process.env.API, { dbName: 'groundup_db' }),
    MongooseModule.forFeature([{ name: 'Action', schema: 'ActionSchema' }]),
    AnomalyModule,
    AlertModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
