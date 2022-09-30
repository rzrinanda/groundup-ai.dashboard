import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSusreasonDto } from './dto/create-susreason.dto';
import { UpdateSusreasonDto } from './dto/update-susreason.dto';
import { ISusreason } from './interface/susreason.interface';

@Injectable()
export class SusreasonService {

  constructor(@InjectModel('Susreason') private reasonModel: Model<ISusreason>) { }
  async create(createSusreasonDto: CreateSusreasonDto): Promise<ISusreason> {
    const newSusreason = await new this.reasonModel(createSusreasonDto)
    return newSusreason.save()
  }

  async findAll(): Promise<ISusreason[]> {
    const reasonData = await this.reasonModel.find();
    if (!reasonData || reasonData.length == 0) {
      throw new NotFoundException('Reason data not found!');
    }
    return reasonData;
  }

  async findOne(id: number): Promise<ISusreason> {
    const existingSusreason = await this.reasonModel.findById(id).exec();
    if (!existingSusreason) {
      throw new NotFoundException(`Reason #${id} not found`);
    }
    return existingSusreason;
  }

  async update(id: number, updateSusreasonDto: UpdateSusreasonDto): Promise<ISusreason> {
    const existingSusreason = await this.reasonModel.findByIdAndUpdate(id, updateSusreasonDto, { new: true }); if (!existingSusreason) {
      throw new NotFoundException(`Reason #${id} not found`);
    }
    return existingSusreason;
  }

  async remove(id: number): Promise<ISusreason> {
    const deletedSusreason = await this.reasonModel.findByIdAndDelete(id); if (!deletedSusreason) {
      throw new NotFoundException(`Reason #${id} not found`);
    }
    return deletedSusreason;
  }
}
