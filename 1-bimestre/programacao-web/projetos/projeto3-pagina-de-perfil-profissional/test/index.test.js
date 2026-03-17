const fs = require("fs")
const html = fs.readFileSync("index.html", "utf8")

test("HTML conecta CSS externo", () => {
  expect(html).toContain('./src/css/style.css')
})

test("Título da página presente", () => {
  expect(html).toContain("Perfil do Desenvolvedor")
})

test("Existe class titulo", () => {
  expect(html).toContain('class="titulo"')
})

test("Div de perfil presente", () => {
  expect(html).toContain('class="perfil"')
})

test("Lista de habilidades presente", () => {
  expect(html).toContain("<ul>")
})

test("Classe profissao presente", () => {
  expect(html).toContain('class="profissao"')
})

test("Botão de contato presente", () => {
  expect(html).toContain('class="botao"')
})