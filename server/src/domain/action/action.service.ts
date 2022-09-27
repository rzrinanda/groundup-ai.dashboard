import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateActionDto } from './dto/create-action.dto';
import { UpdateActionDto } from './dto/update-action.dto';
import { IAction } from './interface/action.interface';

@Injectable()
export class ActionService {

  constructor(@InjectModel('Action') private actionModel:Model<IAction>){}
  async create(createActionDto: CreateActionDto): Promise<IAction> {
    const newAction = await new this.actionModel(createActionDto)
    return newAction.save()
  }

  findAll() {
    return `This action returns all action`;
  }

  findOne(id: number) {
    return `This action returns a #${id} action`;
  }

  update(id: number, updateActionDto: UpdateActionDto) {
    return `This action updates a #${id} action`;
  }

  remove(id: number) {
    return `This action removes a #${id} action`;
  }
}
