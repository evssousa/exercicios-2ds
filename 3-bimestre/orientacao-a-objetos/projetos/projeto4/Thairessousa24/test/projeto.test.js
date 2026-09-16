const Faixa = require("../class/Faixa")
const Rock = require("../class/Rock")
const Pop = require("../class/Pop")
const Eletronica = require("../class/Eletronica")
const Instrumento = require("../class/Instrumento")
const Album = require("../class/Album")
const Reproducao = require("../class/Reproducao")
const FaixaFactory = require("../class/FaixaFactory")

test("Faixa deve armazenar titulo e duracaoEmSegundos e possuir comportamento genérico", () => {
    const base = new Faixa("Álbum Horizonte Base", 980)

    expect(base.titulo).toBe("Álbum Horizonte Base")
    expect(base.duracaoEmSegundos).toBe(980)
    expect(base.descricao()).toBe("Faixa cadastrada no catálogo")
})

test("Rock deve herdar de Faixa e sobrescrever descricao()", () => {
    const instancia = new Rock("Noite Clara", 214)

    expect(instancia).toBeInstanceOf(Faixa)
    expect(instancia.titulo).toBe("Noite Clara")
    expect(instancia.duracaoEmSegundos).toBe(214)
    expect(instancia.descricao()).toBe("Faixa de rock publicada")
})

test("Pop deve herdar de Faixa e sobrescrever descricao()", () => {
    const instancia = new Pop("Guitarra", 6)

    expect(instancia).toBeInstanceOf(Faixa)
    expect(instancia.titulo).toBe("Guitarra")
    expect(instancia.duracaoEmSegundos).toBe(6)
    expect(instancia.descricao()).toBe("Faixa de pop publicada")
})

test("Eletronica deve herdar de Faixa e sobrescrever descricao()", () => {
    const instancia = new Eletronica("Baixo", 4)

    expect(instancia).toBeInstanceOf(Faixa)
    expect(instancia.titulo).toBe("Baixo")
    expect(instancia.duracaoEmSegundos).toBe(4)
    expect(instancia.descricao()).toBe("Faixa eletrônica publicada")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar descricao()", () => {
    const instancia0 = new Rock("Noite Clara", 214)
    const instancia1 = new Pop("Guitarra", 6)
    const instancia2 = new Eletronica("Baixo", 4)
    expect(instancia0.descricao()).not.toBe(instancia1.descricao())
    expect(instancia1.descricao()).not.toBe(instancia2.descricao())
})

test("FaixaFactory deve criar o tipo correto", () => {
    const instancia0 = FaixaFactory.criar("rock", "Noite Clara", 214)
    const instancia1 = FaixaFactory.criar("pop", "Guitarra", 6)
    const instancia2 = FaixaFactory.criar("eletronica", "Baixo", 4)
    expect(instancia0).toBeInstanceOf(Rock)
    expect(instancia1).toBeInstanceOf(Pop)
    expect(instancia2).toBeInstanceOf(Eletronica)
})

test("FaixaFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        FaixaFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de faixa inválido")
})

test("Instrumento deve armazenar nome e quantidadeDeCordas", () => {
    const item = new Instrumento("Guitarra", 6)

    expect(item.nome).toBe("Guitarra")
    expect(item.quantidadeDeCordas).toBe(6)
})

test("Album deve associar membros e categorias", () => {
    const item = new Instrumento("Guitarra", 6)
    const membro = new Rock("Noite Clara", 214)
    const grupo = new Album("Álbum Horizonte")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Álbum Horizonte")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Album deve permitir múltiplos membros e categorias", () => {
    const item1 = new Instrumento("Guitarra", 6)
    const item2 = new Instrumento("Baixo", 4)
    const membro1 = new Rock("Noite Clara", 214)
    const membro2 = new Rock("Baixo", 4)
    const grupo = new Album("Álbum Horizonte")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Reproducao deve armazenar valor e a categoria vinculada", () => {
    const item = new Instrumento("Guitarra", 6)
    const registro = new Reproducao(1520, item)

    expect(registro.valor).toBe(1520)
    expect(registro.instrumento).toBe(item)
})

test("Rock deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Instrumento("Guitarra", 6)
    const item2 = new Instrumento("Baixo", 4)
    const membro = new Rock("Noite Clara", 214)

    const registro1 = new Reproducao(1520, item1)
    const registro2 = new Reproducao(980, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(1520)
    expect(membro.registros[0].instrumento).toBe(item1)
    expect(membro.registros[1].valor).toBe(980)
    expect(membro.registros[1].instrumento).toBe(item2)
})

