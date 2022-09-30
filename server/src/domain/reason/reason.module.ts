import { Module } from '@nestjs/common';
import { ReasonService } from './reason.service';
import { ReasonController } from './reason.controller';
import { Reason, ReasonSchema } from './entities/reason.entity'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/groundup_db'),
  MongooseModule.forFeature([{ name: Reason.name, schema: ReasonSchema }])],
  controllers: [ReasonController],
  providers: [ReasonService],
})
export class ReasonModule { }
