const Quarto = require("../class/Quarto")
const Standard = require("../class/Standard")
const Luxo = require("../class/Luxo")
const Suite = require("../class/Suite")
const Presidencial = require("../class/Presidencial")
const Servico = require("../class/Servico")
const Andar = require("../class/Andar")
const Consumo = require("../class/Consumo")
const QuartoFactory = require("../class/QuartoFactory")

test("Quarto deve armazenar identificador e capacidadeDeHospedes e possuir comportamento genérico", () => {
    const base = new Quarto("Andar 3 Base", 150)

    expect(base.identificador).toBe("Andar 3 Base")
    expect(base.capacidadeDeHospedes).toBe(150)
    expect(base.descricao()).toBe("Quarto cadastrado no sistema")
})

test("Standard deve herdar de Quarto e sobrescrever descricao()", () => {
    const instancia = new Standard("301", 2)

    expect(instancia).toBeInstanceOf(Quarto)
    expect(instancia.identificador).toBe("301")
    expect(instancia.capacidadeDeHospedes).toBe(2)
    expect(instancia.descricao()).toBe("Quarto Standard disponível")
})

test("Luxo deve herdar de Quarto e sobrescrever descricao()", () => {
    const instancia = new Luxo("Frigobar", 35)

    expect(instancia).toBeInstanceOf(Quarto)
    expect(instancia.identificador).toBe("Frigobar")
    expect(instancia.capacidadeDeHospedes).toBe(35)
    expect(instancia.descricao()).toBe("Quarto Luxo disponível")
})

test("Suite deve herdar de Quarto e sobrescrever descricao()", () => {
    const instancia = new Suite("Spa", 120)

    expect(instancia).toBeInstanceOf(Quarto)
    expect(instancia.identificador).toBe("Spa")
    expect(instancia.capacidadeDeHospedes).toBe(120)
    expect(instancia.descricao()).toBe("Suíte disponível")
})

test("Presidencial deve herdar de Quarto e sobrescrever descricao()", () => {
    const instancia = new Presidencial("Andar 3", 70)

    expect(instancia).toBeInstanceOf(Quarto)
    expect(instancia.identificador).toBe("Andar 3")
    expect(instancia.capacidadeDeHospedes).toBe(70)
    expect(instancia.descricao()).toBe("Quarto Presidencial disponível")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar descricao()", () => {
    const instancia0 = new Standard("301", 2)
    const instancia1 = new Luxo("Frigobar", 35)
    const instancia2 = new Suite("Spa", 120)
    const instancia3 = new Presidencial("Andar 3", 70)
    expect(instancia0.descricao()).not.toBe(instancia1.descricao())
    expect(instancia1.descricao()).not.toBe(instancia2.descricao())
    expect(instancia2.descricao()).not.toBe(instancia3.descricao())
})

test("QuartoFactory deve criar o tipo correto", () => {
    const instancia0 = QuartoFactory.criar("standard", "301", 2)
    const instancia1 = QuartoFactory.criar("luxo", "Frigobar", 35)
    const instancia2 = QuartoFactory.criar("suite", "Spa", 120)
    const instancia3 = QuartoFactory.criar("presidencial", "Andar 3", 70)
    expect(instancia0).toBeInstanceOf(Standard)
    expect(instancia1).toBeInstanceOf(Luxo)
    expect(instancia2).toBeInstanceOf(Suite)
    expect(instancia3).toBeInstanceOf(Presidencial)
})

test("QuartoFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        QuartoFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de quarto inválido")
})

test("Servico deve armazenar nome e preco", () => {
    const item = new Servico("Frigobar", 35)

    expect(item.nome).toBe("Frigobar")
    expect(item.preco).toBe(35)
})

test("Andar deve associar membros e categorias", () => {
    const item = new Servico("Frigobar", 35)
    const membro = new Standard("301", 2)
    const grupo = new Andar("Andar 3")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Andar 3")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Andar deve permitir múltiplos membros e categorias", () => {
    const item1 = new Servico("Frigobar", 35)
    const item2 = new Servico("Spa", 120)
    const membro1 = new Standard("301", 2)
    const membro2 = new Standard("Spa", 120)
    const grupo = new Andar("Andar 3")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Consumo deve armazenar valor e a categoria vinculada", () => {
    const item = new Servico("Frigobar", 35)
    const registro = new Consumo(70, item)

    expect(registro.valor).toBe(70)
    expect(registro.servico).toBe(item)
})

test("Standard deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Servico("Frigobar", 35)
    const item2 = new Servico("Spa", 120)
    const membro = new Standard("301", 2)

    const registro1 = new Consumo(70, item1)
    const registro2 = new Consumo(150, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(70)
    expect(membro.registros[0].servico).toBe(item1)
    expect(membro.registros[1].valor).toBe(150)
    expect(membro.registros[1].servico).toBe(item2)
})

test("Presidencial deve herdar de Quarto e sobrescrever descricao()", () => {
    const instancia = new Presidencial("Andar 3", 70)

    expect(instancia).toBeInstanceOf(Quarto)
    expect(instancia.descricao()).toBe("Quarto Presidencial disponível")
})

test("QuartoFactory deve criar um(a) Presidencial", () => {
    const instancia = QuartoFactory.criar("presidencial", "Andar 3", 70)

    expect(instancia).toBeInstanceOf(Presidencial)
})

test("Standard não deve aceitar um registro com valor negativo", () => {
    const item = new Servico("Frigobar", 35)
    const membro = new Standard("301", 2)
    const registroInvalido = new Consumo(-10, item)

    expect(() => {
        membro.adicionarRegistro(registroInvalido)
    }).toThrow("Valor inválido")
})

