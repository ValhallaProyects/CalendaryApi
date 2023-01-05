import { createUser } from 'src/features/user/services/helpers';
import { createAuth, findAuth, addCodeToAuth } from './helpers';

const sendCode = async (email: string): Promise<number> => {
  let recAuth = await findAuth({ where: { email } });

  if (!recAuth) {
    const recUser = await createUser({ email });
    console.log(`🚀 ~ recUser:`, recUser);
    recAuth = await createAuth({ email, userId: recUser.id });
    console.log(`🚀 ~ recAuth:`, recAuth);
  }

  const code = await addCodeToAuth(recAuth);

  // await sendCodeToEmail({ email, code }); // * Sendgrid, send to email.

  return code;
};

export { sendCode };
