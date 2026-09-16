const Conta = require("../class/Conta")
const Corrente = require("../class/Corrente")
const Poupanca = require("../class/Poupanca")
const Empresarial = require("../class/Empresarial")
const Tarifa = require("../class/Tarifa")
const Agencia = require("../class/Agencia")
const Movimentacao = require("../class/Movimentacao")
const ContaFactory = require("../class/ContaFactory")

test("Conta deve armazenar nomeDoTitular e numeroDaConta e possuir comportamento genérico", () => {
    const base = new Conta("Agência Centro Base", 1200)

    expect(base.nomeDoTitular).toBe("Agência Centro Base")
    expect(base.numeroDaConta).toBe(1200)
    expect(base.resumo()).toBe("Conta aberta no sistema")
})

test("Corrente deve herdar de Conta e sobrescrever resumo()", () => {
    const instancia = new Corrente("Eduardo Farias", 10234)

    expect(instancia).toBeInstanceOf(Conta)
    expect(instancia.nomeDoTitular).toBe("Eduardo Farias")
    expect(instancia.numeroDaConta).toBe(10234)
    expect(instancia.resumo()).toBe("Conta corrente ativada")
})

test("Poupanca deve herdar de Conta e sobrescrever resumo()", () => {
    const instancia = new Poupanca("Manutenção", 25)

    expect(instancia).toBeInstanceOf(Conta)
    expect(instancia.nomeDoTitular).toBe("Manutenção")
    expect(instancia.numeroDaConta).toBe(25)
    expect(instancia.resumo()).toBe("Conta poupança ativada")
})

test("Empresarial deve herdar de Conta e sobrescrever resumo()", () => {
    const instancia = new Empresarial("TED", 10)

    expect(instancia).toBeInstanceOf(Conta)
    expect(instancia.nomeDoTitular).toBe("TED")
    expect(instancia.numeroDaConta).toBe(10)
    expect(instancia.resumo()).toBe("Conta empresarial ativada")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar resumo()", () => {
    const instancia0 = new Corrente("Eduardo Farias", 10234)
    const instancia1 = new Poupanca("Manutenção", 25)
    const instancia2 = new Empresarial("TED", 10)
    expect(instancia0.resumo()).not.toBe(instancia1.resumo())
    expect(instancia1.resumo()).not.toBe(instancia2.resumo())
})

test("ContaFactory deve criar o tipo correto", () => {
    const instancia0 = ContaFactory.criar("corrente", "Eduardo Farias", 10234)
    const instancia1 = ContaFactory.criar("poupanca", "Manutenção", 25)
    const instancia2 = ContaFactory.criar("empresarial", "TED", 10)
    expect(instancia0).toBeInstanceOf(Corrente)
    expect(instancia1).toBeInstanceOf(Poupanca)
    expect(instancia2).toBeInstanceOf(Empresarial)
})

test("ContaFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        ContaFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de conta inválido")
})

test("Tarifa deve armazenar nome e valor", () => {
    const item = new Tarifa("Manutenção", 25)

    expect(item.nome).toBe("Manutenção")
    expect(item.valor).toBe(25)
})

test("Agencia deve associar membros e categorias", () => {
    const item = new Tarifa("Manutenção", 25)
    const membro = new Corrente("Eduardo Farias", 10234)
    const grupo = new Agencia("Agência Centro")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Agência Centro")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Agencia deve permitir múltiplos membros e categorias", () => {
    const item1 = new Tarifa("Manutenção", 25)
    const item2 = new Tarifa("TED", 10)
    const membro1 = new Corrente("Eduardo Farias", 10234)
    const membro2 = new Corrente("TED", 10)
    const grupo = new Agencia("Agência Centro")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Movimentacao deve armazenar valor e a categoria vinculada", () => {
    const item = new Tarifa("Manutenção", 25)
    const registro = new Movimentacao(500, item)

    expect(registro.valor).toBe(500)
    expect(registro.tarifa).toBe(item)
})

test("Corrente deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Tarifa("Manutenção", 25)
    const item2 = new Tarifa("TED", 10)
    const membro = new Corrente("Eduardo Farias", 10234)

    const registro1 = new Movimentacao(500, item1)
    const registro2 = new Movimentacao(1200, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(500)
    expect(membro.registros[0].tarifa).toBe(item1)
    expect(membro.registros[1].valor).toBe(1200)
    expect(membro.registros[1].tarifa).toBe(item2)
})

