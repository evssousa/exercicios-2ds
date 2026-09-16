const Colaborador = require("../class/Colaborador")
const Estagiario = require("../class/Estagiario")
const Efetivo = require("../class/Efetivo")
const Terceirizado = require("../class/Terceirizado")
const ColaboradorFactory = require("../class/ColaboradorFactory")

test("Colaborador deve armazenar nome e idade e possuir comportamento genérico", () => {
    const base = new Colaborador("Departamento de TI Base", 2800)

    expect(base.nome).toBe("Departamento de TI Base")
    expect(base.idade).toBe(2800)
    expect(base.resumo()).toBe("Colaborador cadastrado no sistema")
})

test("Estagiario deve herdar de Colaborador e sobrescrever resumo()", () => {
    const instancia = new Estagiario("Leonardo Cunha", 29)

    expect(instancia).toBeInstanceOf(Colaborador)
    expect(instancia.nome).toBe("Leonardo Cunha")
    expect(instancia.idade).toBe(29)
    expect(instancia.resumo()).toBe("Colaborador estagiário registrado")
})

test("Efetivo deve herdar de Colaborador e sobrescrever resumo()", () => {
    const instancia = new Efetivo("Vale-refeição", 600)

    expect(instancia).toBeInstanceOf(Colaborador)
    expect(instancia.nome).toBe("Vale-refeição")
    expect(instancia.idade).toBe(600)
    expect(instancia.resumo()).toBe("Colaborador efetivo registrado")
})

test("Terceirizado deve herdar de Colaborador e sobrescrever resumo()", () => {
    const instancia = new Terceirizado("Plano de saúde", 350)

    expect(instancia).toBeInstanceOf(Colaborador)
    expect(instancia.nome).toBe("Plano de saúde")
    expect(instancia.idade).toBe(350)
    expect(instancia.resumo()).toBe("Colaborador terceirizado registrado")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar resumo()", () => {
    const instancia0 = new Estagiario("Leonardo Cunha", 29)
    const instancia1 = new Efetivo("Vale-refeição", 600)
    const instancia2 = new Terceirizado("Plano de saúde", 350)
    expect(instancia0.resumo()).not.toBe(instancia1.resumo())
    expect(instancia1.resumo()).not.toBe(instancia2.resumo())
})

test("ColaboradorFactory deve criar o tipo correto", () => {
    const instancia0 = ColaboradorFactory.criar("estagiario", "Leonardo Cunha", 29)
    const instancia1 = ColaboradorFactory.criar("efetivo", "Vale-refeição", 600)
    const instancia2 = ColaboradorFactory.criar("terceirizado", "Plano de saúde", 350)
    expect(instancia0).toBeInstanceOf(Estagiario)
    expect(instancia1).toBeInstanceOf(Efetivo)
    expect(instancia2).toBeInstanceOf(Terceirizado)
})

test("ColaboradorFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        ColaboradorFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de colaborador inválido")
})
