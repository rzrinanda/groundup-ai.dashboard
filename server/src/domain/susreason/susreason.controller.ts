import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res } from '@nestjs/common';
import { SusreasonService } from './susreason.service';
import { CreateSusreasonDto } from './dto/create-susreason.dto';
import { UpdateSusreasonDto } from './dto/update-susreason.dto';

@Controller('susreason')
export class SusreasonController {
  constructor(private readonly reasonService: SusreasonService) { }

  @Post()
  async create(@Res() response, @Body() createSusreasonDto: CreateSusreasonDto) {
    try {
      const newSusreason = await this.reasonService.create(createSusreasonDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Reason has been created successfully',
        newSusreason,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Student not created!',
        error: 'Bad Request'
      });
    }
  }

  @Get()
  async findAll(@Res() response) {
    try {
      const reasonData = await this.reasonService.findAll();
      return response.status(HttpStatus.OK).json({
        message: 'All reasons data found successfully', reasonData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get(':id')
  async findOne(@Res() response, @Param('id') id: string) {
    try {
      const existingSusreason = await
        this.reasonService.findOne(+id); return response.status(HttpStatus.OK).json({
          message: 'Reason found successfully', existingSusreason,
        });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Patch(':id')
  async update(@Res() response, @Param('id') id: string, @Body() updateSusreasonDto: UpdateSusreasonDto) {
    try {
      const existingSusreason = await this.reasonService.update(+id, updateSusreasonDto); return response.status(HttpStatus.OK).json({
        message: 'Reason has been successfully updated',
        existingSusreason,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete(':id')
  async remove(@Res() response, @Param('id') id: string) {
    try {
      const deletedSusreason = await this.reasonService.remove(+id);
      return response.status(HttpStatus.OK).json({
        message: 'Reason deleted successfully',
        deletedSusreason,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
