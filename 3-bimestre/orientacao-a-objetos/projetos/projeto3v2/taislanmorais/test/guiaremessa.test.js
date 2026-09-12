const GuiaRemessa = require("../GuiaRemessa")
const Factory = require("../Factory")

test("Deve criar transferencia", () => {
    const obj = Factory.criar("transferencia", "Teclado mecânico")

    expect(obj).toBeInstanceOf(GuiaRemessa)
    expect(obj.emitir()).toBe("Guia de transferência emitida para: Teclado mecânico")
})

test("Deve criar devolucao", () => {
    const obj = Factory.criar("devolucao", "Monitor 24 polegadas")

    expect(obj).toBeInstanceOf(GuiaRemessa)
    expect(obj.emitir()).toBe("Guia de devolução emitida para: Monitor 24 polegadas")
})

test("Deve criar amostra", () => {
    const obj = Factory.criar("amostra", "Cabo HDMI")

    expect(obj).toBeInstanceOf(GuiaRemessa)
    expect(obj.emitir()).toBe("Guia de amostra emitida para: Cabo HDMI")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("transferencia", "Teclado mecânico").emitir(), Factory.criar("devolucao", "Teclado mecânico").emitir(), Factory.criar("amostra", "Teclado mecânico").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("transferencia", "Teclado mecânico").constructor.name).toBe("Transferencia")
    expect(Factory.criar("devolucao", "Teclado mecânico").constructor.name).toBe("Devolucao")
    expect(Factory.criar("amostra", "Teclado mecânico").constructor.name).toBe("Amostra")
})

test("Todos os tipos criados devem ser GuiaRemessa", () => {
    for (const tipo of ["transferencia", "devolucao", "amostra"]) {
        expect(Factory.criar(tipo, "Teclado mecânico")).toBeInstanceOf(GuiaRemessa)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("consignacao-nao-registrada", "Teclado mecânico")
    }).toThrow("Tipo de guia inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("transferencia", "Monitor 24 polegadas")

    expect(obj.produto).toBe("Monitor 24 polegadas")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("devolucao", "Teclado mecânico")
    const dois = Factory.criar("devolucao", "Cabo HDMI")

    expect(um.emitir()).toBe("Guia de devolução emitida para: Teclado mecânico")
    expect(dois.emitir()).toBe("Guia de devolução emitida para: Cabo HDMI")
})
