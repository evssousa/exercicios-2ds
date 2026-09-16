const Produto = require("../class/Produto")
const Smartphone = require("../class/Smartphone")
const Notebook = require("../class/Notebook")
const Tablet = require("../class/Tablet")
const Marca = require("../class/Marca")
const Estoque = require("../class/Estoque")
const Venda = require("../class/Venda")
const ProdutoFactory = require("../class/ProdutoFactory")

test("Produto deve armazenar nome e garantiaEmMeses e possuir comportamento genérico", () => {
    const base = new Produto("Estoque Central Base", 2599)

    expect(base.nome).toBe("Estoque Central Base")
    expect(base.garantiaEmMeses).toBe(2599)
    expect(base.descricao()).toBe("Produto cadastrado na loja")
})

test("Smartphone deve herdar de Produto e sobrescrever descricao()", () => {
    const instancia = new Smartphone("Galaxy X", 12)

    expect(instancia).toBeInstanceOf(Produto)
    expect(instancia.nome).toBe("Galaxy X")
    expect(instancia.garantiaEmMeses).toBe(12)
    expect(instancia.descricao()).toBe("Smartphone disponível para venda")
})

test("Notebook deve herdar de Produto e sobrescrever descricao()", () => {
    const instancia = new Notebook("TechOne", 2023)

    expect(instancia).toBeInstanceOf(Produto)
    expect(instancia.nome).toBe("TechOne")
    expect(instancia.garantiaEmMeses).toBe(2023)
    expect(instancia.descricao()).toBe("Notebook disponível para venda")
})

test("Tablet deve herdar de Produto e sobrescrever descricao()", () => {
    const instancia = new Tablet("NovaTec", 2022)

    expect(instancia).toBeInstanceOf(Produto)
    expect(instancia.nome).toBe("NovaTec")
    expect(instancia.garantiaEmMeses).toBe(2022)
    expect(instancia.descricao()).toBe("Tablet disponível para venda")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar descricao()", () => {
    const instancia0 = new Smartphone("Galaxy X", 12)
    const instancia1 = new Notebook("TechOne", 2023)
    const instancia2 = new Tablet("NovaTec", 2022)
    expect(instancia0.descricao()).not.toBe(instancia1.descricao())
    expect(instancia1.descricao()).not.toBe(instancia2.descricao())
})

test("ProdutoFactory deve criar o tipo correto", () => {
    const instancia0 = ProdutoFactory.criar("smartphone", "Galaxy X", 12)
    const instancia1 = ProdutoFactory.criar("notebook", "TechOne", 2023)
    const instancia2 = ProdutoFactory.criar("tablet", "NovaTec", 2022)
    expect(instancia0).toBeInstanceOf(Smartphone)
    expect(instancia1).toBeInstanceOf(Notebook)
    expect(instancia2).toBeInstanceOf(Tablet)
})

test("ProdutoFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        ProdutoFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de produto inválido")
})

test("Marca deve armazenar nome e anoDeLancamento", () => {
    const item = new Marca("TechOne", 2023)

    expect(item.nome).toBe("TechOne")
    expect(item.anoDeLancamento).toBe(2023)
})

test("Estoque deve associar membros e categorias", () => {
    const item = new Marca("TechOne", 2023)
    const membro = new Smartphone("Galaxy X", 12)
    const grupo = new Estoque("Estoque Central")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Estoque Central")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Estoque deve permitir múltiplos membros e categorias", () => {
    const item1 = new Marca("TechOne", 2023)
    const item2 = new Marca("NovaTec", 2022)
    const membro1 = new Smartphone("Galaxy X", 12)
    const membro2 = new Smartphone("NovaTec", 2022)
    const grupo = new Estoque("Estoque Central")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Venda deve armazenar valor e a categoria vinculada", () => {
    const item = new Marca("TechOne", 2023)
    const registro = new Venda(1999, item)

    expect(registro.valor).toBe(1999)
    expect(registro.marca).toBe(item)
})

test("Smartphone deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Marca("TechOne", 2023)
    const item2 = new Marca("NovaTec", 2022)
    const membro = new Smartphone("Galaxy X", 12)

    const registro1 = new Venda(1999, item1)
    const registro2 = new Venda(2599, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(1999)
    expect(membro.registros[0].marca).toBe(item1)
    expect(membro.registros[1].valor).toBe(2599)
    expect(membro.registros[1].marca).toBe(item2)
})

