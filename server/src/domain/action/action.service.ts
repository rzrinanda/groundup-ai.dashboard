import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateActionDto } from './dto/create-action.dto';
import { UpdateActionDto } from './dto/update-action.dto';
import { IAction } from './interface/action.interface';

@Injectable()
export class ActionService {

  constructor(@InjectModel('Action') private actionModel: Model<IAction>) { }
  async create(createActionDto: CreateActionDto): Promise<IAction> {
    const newAction = await new this.actionModel(createActionDto)
    return newAction.save()
  }

  async findAll(): Promise<IAction[]> {
    const actionData = await this.actionModel.find();
    if (!actionData || actionData.length == 0) {
      throw new NotFoundException('Action data not found!');
    }
    return actionData;
  }

  async findOne(id: number): Promise<IAction> {
    const existingAction = await this.actionModel.findById(id).exec();
    if (!existingAction) {
      throw new NotFoundException(`Action #${id} not found`);
    }
    return existingAction;
  }

  async update(id: number, updateActionDto: UpdateActionDto): Promise<IAction> {
    const existingAction = await this.actionModel.findByIdAndUpdate(id, updateActionDto, { new: true }); if (!existingAction) {
      throw new NotFoundException(`Action #${id} not found`);
    }
    return existingAction;
  }

  async remove(id: number): Promise<IAction> {
    const deletedAction = await this.actionModel.findByIdAndDelete(id); if (!deletedAction) {
      throw new NotFoundException(`Action #${id} not found`);
    }
    return deletedAction;
  }
}
