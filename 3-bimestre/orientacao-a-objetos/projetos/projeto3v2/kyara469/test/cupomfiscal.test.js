const CupomFiscal = require("../CupomFiscal")
const Factory = require("../Factory")

test("Deve criar avista", () => {
    const obj = Factory.criar("avista", "DEZOFF")

    expect(obj).toBeInstanceOf(CupomFiscal)
    expect(obj.emitir()).toBe("Cupom fiscal à vista emitido para: DEZOFF")
})

test("Deve criar parcelado", () => {
    const obj = Factory.criar("parcelado", "MENOS20")

    expect(obj).toBeInstanceOf(CupomFiscal)
    expect(obj.emitir()).toBe("Cupom fiscal parcelado emitido para: MENOS20")
})

test("Deve criar trocaCredito", () => {
    const obj = Factory.criar("trocaCredito", "FRETEZERO")

    expect(obj).toBeInstanceOf(CupomFiscal)
    expect(obj.emitir()).toBe("Cupom fiscal de troca (crédito) emitido para: FRETEZERO")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("avista", "DEZOFF").emitir(), Factory.criar("parcelado", "DEZOFF").emitir(), Factory.criar("trocaCredito", "DEZOFF").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("avista", "DEZOFF").constructor.name).toBe("AVista")
    expect(Factory.criar("parcelado", "DEZOFF").constructor.name).toBe("Parcelado")
    expect(Factory.criar("trocaCredito", "DEZOFF").constructor.name).toBe("TrocaCredito")
})

test("Todos os tipos criados devem ser CupomFiscal", () => {
    for (const tipo of ["avista", "parcelado", "trocaCredito"]) {
        expect(Factory.criar(tipo, "DEZOFF")).toBeInstanceOf(CupomFiscal)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("consignado", "DEZOFF")
    }).toThrow("Tipo de cupom fiscal inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("avista", "MENOS20")

    expect(obj.cliente).toBe("MENOS20")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("parcelado", "DEZOFF")
    const dois = Factory.criar("parcelado", "FRETEZERO")

    expect(um.emitir()).toBe("Cupom fiscal parcelado emitido para: DEZOFF")
    expect(dois.emitir()).toBe("Cupom fiscal parcelado emitido para: FRETEZERO")
})
