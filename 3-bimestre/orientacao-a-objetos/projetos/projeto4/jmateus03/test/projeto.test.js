const Peca = require("../class/Peca")
const Camiseta = require("../class/Camiseta")
const Calca = require("../class/Calca")
const Casaco = require("../class/Casaco")
const Vestido = require("../class/Vestido")
const Tecido = require("../class/Tecido")
const Colecao = require("../class/Colecao")
const Venda = require("../class/Venda")
const PecaFactory = require("../class/PecaFactory")

test("Peca deve armazenar nome e tamanhoNumerico e possuir comportamento genérico", () => {
    const base = new Peca("Coleção Verão Base", 90)

    expect(base.nome).toBe("Coleção Verão Base")
    expect(base.tamanhoNumerico).toBe(90)
    expect(base.descricao()).toBe("Peça cadastrada na loja")
})

test("Camiseta deve herdar de Peca e sobrescrever descricao()", () => {
    const instancia = new Camiseta("Básica Azul", 42)

    expect(instancia).toBeInstanceOf(Peca)
    expect(instancia.nome).toBe("Básica Azul")
    expect(instancia.tamanhoNumerico).toBe(42)
    expect(instancia.descricao()).toBe("Camiseta disponível para venda")
})

test("Calca deve herdar de Peca e sobrescrever descricao()", () => {
    const instancia = new Calca("Algodão", 7)

    expect(instancia).toBeInstanceOf(Peca)
    expect(instancia.nome).toBe("Algodão")
    expect(instancia.tamanhoNumerico).toBe(7)
    expect(instancia.descricao()).toBe("Calça disponível para venda")
})

test("Casaco deve herdar de Peca e sobrescrever descricao()", () => {
    const instancia = new Casaco("Poliéster", 5)

    expect(instancia).toBeInstanceOf(Peca)
    expect(instancia.nome).toBe("Poliéster")
    expect(instancia.tamanhoNumerico).toBe(5)
    expect(instancia.descricao()).toBe("Casaco disponível para venda")
})

test("Vestido deve herdar de Peca e sobrescrever descricao()", () => {
    const instancia = new Vestido("Coleção Verão", 60)

    expect(instancia).toBeInstanceOf(Peca)
    expect(instancia.nome).toBe("Coleção Verão")
    expect(instancia.tamanhoNumerico).toBe(60)
    expect(instancia.descricao()).toBe("Vestido disponível para venda")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar descricao()", () => {
    const instancia0 = new Camiseta("Básica Azul", 42)
    const instancia1 = new Calca("Algodão", 7)
    const instancia2 = new Casaco("Poliéster", 5)
    const instancia3 = new Vestido("Coleção Verão", 60)
    expect(instancia0.descricao()).not.toBe(instancia1.descricao())
    expect(instancia1.descricao()).not.toBe(instancia2.descricao())
    expect(instancia2.descricao()).not.toBe(instancia3.descricao())
})

test("PecaFactory deve criar o tipo correto", () => {
    const instancia0 = PecaFactory.criar("camiseta", "Básica Azul", 42)
    const instancia1 = PecaFactory.criar("calca", "Algodão", 7)
    const instancia2 = PecaFactory.criar("casaco", "Poliéster", 5)
    const instancia3 = PecaFactory.criar("vestido", "Coleção Verão", 60)
    expect(instancia0).toBeInstanceOf(Camiseta)
    expect(instancia1).toBeInstanceOf(Calca)
    expect(instancia2).toBeInstanceOf(Casaco)
    expect(instancia3).toBeInstanceOf(Vestido)
})

test("PecaFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        PecaFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de peça inválido")
})

test("Tecido deve armazenar nome e resistencia", () => {
    const item = new Tecido("Algodão", 7)

    expect(item.nome).toBe("Algodão")
    expect(item.resistencia).toBe(7)
})

test("Colecao deve associar membros e categorias", () => {
    const item = new Tecido("Algodão", 7)
    const membro = new Camiseta("Básica Azul", 42)
    const grupo = new Colecao("Coleção Verão")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Coleção Verão")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Colecao deve permitir múltiplos membros e categorias", () => {
    const item1 = new Tecido("Algodão", 7)
    const item2 = new Tecido("Poliéster", 5)
    const membro1 = new Camiseta("Básica Azul", 42)
    const membro2 = new Camiseta("Poliéster", 5)
    const grupo = new Colecao("Coleção Verão")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Venda deve armazenar valor e a categoria vinculada", () => {
    const item = new Tecido("Algodão", 7)
    const registro = new Venda(59.9, item)

    expect(registro.valor).toBe(59.9)
    expect(registro.tecido).toBe(item)
})

test("Camiseta deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Tecido("Algodão", 7)
    const item2 = new Tecido("Poliéster", 5)
    const membro = new Camiseta("Básica Azul", 42)

    const registro1 = new Venda(59.9, item1)
    const registro2 = new Venda(89.9, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(59.9)
    expect(membro.registros[0].tecido).toBe(item1)
    expect(membro.registros[1].valor).toBe(89.9)
    expect(membro.registros[1].tecido).toBe(item2)
})

test("Vestido deve herdar de Peca e sobrescrever descricao()", () => {
    const instancia = new Vestido("Coleção Verão", 60)

    expect(instancia).toBeInstanceOf(Peca)
    expect(instancia.descricao()).toBe("Vestido disponível para venda")
})

test("PecaFactory deve criar um(a) Vestido", () => {
    const instancia = PecaFactory.criar("vestido", "Coleção Verão", 60)

    expect(instancia).toBeInstanceOf(Vestido)
})

test("Camiseta não deve aceitar um registro com valor negativo", () => {
    const item = new Tecido("Algodão", 7)
    const membro = new Camiseta("Básica Azul", 42)
    const registroInvalido = new Venda(-10, item)

    expect(() => {
        membro.adicionarRegistro(registroInvalido)
    }).toThrow("Valor inválido")
})

