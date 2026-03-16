const fs = require("fs")
const css = fs.readFileSync("./src/css/style.css", "utf8")

test("Div possui padding", () => {
  expect(css).toContain("padding")
})

test("Div possui margin", () => {
  expect(css).toContain("margin")
})

test("Div possui border", () => {
  expect(css).toContain("border")
})

test("Div possui background-color", () => {
  expect(css).toContain("background-color")
})