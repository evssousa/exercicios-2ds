const Declaracao = require("../Declaracao")
const Factory = require("../Factory")

test("Deve criar matricula", () => {
    const obj = Factory.criar("matricula", "Mesa 12")

    expect(obj).toBeInstanceOf(Declaracao)
    expect(obj.emitir()).toBe("Declaração de matrícula emitida para: Mesa 12")
})

test("Deve criar frequencia", () => {
    const obj = Factory.criar("frequencia", "Mesa 5")

    expect(obj).toBeInstanceOf(Declaracao)
    expect(obj.emitir()).toBe("Declaração de frequência emitida para: Mesa 5")
})

test("Deve criar conclusao", () => {
    const obj = Factory.criar("conclusao", "Área VIP")

    expect(obj).toBeInstanceOf(Declaracao)
    expect(obj.emitir()).toBe("Declaração de conclusão emitida para: Área VIP")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("matricula", "Mesa 12").emitir(), Factory.criar("frequencia", "Mesa 12").emitir(), Factory.criar("conclusao", "Mesa 12").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("matricula", "Mesa 12").constructor.name).toBe("Matricula")
    expect(Factory.criar("frequencia", "Mesa 12").constructor.name).toBe("Frequencia")
    expect(Factory.criar("conclusao", "Mesa 12").constructor.name).toBe("Conclusao")
})

test("Todos os tipos criados devem ser Declaracao", () => {
    for (const tipo of ["matricula", "frequencia", "conclusao"]) {
        expect(Factory.criar(tipo, "Mesa 12")).toBeInstanceOf(Declaracao)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("transferencia", "Mesa 12")
    }).toThrow("Tipo de declaração inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("matricula", "Mesa 5")

    expect(obj.aluno).toBe("Mesa 5")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("frequencia", "Mesa 12")
    const dois = Factory.criar("frequencia", "Área VIP")

    expect(um.emitir()).toBe("Declaração de frequência emitida para: Mesa 12")
    expect(dois.emitir()).toBe("Declaração de frequência emitida para: Área VIP")
})
