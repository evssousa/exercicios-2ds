const fs = require("fs")
const html = fs.readFileSync("index.html", "utf8")

test("Existe elemento com id titulo", () => {
  expect(html).toContain('id="titulo"')
})

test("Existe classe destaque", () => {
  expect(html).toContain('class="destaque"')
})

test("Possui parágrafo", () => {
  expect(html).toContain("<p>")
})