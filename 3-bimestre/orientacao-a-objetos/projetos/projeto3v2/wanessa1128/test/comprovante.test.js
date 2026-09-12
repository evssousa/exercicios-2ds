const Comprovante = require("../Comprovante")
const Factory = require("../Factory")

test("Deve criar carta", () => {
    const obj = Factory.criar("carta", "Wanessa Lopes")

    expect(obj).toBeInstanceOf(Comprovante)
    expect(obj.emitir()).toBe("Comprovante de postagem de carta emitido para: Wanessa Lopes")
})

test("Deve criar sedex", () => {
    const obj = Factory.criar("sedex", "Gabriel Teles")

    expect(obj).toBeInstanceOf(Comprovante)
    expect(obj.emitir()).toBe("Comprovante de postagem de Sedex emitido para: Gabriel Teles")
})

test("Deve criar pac", () => {
    const obj = Factory.criar("pac", "Sandra Muniz")

    expect(obj).toBeInstanceOf(Comprovante)
    expect(obj.emitir()).toBe("Comprovante de postagem de PAC emitido para: Sandra Muniz")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("carta", "Wanessa Lopes").emitir(), Factory.criar("sedex", "Wanessa Lopes").emitir(), Factory.criar("pac", "Wanessa Lopes").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("carta", "Wanessa Lopes").constructor.name).toBe("Carta")
    expect(Factory.criar("sedex", "Wanessa Lopes").constructor.name).toBe("Sedex")
    expect(Factory.criar("pac", "Wanessa Lopes").constructor.name).toBe("Pac")
})

test("Todos os tipos criados devem ser Comprovante", () => {
    for (const tipo of ["carta", "sedex", "pac"]) {
        expect(Factory.criar(tipo, "Wanessa Lopes")).toBeInstanceOf(Comprovante)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("telegrama-descontinuado", "Wanessa Lopes")
    }).toThrow("Tipo de comprovante inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("carta", "Gabriel Teles")

    expect(obj.remetente).toBe("Gabriel Teles")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("sedex", "Wanessa Lopes")
    const dois = Factory.criar("sedex", "Sandra Muniz")

    expect(um.emitir()).toBe("Comprovante de postagem de Sedex emitido para: Wanessa Lopes")
    expect(dois.emitir()).toBe("Comprovante de postagem de Sedex emitido para: Sandra Muniz")
})
