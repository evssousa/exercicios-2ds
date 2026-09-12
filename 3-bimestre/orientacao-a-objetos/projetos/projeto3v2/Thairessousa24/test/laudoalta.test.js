const LaudoAlta = require("../LaudoAlta")
const Factory = require("../Factory")

test("Deve criar altaMelhorada", () => {
    const obj = Factory.criar("altaMelhorada", "Thaires Sousa")

    expect(obj).toBeInstanceOf(LaudoAlta)
    expect(obj.emitir()).toBe("Laudo de alta melhorada emitido para: Thaires Sousa")
})

test("Deve criar altaAPedido", () => {
    const obj = Factory.criar("altaAPedido", "Alan Ferreira")

    expect(obj).toBeInstanceOf(LaudoAlta)
    expect(obj.emitir()).toBe("Laudo de alta a pedido emitido para: Alan Ferreira")
})

test("Deve criar altaAdministrativa", () => {
    const obj = Factory.criar("altaAdministrativa", "Bianca Rocha")

    expect(obj).toBeInstanceOf(LaudoAlta)
    expect(obj.emitir()).toBe("Laudo de alta administrativa emitido para: Bianca Rocha")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("altaMelhorada", "Thaires Sousa").emitir(), Factory.criar("altaAPedido", "Thaires Sousa").emitir(), Factory.criar("altaAdministrativa", "Thaires Sousa").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("altaMelhorada", "Thaires Sousa").constructor.name).toBe("AltaMelhorada")
    expect(Factory.criar("altaAPedido", "Thaires Sousa").constructor.name).toBe("AltaAPedido")
    expect(Factory.criar("altaAdministrativa", "Thaires Sousa").constructor.name).toBe("AltaAdministrativa")
})

test("Todos os tipos criados devem ser LaudoAlta", () => {
    for (const tipo of ["altaMelhorada", "altaAPedido", "altaAdministrativa"]) {
        expect(Factory.criar(tipo, "Thaires Sousa")).toBeInstanceOf(LaudoAlta)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("obito-sem-registro", "Thaires Sousa")
    }).toThrow("Tipo de laudo inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("altaMelhorada", "Alan Ferreira")

    expect(obj.paciente).toBe("Alan Ferreira")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("altaAPedido", "Thaires Sousa")
    const dois = Factory.criar("altaAPedido", "Bianca Rocha")

    expect(um.emitir()).toBe("Laudo de alta a pedido emitido para: Thaires Sousa")
    expect(dois.emitir()).toBe("Laudo de alta a pedido emitido para: Bianca Rocha")
})
