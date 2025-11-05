const { exportTraceState } = require("next/dist/trace");
const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 5 + 100 deveria retornar 105", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});
test("somar nada + nada deveria retornar nada", () => {
  const resultado = calculadora.somar();
  expect(resultado).toBe("Erro");
});
