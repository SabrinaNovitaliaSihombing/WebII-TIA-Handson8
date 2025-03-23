import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { MhsService } from './mhs.service';
import { MahasiswaDTO } from './mhs.dto';
import { ExecutionTime } from 'src/ExecutionTime.interceptor';


@Controller('mhs')
export class MhsController {
    constructor (private mhsService : MhsService){

    }

    @Post()
    @UseInterceptors(ExecutionTime)
    create(@Body(new ValidationPipe()) mhsDTO : MahasiswaDTO){
        return this.mhsService.create(mhsDTO);
    }

    @Get()
    findAll(){
        return this.mhsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id : number){
        return this.mhsService.findOne(id);
    }

    @Put (':id')
    update(@Param('id') id: number, @Body() mhsDTO : MahasiswaDTO){
        return this.mhsService.updateOne(id,mhsDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.mhsService.delete(id);
    }
}
