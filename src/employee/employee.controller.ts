/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Get()
        getEmployee(){
            return 'Employee data fetched successfully!!';
        }
}
