import { create, all } from 'mathjs';

export const { bignumber, add, divide, subtract, multiply, parse } = create(all, {
  number: 'BigNumber'
});
