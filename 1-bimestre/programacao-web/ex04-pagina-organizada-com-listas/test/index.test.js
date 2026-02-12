const fs =require("fs")
const html = fs.readFileSync("index.html","utf8")

test("Deve conter div e span",() => {
expect(html).toContain("<div>")
expect(html).toContain("<span>")
})

test("Deve conter listas ordenadas e não ordenadas",() => {
expect(html).toContain("<ul>")
expect(html).toContain("<ol>")
expect(html).toContain("<li>")
})

test("Deve conter hr",() => {
expect(html).toContain("<hr>")
})