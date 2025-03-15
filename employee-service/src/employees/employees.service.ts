import { Injectable } from '@nestjs/common';
import { CreateEmployeeDTO } from './dto/employee.dto';

@Injectable()
export class EmployeesService {

    employees:CreateEmployeeDTO[] = [
        {
            name: "Ayyoob",
            address: "Matara",
            phoneNumber: "778970916"
        },
        {
            name: "Ayyoob",
            address: "Matara",
            phoneNumber: "778970916"
        },
        {
            name: "Ayyoob",
            address: "Matara",
            phoneNumber: "778970916"
        }
    ];

    async create( createEmployee: CreateEmployeeDTO) {
        this.employees.push(createEmployee)
        return createEmployee;
    }

    getAllEmployees(){
        const allEmp : CreateEmployeeDTO[] = this.employees;
        return allEmp;
    }
}
