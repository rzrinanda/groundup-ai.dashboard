import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActionModule } from './domain/action/action.module';
import { AnomalyModule } from './domain/anomaly/anomaly.module';
import { AlertModule } from './domain/alert/alert.module';
import { ReasonModule } from './domain/reason/reason.module';
import { ActionController } from './domain/action/action.controller';
import { ActionService } from './domain/action/action.service';
import { Action, ActionSchema } from './domain/action/entities/action.entity';

@Module({
  imports: [
    // ActionModule,
    // MongooseModule.forRoot(process.env.API, { dbName: 'groundup_db' }),
    // MongooseModule.forRoot('mongodb://localhost:27017/studentdb'),
    // MongooseModule.forFeature([{ name: 'Action', schema: 'ActionSchema' }]),
    MongooseModule.forRoot('mongodb://localhost/groundup_db'),
    MongooseModule.forFeature([{ name: Action.name, schema: ActionSchema }]),
    AnomalyModule,
    AlertModule,
    ReasonModule,
  ],
  controllers: [AppController, ActionController],
  providers: [AppService, ActionService],
})
export class AppModule { }
