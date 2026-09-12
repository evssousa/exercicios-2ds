const Cracha = require("../Cracha")
const Factory = require("../Factory")

test("Deve criar funcionario", () => {
    const obj = Factory.criar("funcionario", "Camila Duarte")

    expect(obj).toBeInstanceOf(Cracha)
    expect(obj.emitir()).toBe("Crachá de funcionário emitido para: Camila Duarte")
})

test("Deve criar visitante", () => {
    const obj = Factory.criar("visitante", "Rafael Nogueira")

    expect(obj).toBeInstanceOf(Cracha)
    expect(obj.emitir()).toBe("Crachá de visitante emitido para: Rafael Nogueira")
})

test("Deve criar terceirizado", () => {
    const obj = Factory.criar("terceirizado", "Beatriz Lopes")

    expect(obj).toBeInstanceOf(Cracha)
    expect(obj.emitir()).toBe("Crachá de terceirizado emitido para: Beatriz Lopes")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("funcionario", "Camila Duarte").emitir(), Factory.criar("visitante", "Camila Duarte").emitir(), Factory.criar("terceirizado", "Camila Duarte").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("funcionario", "Camila Duarte").constructor.name).toBe("Funcionario")
    expect(Factory.criar("visitante", "Camila Duarte").constructor.name).toBe("Visitante")
    expect(Factory.criar("terceirizado", "Camila Duarte").constructor.name).toBe("Terceirizado")
})

test("Todos os tipos criados devem ser Cracha", () => {
    for (const tipo of ["funcionario", "visitante", "terceirizado"]) {
        expect(Factory.criar(tipo, "Camila Duarte")).toBeInstanceOf(Cracha)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("estagiario-sem-cadastro", "Camila Duarte")
    }).toThrow("Tipo de crachá inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("funcionario", "Rafael Nogueira")

    expect(obj.pessoa).toBe("Rafael Nogueira")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("visitante", "Camila Duarte")
    const dois = Factory.criar("visitante", "Beatriz Lopes")

    expect(um.emitir()).toBe("Crachá de visitante emitido para: Camila Duarte")
    expect(dois.emitir()).toBe("Crachá de visitante emitido para: Beatriz Lopes")
})
