const Profissional = require("../class/Profissional")
const Medico = require("../class/Medico")
const Enfermeiro = require("../class/Enfermeiro")
const Recepcionista = require("../class/Recepcionista")
const Especialidade = require("../class/Especialidade")
const Setor = require("../class/Setor")
const Atendimento = require("../class/Atendimento")
const ProfissionalFactory = require("../class/ProfissionalFactory")

test("Profissional deve armazenar nome e idade e possuir comportamento genérico", () => {
    const base = new Profissional("Setor Norte Base", 45)

    expect(base.nome).toBe("Setor Norte Base")
    expect(base.idade).toBe(45)
    expect(base.atuacao()).toBe("Profissional cadastrado no sistema")
})

test("Medico deve herdar de Profissional e sobrescrever atuacao()", () => {
    const instancia = new Medico("Fábio Nogueira", 41)

    expect(instancia).toBeInstanceOf(Profissional)
    expect(instancia.nome).toBe("Fábio Nogueira")
    expect(instancia.idade).toBe(41)
    expect(instancia.atuacao()).toBe("Atendimento médico realizado")
})

test("Enfermeiro deve herdar de Profissional e sobrescrever atuacao()", () => {
    const instancia = new Enfermeiro("Cardiologia", 40)

    expect(instancia).toBeInstanceOf(Profissional)
    expect(instancia.nome).toBe("Cardiologia")
    expect(instancia.idade).toBe(40)
    expect(instancia.atuacao()).toBe("Atendimento de enfermagem realizado")
})

test("Recepcionista deve herdar de Profissional e sobrescrever atuacao()", () => {
    const instancia = new Recepcionista("Pediatria", 30)

    expect(instancia).toBeInstanceOf(Profissional)
    expect(instancia.nome).toBe("Pediatria")
    expect(instancia.idade).toBe(30)
    expect(instancia.atuacao()).toBe("Atendimento de recepção realizado")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar atuacao()", () => {
    const instancia0 = new Medico("Fábio Nogueira", 41)
    const instancia1 = new Enfermeiro("Cardiologia", 40)
    const instancia2 = new Recepcionista("Pediatria", 30)
    expect(instancia0.atuacao()).not.toBe(instancia1.atuacao())
    expect(instancia1.atuacao()).not.toBe(instancia2.atuacao())
})

test("ProfissionalFactory deve criar o tipo correto", () => {
    const instancia0 = ProfissionalFactory.criar("medico", "Fábio Nogueira", 41)
    const instancia1 = ProfissionalFactory.criar("enfermeiro", "Cardiologia", 40)
    const instancia2 = ProfissionalFactory.criar("recepcionista", "Pediatria", 30)
    expect(instancia0).toBeInstanceOf(Medico)
    expect(instancia1).toBeInstanceOf(Enfermeiro)
    expect(instancia2).toBeInstanceOf(Recepcionista)
})

test("ProfissionalFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        ProfissionalFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de profissional inválido")
})

test("Especialidade deve armazenar nome e cargaHoraria", () => {
    const item = new Especialidade("Cardiologia", 40)

    expect(item.nome).toBe("Cardiologia")
    expect(item.cargaHoraria).toBe(40)
})

test("Setor deve associar membros e categorias", () => {
    const item = new Especialidade("Cardiologia", 40)
    const membro = new Medico("Fábio Nogueira", 41)
    const grupo = new Setor("Setor Norte")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Setor Norte")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Setor deve permitir múltiplos membros e categorias", () => {
    const item1 = new Especialidade("Cardiologia", 40)
    const item2 = new Especialidade("Pediatria", 30)
    const membro1 = new Medico("Fábio Nogueira", 41)
    const membro2 = new Medico("Pediatria", 30)
    const grupo = new Setor("Setor Norte")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Atendimento deve armazenar valor e a categoria vinculada", () => {
    const item = new Especialidade("Cardiologia", 40)
    const registro = new Atendimento(30, item)

    expect(registro.valor).toBe(30)
    expect(registro.especialidade).toBe(item)
})

test("Medico deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Especialidade("Cardiologia", 40)
    const item2 = new Especialidade("Pediatria", 30)
    const membro = new Medico("Fábio Nogueira", 41)

    const registro1 = new Atendimento(30, item1)
    const registro2 = new Atendimento(45, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(30)
    expect(membro.registros[0].especialidade).toBe(item1)
    expect(membro.registros[1].valor).toBe(45)
    expect(membro.registros[1].especialidade).toBe(item2)
})

