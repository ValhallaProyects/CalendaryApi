import { HttpStatus } from '@nestjs/common';
import { findAuth } from './helpers';
import { validateCode } from './helpers/validateCode';

const validateEmailAndCode = async ({
  email,
  code,
}: {
  email: string;
  code: number;
}): Promise<number> => {
  const auth = await findAuth({ where: { email } });

  if (!auth)
    throw {
      msg: 'El email no esta registrado',
      statusCode: HttpStatus.UNAUTHORIZED,
    };
  validateCode({ auth, code });

  return auth.dataValues.userId;
};

export { validateEmailAndCode };
