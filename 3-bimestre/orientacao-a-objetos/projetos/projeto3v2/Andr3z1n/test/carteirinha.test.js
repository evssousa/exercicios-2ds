const Carteirinha = require("../Carteirinha")
const Factory = require("../Factory")

test("Deve criar musculacao", () => {
    const obj = Factory.criar("musculacao", "Diego Farias")

    expect(obj).toBeInstanceOf(Carteirinha)
    expect(obj.emitir()).toBe("Carteirinha de musculação emitida para: Diego Farias")
})

test("Deve criar natacao", () => {
    const obj = Factory.criar("natacao", "Patrícia Nunes")

    expect(obj).toBeInstanceOf(Carteirinha)
    expect(obj.emitir()).toBe("Carteirinha de natação emitida para: Patrícia Nunes")
})

test("Deve criar lutas", () => {
    const obj = Factory.criar("lutas", "Vinícius Rocha")

    expect(obj).toBeInstanceOf(Carteirinha)
    expect(obj.emitir()).toBe("Carteirinha de lutas emitida para: Vinícius Rocha")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("musculacao", "Diego Farias").emitir(), Factory.criar("natacao", "Diego Farias").emitir(), Factory.criar("lutas", "Diego Farias").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("musculacao", "Diego Farias").constructor.name).toBe("Musculacao")
    expect(Factory.criar("natacao", "Diego Farias").constructor.name).toBe("Natacao")
    expect(Factory.criar("lutas", "Diego Farias").constructor.name).toBe("Lutas")
})

test("Todos os tipos criados devem ser Carteirinha", () => {
    for (const tipo of ["musculacao", "natacao", "lutas"]) {
        expect(Factory.criar(tipo, "Diego Farias")).toBeInstanceOf(Carteirinha)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("ioga-avulsa", "Diego Farias")
    }).toThrow("Tipo de carteirinha inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("musculacao", "Patrícia Nunes")

    expect(obj.aluno).toBe("Patrícia Nunes")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("natacao", "Diego Farias")
    const dois = Factory.criar("natacao", "Vinícius Rocha")

    expect(um.emitir()).toBe("Carteirinha de natação emitida para: Diego Farias")
    expect(dois.emitir()).toBe("Carteirinha de natação emitida para: Vinícius Rocha")
})
