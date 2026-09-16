const Cultivo = require("../class/Cultivo")
const Graos = require("../class/Graos")
const Frutas = require("../class/Frutas")
const Hortalicas = require("../class/Hortalicas")
const Talhao = require("../class/Talhao")
const Propriedade = require("../class/Propriedade")
const Colheita = require("../class/Colheita")
const CultivoFactory = require("../class/CultivoFactory")

test("Cultivo deve armazenar nome e areaEmHectares e possuir comportamento genérico", () => {
    const base = new Cultivo("Propriedade Santa Fé Base", 210)

    expect(base.nome).toBe("Propriedade Santa Fé Base")
    expect(base.areaEmHectares).toBe(210)
    expect(base.descricao()).toBe("Cultivo cadastrado no sistema")
})

test("Graos deve herdar de Cultivo e sobrescrever descricao()", () => {
    const instancia = new Graos("Soja Talhão 4", 12)

    expect(instancia).toBeInstanceOf(Cultivo)
    expect(instancia.nome).toBe("Soja Talhão 4")
    expect(instancia.areaEmHectares).toBe(12)
    expect(instancia.descricao()).toBe("Cultivo de grãos em monitoramento")
})

test("Frutas deve herdar de Cultivo e sobrescrever descricao()", () => {
    const instancia = new Frutas("Talhão Norte", 20)

    expect(instancia).toBeInstanceOf(Cultivo)
    expect(instancia.nome).toBe("Talhão Norte")
    expect(instancia.areaEmHectares).toBe(20)
    expect(instancia.descricao()).toBe("Cultivo de frutas em monitoramento")
})

test("Hortalicas deve herdar de Cultivo e sobrescrever descricao()", () => {
    const instancia = new Hortalicas("Talhão Sul", 15)

    expect(instancia).toBeInstanceOf(Cultivo)
    expect(instancia.nome).toBe("Talhão Sul")
    expect(instancia.areaEmHectares).toBe(15)
    expect(instancia.descricao()).toBe("Cultivo de hortaliças em monitoramento")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar descricao()", () => {
    const instancia0 = new Graos("Soja Talhão 4", 12)
    const instancia1 = new Frutas("Talhão Norte", 20)
    const instancia2 = new Hortalicas("Talhão Sul", 15)
    expect(instancia0.descricao()).not.toBe(instancia1.descricao())
    expect(instancia1.descricao()).not.toBe(instancia2.descricao())
})

test("CultivoFactory deve criar o tipo correto", () => {
    const instancia0 = CultivoFactory.criar("graos", "Soja Talhão 4", 12)
    const instancia1 = CultivoFactory.criar("frutas", "Talhão Norte", 20)
    const instancia2 = CultivoFactory.criar("hortalicas", "Talhão Sul", 15)
    expect(instancia0).toBeInstanceOf(Graos)
    expect(instancia1).toBeInstanceOf(Frutas)
    expect(instancia2).toBeInstanceOf(Hortalicas)
})

test("CultivoFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        CultivoFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de cultivo inválido")
})

test("Talhao deve armazenar nome e areaEmHectares", () => {
    const item = new Talhao("Talhão Norte", 20)

    expect(item.nome).toBe("Talhão Norte")
    expect(item.areaEmHectares).toBe(20)
})

test("Propriedade deve associar membros e categorias", () => {
    const item = new Talhao("Talhão Norte", 20)
    const membro = new Graos("Soja Talhão 4", 12)
    const grupo = new Propriedade("Propriedade Santa Fé")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Propriedade Santa Fé")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Propriedade deve permitir múltiplos membros e categorias", () => {
    const item1 = new Talhao("Talhão Norte", 20)
    const item2 = new Talhao("Talhão Sul", 15)
    const membro1 = new Graos("Soja Talhão 4", 12)
    const membro2 = new Graos("Talhão Sul", 15)
    const grupo = new Propriedade("Propriedade Santa Fé")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Colheita deve armazenar valor e a categoria vinculada", () => {
    const item = new Talhao("Talhão Norte", 20)
    const registro = new Colheita(340, item)

    expect(registro.valor).toBe(340)
    expect(registro.talhao).toBe(item)
})

test("Graos deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Talhao("Talhão Norte", 20)
    const item2 = new Talhao("Talhão Sul", 15)
    const membro = new Graos("Soja Talhão 4", 12)

    const registro1 = new Colheita(340, item1)
    const registro2 = new Colheita(210, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(340)
    expect(membro.registros[0].talhao).toBe(item1)
    expect(membro.registros[1].valor).toBe(210)
    expect(membro.registros[1].talhao).toBe(item2)
})

