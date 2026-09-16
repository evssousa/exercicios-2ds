const Midia = require("../class/Midia")
const Filme = require("../class/Filme")
const Serie = require("../class/Serie")
const Documentario = require("../class/Documentario")
const CurtaMetragem = require("../class/CurtaMetragem")
const Genero = require("../class/Genero")
const Catalogo = require("../class/Catalogo")
const Avaliacao = require("../class/Avaliacao")
const MidiaFactory = require("../class/MidiaFactory")

test("Midia deve armazenar titulo e duracaoEmMinutos e possuir comportamento genérico", () => {
    const base = new Midia("Catálogo Nacional Base", 9)

    expect(base.titulo).toBe("Catálogo Nacional Base")
    expect(base.duracaoEmMinutos).toBe(9)
    expect(base.descricao()).toBe("Mídia adicionada ao catálogo")
})

test("Filme deve herdar de Midia e sobrescrever descricao()", () => {
    const instancia = new Filme("Além do Horizonte", 118)

    expect(instancia).toBeInstanceOf(Midia)
    expect(instancia.titulo).toBe("Além do Horizonte")
    expect(instancia.duracaoEmMinutos).toBe(118)
    expect(instancia.descricao()).toBe("Filme disponível para reprodução")
})

test("Serie deve herdar de Midia e sobrescrever descricao()", () => {
    const instancia = new Serie("Ficção Científica", 14)

    expect(instancia).toBeInstanceOf(Midia)
    expect(instancia.titulo).toBe("Ficção Científica")
    expect(instancia.duracaoEmMinutos).toBe(14)
    expect(instancia.descricao()).toBe("Série disponível para reprodução")
})

test("Documentario deve herdar de Midia e sobrescrever descricao()", () => {
    const instancia = new Documentario("Drama", 12)

    expect(instancia).toBeInstanceOf(Midia)
    expect(instancia.titulo).toBe("Drama")
    expect(instancia.duracaoEmMinutos).toBe(12)
    expect(instancia.descricao()).toBe("Documentário disponível para reprodução")
})

test("CurtaMetragem deve herdar de Midia e sobrescrever descricao()", () => {
    const instancia = new CurtaMetragem("Catálogo Nacional", 9)

    expect(instancia).toBeInstanceOf(Midia)
    expect(instancia.titulo).toBe("Catálogo Nacional")
    expect(instancia.duracaoEmMinutos).toBe(9)
    expect(instancia.descricao()).toBe("Curta-metragem disponível para reprodução")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar descricao()", () => {
    const instancia0 = new Filme("Além do Horizonte", 118)
    const instancia1 = new Serie("Ficção Científica", 14)
    const instancia2 = new Documentario("Drama", 12)
    const instancia3 = new CurtaMetragem("Catálogo Nacional", 9)
    expect(instancia0.descricao()).not.toBe(instancia1.descricao())
    expect(instancia1.descricao()).not.toBe(instancia2.descricao())
    expect(instancia2.descricao()).not.toBe(instancia3.descricao())
})

test("MidiaFactory deve criar o tipo correto", () => {
    const instancia0 = MidiaFactory.criar("filme", "Além do Horizonte", 118)
    const instancia1 = MidiaFactory.criar("serie", "Ficção Científica", 14)
    const instancia2 = MidiaFactory.criar("documentario", "Drama", 12)
    const instancia3 = MidiaFactory.criar("curtametragem", "Catálogo Nacional", 9)
    expect(instancia0).toBeInstanceOf(Filme)
    expect(instancia1).toBeInstanceOf(Serie)
    expect(instancia2).toBeInstanceOf(Documentario)
    expect(instancia3).toBeInstanceOf(CurtaMetragem)
})

test("MidiaFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        MidiaFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de mídia inválido")
})

test("Genero deve armazenar nome e classificacaoEtaria", () => {
    const item = new Genero("Ficção Científica", 14)

    expect(item.nome).toBe("Ficção Científica")
    expect(item.classificacaoEtaria).toBe(14)
})

test("Catalogo deve associar membros e categorias", () => {
    const item = new Genero("Ficção Científica", 14)
    const membro = new Filme("Além do Horizonte", 118)
    const grupo = new Catalogo("Catálogo Nacional")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Catálogo Nacional")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Catalogo deve permitir múltiplos membros e categorias", () => {
    const item1 = new Genero("Ficção Científica", 14)
    const item2 = new Genero("Drama", 12)
    const membro1 = new Filme("Além do Horizonte", 118)
    const membro2 = new Filme("Drama", 12)
    const grupo = new Catalogo("Catálogo Nacional")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Avaliacao deve armazenar valor e a categoria vinculada", () => {
    const item = new Genero("Ficção Científica", 14)
    const registro = new Avaliacao(8.7, item)

    expect(registro.valor).toBe(8.7)
    expect(registro.genero).toBe(item)
})

test("Filme deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Genero("Ficção Científica", 14)
    const item2 = new Genero("Drama", 12)
    const membro = new Filme("Além do Horizonte", 118)

    const registro1 = new Avaliacao(8.7, item1)
    const registro2 = new Avaliacao(9.1, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(8.7)
    expect(membro.registros[0].genero).toBe(item1)
    expect(membro.registros[1].valor).toBe(9.1)
    expect(membro.registros[1].genero).toBe(item2)
})

test("CurtaMetragem deve herdar de Midia e sobrescrever descricao()", () => {
    const instancia = new CurtaMetragem("Catálogo Nacional", 9)

    expect(instancia).toBeInstanceOf(Midia)
    expect(instancia.descricao()).toBe("Curta-metragem disponível para reprodução")
})

test("MidiaFactory deve criar um(a) CurtaMetragem", () => {
    const instancia = MidiaFactory.criar("curtametragem", "Catálogo Nacional", 9)

    expect(instancia).toBeInstanceOf(CurtaMetragem)
})

test("Filme não deve aceitar um registro com valor negativo", () => {
    const item = new Genero("Ficção Científica", 14)
    const membro = new Filme("Além do Horizonte", 118)
    const registroInvalido = new Avaliacao(-10, item)

    expect(() => {
        membro.adicionarRegistro(registroInvalido)
    }).toThrow("Valor inválido")
})

