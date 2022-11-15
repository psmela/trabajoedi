import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('api/edi')
export class EdiController {
    constructor(private readonly appService: AppService) {}
    
    @Get()
    getHello(): string{
        return this.appService.getHello();
}
}
