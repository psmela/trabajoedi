import { Controller, Get, Post } from '@nestjs/common';
import { PameService } from './pame.service';

@Controller('pame')
export class PameController {
    constructor(private readonly pameService: PameService) {}
    @Get()
    getPame():string{
        return this.pameService.obtenerPame();
    }
    @Post()
    postPame():string{
        return this.pameService.crearPame();
    }
    }
