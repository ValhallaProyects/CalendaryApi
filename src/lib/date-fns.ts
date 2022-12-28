import { addMinutes, isAfter } from 'date-fns';

const getExpirationDate = (): Date => addMinutes(new Date(), 20);

const isCodeExpired = (expiresDate: Date): boolean => {
  return isAfter(new Date(), expiresDate);
};

export { getExpirationDate, isCodeExpired };
