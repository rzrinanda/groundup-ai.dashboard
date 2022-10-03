import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IMachine } from '../machine/interface/machine.interface';
import { CreateReasonDto } from './dto/create-reason.dto';
import { UpdateReasonDto } from './dto/update-reason.dto';
import { IModReason, IReason } from './interface/reason.interface';

@Injectable()
export class ReasonService {
  constructor(
    @InjectModel('Reason') private reasonModel: Model<IReason>,
    @InjectModel('Machine') private machineModel: Model<IMachine>,
  ) {}
  async create(createReasonDto: CreateReasonDto): Promise<IReason> {
    const newReason = await new this.reasonModel(createReasonDto);
    return newReason.save();
  }

  async findAll(): Promise<IModReason[]> {
    const reasonData = await this.reasonModel.find().then((reason) => {
      // console.log(reason);
      const modReason: Promise<IModReason[]> = reason.map(async (r) => {
        // console.log(r.machine);
        const machine = await this.machineModel.findById(r.machine).exec();
        console.log(machine.machineName);
        return {
          machine: r.machine,
          reason: r.reason,
          machineName: machine.machineName,
        };
      });
      return modReason;
    });
    // .populate('Machine', 'machineName', this.machineModel);
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
    const existingReason = await this.reasonModel.findByIdAndUpdate(
      id,
      updateReasonDto,
      { new: true },
    );
    if (!existingReason) {
      throw new NotFoundException(`Reason #${id} not found`);
    }
    return existingReason;
  }

  async remove(id: number): Promise<IReason> {
    const deletedReason = await this.reasonModel.findByIdAndDelete(id);
    if (!deletedReason) {
      throw new NotFoundException(`Reason #${id} not found`);
    }
    return deletedReason;
  }

  async initialization(): Promise<IReason[]> {
    const reasons = [
      { machineName: 'CNC Machine', reason: 'Spindle Error' },
      { machineName: 'CNC Machine', reason: 'Axis Problem' },
      { machineName: 'CNC Machine', reason: 'Normal' },
      { machineName: 'Milling Machine', reason: 'Machine Crash' },
      { machineName: 'Milling Machine', reason: 'Router Fault' },
      { machineName: 'Milling Machine', reason: 'Normal' },
    ];
    let process = 0;
    console.log('data will be inserted', reasons);

    for (let a = 0; a < reasons.length; a++) {
      const machine = await this.machineModel.findOne({
        machineName: reasons[a].machineName,
      });
      console.log('machine Object', machine);
      const reasonDto = { machine: machine, reason: reasons[a].reason };

      const newReason = await new this.reasonModel(reasonDto);
      newReason.save();
      process++;
    }

    if (process == reasons.length - 1) {
      const reasonData = await this.reasonModel.find();
      if (!reasonData || reasonData.length == 0) {
        throw new NotFoundException('Reason data not found!');
      }
      return reasonData;
    } else {
      throw new BadRequestException('Initialization process is not finished');
    }
  }
}
