import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Reason {
    @Prop()
    machine : string
    
    @Prop()
    reason : string
}

export const ReasonSchema = SchemaFactory.createForClass(Reason);
