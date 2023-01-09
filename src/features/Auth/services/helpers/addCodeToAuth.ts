import { Model } from 'sequelize-typescript';
import { getRandomNum, getExpirationDate } from 'src/lib';

const addCodeToAuth = async (auth: Model): Promise<number> => {
  const code = getRandomNum(); // get random code.
  const expires = getExpirationDate(); // * 20 minutes, declare expiration date.

  auth.set({ code, expires }); // Update local data.
  await auth.save(); // Push local data.

  return code;
};

export { addCodeToAuth };
