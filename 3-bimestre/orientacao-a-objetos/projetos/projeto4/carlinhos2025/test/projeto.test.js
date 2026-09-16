const ItemAcervo = require("../class/ItemAcervo")
const Livro = require("../class/Livro")
const Revista = require("../class/Revista")
const ItemAcervoFactory = require("../class/ItemAcervoFactory")

test("ItemAcervo armazena titulo e anoDePublicacao e possui comportamento genérico", () => {
    const base = new ItemAcervo("Estante A3 Base", 14)

    expect(base.titulo).toBe("Estante A3 Base")
    expect(base.anoDePublicacao).toBe(14)
    expect(base.descricao()).toBe("Item cadastrado no acervo")
})

test("Livro herda de ItemAcervo e sobrescreve descricao()", () => {
    const instancia = new Livro("O Guarani", 1857)

    expect(instancia).toBeInstanceOf(ItemAcervo)
    expect(instancia.descricao()).toBe("Livro disponível para empréstimo")
})

test("Revista herda de ItemAcervo e sobrescreve descricao()", () => {
    const instancia = new Revista("Romance", 250)

    expect(instancia).toBeInstanceOf(ItemAcervo)
    expect(instancia.descricao()).toBe("Revista disponível para empréstimo")
})

test("Livro e Revista respondem de formas diferentes", () => {
    const instancia0 = new Livro("O Guarani", 1857)
    const instancia1 = new Revista("Romance", 250)

    expect(instancia0.descricao()).not.toBe(instancia1.descricao())
})

test("ItemAcervoFactory cria o tipo correto", () => {
    const instancia0 = ItemAcervoFactory.criar("livro", "O Guarani", 1857)
    const instancia1 = ItemAcervoFactory.criar("revista", "Romance", 250)

    expect(instancia0).toBeInstanceOf(Livro)
    expect(instancia1).toBeInstanceOf(Revista)
})

test("ItemAcervoFactory gera erro para tipo inválido", () => {
    expect(() => {
        ItemAcervoFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de item inválido")
})
