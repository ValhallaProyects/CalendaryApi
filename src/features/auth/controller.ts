import { Controller, Post, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetCodeDto, GetTokenDto } from './dto';
import { AuthService } from './service';

@ApiBearerAuth()
@ApiTags('auth')
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
  async getToken(@Body() body: GetTokenDto): Promise<{ access_token: string }> {
    return this.authService.getToken(body);
  }
}
