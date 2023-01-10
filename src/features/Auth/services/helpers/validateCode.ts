import { HttpException, HttpStatus } from '@nestjs/common';
import { Auth } from 'src/db/entities';
import { isCodeExpired } from 'src/lib';

const validateCode = ({ auth, code }: { auth: Auth; code: number }) => {
  if (auth.dataValues.code !== code)
    throw new HttpException('El codigo no es valido', HttpStatus.BAD_REQUEST);

  if (isCodeExpired(auth.dataValues.expires))
    throw new HttpException(
      'El tiempo ha expirado',
      HttpStatus.REQUEST_TIMEOUT,
    );
};

export { validateCode };
