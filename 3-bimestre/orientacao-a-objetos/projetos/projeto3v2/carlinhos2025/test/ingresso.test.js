const Ingresso = require("../Ingresso")
const Factory = require("../Factory")

test("Deve criar com inteira", () => {
    const obj = Factory.criar("inteira", "Ana")

    expect(obj).toBeInstanceOf(Ingresso)
    expect(obj.emitir()).toBe("Ingresso inteira emitido para: Ana")
})

test("Deve criar com meia", () => {
    const obj = Factory.criar("meia", "Pedro")

    expect(obj).toBeInstanceOf(Ingresso)
    expect(obj.emitir()).toBe("Ingresso meia-entrada emitido para: Pedro")
})

test("Os dois tipos devem ter resultado diferente", () => {
    const um = Factory.criar("inteira", "Ana")
    const dois = Factory.criar("meia", "Ana")

    expect(um.emitir()).not.toBe(dois.emitir())
})

test("Deve dar erro se o tipo não existir", () => {
    expect(() => {
        Factory.criar("cortesia", "Ana")
    }).toThrow("Tipo inválido")
})

test("O nome informado deve ficar salvo no objeto", () => {
    const obj = Factory.criar("inteira", "Pedro")

    expect(obj.nome).toBe("Pedro")
})
