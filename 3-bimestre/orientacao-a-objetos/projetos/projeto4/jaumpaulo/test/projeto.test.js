const ItemCardapio = require("../class/ItemCardapio")
const Lanche = require("../class/Lanche")
const Pizza = require("../class/Pizza")
const Sobremesa = require("../class/Sobremesa")
const Bebida = require("../class/Bebida")
const Ingrediente = require("../class/Ingrediente")
const Cardapio = require("../class/Cardapio")
const Avaliacao = require("../class/Avaliacao")
const ItemCardapioFactory = require("../class/ItemCardapioFactory")

test("ItemCardapio deve armazenar nome e tempoDePreparoEmMinutos e possuir comportamento genérico", () => {
    const base = new ItemCardapio("Cardápio de verão Base", 5)

    expect(base.nome).toBe("Cardápio de verão Base")
    expect(base.tempoDePreparoEmMinutos).toBe(5)
    expect(base.descricao()).toBe("Item cadastrado no cardápio")
})

test("Lanche deve herdar de ItemCardapio e sobrescrever descricao()", () => {
    const instancia = new Lanche("Combo Especial", 20)

    expect(instancia).toBeInstanceOf(ItemCardapio)
    expect(instancia.nome).toBe("Combo Especial")
    expect(instancia.tempoDePreparoEmMinutos).toBe(20)
    expect(instancia.descricao()).toBe("Lanche pronto para o pedido")
})

test("Pizza deve herdar de ItemCardapio e sobrescrever descricao()", () => {
    const instancia = new Pizza("Queijo", 8)

    expect(instancia).toBeInstanceOf(ItemCardapio)
    expect(instancia.nome).toBe("Queijo")
    expect(instancia.tempoDePreparoEmMinutos).toBe(8)
    expect(instancia.descricao()).toBe("Pizza pronta para o pedido")
})

test("Sobremesa deve herdar de ItemCardapio e sobrescrever descricao()", () => {
    const instancia = new Sobremesa("Molho especial", 5)

    expect(instancia).toBeInstanceOf(ItemCardapio)
    expect(instancia.nome).toBe("Molho especial")
    expect(instancia.tempoDePreparoEmMinutos).toBe(5)
    expect(instancia.descricao()).toBe("Sobremesa pronta para o pedido")
})

test("Bebida deve herdar de ItemCardapio e sobrescrever descricao()", () => {
    const instancia = new Bebida("Cardápio de verão", 5)

    expect(instancia).toBeInstanceOf(ItemCardapio)
    expect(instancia.nome).toBe("Cardápio de verão")
    expect(instancia.tempoDePreparoEmMinutos).toBe(5)
    expect(instancia.descricao()).toBe("Bebida pronta para o pedido")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar descricao()", () => {
    const instancia0 = new Lanche("Combo Especial", 20)
    const instancia1 = new Pizza("Queijo", 8)
    const instancia2 = new Sobremesa("Molho especial", 5)
    const instancia3 = new Bebida("Cardápio de verão", 5)
    expect(instancia0.descricao()).not.toBe(instancia1.descricao())
    expect(instancia1.descricao()).not.toBe(instancia2.descricao())
    expect(instancia2.descricao()).not.toBe(instancia3.descricao())
})

test("ItemCardapioFactory deve criar o tipo correto", () => {
    const instancia0 = ItemCardapioFactory.criar("lanche", "Combo Especial", 20)
    const instancia1 = ItemCardapioFactory.criar("pizza", "Queijo", 8)
    const instancia2 = ItemCardapioFactory.criar("sobremesa", "Molho especial", 5)
    const instancia3 = ItemCardapioFactory.criar("bebida", "Cardápio de verão", 5)
    expect(instancia0).toBeInstanceOf(Lanche)
    expect(instancia1).toBeInstanceOf(Pizza)
    expect(instancia2).toBeInstanceOf(Sobremesa)
    expect(instancia3).toBeInstanceOf(Bebida)
})

test("ItemCardapioFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        ItemCardapioFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de item inválido")
})

test("Ingrediente deve armazenar nome e custo", () => {
    const item = new Ingrediente("Queijo", 8)

    expect(item.nome).toBe("Queijo")
    expect(item.custo).toBe(8)
})

test("Cardapio deve associar membros e categorias", () => {
    const item = new Ingrediente("Queijo", 8)
    const membro = new Lanche("Combo Especial", 20)
    const grupo = new Cardapio("Cardápio de verão")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Cardápio de verão")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Cardapio deve permitir múltiplos membros e categorias", () => {
    const item1 = new Ingrediente("Queijo", 8)
    const item2 = new Ingrediente("Molho especial", 5)
    const membro1 = new Lanche("Combo Especial", 20)
    const membro2 = new Lanche("Molho especial", 5)
    const grupo = new Cardapio("Cardápio de verão")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Avaliacao deve armazenar valor e a categoria vinculada", () => {
    const item = new Ingrediente("Queijo", 8)
    const registro = new Avaliacao(4.5, item)

    expect(registro.valor).toBe(4.5)
    expect(registro.ingrediente).toBe(item)
})

test("Lanche deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Ingrediente("Queijo", 8)
    const item2 = new Ingrediente("Molho especial", 5)
    const membro = new Lanche("Combo Especial", 20)

    const registro1 = new Avaliacao(4.5, item1)
    const registro2 = new Avaliacao(5, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(4.5)
    expect(membro.registros[0].ingrediente).toBe(item1)
    expect(membro.registros[1].valor).toBe(5)
    expect(membro.registros[1].ingrediente).toBe(item2)
})

test("Bebida deve herdar de ItemCardapio e sobrescrever descricao()", () => {
    const instancia = new Bebida("Cardápio de verão", 5)

    expect(instancia).toBeInstanceOf(ItemCardapio)
    expect(instancia.descricao()).toBe("Bebida pronta para o pedido")
})

test("ItemCardapioFactory deve criar um(a) Bebida", () => {
    const instancia = ItemCardapioFactory.criar("bebida", "Cardápio de verão", 5)

    expect(instancia).toBeInstanceOf(Bebida)
})

test("Lanche não deve aceitar um registro com valor negativo", () => {
    const item = new Ingrediente("Queijo", 8)
    const membro = new Lanche("Combo Especial", 20)
    const registroInvalido = new Avaliacao(-10, item)

    expect(() => {
        membro.adicionarRegistro(registroInvalido)
    }).toThrow("Valor inválido")
})

