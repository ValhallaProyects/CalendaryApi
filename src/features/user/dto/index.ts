import { IsEmail, IsString, Length } from 'class-validator';

/* Docs : https://github.com/typestack/class-validator#validation-decorators
    Since TypeScript does not store metadata about generics or interfaces, 
    when you use them in your DTOs, ValidationPipe may not be able to properly 
    validate incoming data. For this reason, consider using concrete classes in your DTOs.
*/
class CreateUserDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Length(4, 8)
  password: string;
}

export { CreateUserDto };
