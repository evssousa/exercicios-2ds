const projeto = require("../index")
const pacote = require("../package.json")

test("O package.json deve ter o script start", () => {
    expect(pacote.scripts.start).toBe("node index.js")
})

test("O package.json deve ter o script dev", () => {
    expect(pacote.scripts.dev).toBe("node --watch index.js")
})

test("O package.json deve continuar com o script test", () => {
    expect(pacote.scripts.test).toBe("jest")
})

test("O objeto deve possuir o nome correto", () => {
    expect(projeto.nome).toBe("aula01")
})

test("A propriedade scripts deve listar os tres scripts na ordem", () => {
    expect(projeto.scripts).toEqual(["test", "start", "dev"])
})

test("O metodo rodar deve montar o comando do npm", () => {
    expect(projeto.rodar("dev")).toBe("Executando: npm run dev")
})

test("O metodo temScript deve retornar true para um script existente", () => {
    expect(projeto.temScript("start")).toBe(true)
})

test("O metodo temScript deve retornar false para um script inexistente", () => {
    expect(projeto.temScript("build")).toBe(false)
})
