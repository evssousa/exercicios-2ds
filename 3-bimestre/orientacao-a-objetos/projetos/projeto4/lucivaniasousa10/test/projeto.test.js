const Ingresso = require("../class/Ingresso")
const VIP = require("../class/VIP")
const Pista = require("../class/Pista")
const Camarote = require("../class/Camarote")
const Setor = require("../class/Setor")
const Evento = require("../class/Evento")
const Venda = require("../class/Venda")
const IngressoFactory = require("../class/IngressoFactory")

test("Ingresso deve armazenar nomeDoPortador e codigoDoIngresso e possuir comportamento genérico", () => {
    const base = new Ingresso("Festival de Verão Base", 120)

    expect(base.nomeDoPortador).toBe("Festival de Verão Base")
    expect(base.codigoDoIngresso).toBe(120)
    expect(base.descricao()).toBe("Ingresso emitido pelo sistema")
})

test("VIP deve herdar de Ingresso e sobrescrever descricao()", () => {
    const instancia = new VIP("Aline Monteiro", 5521)

    expect(instancia).toBeInstanceOf(Ingresso)
    expect(instancia.nomeDoPortador).toBe("Aline Monteiro")
    expect(instancia.codigoDoIngresso).toBe(5521)
    expect(instancia.descricao()).toBe("Ingresso VIP validado na entrada")
})

test("Pista deve herdar de Ingresso e sobrescrever descricao()", () => {
    const instancia = new Pista("Setor A", 200)

    expect(instancia).toBeInstanceOf(Ingresso)
    expect(instancia.nomeDoPortador).toBe("Setor A")
    expect(instancia.codigoDoIngresso).toBe(200)
    expect(instancia.descricao()).toBe("Ingresso de pista validado na entrada")
})

test("Camarote deve herdar de Ingresso e sobrescrever descricao()", () => {
    const instancia = new Camarote("Setor B", 150)

    expect(instancia).toBeInstanceOf(Ingresso)
    expect(instancia.nomeDoPortador).toBe("Setor B")
    expect(instancia.codigoDoIngresso).toBe(150)
    expect(instancia.descricao()).toBe("Ingresso de camarote validado na entrada")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar descricao()", () => {
    const instancia0 = new VIP("Aline Monteiro", 5521)
    const instancia1 = new Pista("Setor A", 200)
    const instancia2 = new Camarote("Setor B", 150)
    expect(instancia0.descricao()).not.toBe(instancia1.descricao())
    expect(instancia1.descricao()).not.toBe(instancia2.descricao())
})

test("IngressoFactory deve criar o tipo correto", () => {
    const instancia0 = IngressoFactory.criar("vip", "Aline Monteiro", 5521)
    const instancia1 = IngressoFactory.criar("pista", "Setor A", 200)
    const instancia2 = IngressoFactory.criar("camarote", "Setor B", 150)
    expect(instancia0).toBeInstanceOf(VIP)
    expect(instancia1).toBeInstanceOf(Pista)
    expect(instancia2).toBeInstanceOf(Camarote)
})

test("IngressoFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        IngressoFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de ingresso inválido")
})

test("Setor deve armazenar nome e capacidade", () => {
    const item = new Setor("Setor A", 200)

    expect(item.nome).toBe("Setor A")
    expect(item.capacidade).toBe(200)
})

test("Evento deve associar membros e categorias", () => {
    const item = new Setor("Setor A", 200)
    const membro = new VIP("Aline Monteiro", 5521)
    const grupo = new Evento("Festival de Verão")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Festival de Verão")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Evento deve permitir múltiplos membros e categorias", () => {
    const item1 = new Setor("Setor A", 200)
    const item2 = new Setor("Setor B", 150)
    const membro1 = new VIP("Aline Monteiro", 5521)
    const membro2 = new VIP("Setor B", 150)
    const grupo = new Evento("Festival de Verão")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Venda deve armazenar valor e a categoria vinculada", () => {
    const item = new Setor("Setor A", 200)
    const registro = new Venda(250, item)

    expect(registro.valor).toBe(250)
    expect(registro.setor).toBe(item)
})

test("VIP deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Setor("Setor A", 200)
    const item2 = new Setor("Setor B", 150)
    const membro = new VIP("Aline Monteiro", 5521)

    const registro1 = new Venda(250, item1)
    const registro2 = new Venda(120, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(250)
    expect(membro.registros[0].setor).toBe(item1)
    expect(membro.registros[1].valor).toBe(120)
    expect(membro.registros[1].setor).toBe(item2)
})

