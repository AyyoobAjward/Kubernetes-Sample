import { IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator"

export class CreateEmployeeDTO {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    address: string

    @IsNotEmpty()
    @IsPhoneNumber()
    phoneNumber: string
}