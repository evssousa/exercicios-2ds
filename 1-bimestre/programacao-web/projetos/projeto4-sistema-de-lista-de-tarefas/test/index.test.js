const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");

test("Input de tarefa existe", () => {
  expect(html).toContain("tarefa");
});

test("Botão adicionar existe", () => {
  expect(html).toContain("adicionar");
});

test("Lista de tarefas existe", () => {
  expect(html).toContain("lista");
});

test("Script conectado", () => {
  expect(html).toContain("./src/js/script.js");
});