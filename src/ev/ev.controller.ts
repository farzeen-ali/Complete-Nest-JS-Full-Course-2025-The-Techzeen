import { Controller, Get } from '@nestjs/common';
import { EvService } from './ev.service';

@Controller('ev')
export class EvController {
    constructor(private readonly evService: EvService){}
    @Get()
    getUrl(){
        return this.evService.getDbUrl();
    }
}
