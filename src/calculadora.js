'use strict';

/** Tasa de IVA vigente (16 %). */
const TASA_IVA = 0.16;

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

/** Calcula el monto del descuento (porcentaje entre 0 y 100). */
function calcularDescuento(subtotal, porcentaje) {
  if (!(porcentaje >= 0 && porcentaje <= 100)) {
    throw new RangeError('El porcentaje de descuento debe estar entre 0 y 100');
  }
  return redondear(subtotal * (porcentaje / 100));
}

/** Calcula el IVA sobre una base gravable. */
function calcularIVA(base) {
  return redondear(base * TASA_IVA);
}

/**
 * Calcula el desglose completo de un presupuesto.
 * @returns {{subtotal:number, descuento:number, base:number, iva:number, total:number}}
 */
function calcularTotal(partidas, porcentajeDescuento = 0) {
  const subtotal = calcularSubtotal(partidas);
  const descuento = calcularDescuento(subtotal, porcentajeDescuento);
  const base = redondear(subtotal - descuento);
  const iva = calcularIVA(base);
  return { subtotal, descuento, base, iva, total: redondear(base + iva) };
}

module.exports = { TASA_IVA, redondear, calcularSubtotal, calcularDescuento, calcularIVA, calcularTotal };
