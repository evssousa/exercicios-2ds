const OrdemServico = require("../class/OrdemServico")
const Revisao = require("../class/Revisao")
const Funilaria = require("../class/Funilaria")
const Eletrica = require("../class/Eletrica")
const PecaReposicao = require("../class/PecaReposicao")
const Bancada = require("../class/Bancada")
const Reparo = require("../class/Reparo")
const OrdemServicoFactory = require("../class/OrdemServicoFactory")

test("OrdemServico deve armazenar nomeDoCliente e codigoDaOrdem e possuir comportamento genérico", () => {
    const base = new OrdemServico("Bancada 2 Base", 5)

    expect(base.nomeDoCliente).toBe("Bancada 2 Base")
    expect(base.codigoDaOrdem).toBe(5)
    expect(base.resumo()).toBe("Ordem de serviço aberta no sistema")
})

test("Revisao deve herdar de OrdemServico e sobrescrever resumo()", () => {
    const instancia = new Revisao("Vinícius Batista", 4471)

    expect(instancia).toBeInstanceOf(OrdemServico)
    expect(instancia.nomeDoCliente).toBe("Vinícius Batista")
    expect(instancia.codigoDaOrdem).toBe(4471)
    expect(instancia.resumo()).toBe("Ordem de revisão em andamento")
})

test("Funilaria deve herdar de OrdemServico e sobrescrever resumo()", () => {
    const instancia = new Funilaria("Filtro de óleo", 45)

    expect(instancia).toBeInstanceOf(OrdemServico)
    expect(instancia.nomeDoCliente).toBe("Filtro de óleo")
    expect(instancia.codigoDaOrdem).toBe(45)
    expect(instancia.resumo()).toBe("Ordem de funilaria em andamento")
})

test("Eletrica deve herdar de OrdemServico e sobrescrever resumo()", () => {
    const instancia = new Eletrica("Pastilha de freio", 90)

    expect(instancia).toBeInstanceOf(OrdemServico)
    expect(instancia.nomeDoCliente).toBe("Pastilha de freio")
    expect(instancia.codigoDaOrdem).toBe(90)
    expect(instancia.resumo()).toBe("Ordem elétrica em andamento")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar resumo()", () => {
    const instancia0 = new Revisao("Vinícius Batista", 4471)
    const instancia1 = new Funilaria("Filtro de óleo", 45)
    const instancia2 = new Eletrica("Pastilha de freio", 90)
    expect(instancia0.resumo()).not.toBe(instancia1.resumo())
    expect(instancia1.resumo()).not.toBe(instancia2.resumo())
})

test("OrdemServicoFactory deve criar o tipo correto", () => {
    const instancia0 = OrdemServicoFactory.criar("revisao", "Vinícius Batista", 4471)
    const instancia1 = OrdemServicoFactory.criar("funilaria", "Filtro de óleo", 45)
    const instancia2 = OrdemServicoFactory.criar("eletrica", "Pastilha de freio", 90)
    expect(instancia0).toBeInstanceOf(Revisao)
    expect(instancia1).toBeInstanceOf(Funilaria)
    expect(instancia2).toBeInstanceOf(Eletrica)
})

test("OrdemServicoFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        OrdemServicoFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de ordem inválido")
})

test("PecaReposicao deve armazenar nome e custo", () => {
    const item = new PecaReposicao("Filtro de óleo", 45)

    expect(item.nome).toBe("Filtro de óleo")
    expect(item.custo).toBe(45)
})

test("Bancada deve associar membros e categorias", () => {
    const item = new PecaReposicao("Filtro de óleo", 45)
    const membro = new Revisao("Vinícius Batista", 4471)
    const grupo = new Bancada("Bancada 2")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Bancada 2")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Bancada deve permitir múltiplos membros e categorias", () => {
    const item1 = new PecaReposicao("Filtro de óleo", 45)
    const item2 = new PecaReposicao("Pastilha de freio", 90)
    const membro1 = new Revisao("Vinícius Batista", 4471)
    const membro2 = new Revisao("Pastilha de freio", 90)
    const grupo = new Bancada("Bancada 2")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Reparo deve armazenar valor e a categoria vinculada", () => {
    const item = new PecaReposicao("Filtro de óleo", 45)
    const registro = new Reparo(3, item)

    expect(registro.valor).toBe(3)
    expect(registro.pecaReposicao).toBe(item)
})

test("Revisao deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new PecaReposicao("Filtro de óleo", 45)
    const item2 = new PecaReposicao("Pastilha de freio", 90)
    const membro = new Revisao("Vinícius Batista", 4471)

    const registro1 = new Reparo(3, item1)
    const registro2 = new Reparo(5, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(3)
    expect(membro.registros[0].pecaReposicao).toBe(item1)
    expect(membro.registros[1].valor).toBe(5)
    expect(membro.registros[1].pecaReposicao).toBe(item2)
})

