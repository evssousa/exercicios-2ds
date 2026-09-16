const Exposicao = require("../class/Exposicao")
const Arte = require("../class/Arte")
const Historia = require("../class/Historia")
const Ciencia = require("../class/Ciencia")
const Sala = require("../class/Sala")
const Roteiro = require("../class/Roteiro")
const Visita = require("../class/Visita")
const ExposicaoFactory = require("../class/ExposicaoFactory")

test("Exposicao deve armazenar titulo e anoDeInauguracao e possuir comportamento genérico", () => {
    const base = new Exposicao("Roteiro Principal Base", 30)

    expect(base.titulo).toBe("Roteiro Principal Base")
    expect(base.anoDeInauguracao).toBe(30)
    expect(base.descricao()).toBe("Exposição cadastrada no sistema")
})

test("Arte deve herdar de Exposicao e sobrescrever descricao()", () => {
    const instancia = new Arte("Mundo Antigo", 2019)

    expect(instancia).toBeInstanceOf(Exposicao)
    expect(instancia.titulo).toBe("Mundo Antigo")
    expect(instancia.anoDeInauguracao).toBe(2019)
    expect(instancia.descricao()).toBe("Exposição de arte aberta ao público")
})

test("Historia deve herdar de Exposicao e sobrescrever descricao()", () => {
    const instancia = new Historia("Sala Norte", 80)

    expect(instancia).toBeInstanceOf(Exposicao)
    expect(instancia.titulo).toBe("Sala Norte")
    expect(instancia.anoDeInauguracao).toBe(80)
    expect(instancia.descricao()).toBe("Exposição de história aberta ao público")
})

test("Ciencia deve herdar de Exposicao e sobrescrever descricao()", () => {
    const instancia = new Ciencia("Sala Sul", 60)

    expect(instancia).toBeInstanceOf(Exposicao)
    expect(instancia.titulo).toBe("Sala Sul")
    expect(instancia.anoDeInauguracao).toBe(60)
    expect(instancia.descricao()).toBe("Exposição de ciência aberta ao público")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar descricao()", () => {
    const instancia0 = new Arte("Mundo Antigo", 2019)
    const instancia1 = new Historia("Sala Norte", 80)
    const instancia2 = new Ciencia("Sala Sul", 60)
    expect(instancia0.descricao()).not.toBe(instancia1.descricao())
    expect(instancia1.descricao()).not.toBe(instancia2.descricao())
})

test("ExposicaoFactory deve criar o tipo correto", () => {
    const instancia0 = ExposicaoFactory.criar("arte", "Mundo Antigo", 2019)
    const instancia1 = ExposicaoFactory.criar("historia", "Sala Norte", 80)
    const instancia2 = ExposicaoFactory.criar("ciencia", "Sala Sul", 60)
    expect(instancia0).toBeInstanceOf(Arte)
    expect(instancia1).toBeInstanceOf(Historia)
    expect(instancia2).toBeInstanceOf(Ciencia)
})

test("ExposicaoFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        ExposicaoFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de exposição inválido")
})

test("Sala deve armazenar nome e capacidade", () => {
    const item = new Sala("Sala Norte", 80)

    expect(item.nome).toBe("Sala Norte")
    expect(item.capacidade).toBe(80)
})

test("Roteiro deve associar membros e categorias", () => {
    const item = new Sala("Sala Norte", 80)
    const membro = new Arte("Mundo Antigo", 2019)
    const grupo = new Roteiro("Roteiro Principal")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Roteiro Principal")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Roteiro deve permitir múltiplos membros e categorias", () => {
    const item1 = new Sala("Sala Norte", 80)
    const item2 = new Sala("Sala Sul", 60)
    const membro1 = new Arte("Mundo Antigo", 2019)
    const membro2 = new Arte("Sala Sul", 60)
    const grupo = new Roteiro("Roteiro Principal")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Visita deve armazenar valor e a categoria vinculada", () => {
    const item = new Sala("Sala Norte", 80)
    const registro = new Visita(45, item)

    expect(registro.valor).toBe(45)
    expect(registro.sala).toBe(item)
})

test("Arte deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Sala("Sala Norte", 80)
    const item2 = new Sala("Sala Sul", 60)
    const membro = new Arte("Mundo Antigo", 2019)

    const registro1 = new Visita(45, item1)
    const registro2 = new Visita(30, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(45)
    expect(membro.registros[0].sala).toBe(item1)
    expect(membro.registros[1].valor).toBe(30)
    expect(membro.registros[1].sala).toBe(item2)
})

