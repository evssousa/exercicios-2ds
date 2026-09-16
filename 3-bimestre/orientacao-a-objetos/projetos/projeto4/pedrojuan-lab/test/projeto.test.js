const Chamado = require("../class/Chamado")
const Bug = require("../class/Bug")
const Duvida = require("../class/Duvida")
const Feature = require("../class/Feature")
const Prioridade = require("../class/Prioridade")
const Fila = require("../class/Fila")
const Atualizacao = require("../class/Atualizacao")
const ChamadoFactory = require("../class/ChamadoFactory")

test("Chamado deve armazenar nomeDoSolicitante e codigoDoChamado e possuir comportamento genérico", () => {
    const base = new Chamado("Fila de suporte N2 Base", 5)

    expect(base.nomeDoSolicitante).toBe("Fila de suporte N2 Base")
    expect(base.codigoDoChamado).toBe(5)
    expect(base.resumo()).toBe("Chamado aberto no sistema")
})

test("Bug deve herdar de Chamado e sobrescrever resumo()", () => {
    const instancia = new Bug("Simone Ribeiro", 9931)

    expect(instancia).toBeInstanceOf(Chamado)
    expect(instancia.nomeDoSolicitante).toBe("Simone Ribeiro")
    expect(instancia.codigoDoChamado).toBe(9931)
    expect(instancia.resumo()).toBe("Chamado de bug em análise")
})

test("Duvida deve herdar de Chamado e sobrescrever resumo()", () => {
    const instancia = new Duvida("Alta", 4)

    expect(instancia).toBeInstanceOf(Chamado)
    expect(instancia.nomeDoSolicitante).toBe("Alta")
    expect(instancia.codigoDoChamado).toBe(4)
    expect(instancia.resumo()).toBe("Chamado de dúvida em análise")
})

test("Feature deve herdar de Chamado e sobrescrever resumo()", () => {
    const instancia = new Feature("Baixa", 48)

    expect(instancia).toBeInstanceOf(Chamado)
    expect(instancia.nomeDoSolicitante).toBe("Baixa")
    expect(instancia.codigoDoChamado).toBe(48)
    expect(instancia.resumo()).toBe("Chamado de nova funcionalidade em análise")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar resumo()", () => {
    const instancia0 = new Bug("Simone Ribeiro", 9931)
    const instancia1 = new Duvida("Alta", 4)
    const instancia2 = new Feature("Baixa", 48)
    expect(instancia0.resumo()).not.toBe(instancia1.resumo())
    expect(instancia1.resumo()).not.toBe(instancia2.resumo())
})

test("ChamadoFactory deve criar o tipo correto", () => {
    const instancia0 = ChamadoFactory.criar("bug", "Simone Ribeiro", 9931)
    const instancia1 = ChamadoFactory.criar("duvida", "Alta", 4)
    const instancia2 = ChamadoFactory.criar("feature", "Baixa", 48)
    expect(instancia0).toBeInstanceOf(Bug)
    expect(instancia1).toBeInstanceOf(Duvida)
    expect(instancia2).toBeInstanceOf(Feature)
})

test("ChamadoFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        ChamadoFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de chamado inválido")
})

test("Prioridade deve armazenar nome e prazoEmHoras", () => {
    const item = new Prioridade("Alta", 4)

    expect(item.nome).toBe("Alta")
    expect(item.prazoEmHoras).toBe(4)
})

test("Fila deve associar membros e categorias", () => {
    const item = new Prioridade("Alta", 4)
    const membro = new Bug("Simone Ribeiro", 9931)
    const grupo = new Fila("Fila de suporte N2")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Fila de suporte N2")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Fila deve permitir múltiplos membros e categorias", () => {
    const item1 = new Prioridade("Alta", 4)
    const item2 = new Prioridade("Baixa", 48)
    const membro1 = new Bug("Simone Ribeiro", 9931)
    const membro2 = new Bug("Baixa", 48)
    const grupo = new Fila("Fila de suporte N2")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Atualizacao deve armazenar valor e a categoria vinculada", () => {
    const item = new Prioridade("Alta", 4)
    const registro = new Atualizacao(2, item)

    expect(registro.valor).toBe(2)
    expect(registro.prioridade).toBe(item)
})

test("Bug deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Prioridade("Alta", 4)
    const item2 = new Prioridade("Baixa", 48)
    const membro = new Bug("Simone Ribeiro", 9931)

    const registro1 = new Atualizacao(2, item1)
    const registro2 = new Atualizacao(5, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(2)
    expect(membro.registros[0].prioridade).toBe(item1)
    expect(membro.registros[1].valor).toBe(5)
    expect(membro.registros[1].prioridade).toBe(item2)
})

