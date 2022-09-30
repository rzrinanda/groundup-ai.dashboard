import * as mongoose from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Susreason } from '../../susreason/entities/susreason.entity';

@Schema()
export class Reason {
    @Prop()
    machine: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'SusReason' })
    reason: Susreason
}

export const ReasonSchema = SchemaFactory.createForClass(Reason);
