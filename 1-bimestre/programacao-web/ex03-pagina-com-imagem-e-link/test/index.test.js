const fs =require("fs")
const html = fs.readFileSync("index.html","utf8")

test("Deve conter uma tag img com src e alt",() => {
expect(html).toContain("<img")
expect(html).toContain("src=")
expect(html).toContain("alt=")
})

test("Deve conter um link para o Google",() => {
expect(html).toContain('<a href="https://www.google.com">Acessar Google</a>')
})