'use strict';

const { calcularTotal } = require('./calculadora');

const partidas = [
  { descripcion: 'Barandal de herrería (metro lineal)', cantidad: 6, precioUnitario: 1850 },
  { descripcion: 'Reja de ventana', cantidad: 2, precioUnitario: 2450.5 },
  { descripcion: 'Instalación', cantidad: 1, precioUnitario: 1200 },
];

// Uso: node src/index.js [porcentajeDescuento]
const porcentaje = process.argv[2] !== undefined ? Number(process.argv[2]) : 0;

try {
  const r = calcularTotal(partidas, porcentaje);
  const mxn = (n) => n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
  console.log('PRESUPUESTO DE BALCONERÍA');
  partidas.forEach((p) => console.log(`- ${p.descripcion}: ${p.cantidad} x ${mxn(p.precioUnitario)}`));
  console.log('-----------------------------------');
  console.log(`Subtotal:        ${mxn(r.subtotal)}`);
  console.log(`Descuento (${porcentaje}%): ${mxn(r.descuento)}`);
  console.log(`Base gravable:   ${mxn(r.base)}`);
  console.log(`IVA (16%):       ${mxn(r.iva)}`);
  console.log(`TOTAL:           ${mxn(r.total)}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exitCode = 1;
}
