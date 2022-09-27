import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date } from 'mongoose';

@Schema()
export class Anomaly {
  @Prop()
  timestamp: Date;

  @Prop()
  machine: string;

  @Prop()
  anomalyName: string;

  @Prop()
  sensor: string

  @Prop()
  soundClip: string


}

export const AnomalySchema = SchemaFactory.createForClass(Anomaly);
