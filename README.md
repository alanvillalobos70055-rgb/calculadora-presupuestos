# Calculadora de presupuestos de balconería

![CI](https://github.com/alanvillalobos70055-rgb/calculadora-presupuestos/actions/workflows/ci.yml/badge.svg)

**Autor:** _Jennifer Zamarripa Vázquez_

## Objetivo

Calcular el desglose de un presupuesto de herrería y balconería (subtotal, descuento, IVA y total) a partir de una lista de partidas, y demostrar un entorno de desarrollo con **control de versiones (Git y GitHub)** e **integración continua (GitHub Actions)** que valida automáticamente el código con pruebas.

## Herramientas utilizadas

- Node.js (JavaScript): v24.13.1 en el equipo local y v20 en la integración continua
- Pruebas automatizadas con el ejecutor integrado `node:test` (sin dependencias externas)
- Git y GitHub
- GitHub Actions (integración continua)
- Visual Studio Code

## Estructura del proyecto

```
calculadora-presupuestos/
├── .github/workflows/ci.yml   # flujo de integración continua
├── src/
│   ├── calculadora.js         # lógica: subtotal, descuento, IVA y total
│   └── index.js               # ejecución por línea de comandos
├── tests/
│   └── calculadora.test.js    # pruebas automatizadas
├── .gitignore
├── package.json
└── README.md
```

## Instrucciones de ejecución

Requisito: tener instalado [Node.js](https://nodejs.org) 18 o superior.

```bash
# 1. Clonar el repositorio
git clone https://github.com/alanvillalobos70055-rgb/calculadora-presupuestos.git
cd calculadora-presupuestos

# 2. Ejecutar el programa (sin descuento)
npm start

# 3. Ejecutar con un 10 % de descuento
node src/index.js 10

# 4. Ejecutar las pruebas automatizadas
npm test
```

## Integración continua

El archivo `.github/workflows/ci.yml` ejecuta `npm test` en GitHub Actions cada vez que se hace un *push* o un *pull request*. Si alguna prueba falla, el flujo se marca en rojo.

