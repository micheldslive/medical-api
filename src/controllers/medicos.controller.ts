import { Body, Controller, Get, HttpStatus, Param, Post, Put, Delete, Res } from "@nestjs/common";
import { Medicos } from "src/entities/medicos.entity";
import { MedicosService } from "src/services/medicos.service";

@Controller('medicos')
export class MedicosController {
    constructor(private readonly libraryService: MedicosService){}

    @Post()
    async createMedicosEspecialidade(@Res() response, @Body() medico: Medicos) {
        const medicos = await this.libraryService.createMedicos(medico);
        return response.status(HttpStatus.CREATED).json({
            medicos
        })
    }

    @Put(':id')
    async updateMedicosEspecialidade(@Res() response, @Param() { id }: any, @Body() medico: Medicos) {
        const medicos = await this.libraryService.updateMedicos(id, medico);
        return response.status(HttpStatus.OK).json({
            medicos
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const medicos = await this.libraryService.findAll();
        return response.status(HttpStatus.OK).json({
            medicos
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const medico = await this.libraryService.findOne(id);
        return response.status(HttpStatus.OK).json({
            medico
        })
    }

    @Delete('/:id')
    async deleteById(@Res() response, @Param('id') id) {
        const medico = await this.libraryService.deleteOne(id);
        return response.status(HttpStatus.OK).json({
            medico
        })
    }
}