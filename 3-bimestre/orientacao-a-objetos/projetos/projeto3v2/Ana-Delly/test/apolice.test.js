const Apolice = require("../Apolice")
const Factory = require("../Factory")

test("Deve criar auto", () => {
    const obj = Factory.criar("auto", "Marina Alves")

    expect(obj).toBeInstanceOf(Apolice)
    expect(obj.emitir()).toBe("Apólice de seguro auto emitida para: Marina Alves")
})

test("Deve criar residencial", () => {
    const obj = Factory.criar("residencial", "Rodrigo Lima")

    expect(obj).toBeInstanceOf(Apolice)
    expect(obj.emitir()).toBe("Apólice de seguro residencial emitida para: Rodrigo Lima")
})

test("Deve criar vida", () => {
    const obj = Factory.criar("vida", "Célia Barros")

    expect(obj).toBeInstanceOf(Apolice)
    expect(obj.emitir()).toBe("Apólice de seguro de vida emitida para: Célia Barros")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("auto", "Marina Alves").emitir(), Factory.criar("residencial", "Marina Alves").emitir(), Factory.criar("vida", "Marina Alves").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("auto", "Marina Alves").constructor.name).toBe("Auto")
    expect(Factory.criar("residencial", "Marina Alves").constructor.name).toBe("Residencial")
    expect(Factory.criar("vida", "Marina Alves").constructor.name).toBe("Vida")
})

test("Todos os tipos criados devem ser Apolice", () => {
    for (const tipo of ["auto", "residencial", "vida"]) {
        expect(Factory.criar(tipo, "Marina Alves")).toBeInstanceOf(Apolice)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("viagem", "Marina Alves")
    }).toThrow("Tipo de apólice inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("auto", "Rodrigo Lima")

    expect(obj.segurado).toBe("Rodrigo Lima")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("residencial", "Marina Alves")
    const dois = Factory.criar("residencial", "Célia Barros")

    expect(um.emitir()).toBe("Apólice de seguro residencial emitida para: Marina Alves")
    expect(dois.emitir()).toBe("Apólice de seguro residencial emitida para: Célia Barros")
})
