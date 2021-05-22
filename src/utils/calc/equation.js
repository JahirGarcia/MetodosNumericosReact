import { bignumber, parse } from './math';

/**
 * Combierte la expresion a una funcion f(x)
 * @param {string} expresion Cadena que expresa una ecuacion.
 * @returns Funcion f(x)
 */
function ecuacion(expresion) {
  const node = parse(expresion).compile();
  return (x) => node.evaluate({ x: bignumber(x) });
}

export default ecuacion;
