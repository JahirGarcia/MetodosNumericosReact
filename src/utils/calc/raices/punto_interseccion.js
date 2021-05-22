import ecuacion from "../equation";
import { divide, multiply, subtract } from "../math";

/**
 * Calcula el punto de intersicion dada una funcion evaluada en los extremos de un intervalo.
 * @param {string} funcion Cadena que expresa una funcion
 * @param {number | string} extremoInferior Extremo inferior del intervalo.
 * @param {number | string} extremoSuperior Extremo superior del intervalo.
 * @returns Punto de interseccion.
 */
function puntoInterseccion(funcion, extremoInferior, extremoSuperior) {
  const fx = ecuacion(funcion);
  console.log(multiply(fx(extremoSuperior), extremoInferior).toString())
  console.log(subtract(multiply(fx(extremoSuperior), extremoInferior), multiply(fx(extremoInferior), extremoSuperior)))

  // (fx(extremo_superior) * extremo_inferior) - (fx(extremo_inferior) * extremo_superior)) / (fx(extremo_superior) - fx(extremo_inferior)
  return divide(subtract(multiply(fx(extremoSuperior), extremoInferior), multiply(fx(extremoInferior), extremoSuperior)), subtract(fx(extremoSuperior), fx(extremoInferior)));
}

export default puntoInterseccion;
