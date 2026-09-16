const Curso = require("../class/Curso")
const Gravado = require("../class/Gravado")
const AoVivo = require("../class/AoVivo")
const Workshop = require("../class/Workshop")
const Modulo = require("../class/Modulo")
const Trilha = require("../class/Trilha")
const Certificado = require("../class/Certificado")
const CursoFactory = require("../class/CursoFactory")

test("Curso deve armazenar titulo e cargaHoraria e possuir comportamento genérico", () => {
    const base = new Curso("Trilha Backend Base", 9)

    expect(base.titulo).toBe("Trilha Backend Base")
    expect(base.cargaHoraria).toBe(9)
    expect(base.descricao()).toBe("Curso publicado na plataforma")
})

test("Gravado deve herdar de Curso e sobrescrever descricao()", () => {
    const instancia = new Gravado("POO na prática", 40)

    expect(instancia).toBeInstanceOf(Curso)
    expect(instancia.titulo).toBe("POO na prática")
    expect(instancia.cargaHoraria).toBe(40)
    expect(instancia.descricao()).toBe("Curso gravado disponível")
})

test("AoVivo deve herdar de Curso e sobrescrever descricao()", () => {
    const instancia = new AoVivo("Introdução", 8)

    expect(instancia).toBeInstanceOf(Curso)
    expect(instancia.titulo).toBe("Introdução")
    expect(instancia.cargaHoraria).toBe(8)
    expect(instancia.descricao()).toBe("Curso ao vivo disponível")
})

test("Workshop deve herdar de Curso e sobrescrever descricao()", () => {
    const instancia = new Workshop("Avançado", 12)

    expect(instancia).toBeInstanceOf(Curso)
    expect(instancia.titulo).toBe("Avançado")
    expect(instancia.cargaHoraria).toBe(12)
    expect(instancia.descricao()).toBe("Workshop disponível")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar descricao()", () => {
    const instancia0 = new Gravado("POO na prática", 40)
    const instancia1 = new AoVivo("Introdução", 8)
    const instancia2 = new Workshop("Avançado", 12)
    expect(instancia0.descricao()).not.toBe(instancia1.descricao())
    expect(instancia1.descricao()).not.toBe(instancia2.descricao())
})

test("CursoFactory deve criar o tipo correto", () => {
    const instancia0 = CursoFactory.criar("gravado", "POO na prática", 40)
    const instancia1 = CursoFactory.criar("aovivo", "Introdução", 8)
    const instancia2 = CursoFactory.criar("workshop", "Avançado", 12)
    expect(instancia0).toBeInstanceOf(Gravado)
    expect(instancia1).toBeInstanceOf(AoVivo)
    expect(instancia2).toBeInstanceOf(Workshop)
})

test("CursoFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        CursoFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de curso inválido")
})

test("Modulo deve armazenar nome e cargaHoraria", () => {
    const item = new Modulo("Introdução", 8)

    expect(item.nome).toBe("Introdução")
    expect(item.cargaHoraria).toBe(8)
})

test("Trilha deve associar membros e categorias", () => {
    const item = new Modulo("Introdução", 8)
    const membro = new Gravado("POO na prática", 40)
    const grupo = new Trilha("Trilha Backend")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Trilha Backend")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Trilha deve permitir múltiplos membros e categorias", () => {
    const item1 = new Modulo("Introdução", 8)
    const item2 = new Modulo("Avançado", 12)
    const membro1 = new Gravado("POO na prática", 40)
    const membro2 = new Gravado("Avançado", 12)
    const grupo = new Trilha("Trilha Backend")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Certificado deve armazenar valor e a categoria vinculada", () => {
    const item = new Modulo("Introdução", 8)
    const registro = new Certificado(9, item)

    expect(registro.valor).toBe(9)
    expect(registro.modulo).toBe(item)
})

test("Gravado deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Modulo("Introdução", 8)
    const item2 = new Modulo("Avançado", 12)
    const membro = new Gravado("POO na prática", 40)

    const registro1 = new Certificado(9, item1)
    const registro2 = new Certificado(8.5, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(9)
    expect(membro.registros[0].modulo).toBe(item1)
    expect(membro.registros[1].valor).toBe(8.5)
    expect(membro.registros[1].modulo).toBe(item2)
})

