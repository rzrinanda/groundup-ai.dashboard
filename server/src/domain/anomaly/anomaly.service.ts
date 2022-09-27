import { Injectable } from '@nestjs/common';
import { CreateAnomalyDto } from './dto/create-anomaly.dto';
import { UpdateAnomalyDto } from './dto/update-anomaly.dto';

@Injectable()
export class AnomalyService {
  create(createAnomalyDto: CreateAnomalyDto) {
    return 'This anomaly adds a new anomaly';
  }

  findAll() {
    return `This anomaly returns all anomaly`;
  }

  findOne(id: number) {
    return `This anomaly returns a #${id} anomaly`;
  }

  update(id: number, updateAnomalyDto: UpdateAnomalyDto) {
    return `This anomaly updates a #${id} anomaly`;
  }

  remove(id: number) {
    return `This anomaly removes a #${id} anomaly`;
  }
}
