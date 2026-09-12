const SeloQualidade = require("../SeloQualidade")
const Factory = require("../Factory")

test("Deve criar organico", () => {
    const obj = Factory.criar("organico", "chocolate")

    expect(obj).toBeInstanceOf(SeloQualidade)
    expect(obj.emitir()).toBe("Selo orgânico emitido para: chocolate")
})

test("Deve criar artesanal", () => {
    const obj = Factory.criar("artesanal", "frango")

    expect(obj).toBeInstanceOf(SeloQualidade)
    expect(obj.emitir()).toBe("Selo artesanal emitido para: frango")
})

test("Deve criar integral", () => {
    const obj = Factory.criar("integral", "queijo")

    expect(obj).toBeInstanceOf(SeloQualidade)
    expect(obj.emitir()).toBe("Selo integral emitido para: queijo")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("organico", "chocolate").emitir(), Factory.criar("artesanal", "chocolate").emitir(), Factory.criar("integral", "chocolate").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("organico", "chocolate").constructor.name).toBe("Organico")
    expect(Factory.criar("artesanal", "chocolate").constructor.name).toBe("Artesanal")
    expect(Factory.criar("integral", "chocolate").constructor.name).toBe("Integral")
})

test("Todos os tipos criados devem ser SeloQualidade", () => {
    for (const tipo of ["organico", "artesanal", "integral"]) {
        expect(Factory.criar(tipo, "chocolate")).toBeInstanceOf(SeloQualidade)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("zero-acucar-nao-testado", "chocolate")
    }).toThrow("Tipo de selo inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("organico", "frango")

    expect(obj.produto).toBe("frango")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("artesanal", "chocolate")
    const dois = Factory.criar("artesanal", "queijo")

    expect(um.emitir()).toBe("Selo artesanal emitido para: chocolate")
    expect(dois.emitir()).toBe("Selo artesanal emitido para: queijo")
})
