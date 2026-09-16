const Atleta = require("../class/Atleta")
const Futebol = require("../class/Futebol")
const Natacao = require("../class/Natacao")
const Atletismo = require("../class/Atletismo")
const Categoria = require("../class/Categoria")
const EquipeClube = require("../class/EquipeClube")
const Resultado = require("../class/Resultado")
const AtletaFactory = require("../class/AtletaFactory")

test("Atleta deve armazenar nome e idade e possuir comportamento genérico", () => {
    const base = new Atleta("Equipe Principal Base", 92)

    expect(base.nome).toBe("Equipe Principal Base")
    expect(base.idade).toBe(92)
    expect(base.descricao()).toBe("Atleta cadastrado no clube")
})

test("Futebol deve herdar de Atleta e sobrescrever descricao()", () => {
    const instancia = new Futebol("Otávio Machado", 19)

    expect(instancia).toBeInstanceOf(Atleta)
    expect(instancia.nome).toBe("Otávio Machado")
    expect(instancia.idade).toBe(19)
    expect(instancia.descricao()).toBe("Atleta de futebol convocado")
})

test("Natacao deve herdar de Atleta e sobrescrever descricao()", () => {
    const instancia = new Natacao("Sub-20", 10)

    expect(instancia).toBeInstanceOf(Atleta)
    expect(instancia.nome).toBe("Sub-20")
    expect(instancia.idade).toBe(10)
    expect(instancia.descricao()).toBe("Atleta de natação convocado")
})

test("Atletismo deve herdar de Atleta e sobrescrever descricao()", () => {
    const instancia = new Atletismo("Profissional", 20)

    expect(instancia).toBeInstanceOf(Atleta)
    expect(instancia.nome).toBe("Profissional")
    expect(instancia.idade).toBe(20)
    expect(instancia.descricao()).toBe("Atleta de atletismo convocado")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar descricao()", () => {
    const instancia0 = new Futebol("Otávio Machado", 19)
    const instancia1 = new Natacao("Sub-20", 10)
    const instancia2 = new Atletismo("Profissional", 20)
    expect(instancia0.descricao()).not.toBe(instancia1.descricao())
    expect(instancia1.descricao()).not.toBe(instancia2.descricao())
})

test("AtletaFactory deve criar o tipo correto", () => {
    const instancia0 = AtletaFactory.criar("futebol", "Otávio Machado", 19)
    const instancia1 = AtletaFactory.criar("natacao", "Sub-20", 10)
    const instancia2 = AtletaFactory.criar("atletismo", "Profissional", 20)
    expect(instancia0).toBeInstanceOf(Futebol)
    expect(instancia1).toBeInstanceOf(Natacao)
    expect(instancia2).toBeInstanceOf(Atletismo)
})

test("AtletaFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        AtletaFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de atleta inválido")
})

test("Categoria deve armazenar nome e cargaHorariaDeTreino", () => {
    const item = new Categoria("Sub-20", 10)

    expect(item.nome).toBe("Sub-20")
    expect(item.cargaHorariaDeTreino).toBe(10)
})

test("EquipeClube deve associar membros e categorias", () => {
    const item = new Categoria("Sub-20", 10)
    const membro = new Futebol("Otávio Machado", 19)
    const grupo = new EquipeClube("Equipe Principal")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Equipe Principal")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("EquipeClube deve permitir múltiplos membros e categorias", () => {
    const item1 = new Categoria("Sub-20", 10)
    const item2 = new Categoria("Profissional", 20)
    const membro1 = new Futebol("Otávio Machado", 19)
    const membro2 = new Futebol("Profissional", 20)
    const grupo = new EquipeClube("Equipe Principal")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Resultado deve armazenar valor e a categoria vinculada", () => {
    const item = new Categoria("Sub-20", 10)
    const registro = new Resultado(87, item)

    expect(registro.valor).toBe(87)
    expect(registro.categoria).toBe(item)
})

test("Futebol deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Categoria("Sub-20", 10)
    const item2 = new Categoria("Profissional", 20)
    const membro = new Futebol("Otávio Machado", 19)

    const registro1 = new Resultado(87, item1)
    const registro2 = new Resultado(92, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(87)
    expect(membro.registros[0].categoria).toBe(item1)
    expect(membro.registros[1].valor).toBe(92)
    expect(membro.registros[1].categoria).toBe(item2)
})

