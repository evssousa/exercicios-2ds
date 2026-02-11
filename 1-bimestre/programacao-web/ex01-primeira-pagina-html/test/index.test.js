const fs = require("fs")

const html = fs.readFileSync("index.html","utf8")

test("Deve conter a estrutura básica do HTML",() => {
    expect(html).toContain("<!DOCTYPE html>")
    expect(html).toContain("<html>")
    expect(html).toContain("<head>")
    expect(html).toContain("<body>")
})

test("Deve conter um h1 com o texto correto",() => {
    expect(html).toContain("<h1>Minha Primeira Página</h1>")
})