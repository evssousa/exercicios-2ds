const fs = require("fs")
const css = fs.readFileSync("./src/css/style.css", "utf8")

test("Body com background-color", () => {
  expect(css).toContain("body")
  expect(css).toContain("background-color")
})

test("H1 com color", () => {
  expect(css).toContain("h1")
  expect(css).toContain("color")
})

test("H1 com border", () => {
  expect(css).toContain("border")
})

test("P com color", () => {
  expect(css).toContain("p")
})