const Atestado = require("../Atestado")
const Factory = require("../Factory")

test("Deve criar afastamento", () => {
    const obj = Factory.criar("afastamento", "Sala 12 - Bloco B")

    expect(obj).toBeInstanceOf(Atestado)
    expect(obj.emitir()).toBe("Atestado de afastamento emitido para: Sala 12 - Bloco B")
})

test("Deve criar comparecimento", () => {
    const obj = Factory.criar("comparecimento", "Sala 04 - Bloco A")

    expect(obj).toBeInstanceOf(Atestado)
    expect(obj.emitir()).toBe("Atestado de comparecimento emitido para: Sala 04 - Bloco A")
})

test("Deve criar aptidaoFisica", () => {
    const obj = Factory.criar("aptidaoFisica", "Laboratório de Informática")

    expect(obj).toBeInstanceOf(Atestado)
    expect(obj.emitir()).toBe("Atestado de aptidão física emitido para: Laboratório de Informática")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("afastamento", "Sala 12 - Bloco B").emitir(), Factory.criar("comparecimento", "Sala 12 - Bloco B").emitir(), Factory.criar("aptidaoFisica", "Sala 12 - Bloco B").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("afastamento", "Sala 12 - Bloco B").constructor.name).toBe("Afastamento")
    expect(Factory.criar("comparecimento", "Sala 12 - Bloco B").constructor.name).toBe("Comparecimento")
    expect(Factory.criar("aptidaoFisica", "Sala 12 - Bloco B").constructor.name).toBe("AptidaoFisica")
})

test("Todos os tipos criados devem ser Atestado", () => {
    for (const tipo of ["afastamento", "comparecimento", "aptidaoFisica"]) {
        expect(Factory.criar(tipo, "Sala 12 - Bloco B")).toBeInstanceOf(Atestado)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("sanidade-mental", "Sala 12 - Bloco B")
    }).toThrow("Tipo de atestado inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("afastamento", "Sala 04 - Bloco A")

    expect(obj.paciente).toBe("Sala 04 - Bloco A")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("comparecimento", "Sala 12 - Bloco B")
    const dois = Factory.criar("comparecimento", "Laboratório de Informática")

    expect(um.emitir()).toBe("Atestado de comparecimento emitido para: Sala 12 - Bloco B")
    expect(dois.emitir()).toBe("Atestado de comparecimento emitido para: Laboratório de Informática")
})
