const Alvara = require("../Alvara")
const Factory = require("../Factory")

test("Deve criar comercial", () => {
    const obj = Factory.criar("comercial", "Padaria Bloco A")

    expect(obj).toBeInstanceOf(Alvara)
    expect(obj.emitir()).toBe("Alvará comercial emitido para: Padaria Bloco A")
})

test("Deve criar sanitario", () => {
    const obj = Factory.criar("sanitario", "Restaurante Central")

    expect(obj).toBeInstanceOf(Alvara)
    expect(obj.emitir()).toBe("Alvará sanitário emitido para: Restaurante Central")
})

test("Deve criar bombeiro", () => {
    const obj = Factory.criar("bombeiro", "Loja de Roupas")

    expect(obj).toBeInstanceOf(Alvara)
    expect(obj.emitir()).toBe("Alvará do corpo de bombeiros emitido para: Loja de Roupas")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("comercial", "Padaria Bloco A").emitir(), Factory.criar("sanitario", "Padaria Bloco A").emitir(), Factory.criar("bombeiro", "Padaria Bloco A").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("comercial", "Padaria Bloco A").constructor.name).toBe("Comercial")
    expect(Factory.criar("sanitario", "Padaria Bloco A").constructor.name).toBe("Sanitario")
    expect(Factory.criar("bombeiro", "Padaria Bloco A").constructor.name).toBe("Bombeiro")
})

test("Todos os tipos criados devem ser Alvara", () => {
    for (const tipo of ["comercial", "sanitario", "bombeiro"]) {
        expect(Factory.criar(tipo, "Padaria Bloco A")).toBeInstanceOf(Alvara)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("ambiental", "Padaria Bloco A")
    }).toThrow("Tipo de alvará inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("comercial", "Restaurante Central")

    expect(obj.estabelecimento).toBe("Restaurante Central")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("sanitario", "Padaria Bloco A")
    const dois = Factory.criar("sanitario", "Loja de Roupas")

    expect(um.emitir()).toBe("Alvará sanitário emitido para: Padaria Bloco A")
    expect(dois.emitir()).toBe("Alvará sanitário emitido para: Loja de Roupas")
})
