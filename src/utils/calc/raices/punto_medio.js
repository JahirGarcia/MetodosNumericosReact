import { add, bignumber, divide, subtract } from "../math";

/**
 * Calcula el punto medio de un intervalo.
 * @param {string | number} extremoInferior Extremo inferior del intervalo.
 * @param {string | number} extremoSuperior Extremo superior del intervalo.
 * @returns Punto medio del intervalo.
 */
function puntoMedio(extremoInferior, extremoSuperior) {
  // extremoSuperior + ((extromoInferior - extremoSuperior) / 2)
  return add(bignumber(extremoSuperior), divide(subtract(bignumber(extremoInferior), bignumber(extremoSuperior)), 2));
}

export default puntoMedio;
