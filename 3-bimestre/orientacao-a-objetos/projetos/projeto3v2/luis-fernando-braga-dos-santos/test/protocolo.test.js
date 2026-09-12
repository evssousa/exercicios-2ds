const Protocolo = require("../Protocolo")
const Factory = require("../Factory")

test("Deve criar suporteBasico", () => {
    const obj = Factory.criar("suporteBasico", "Impressora sem papel")

    expect(obj).toBeInstanceOf(Protocolo)
    expect(obj.emitir()).toBe("Protocolo de suporte básico emitido para: Impressora sem papel")
})

test("Deve criar suportePrioritario", () => {
    const obj = Factory.criar("suportePrioritario", "Sistema lento")

    expect(obj).toBeInstanceOf(Protocolo)
    expect(obj.emitir()).toBe("Protocolo de suporte prioritário emitido para: Sistema lento")
})

test("Deve criar suporteEmergencial", () => {
    const obj = Factory.criar("suporteEmergencial", "Servidor fora do ar")

    expect(obj).toBeInstanceOf(Protocolo)
    expect(obj.emitir()).toBe("Protocolo de suporte emergencial emitido para: Servidor fora do ar")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("suporteBasico", "Impressora sem papel").emitir(), Factory.criar("suportePrioritario", "Impressora sem papel").emitir(), Factory.criar("suporteEmergencial", "Impressora sem papel").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("suporteBasico", "Impressora sem papel").constructor.name).toBe("SuporteBasico")
    expect(Factory.criar("suportePrioritario", "Impressora sem papel").constructor.name).toBe("SuportePrioritario")
    expect(Factory.criar("suporteEmergencial", "Impressora sem papel").constructor.name).toBe("SuporteEmergencial")
})

test("Todos os tipos criados devem ser Protocolo", () => {
    for (const tipo of ["suporteBasico", "suportePrioritario", "suporteEmergencial"]) {
        expect(Factory.criar(tipo, "Impressora sem papel")).toBeInstanceOf(Protocolo)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("suporte-vip-sem-contrato", "Impressora sem papel")
    }).toThrow("Tipo de protocolo inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("suporteBasico", "Sistema lento")

    expect(obj.cliente).toBe("Sistema lento")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("suportePrioritario", "Impressora sem papel")
    const dois = Factory.criar("suportePrioritario", "Servidor fora do ar")

    expect(um.emitir()).toBe("Protocolo de suporte prioritário emitido para: Impressora sem papel")
    expect(dois.emitir()).toBe("Protocolo de suporte prioritário emitido para: Servidor fora do ar")
})
