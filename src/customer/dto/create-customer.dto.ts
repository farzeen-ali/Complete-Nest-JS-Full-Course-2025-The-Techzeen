/* eslint-disable prettier/prettier */
import { IsInt, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateCustomerDto {
  @IsString()
  name: string;
  @IsInt()
  age: number;
}
