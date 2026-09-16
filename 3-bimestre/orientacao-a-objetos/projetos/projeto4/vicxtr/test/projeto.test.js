const Material = require("../class/Material")
const Apostila = require("../class/Apostila")
const LivroTexto = require("../class/LivroTexto")
const Digital = require("../class/Digital")
const Editora = require("../class/Editora")
const CatalogoEditorial = require("../class/CatalogoEditorial")
const Pedido = require("../class/Pedido")
const MaterialFactory = require("../class/MaterialFactory")

test("Material deve armazenar titulo e edicao e possuir comportamento genérico", () => {
    const base = new Material("Catálogo Fundamental II Base", 75)

    expect(base.titulo).toBe("Catálogo Fundamental II Base")
    expect(base.edicao).toBe(75)
    expect(base.descricao()).toBe("Material cadastrado no catálogo")
})

test("Apostila deve herdar de Material e sobrescrever descricao()", () => {
    const instancia = new Apostila("Matemática Essencial", 3)

    expect(instancia).toBeInstanceOf(Material)
    expect(instancia.titulo).toBe("Matemática Essencial")
    expect(instancia.edicao).toBe(3)
    expect(instancia.descricao()).toBe("Apostila disponível para venda")
})

test("LivroTexto deve herdar de Material e sobrescrever descricao()", () => {
    const instancia = new LivroTexto("Editora Alfa", 2023)

    expect(instancia).toBeInstanceOf(Material)
    expect(instancia.titulo).toBe("Editora Alfa")
    expect(instancia.edicao).toBe(2023)
    expect(instancia.descricao()).toBe("Livro-texto disponível para venda")
})

test("Digital deve herdar de Material e sobrescrever descricao()", () => {
    const instancia = new Digital("Editora Beta", 2021)

    expect(instancia).toBeInstanceOf(Material)
    expect(instancia.titulo).toBe("Editora Beta")
    expect(instancia.edicao).toBe(2021)
    expect(instancia.descricao()).toBe("Material digital disponível para venda")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar descricao()", () => {
    const instancia0 = new Apostila("Matemática Essencial", 3)
    const instancia1 = new LivroTexto("Editora Alfa", 2023)
    const instancia2 = new Digital("Editora Beta", 2021)
    expect(instancia0.descricao()).not.toBe(instancia1.descricao())
    expect(instancia1.descricao()).not.toBe(instancia2.descricao())
})

test("MaterialFactory deve criar o tipo correto", () => {
    const instancia0 = MaterialFactory.criar("apostila", "Matemática Essencial", 3)
    const instancia1 = MaterialFactory.criar("livrotexto", "Editora Alfa", 2023)
    const instancia2 = MaterialFactory.criar("digital", "Editora Beta", 2021)
    expect(instancia0).toBeInstanceOf(Apostila)
    expect(instancia1).toBeInstanceOf(LivroTexto)
    expect(instancia2).toBeInstanceOf(Digital)
})

test("MaterialFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        MaterialFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de material inválido")
})

test("Editora deve armazenar nome e anoDePublicacao", () => {
    const item = new Editora("Editora Alfa", 2023)

    expect(item.nome).toBe("Editora Alfa")
    expect(item.anoDePublicacao).toBe(2023)
})

test("CatalogoEditorial deve associar membros e categorias", () => {
    const item = new Editora("Editora Alfa", 2023)
    const membro = new Apostila("Matemática Essencial", 3)
    const grupo = new CatalogoEditorial("Catálogo Fundamental II")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Catálogo Fundamental II")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("CatalogoEditorial deve permitir múltiplos membros e categorias", () => {
    const item1 = new Editora("Editora Alfa", 2023)
    const item2 = new Editora("Editora Beta", 2021)
    const membro1 = new Apostila("Matemática Essencial", 3)
    const membro2 = new Apostila("Editora Beta", 2021)
    const grupo = new CatalogoEditorial("Catálogo Fundamental II")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Pedido deve armazenar valor e a categoria vinculada", () => {
    const item = new Editora("Editora Alfa", 2023)
    const registro = new Pedido(120, item)

    expect(registro.valor).toBe(120)
    expect(registro.editora).toBe(item)
})

test("Apostila deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Editora("Editora Alfa", 2023)
    const item2 = new Editora("Editora Beta", 2021)
    const membro = new Apostila("Matemática Essencial", 3)

    const registro1 = new Pedido(120, item1)
    const registro2 = new Pedido(75, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(120)
    expect(membro.registros[0].editora).toBe(item1)
    expect(membro.registros[1].valor).toBe(75)
    expect(membro.registros[1].editora).toBe(item2)
})

