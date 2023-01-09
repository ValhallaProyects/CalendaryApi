import { HttpStatus } from '@nestjs/common';
import { Auth } from 'src/db/entities';
import { isCodeExpired } from 'src/lib';

const validateCode = ({ auth, code }: { auth: Auth; code: number }) => {
  if (auth.dataValues.code !== code)
    throw { msg: 'El codigo no es valido', statusCode: HttpStatus.BAD_REQUEST };

  if (isCodeExpired(auth.dataValues.expires))
    throw {
      msg: 'El tiempo ha expirado',
      statusCode: HttpStatus.REQUEST_TIMEOUT,
    };
};

export { validateCode };
