import { Body, Controller, Get, HttpStatus, Param, Post, Put, Delete, Res } from "@nestjs/common";
import { Especialidades } from "src/entities/especialidades.entity";
import { EspecialidadesService } from "src/services/especialidades.service";

@Controller('especialidades')
export class EspecialidadesController {
    constructor(private readonly libraryService: EspecialidadesService){}

    @Post()
    async createEspecialidade(@Res() response, @Body() especialidade: Especialidades) {
        const especialidades = await this.libraryService.createEspecialidades(especialidade);
        return response.status(HttpStatus.CREATED).json({
            especialidades
        })
    }

    @Put(':id')
    async updateEspecialidade(@Res() response, @Param() { id }: any, @Body() especialidade: Especialidades) {
        const especialidades = await this.libraryService.updateEspecialidades(id, especialidade);
        return response.status(HttpStatus.OK).json({
            especialidades
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const especialidades = await this.libraryService.findAll();
        return response.status(HttpStatus.OK).json({
            especialidades
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const especialidade = await this.libraryService.findOne(id);
        return response.status(HttpStatus.OK).json({
            especialidade
        })
    }

    @Delete('/:id')
    async deleteById(@Res() response, @Param('id') id) {
        const especialidade = await this.libraryService.deleteOne(id);
        return response.status(HttpStatus.OK).json({
            especialidade
        })
    }
}