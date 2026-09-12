const Fatura = require("../Fatura")
const Factory = require("../Factory")

test("Deve criar prePago", () => {
    const obj = Factory.criar("prePago", "Samuel Ribeiro")

    expect(obj).toBeInstanceOf(Fatura)
    expect(obj.emitir()).toBe("Fatura de plano pré-pago emitida para: Samuel Ribeiro")
})

test("Deve criar posPago", () => {
    const obj = Factory.criar("posPago", "Equipe de vendas")

    expect(obj).toBeInstanceOf(Fatura)
    expect(obj.emitir()).toBe("Fatura de plano pós-pago emitida para: Equipe de vendas")
})

test("Deve criar controle", () => {
    const obj = Factory.criar("controle", "Turma 2DS")

    expect(obj).toBeInstanceOf(Fatura)
    expect(obj.emitir()).toBe("Fatura de plano controle emitida para: Turma 2DS")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("prePago", "Samuel Ribeiro").emitir(), Factory.criar("posPago", "Samuel Ribeiro").emitir(), Factory.criar("controle", "Samuel Ribeiro").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("prePago", "Samuel Ribeiro").constructor.name).toBe("PrePago")
    expect(Factory.criar("posPago", "Samuel Ribeiro").constructor.name).toBe("PosPago")
    expect(Factory.criar("controle", "Samuel Ribeiro").constructor.name).toBe("Controle")
})

test("Todos os tipos criados devem ser Fatura", () => {
    for (const tipo of ["prePago", "posPago", "controle"]) {
        expect(Factory.criar(tipo, "Samuel Ribeiro")).toBeInstanceOf(Fatura)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("corporativo-sem-contrato", "Samuel Ribeiro")
    }).toThrow("Tipo de fatura inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("prePago", "Equipe de vendas")

    expect(obj.cliente).toBe("Equipe de vendas")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("posPago", "Samuel Ribeiro")
    const dois = Factory.criar("posPago", "Turma 2DS")

    expect(um.emitir()).toBe("Fatura de plano pós-pago emitida para: Samuel Ribeiro")
    expect(dois.emitir()).toBe("Fatura de plano pós-pago emitida para: Turma 2DS")
})
