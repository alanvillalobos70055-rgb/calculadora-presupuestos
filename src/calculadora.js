'use strict';

/** Redondea a 2 decimales (pesos y centavos). */
function redondear(valor) {
  return Math.round((valor + Number.EPSILON) * 100) / 100;
}

/**
 * Suma cantidad x precio unitario de cada partida del presupuesto.
 * @param {{descripcion: string, cantidad: number, precioUnitario: number}[]} partidas
 */
function calcularSubtotal(partidas) {
  if (!Array.isArray(partidas)) {
    throw new TypeError('Las partidas deben ser una lista');
  }
  const suma = partidas.reduce((acumulado, partida) => {
    const { cantidad, precioUnitario } = partida;
    if (!(cantidad > 0) || !(precioUnitario >= 0)) {
      throw new RangeError(`Partida inválida: ${partida.descripcion}`);
    }
    return acumulado + cantidad * precioUnitario;
  }, 0);
  return redondear(suma);
}

module.exports = { redondear, calcularSubtotal };
