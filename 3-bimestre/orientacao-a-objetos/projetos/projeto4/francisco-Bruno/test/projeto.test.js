const Apolice = require("../class/Apolice")
const Automovel = require("../class/Automovel")
const Residencial = require("../class/Residencial")
const Vida = require("../class/Vida")
const Cobertura = require("../class/Cobertura")
const Carteira = require("../class/Carteira")
const Sinistro = require("../class/Sinistro")
const ApoliceFactory = require("../class/ApoliceFactory")

test("Apolice deve armazenar nomeDoSegurado e vigenciaEmMeses e possuir comportamento genérico", () => {
    const base = new Apolice("Carteira Sul Base", 1500)

    expect(base.nomeDoSegurado).toBe("Carteira Sul Base")
    expect(base.vigenciaEmMeses).toBe(1500)
    expect(base.resumo()).toBe("Apólice registrada no sistema")
})

test("Automovel deve herdar de Apolice e sobrescrever resumo()", () => {
    const instancia = new Automovel("Renata Vieira", 12)

    expect(instancia).toBeInstanceOf(Apolice)
    expect(instancia.nomeDoSegurado).toBe("Renata Vieira")
    expect(instancia.vigenciaEmMeses).toBe(12)
    expect(instancia.resumo()).toBe("Apólice de automóvel emitida")
})

test("Residencial deve herdar de Apolice e sobrescrever resumo()", () => {
    const instancia = new Residencial("Roubo", 50000)

    expect(instancia).toBeInstanceOf(Apolice)
    expect(instancia.nomeDoSegurado).toBe("Roubo")
    expect(instancia.vigenciaEmMeses).toBe(50000)
    expect(instancia.resumo()).toBe("Apólice residencial emitida")
})

test("Vida deve herdar de Apolice e sobrescrever resumo()", () => {
    const instancia = new Vida("Incêndio", 80000)

    expect(instancia).toBeInstanceOf(Apolice)
    expect(instancia.nomeDoSegurado).toBe("Incêndio")
    expect(instancia.vigenciaEmMeses).toBe(80000)
    expect(instancia.resumo()).toBe("Apólice de vida emitida")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar resumo()", () => {
    const instancia0 = new Automovel("Renata Vieira", 12)
    const instancia1 = new Residencial("Roubo", 50000)
    const instancia2 = new Vida("Incêndio", 80000)
    expect(instancia0.resumo()).not.toBe(instancia1.resumo())
    expect(instancia1.resumo()).not.toBe(instancia2.resumo())
})

test("ApoliceFactory deve criar o tipo correto", () => {
    const instancia0 = ApoliceFactory.criar("automovel", "Renata Vieira", 12)
    const instancia1 = ApoliceFactory.criar("residencial", "Roubo", 50000)
    const instancia2 = ApoliceFactory.criar("vida", "Incêndio", 80000)
    expect(instancia0).toBeInstanceOf(Automovel)
    expect(instancia1).toBeInstanceOf(Residencial)
    expect(instancia2).toBeInstanceOf(Vida)
})

test("ApoliceFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        ApoliceFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de apólice inválido")
})

test("Cobertura deve armazenar nome e limite", () => {
    const item = new Cobertura("Roubo", 50000)

    expect(item.nome).toBe("Roubo")
    expect(item.limite).toBe(50000)
})

test("Carteira deve associar membros e categorias", () => {
    const item = new Cobertura("Roubo", 50000)
    const membro = new Automovel("Renata Vieira", 12)
    const grupo = new Carteira("Carteira Sul")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Carteira Sul")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Carteira deve permitir múltiplos membros e categorias", () => {
    const item1 = new Cobertura("Roubo", 50000)
    const item2 = new Cobertura("Incêndio", 80000)
    const membro1 = new Automovel("Renata Vieira", 12)
    const membro2 = new Automovel("Incêndio", 80000)
    const grupo = new Carteira("Carteira Sul")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Sinistro deve armazenar valor e a categoria vinculada", () => {
    const item = new Cobertura("Roubo", 50000)
    const registro = new Sinistro(3200, item)

    expect(registro.valor).toBe(3200)
    expect(registro.cobertura).toBe(item)
})

test("Automovel deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Cobertura("Roubo", 50000)
    const item2 = new Cobertura("Incêndio", 80000)
    const membro = new Automovel("Renata Vieira", 12)

    const registro1 = new Sinistro(3200, item1)
    const registro2 = new Sinistro(1500, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(3200)
    expect(membro.registros[0].cobertura).toBe(item1)
    expect(membro.registros[1].valor).toBe(1500)
    expect(membro.registros[1].cobertura).toBe(item2)
})

