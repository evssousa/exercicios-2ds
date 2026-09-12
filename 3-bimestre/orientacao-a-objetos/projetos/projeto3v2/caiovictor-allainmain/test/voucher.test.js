const Voucher = require("../Voucher")
const Factory = require("../Factory")

test("Deve criar hospedagem", () => {
    const obj = Factory.criar("hospedagem", "Lote 1 - Pacote Sul")

    expect(obj).toBeInstanceOf(Voucher)
    expect(obj.emitir()).toBe("Voucher de hospedagem emitido para: Lote 1 - Pacote Sul")
})

test("Deve criar passeio", () => {
    const obj = Factory.criar("passeio", "Lote 2 - Pacote Nordeste")

    expect(obj).toBeInstanceOf(Voucher)
    expect(obj.emitir()).toBe("Voucher de passeio emitido para: Lote 2 - Pacote Nordeste")
})

test("Deve criar transfer", () => {
    const obj = Factory.criar("transfer", "Staff - Cortesia")

    expect(obj).toBeInstanceOf(Voucher)
    expect(obj.emitir()).toBe("Voucher de transfer emitido para: Staff - Cortesia")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("hospedagem", "Lote 1 - Pacote Sul").emitir(), Factory.criar("passeio", "Lote 1 - Pacote Sul").emitir(), Factory.criar("transfer", "Lote 1 - Pacote Sul").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("hospedagem", "Lote 1 - Pacote Sul").constructor.name).toBe("Hospedagem")
    expect(Factory.criar("passeio", "Lote 1 - Pacote Sul").constructor.name).toBe("Passeio")
    expect(Factory.criar("transfer", "Lote 1 - Pacote Sul").constructor.name).toBe("Transfer")
})

test("Todos os tipos criados devem ser Voucher", () => {
    for (const tipo of ["hospedagem", "passeio", "transfer"]) {
        expect(Factory.criar(tipo, "Lote 1 - Pacote Sul")).toBeInstanceOf(Voucher)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("seguro-viagem", "Lote 1 - Pacote Sul")
    }).toThrow("Tipo de voucher inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("hospedagem", "Lote 2 - Pacote Nordeste")

    expect(obj.cliente).toBe("Lote 2 - Pacote Nordeste")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("passeio", "Lote 1 - Pacote Sul")
    const dois = Factory.criar("passeio", "Staff - Cortesia")

    expect(um.emitir()).toBe("Voucher de passeio emitido para: Lote 1 - Pacote Sul")
    expect(dois.emitir()).toBe("Voucher de passeio emitido para: Staff - Cortesia")
})
