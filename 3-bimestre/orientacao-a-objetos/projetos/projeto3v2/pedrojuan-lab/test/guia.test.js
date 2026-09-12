const Guia = require("../Guia")
const Factory = require("../Factory")

test("Deve criar icms", () => {
    const obj = Factory.criar("icms", "Empresa Alfa Ltda")

    expect(obj).toBeInstanceOf(Guia)
    expect(obj.emitir()).toBe("Guia de ICMS emitida para: Empresa Alfa Ltda")
})

test("Deve criar iss", () => {
    const obj = Factory.criar("iss", "Empresa Beta Ltda")

    expect(obj).toBeInstanceOf(Guia)
    expect(obj.emitir()).toBe("Guia de ISS emitida para: Empresa Beta Ltda")
})

test("Deve criar ipi", () => {
    const obj = Factory.criar("ipi", "Empresa Gama Ltda")

    expect(obj).toBeInstanceOf(Guia)
    expect(obj.emitir()).toBe("Guia de IPI emitida para: Empresa Gama Ltda")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("icms", "Empresa Alfa Ltda").emitir(), Factory.criar("iss", "Empresa Alfa Ltda").emitir(), Factory.criar("ipi", "Empresa Alfa Ltda").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("icms", "Empresa Alfa Ltda").constructor.name).toBe("Icms")
    expect(Factory.criar("iss", "Empresa Alfa Ltda").constructor.name).toBe("Iss")
    expect(Factory.criar("ipi", "Empresa Alfa Ltda").constructor.name).toBe("Ipi")
})

test("Todos os tipos criados devem ser Guia", () => {
    for (const tipo of ["icms", "iss", "ipi"]) {
        expect(Factory.criar(tipo, "Empresa Alfa Ltda")).toBeInstanceOf(Guia)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("iptu-fora-do-sistema", "Empresa Alfa Ltda")
    }).toThrow("Tipo de guia inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("icms", "Empresa Beta Ltda")

    expect(obj.contribuinte).toBe("Empresa Beta Ltda")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("iss", "Empresa Alfa Ltda")
    const dois = Factory.criar("iss", "Empresa Gama Ltda")

    expect(um.emitir()).toBe("Guia de ISS emitida para: Empresa Alfa Ltda")
    expect(dois.emitir()).toBe("Guia de ISS emitida para: Empresa Gama Ltda")
})
