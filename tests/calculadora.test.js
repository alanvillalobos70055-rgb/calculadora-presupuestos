'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { calcularSubtotal, calcularDescuento, calcularIVA, calcularTotal } = require('../src/calculadora');

const partidas = [
  { descripcion: 'Barandal', cantidad: 2, precioUnitario: 1000 },
  { descripcion: 'Instalación', cantidad: 1, precioUnitario: 500.5 },
];

test('calcularSubtotal suma cantidad x precio de cada partida', () => {
  assert.equal(calcularSubtotal(partidas), 2500.5);
});

test('calcularSubtotal rechaza partidas inválidas', () => {
  assert.throws(() => calcularSubtotal([{ descripcion: 'X', cantidad: 0, precioUnitario: 10 }]), RangeError);
  assert.throws(() => calcularSubtotal('no es lista'), TypeError);
});

test('calcularDescuento aplica el porcentaje', () => {
  assert.equal(calcularDescuento(2000, 10), 200);
  assert.throws(() => calcularDescuento(2000, 120), RangeError);
});

test('calcularIVA calcula el 16 % de la base', () => {
  assert.equal(calcularIVA(1000), 160);
});

test('calcularTotal devuelve el desglose completo con descuento', () => {
  const r = calcularTotal([{ descripcion: 'Portón', cantidad: 1, precioUnitario: 10000 }], 10);
  assert.deepEqual(r, { subtotal: 10000, descuento: 1000, base: 9000, iva: 1440, total: 10440 });
});

test('calcularTotal sin descuento', () => {
  const r = calcularTotal([{ descripcion: 'Reja', cantidad: 2, precioUnitario: 500 }]);
  assert.equal(r.total, 1160);
});
