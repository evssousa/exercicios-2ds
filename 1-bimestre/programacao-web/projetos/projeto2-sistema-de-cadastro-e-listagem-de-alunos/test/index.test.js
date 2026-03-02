const fs = require("fs")
const html = fs.readFileSync("index.html", "utf8")

test("Estrutura HTML básica", () => {
  expect(html).toContain("<html>")
  expect(html).toContain("<head>")
  expect(html).toContain("<body>")
})

test("Título da página", () => {
  expect(html).toContain("<title>Tech Academy</title>")
  expect(html).toContain("<h1>Sistema de Cadastro de Alunos</h1>")
})

test("Formulário presente", () => {
  expect(html).toContain("<form>")
})

test("Campos obrigatórios do formulário", () => {
  expect(html).toContain('type="text"')
  expect(html).toContain('type="email"')
  expect(html).toContain('type="number"')
  expect(html).toContain("<select>")
  expect(html).toContain("<textarea>")
  expect(html).toContain('type="submit"')
  expect(html).toContain('value="Cadastrar"')
})

test("Opções do select", () => {
  expect(html).toContain("HTML")
  expect(html).toContain("CSS")
  expect(html).toContain("JavaScript")
})

test("Tabela criada corretamente", () => {
  expect(html).toContain("<table>")
  expect(html).toContain("<caption>Lista de Alunos</caption>")
  expect(html).toContain("<th>Nome</th>")
  expect(html).toContain("<th>Email</th>")
  expect(html).toContain("<th>Curso</th>")
})

test("Alunos cadastrados na tabela", () => {
  expect(html).toContain("Ana")
  expect(html).toContain("Bruno")
  expect(html).toContain("Carla")
})

test("Separação com hr", () => {
  expect(html).toContain("<hr>")
})