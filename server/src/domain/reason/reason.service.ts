import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReasonDto } from './dto/create-reason.dto';
import { UpdateReasonDto } from './dto/update-reason.dto';
import { IReason } from './interface/reason.interface';

@Injectable()
export class ReasonService {

  constructor(@InjectModel('Reason') private reasonModel: Model<IReason>) { }
  async create(createReasonDto: CreateReasonDto): Promise<IReason> {
    const newReason = await new this.reasonModel(createReasonDto)
    return newReason.save()
  }

  async findAll(): Promise<IReason[]> {
    const reasonData = await this.reasonModel.find();
    if (!reasonData || reasonData.length == 0) {
      throw new NotFoundException('Reason data not found!');
    }
    return reasonData;
  }

  async findOne(id: number): Promise<IReason> {
    const existingReason = await this.reasonModel.findById(id).exec();
    if (!existingReason) {
      throw new NotFoundException(`Reason #${id} not found`);
    }
    return existingReason;
  }

  async update(id: number, updateReasonDto: UpdateReasonDto): Promise<IReason> {
    const existingReason = await this.reasonModel.findByIdAndUpdate(id, updateReasonDto, { new: true }); if (!existingReason) {
      throw new NotFoundException(`Reason #${id} not found`);
    }
    return existingReason;
  }

  async remove(id: number): Promise<IReason> {
    const deletedReason = await this.reasonModel.findByIdAndDelete(id); if (!deletedReason) {
      throw new NotFoundException(`Reason #${id} not found`);
    }
    return deletedReason;
  }
}
