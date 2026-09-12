const Laudo = require("../Laudo")
const Factory = require("../Factory")

test("Deve criar estrutural", () => {
    const obj = Factory.criar("estrutural", "Laboratório de Química")

    expect(obj).toBeInstanceOf(Laudo)
    expect(obj.emitir()).toBe("Laudo estrutural emitido por: Laboratório de Química")
})

test("Deve criar eletrico", () => {
    const obj = Factory.criar("eletrico", "Laboratório de Física")

    expect(obj).toBeInstanceOf(Laudo)
    expect(obj.emitir()).toBe("Laudo elétrico emitido por: Laboratório de Física")
})

test("Deve criar hidraulico", () => {
    const obj = Factory.criar("hidraulico", "Laboratório de Biologia")

    expect(obj).toBeInstanceOf(Laudo)
    expect(obj.emitir()).toBe("Laudo hidráulico emitido por: Laboratório de Biologia")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("estrutural", "Laboratório de Química").emitir(), Factory.criar("eletrico", "Laboratório de Química").emitir(), Factory.criar("hidraulico", "Laboratório de Química").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("estrutural", "Laboratório de Química").constructor.name).toBe("Estrutural")
    expect(Factory.criar("eletrico", "Laboratório de Química").constructor.name).toBe("Eletrico")
    expect(Factory.criar("hidraulico", "Laboratório de Química").constructor.name).toBe("Hidraulico")
})

test("Todos os tipos criados devem ser Laudo", () => {
    for (const tipo of ["estrutural", "eletrico", "hidraulico"]) {
        expect(Factory.criar(tipo, "Laboratório de Química")).toBeInstanceOf(Laudo)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("acustico", "Laboratório de Química")
    }).toThrow("Tipo de laudo inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("estrutural", "Laboratório de Física")

    expect(obj.responsavel).toBe("Laboratório de Física")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("eletrico", "Laboratório de Química")
    const dois = Factory.criar("eletrico", "Laboratório de Biologia")

    expect(um.emitir()).toBe("Laudo elétrico emitido por: Laboratório de Química")
    expect(dois.emitir()).toBe("Laudo elétrico emitido por: Laboratório de Biologia")
})
