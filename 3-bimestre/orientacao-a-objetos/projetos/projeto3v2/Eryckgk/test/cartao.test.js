const Cartao = require("../Cartao")
const Factory = require("../Factory")

test("Deve criar debito", () => {
    const obj = Factory.criar("debito", "Marina Cavalcante")

    expect(obj).toBeInstanceOf(Cartao)
    expect(obj.emitir()).toBe("Cartão de débito emitido para: Marina Cavalcante")
})

test("Deve criar credito", () => {
    const obj = Factory.criar("credito", "Otávio Ramos")

    expect(obj).toBeInstanceOf(Cartao)
    expect(obj.emitir()).toBe("Cartão de crédito emitido para: Otávio Ramos")
})

test("Deve criar multiplo", () => {
    const obj = Factory.criar("multiplo", "Helena Brandão")

    expect(obj).toBeInstanceOf(Cartao)
    expect(obj.emitir()).toBe("Cartão múltiplo emitido para: Helena Brandão")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("debito", "Marina Cavalcante").emitir(), Factory.criar("credito", "Marina Cavalcante").emitir(), Factory.criar("multiplo", "Marina Cavalcante").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("debito", "Marina Cavalcante").constructor.name).toBe("Debito")
    expect(Factory.criar("credito", "Marina Cavalcante").constructor.name).toBe("Credito")
    expect(Factory.criar("multiplo", "Marina Cavalcante").constructor.name).toBe("Multiplo")
})

test("Todos os tipos criados devem ser Cartao", () => {
    for (const tipo of ["debito", "credito", "multiplo"]) {
        expect(Factory.criar(tipo, "Marina Cavalcante")).toBeInstanceOf(Cartao)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("pre-pago-internacional", "Marina Cavalcante")
    }).toThrow("Tipo de cartão inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("debito", "Otávio Ramos")

    expect(obj.titular).toBe("Otávio Ramos")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("credito", "Marina Cavalcante")
    const dois = Factory.criar("credito", "Helena Brandão")

    expect(um.emitir()).toBe("Cartão de crédito emitido para: Marina Cavalcante")
    expect(dois.emitir()).toBe("Cartão de crédito emitido para: Helena Brandão")
})
