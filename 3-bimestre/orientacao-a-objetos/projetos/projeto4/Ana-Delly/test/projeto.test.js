const Usuario = require("../class/Usuario")
const Aluno = require("../class/Aluno")
const Professor = require("../class/Professor")
const Coordenador = require("../class/Coordenador")
const Disciplina = require("../class/Disciplina")
const Turma = require("../class/Turma")
const Nota = require("../class/Nota")
const UsuarioFactory = require("../class/UsuarioFactory")

test("Usuario deve armazenar nome e idade e possuir comportamento genérico", () => {
    const base = new Usuario("1ºA Base", 7)

    expect(base.nome).toBe("1ºA Base")
    expect(base.idade).toBe(7)
    expect(base.acessoPainel()).toBe("Acesso ao sistema escolar")
})

test("Aluno deve herdar de Usuario e sobrescrever acessoPainel()", () => {
    const instancia = new Aluno("Mariana Costa", 16)

    expect(instancia).toBeInstanceOf(Usuario)
    expect(instancia.nome).toBe("Mariana Costa")
    expect(instancia.idade).toBe(16)
    expect(instancia.acessoPainel()).toBe("Painel do Aluno: consultar notas e disciplinas")
})

test("Professor deve herdar de Usuario e sobrescrever acessoPainel()", () => {
    const instancia = new Professor("Matemática", 80)

    expect(instancia).toBeInstanceOf(Usuario)
    expect(instancia.nome).toBe("Matemática")
    expect(instancia.idade).toBe(80)
    expect(instancia.acessoPainel()).toBe("Painel do Professor: gerenciar notas e turmas")
})

test("Coordenador deve herdar de Usuario e sobrescrever acessoPainel()", () => {
    const instancia = new Coordenador("Português", 60)

    expect(instancia).toBeInstanceOf(Usuario)
    expect(instancia.nome).toBe("Português")
    expect(instancia.idade).toBe(60)
    expect(instancia.acessoPainel()).toBe("Painel do Coordenador: administração escolar")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar acessoPainel()", () => {
    const instancia0 = new Aluno("Mariana Costa", 16)
    const instancia1 = new Professor("Matemática", 80)
    const instancia2 = new Coordenador("Português", 60)
    expect(instancia0.acessoPainel()).not.toBe(instancia1.acessoPainel())
    expect(instancia1.acessoPainel()).not.toBe(instancia2.acessoPainel())
})

test("UsuarioFactory deve criar o tipo correto", () => {
    const instancia0 = UsuarioFactory.criar("aluno", "Mariana Costa", 16)
    const instancia1 = UsuarioFactory.criar("professor", "Matemática", 80)
    const instancia2 = UsuarioFactory.criar("coordenador", "Português", 60)
    expect(instancia0).toBeInstanceOf(Aluno)
    expect(instancia1).toBeInstanceOf(Professor)
    expect(instancia2).toBeInstanceOf(Coordenador)
})

test("UsuarioFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        UsuarioFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de usuário inválido")
})

test("Disciplina deve armazenar nome e cargaHoraria", () => {
    const item = new Disciplina("Matemática", 80)

    expect(item.nome).toBe("Matemática")
    expect(item.cargaHoraria).toBe(80)
})

test("Turma deve associar membros e categorias", () => {
    const item = new Disciplina("Matemática", 80)
    const membro = new Aluno("Mariana Costa", 16)
    const grupo = new Turma("1ºA")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("1ºA")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Turma deve permitir múltiplos membros e categorias", () => {
    const item1 = new Disciplina("Matemática", 80)
    const item2 = new Disciplina("Português", 60)
    const membro1 = new Aluno("Mariana Costa", 16)
    const membro2 = new Aluno("Português", 60)
    const grupo = new Turma("1ºA")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Nota deve armazenar valor e a categoria vinculada", () => {
    const item = new Disciplina("Matemática", 80)
    const registro = new Nota(8.5, item)

    expect(registro.valor).toBe(8.5)
    expect(registro.disciplina).toBe(item)
})

test("Aluno deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Disciplina("Matemática", 80)
    const item2 = new Disciplina("Português", 60)
    const membro = new Aluno("Mariana Costa", 16)

    const registro1 = new Nota(8.5, item1)
    const registro2 = new Nota(7, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(8.5)
    expect(membro.registros[0].disciplina).toBe(item1)
    expect(membro.registros[1].valor).toBe(7)
    expect(membro.registros[1].disciplina).toBe(item2)
})

