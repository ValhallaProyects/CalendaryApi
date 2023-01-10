import { Controller, Post, Body, UseFilters } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/helpers/httpExceptionFilter';
import { GetCodeDto, GetTokenDto } from './dto';
import { TokenData } from './interfaces';
import { AuthService } from './service';

@ApiBearerAuth()
@ApiTags('auth')
@UseFilters(new HttpExceptionFilter())
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // $ GetCode
  @Post()
  @ApiResponse({ status: 201, description: 'Code sended to email!' })
  async getCode(@Body() body: GetCodeDto): Promise<string> {
    return this.authService.getCode(body);
  }

  // $ GetToken
  @Post('token')
  @ApiResponse({ status: 200, description: 'Token sended!' })
  async getToken(@Body() body: GetTokenDto): Promise<TokenData> {
    return this.authService.getToken(body);
  }
}
