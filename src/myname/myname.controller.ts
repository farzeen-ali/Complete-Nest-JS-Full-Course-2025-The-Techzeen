/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('myname')
export class MynameController {
    @Post('custom')
    transformName(@Body('name', new UppercasePipe()) name: string){
        return {message: `Received name: ${name}`}
    }
}
