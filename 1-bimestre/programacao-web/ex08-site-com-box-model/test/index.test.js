const fs = require("fs")
const html = fs.readFileSync("index.html", "utf8")

test("Div presente", () => {
  expect(html).toContain("<div>")
  expect(html).toContain("Aprendendo Box Model")
})

test("CSS externo conectado", () => {
  expect(html).toContain('./src/css/style.css')
})