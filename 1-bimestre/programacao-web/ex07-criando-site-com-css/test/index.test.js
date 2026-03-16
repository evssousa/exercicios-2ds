const fs = require("fs")
const html = fs.readFileSync("index.html", "utf8")

test("Link correto para CSS externo", () => {
  expect(html).toContain('<link rel="stylesheet" href="./src/css/style.css">')
})

test("Título presente", () => {
  expect(html).toContain("Minha Primeira Página com CSS")
})