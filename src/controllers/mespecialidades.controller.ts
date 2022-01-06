import { Body, Controller, Get, HttpStatus, Param, Post, Put, Delete, Res } from "@nestjs/common";
import { MedicosEspecialidades } from "src/entities/mespecialidades.entity";
import { MedicosEspecialidadesService } from "src/services/mepecialidades.service";

@Controller('medicos/especialidades')
export class MedicosEspecialidadesController {
    constructor(private readonly libraryService: MedicosEspecialidadesService){}

    @Post()
    async createMedicosEspecialidades(@Res() response, @Body() especialidade: MedicosEspecialidades) {
        const especialidades = await this.libraryService.createMedicosEspecialidades(especialidade);
        return response.status(HttpStatus.CREATED).json({
            especialidades
        })
    }

    @Put(':id')
    async updateMedicosEspecialidades(@Res() response, @Param() { id }: any, @Body() especialidade: MedicosEspecialidades) {
        const especialidades = await this.libraryService.updateMedicosEspecialidades(id, especialidade);
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