import { Injectable, HttpException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GetCodeDto, GetTokenDto } from './dto';
import { TokenData } from './interfaces';
import { sendCode, validateEmailAndCode } from './services';
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async getCode(data: GetCodeDto): Promise<string> {
    const code = await sendCode(data.email);

    return `Codígo enviado al email, code: ${code}`;
  }

  async getToken(data: GetTokenDto): Promise<TokenData> {
    try {
      const id = await validateEmailAndCode(data);
      const access_token = this.jwtService.sign({ userId: id });

      return { access_token };
    } catch (error) {
      throw new HttpException(error?.msg || '', error?.statusCode || 400);
    }
  }
}
