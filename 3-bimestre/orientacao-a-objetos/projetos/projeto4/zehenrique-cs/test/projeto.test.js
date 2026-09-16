const ChamadoCondominio = require("../class/ChamadoCondominio")
const ManutencaoPredial = require("../class/ManutencaoPredial")
const Seguranca = require("../class/Seguranca")
const Limpeza = require("../class/Limpeza")
const Ruido = require("../class/Ruido")
const Fornecedor = require("../class/Fornecedor")
const Bloco = require("../class/Bloco")
const ServicoExecutado = require("../class/ServicoExecutado")
const ChamadoCondominioFactory = require("../class/ChamadoCondominioFactory")

test("ChamadoCondominio deve armazenar nomeDoMorador e numeroDaUnidade e possuir comportamento genérico", () => {
    const base = new ChamadoCondominio("Bloco B Base", 150)

    expect(base.nomeDoMorador).toBe("Bloco B Base")
    expect(base.numeroDaUnidade).toBe(150)
    expect(base.resumo()).toBe("Chamado registrado no sistema")
})

test("ManutencaoPredial deve herdar de ChamadoCondominio e sobrescrever resumo()", () => {
    const instancia = new ManutencaoPredial("Priscila Santana", 502)

    expect(instancia).toBeInstanceOf(ChamadoCondominio)
    expect(instancia.nomeDoMorador).toBe("Priscila Santana")
    expect(instancia.numeroDaUnidade).toBe(502)
    expect(instancia.resumo()).toBe("Chamado de manutenção predial aberto")
})

test("Seguranca deve herdar de ChamadoCondominio e sobrescrever resumo()", () => {
    const instancia = new Seguranca("Elétrica Rápida", 1800)

    expect(instancia).toBeInstanceOf(ChamadoCondominio)
    expect(instancia.nomeDoMorador).toBe("Elétrica Rápida")
    expect(instancia.numeroDaUnidade).toBe(1800)
    expect(instancia.resumo()).toBe("Chamado de segurança aberto")
})

test("Limpeza deve herdar de ChamadoCondominio e sobrescrever resumo()", () => {
    const instancia = new Limpeza("Jardins & Cia", 900)

    expect(instancia).toBeInstanceOf(ChamadoCondominio)
    expect(instancia.nomeDoMorador).toBe("Jardins & Cia")
    expect(instancia.numeroDaUnidade).toBe(900)
    expect(instancia.resumo()).toBe("Chamado de limpeza aberto")
})

test("Ruido deve herdar de ChamadoCondominio e sobrescrever resumo()", () => {
    const instancia = new Ruido("Bloco B", 220)

    expect(instancia).toBeInstanceOf(ChamadoCondominio)
    expect(instancia.nomeDoMorador).toBe("Bloco B")
    expect(instancia.numeroDaUnidade).toBe(220)
    expect(instancia.resumo()).toBe("Chamado de ruído aberto")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar resumo()", () => {
    const instancia0 = new ManutencaoPredial("Priscila Santana", 502)
    const instancia1 = new Seguranca("Elétrica Rápida", 1800)
    const instancia2 = new Limpeza("Jardins & Cia", 900)
    const instancia3 = new Ruido("Bloco B", 220)
    expect(instancia0.resumo()).not.toBe(instancia1.resumo())
    expect(instancia1.resumo()).not.toBe(instancia2.resumo())
    expect(instancia2.resumo()).not.toBe(instancia3.resumo())
})

test("ChamadoCondominioFactory deve criar o tipo correto", () => {
    const instancia0 = ChamadoCondominioFactory.criar("manutencao", "Priscila Santana", 502)
    const instancia1 = ChamadoCondominioFactory.criar("seguranca", "Elétrica Rápida", 1800)
    const instancia2 = ChamadoCondominioFactory.criar("limpeza", "Jardins & Cia", 900)
    const instancia3 = ChamadoCondominioFactory.criar("ruido", "Bloco B", 220)
    expect(instancia0).toBeInstanceOf(ManutencaoPredial)
    expect(instancia1).toBeInstanceOf(Seguranca)
    expect(instancia2).toBeInstanceOf(Limpeza)
    expect(instancia3).toBeInstanceOf(Ruido)
})

test("ChamadoCondominioFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        ChamadoCondominioFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de chamado inválido")
})

test("Fornecedor deve armazenar nome e valorDoContrato", () => {
    const item = new Fornecedor("Elétrica Rápida", 1800)

    expect(item.nome).toBe("Elétrica Rápida")
    expect(item.valorDoContrato).toBe(1800)
})

test("Bloco deve associar membros e categorias", () => {
    const item = new Fornecedor("Elétrica Rápida", 1800)
    const membro = new ManutencaoPredial("Priscila Santana", 502)
    const grupo = new Bloco("Bloco B")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Bloco B")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Bloco deve permitir múltiplos membros e categorias", () => {
    const item1 = new Fornecedor("Elétrica Rápida", 1800)
    const item2 = new Fornecedor("Jardins & Cia", 900)
    const membro1 = new ManutencaoPredial("Priscila Santana", 502)
    const membro2 = new ManutencaoPredial("Jardins & Cia", 900)
    const grupo = new Bloco("Bloco B")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("ServicoExecutado deve armazenar valor e a categoria vinculada", () => {
    const item = new Fornecedor("Elétrica Rápida", 1800)
    const registro = new ServicoExecutado(220, item)

    expect(registro.valor).toBe(220)
    expect(registro.fornecedor).toBe(item)
})

test("ManutencaoPredial deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Fornecedor("Elétrica Rápida", 1800)
    const item2 = new Fornecedor("Jardins & Cia", 900)
    const membro = new ManutencaoPredial("Priscila Santana", 502)

    const registro1 = new ServicoExecutado(220, item1)
    const registro2 = new ServicoExecutado(150, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(220)
    expect(membro.registros[0].fornecedor).toBe(item1)
    expect(membro.registros[1].valor).toBe(150)
    expect(membro.registros[1].fornecedor).toBe(item2)
})

test("Ruido deve herdar de ChamadoCondominio e sobrescrever resumo()", () => {
    const instancia = new Ruido("Bloco B", 220)

    expect(instancia).toBeInstanceOf(ChamadoCondominio)
    expect(instancia.resumo()).toBe("Chamado de ruído aberto")
})

test("ChamadoCondominioFactory deve criar um(a) Ruido", () => {
    const instancia = ChamadoCondominioFactory.criar("ruido", "Bloco B", 220)

    expect(instancia).toBeInstanceOf(Ruido)
})

test("ManutencaoPredial não deve aceitar um registro com valor negativo", () => {
    const item = new Fornecedor("Elétrica Rápida", 1800)
    const membro = new ManutencaoPredial("Priscila Santana", 502)
    const registroInvalido = new ServicoExecutado(-10, item)

    expect(() => {
        membro.adicionarRegistro(registroInvalido)
    }).toThrow("Valor inválido")
})

