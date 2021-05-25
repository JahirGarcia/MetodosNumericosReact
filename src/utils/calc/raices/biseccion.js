import { larger, smaller } from "mathjs";
import ecuacion from "../ecuacion";
import { abs, bignumber, multiply, subtract } from "../math";
import puntoMedio from "./punto_medio";

export function biseccion(funcion, extremoInferior, extremoSuperior, precicion) {
  const fx = ecuacion(funcion);

  if (!smaller(multiply(fx(extremoInferior), fx(extremoSuperior)), 0)) {
    throw Error('Intertavo Incorrecto');
  }

  let puntoMedioAnterior = bignumber(0);
  let puntoMedioActual = puntoMedio(extremoInferior, extremoSuperior);

  while (larger(abs(subtract(puntoMedioActual, puntoMedioAnterior)), bignumber(precicion))) {
    if (smaller(multiply(fx(extremoInferior), fx(puntoMedioActual)), 0)) extremoSuperior = puntoMedioActual;
    else extremoInferior = puntoMedioActual;

    puntoMedioAnterior = puntoMedioActual;
    puntoMedioActual = puntoMedio(extremoInferior, extremoSuperior);
  }

  return puntoMedioActual;
}
