const Pacote = require("../class/Pacote")
const Nacional = require("../class/Nacional")
const Internacional = require("../class/Internacional")
const Cruzeiro = require("../class/Cruzeiro")
const Destino = require("../class/Destino")
const RoteiroViagem = require("../class/RoteiroViagem")
const Reserva = require("../class/Reserva")
const PacoteFactory = require("../class/PacoteFactory")

test("Pacote deve armazenar nomeDoCliente e duracaoEmDias e possuir comportamento genérico", () => {
    const base = new Pacote("Roteiro Nordeste Base", 5400)

    expect(base.nomeDoCliente).toBe("Roteiro Nordeste Base")
    expect(base.duracaoEmDias).toBe(5400)
    expect(base.resumo()).toBe("Pacote registrado no sistema")
})

test("Nacional deve herdar de Pacote e sobrescrever resumo()", () => {
    const instancia = new Nacional("Gabriel Xavier", 7)

    expect(instancia).toBeInstanceOf(Pacote)
    expect(instancia.nomeDoCliente).toBe("Gabriel Xavier")
    expect(instancia.duracaoEmDias).toBe(7)
    expect(instancia.resumo()).toBe("Pacote nacional confirmado")
})

test("Internacional deve herdar de Pacote e sobrescrever resumo()", () => {
    const instancia = new Internacional("Fernando de Noronha", 545)

    expect(instancia).toBeInstanceOf(Pacote)
    expect(instancia.nomeDoCliente).toBe("Fernando de Noronha")
    expect(instancia.duracaoEmDias).toBe(545)
    expect(instancia.resumo()).toBe("Pacote internacional confirmado")
})

test("Cruzeiro deve herdar de Pacote e sobrescrever resumo()", () => {
    const instancia = new Cruzeiro("Bonito", 1050)

    expect(instancia).toBeInstanceOf(Pacote)
    expect(instancia.nomeDoCliente).toBe("Bonito")
    expect(instancia.duracaoEmDias).toBe(1050)
    expect(instancia.resumo()).toBe("Pacote de cruzeiro confirmado")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar resumo()", () => {
    const instancia0 = new Nacional("Gabriel Xavier", 7)
    const instancia1 = new Internacional("Fernando de Noronha", 545)
    const instancia2 = new Cruzeiro("Bonito", 1050)
    expect(instancia0.resumo()).not.toBe(instancia1.resumo())
    expect(instancia1.resumo()).not.toBe(instancia2.resumo())
})

test("PacoteFactory deve criar o tipo correto", () => {
    const instancia0 = PacoteFactory.criar("nacional", "Gabriel Xavier", 7)
    const instancia1 = PacoteFactory.criar("internacional", "Fernando de Noronha", 545)
    const instancia2 = PacoteFactory.criar("cruzeiro", "Bonito", 1050)
    expect(instancia0).toBeInstanceOf(Nacional)
    expect(instancia1).toBeInstanceOf(Internacional)
    expect(instancia2).toBeInstanceOf(Cruzeiro)
})

test("PacoteFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        PacoteFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de pacote inválido")
})

test("Destino deve armazenar nome e distanciaEmKm", () => {
    const item = new Destino("Fernando de Noronha", 545)

    expect(item.nome).toBe("Fernando de Noronha")
    expect(item.distanciaEmKm).toBe(545)
})

test("RoteiroViagem deve associar membros e categorias", () => {
    const item = new Destino("Fernando de Noronha", 545)
    const membro = new Nacional("Gabriel Xavier", 7)
    const grupo = new RoteiroViagem("Roteiro Nordeste")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Roteiro Nordeste")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("RoteiroViagem deve permitir múltiplos membros e categorias", () => {
    const item1 = new Destino("Fernando de Noronha", 545)
    const item2 = new Destino("Bonito", 1050)
    const membro1 = new Nacional("Gabriel Xavier", 7)
    const membro2 = new Nacional("Bonito", 1050)
    const grupo = new RoteiroViagem("Roteiro Nordeste")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Reserva deve armazenar valor e a categoria vinculada", () => {
    const item = new Destino("Fernando de Noronha", 545)
    const registro = new Reserva(3200, item)

    expect(registro.valor).toBe(3200)
    expect(registro.destino).toBe(item)
})

test("Nacional deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Destino("Fernando de Noronha", 545)
    const item2 = new Destino("Bonito", 1050)
    const membro = new Nacional("Gabriel Xavier", 7)

    const registro1 = new Reserva(3200, item1)
    const registro2 = new Reserva(5400, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(3200)
    expect(membro.registros[0].destino).toBe(item1)
    expect(membro.registros[1].valor).toBe(5400)
    expect(membro.registros[1].destino).toBe(item2)
})

