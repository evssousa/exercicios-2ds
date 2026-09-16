const Personagem = require("../class/Personagem")
const Guerreiro = require("../class/Guerreiro")
const Mago = require("../class/Mago")
const Arqueiro = require("../class/Arqueiro")
const Habilidade = require("../class/Habilidade")
const Equipe = require("../class/Equipe")
const Batalha = require("../class/Batalha")
const PersonagemFactory = require("../class/PersonagemFactory")

test("Personagem deve armazenar nome e nivel e possuir comportamento genérico", () => {
    const base = new Personagem("Equipe Alfa Base", 95)

    expect(base.nome).toBe("Equipe Alfa Base")
    expect(base.nivel).toBe(95)
    expect(base.descricao()).toBe("Personagem cadastrado no jogo")
})

test("Guerreiro deve herdar de Personagem e sobrescrever descricao()", () => {
    const instancia = new Guerreiro("Thoran", 8)

    expect(instancia).toBeInstanceOf(Personagem)
    expect(instancia.nome).toBe("Thoran")
    expect(instancia.nivel).toBe(8)
    expect(instancia.descricao()).toBe("Guerreiro pronto para a batalha")
})

test("Mago deve herdar de Personagem e sobrescrever descricao()", () => {
    const instancia = new Mago("Fúria", 50)

    expect(instancia).toBeInstanceOf(Personagem)
    expect(instancia.nome).toBe("Fúria")
    expect(instancia.nivel).toBe(50)
    expect(instancia.descricao()).toBe("Mago pronto para a batalha")
})

test("Arqueiro deve herdar de Personagem e sobrescrever descricao()", () => {
    const instancia = new Arqueiro("Cura", 30)

    expect(instancia).toBeInstanceOf(Personagem)
    expect(instancia.nome).toBe("Cura")
    expect(instancia.nivel).toBe(30)
    expect(instancia.descricao()).toBe("Arqueiro pronto para a batalha")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar descricao()", () => {
    const instancia0 = new Guerreiro("Thoran", 8)
    const instancia1 = new Mago("Fúria", 50)
    const instancia2 = new Arqueiro("Cura", 30)
    expect(instancia0.descricao()).not.toBe(instancia1.descricao())
    expect(instancia1.descricao()).not.toBe(instancia2.descricao())
})

test("PersonagemFactory deve criar o tipo correto", () => {
    const instancia0 = PersonagemFactory.criar("guerreiro", "Thoran", 8)
    const instancia1 = PersonagemFactory.criar("mago", "Fúria", 50)
    const instancia2 = PersonagemFactory.criar("arqueiro", "Cura", 30)
    expect(instancia0).toBeInstanceOf(Guerreiro)
    expect(instancia1).toBeInstanceOf(Mago)
    expect(instancia2).toBeInstanceOf(Arqueiro)
})

test("PersonagemFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        PersonagemFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de personagem inválido")
})

test("Habilidade deve armazenar nome e poder", () => {
    const item = new Habilidade("Fúria", 50)

    expect(item.nome).toBe("Fúria")
    expect(item.poder).toBe(50)
})

test("Equipe deve associar membros e categorias", () => {
    const item = new Habilidade("Fúria", 50)
    const membro = new Guerreiro("Thoran", 8)
    const grupo = new Equipe("Equipe Alfa")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Equipe Alfa")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Equipe deve permitir múltiplos membros e categorias", () => {
    const item1 = new Habilidade("Fúria", 50)
    const item2 = new Habilidade("Cura", 30)
    const membro1 = new Guerreiro("Thoran", 8)
    const membro2 = new Guerreiro("Cura", 30)
    const grupo = new Equipe("Equipe Alfa")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Batalha deve armazenar valor e a categoria vinculada", () => {
    const item = new Habilidade("Fúria", 50)
    const registro = new Batalha(120, item)

    expect(registro.valor).toBe(120)
    expect(registro.habilidade).toBe(item)
})

test("Guerreiro deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Habilidade("Fúria", 50)
    const item2 = new Habilidade("Cura", 30)
    const membro = new Guerreiro("Thoran", 8)

    const registro1 = new Batalha(120, item1)
    const registro2 = new Batalha(95, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(120)
    expect(membro.registros[0].habilidade).toBe(item1)
    expect(membro.registros[1].valor).toBe(95)
    expect(membro.registros[1].habilidade).toBe(item2)
})

