const fs = require("fs")

const html = fs.readFileSync("index.html","utf8")

test("Deve conter um h1",() => {
    expect(html).toContain("<h1>Sobre mim</h1>")
})

test("Deve conter parágrafos",() => {
    expect(html).toContain("<p>")
})

test("Deve conter negrito e itálico",() => {
    expect(html).toContain("<strong>")
    expect(html).toContain("<em>")
})

test("Deve conter comentário HTML",() => {
    expect(html).toContain("<!--")
})

