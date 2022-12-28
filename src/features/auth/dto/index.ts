import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString, Max, Min } from 'class-validator';

/* Docs : https://github.com/typestack/class-validator#validation-decorators
    Since TypeScript does not store metadata about generics or interfaces, 
    when you use them in your DTOs, ValidationPipe may not be able to properly 
    validate incoming data. For this reason, consider using concrete classes in your DTOs.
*/
class GetCodeDto {
  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;
}

class GetTokenDto {
  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNumber()
  @Min(10000)
  @Max(99999)
  code: number;
}

export { GetCodeDto, GetTokenDto };
