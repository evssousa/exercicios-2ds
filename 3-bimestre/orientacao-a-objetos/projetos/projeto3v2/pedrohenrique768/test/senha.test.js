const Senha = require("../Senha")
const Factory = require("../Factory")

test("Deve criar com normal", () => {
    const obj = Factory.criar("normal", "Mário")

    expect(obj).toBeInstanceOf(Senha)
    expect(obj.emitir()).toBe("Senha normal emitida para: Mário")
})

test("Deve criar com prioritaria", () => {
    const obj = Factory.criar("prioritaria", "Renata")

    expect(obj).toBeInstanceOf(Senha)
    expect(obj.emitir()).toBe("Senha prioritária emitida para: Renata")
})

test("Os dois tipos devem ter resultado diferente", () => {
    const um = Factory.criar("normal", "Mário")
    const dois = Factory.criar("prioritaria", "Mário")

    expect(um.emitir()).not.toBe(dois.emitir())
})

test("Deve dar erro se o tipo não existir", () => {
    expect(() => {
        Factory.criar("vip", "Mário")
    }).toThrow("Tipo inválido")
})

test("O nome informado deve ficar salvo no objeto", () => {
    const obj = Factory.criar("normal", "Renata")

    expect(obj.nome).toBe("Renata")
})
