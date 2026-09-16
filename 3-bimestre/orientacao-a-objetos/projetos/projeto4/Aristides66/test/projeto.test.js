const Pagamento = require("../class/Pagamento")
const Pix = require("../class/Pix")
const Cartao = require("../class/Cartao")
const Boleto = require("../class/Boleto")
const Loja = require("../class/Loja")
const Carteira = require("../class/Carteira")
const Transacao = require("../class/Transacao")
const PagamentoFactory = require("../class/PagamentoFactory")

test("Pagamento deve armazenar referencia e parcelas e possuir comportamento genérico", () => {
    const base = new Pagamento("Carteira principal Base", 90)

    expect(base.referencia).toBe("Carteira principal Base")
    expect(base.parcelas).toBe(90)
    expect(base.resumo()).toBe("Pagamento registrado no sistema")
})

test("Pix deve herdar de Pagamento e sobrescrever resumo()", () => {
    const instancia = new Pix("PED-1029", 3)

    expect(instancia).toBeInstanceOf(Pagamento)
    expect(instancia.referencia).toBe("PED-1029")
    expect(instancia.parcelas).toBe(3)
    expect(instancia.resumo()).toBe("Pagamento via Pix aprovado")
})

test("Cartao deve herdar de Pagamento e sobrescrever resumo()", () => {
    const instancia = new Cartao("Marketplace A", 2)

    expect(instancia).toBeInstanceOf(Pagamento)
    expect(instancia.referencia).toBe("Marketplace A")
    expect(instancia.parcelas).toBe(2)
    expect(instancia.resumo()).toBe("Pagamento via cartão aprovado")
})

test("Boleto deve herdar de Pagamento e sobrescrever resumo()", () => {
    const instancia = new Boleto("Marketplace B", 4)

    expect(instancia).toBeInstanceOf(Pagamento)
    expect(instancia.referencia).toBe("Marketplace B")
    expect(instancia.parcelas).toBe(4)
    expect(instancia.resumo()).toBe("Pagamento via boleto aprovado")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar resumo()", () => {
    const instancia0 = new Pix("PED-1029", 3)
    const instancia1 = new Cartao("Marketplace A", 2)
    const instancia2 = new Boleto("Marketplace B", 4)
    expect(instancia0.resumo()).not.toBe(instancia1.resumo())
    expect(instancia1.resumo()).not.toBe(instancia2.resumo())
})

test("PagamentoFactory deve criar o tipo correto", () => {
    const instancia0 = PagamentoFactory.criar("pix", "PED-1029", 3)
    const instancia1 = PagamentoFactory.criar("cartao", "Marketplace A", 2)
    const instancia2 = PagamentoFactory.criar("boleto", "Marketplace B", 4)
    expect(instancia0).toBeInstanceOf(Pix)
    expect(instancia1).toBeInstanceOf(Cartao)
    expect(instancia2).toBeInstanceOf(Boleto)
})

test("PagamentoFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        PagamentoFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de pagamento inválido")
})

test("Loja deve armazenar nome e taxa", () => {
    const item = new Loja("Marketplace A", 2)

    expect(item.nome).toBe("Marketplace A")
    expect(item.taxa).toBe(2)
})

test("Carteira deve associar membros e categorias", () => {
    const item = new Loja("Marketplace A", 2)
    const membro = new Pix("PED-1029", 3)
    const grupo = new Carteira("Carteira principal")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Carteira principal")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Carteira deve permitir múltiplos membros e categorias", () => {
    const item1 = new Loja("Marketplace A", 2)
    const item2 = new Loja("Marketplace B", 4)
    const membro1 = new Pix("PED-1029", 3)
    const membro2 = new Pix("Marketplace B", 4)
    const grupo = new Carteira("Carteira principal")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Transacao deve armazenar valor e a categoria vinculada", () => {
    const item = new Loja("Marketplace A", 2)
    const registro = new Transacao(150, item)

    expect(registro.valor).toBe(150)
    expect(registro.loja).toBe(item)
})

test("Pix deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Loja("Marketplace A", 2)
    const item2 = new Loja("Marketplace B", 4)
    const membro = new Pix("PED-1029", 3)

    const registro1 = new Transacao(150, item1)
    const registro2 = new Transacao(89.9, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(150)
    expect(membro.registros[0].loja).toBe(item1)
    expect(membro.registros[1].valor).toBe(89.9)
    expect(membro.registros[1].loja).toBe(item2)
})

