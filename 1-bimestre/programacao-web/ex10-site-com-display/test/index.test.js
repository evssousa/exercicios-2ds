const fs = require("fs")
const html = fs.readFileSync("index.html", "utf8")

test("HTML possui div", () => {
  expect(html).toContain("<div>")
})

test("HTML possui spans", () => {
  expect(html).toContain("<span>")
})

test("HTML possui parágrafo", () => {
  expect(html).toContain("<p>")
})

test("HTML conecta CSS externo", () => {
  expect(html).toContain('./src/css/style.css')
})