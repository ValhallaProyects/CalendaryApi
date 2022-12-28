import { create } from 'random-seed';

const getRandomNum = (): number => create().intBetween(10000, 99999);

export { getRandomNum };
