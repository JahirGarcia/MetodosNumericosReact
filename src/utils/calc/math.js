import { create, all } from 'mathjs';

export const { 
  bignumber, 
  add, 
  divide, 
  subtract, 
  multiply, 
  parse, 
  abs, 
  smaller, 
  larger 
} = create(all, {
  number: 'BigNumber'
});
