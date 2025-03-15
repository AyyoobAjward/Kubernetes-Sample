import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDTO } from './dto/employee.dto';

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeeService: EmployeesService){}

    @Post()
    async createEmployee(@Body() createEmployeeDTO: CreateEmployeeDTO) {
        return await this.employeeService.create(createEmployeeDTO)
    }

    @Get()
    getAllEmployees(){
        return this.employeeService.getAllEmployees();
    }


}
