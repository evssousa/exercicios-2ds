const ContratoTrabalho = require("../ContratoTrabalho")
const Factory = require("../Factory")

test("Deve criar clt", () => {
    const obj = Factory.criar("clt", "Mário Maciel")

    expect(obj).toBeInstanceOf(ContratoTrabalho)
    expect(obj.emitir()).toBe("Contrato CLT emitido para: Mário Maciel")
})

test("Deve criar pj", () => {
    const obj = Factory.criar("pj", "Renata Castro")

    expect(obj).toBeInstanceOf(ContratoTrabalho)
    expect(obj.emitir()).toBe("Contrato PJ emitido para: Renata Castro")
})

test("Deve criar estagio", () => {
    const obj = Factory.criar("estagio", "Douglas Pinto")

    expect(obj).toBeInstanceOf(ContratoTrabalho)
    expect(obj.emitir()).toBe("Contrato de estágio emitido para: Douglas Pinto")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("clt", "Mário Maciel").emitir(), Factory.criar("pj", "Mário Maciel").emitir(), Factory.criar("estagio", "Mário Maciel").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("clt", "Mário Maciel").constructor.name).toBe("Clt")
    expect(Factory.criar("pj", "Mário Maciel").constructor.name).toBe("Pj")
    expect(Factory.criar("estagio", "Mário Maciel").constructor.name).toBe("Estagio")
})

test("Todos os tipos criados devem ser ContratoTrabalho", () => {
    for (const tipo of ["clt", "pj", "estagio"]) {
        expect(Factory.criar(tipo, "Mário Maciel")).toBeInstanceOf(ContratoTrabalho)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("temporario-sem-prazo", "Mário Maciel")
    }).toThrow("Tipo de contrato inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("clt", "Renata Castro")

    expect(obj.funcionario).toBe("Renata Castro")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("pj", "Mário Maciel")
    const dois = Factory.criar("pj", "Douglas Pinto")

    expect(um.emitir()).toBe("Contrato PJ emitido para: Mário Maciel")
    expect(dois.emitir()).toBe("Contrato PJ emitido para: Douglas Pinto")
})
