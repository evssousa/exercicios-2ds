const Paciente = require("../class/Paciente")
const Cachorro = require("../class/Cachorro")
const Gato = require("../class/Gato")
const AveExotica = require("../class/AveExotica")
const Roedor = require("../class/Roedor")
const Vacina = require("../class/Vacina")
const Agenda = require("../class/Agenda")
const Atendimento = require("../class/Atendimento")
const PacienteFactory = require("../class/PacienteFactory")

test("Paciente deve armazenar nome e idade e possuir comportamento genérico", () => {
    const base = new Paciente("Agenda da manhã Base", 90)

    expect(base.nome).toBe("Agenda da manhã Base")
    expect(base.idade).toBe(90)
    expect(base.descricao()).toBe("Paciente cadastrado na clínica")
})

test("Cachorro deve herdar de Paciente e sobrescrever descricao()", () => {
    const instancia = new Cachorro("Bidu", 3)

    expect(instancia).toBeInstanceOf(Paciente)
    expect(instancia.nome).toBe("Bidu")
    expect(instancia.idade).toBe(3)
    expect(instancia.descricao()).toBe("Consulta de cachorro registrada")
})

test("Gato deve herdar de Paciente e sobrescrever descricao()", () => {
    const instancia = new Gato("V10", 12)

    expect(instancia).toBeInstanceOf(Paciente)
    expect(instancia.nome).toBe("V10")
    expect(instancia.idade).toBe(12)
    expect(instancia.descricao()).toBe("Consulta de gato registrada")
})

test("AveExotica deve herdar de Paciente e sobrescrever descricao()", () => {
    const instancia = new AveExotica("Antirrábica", 12)

    expect(instancia).toBeInstanceOf(Paciente)
    expect(instancia.nome).toBe("Antirrábica")
    expect(instancia.idade).toBe(12)
    expect(instancia.descricao()).toBe("Consulta de ave exótica registrada")
})

test("Roedor deve herdar de Paciente e sobrescrever descricao()", () => {
    const instancia = new Roedor("Agenda da manhã", 120)

    expect(instancia).toBeInstanceOf(Paciente)
    expect(instancia.nome).toBe("Agenda da manhã")
    expect(instancia.idade).toBe(120)
    expect(instancia.descricao()).toBe("Consulta de roedor registrada")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar descricao()", () => {
    const instancia0 = new Cachorro("Bidu", 3)
    const instancia1 = new Gato("V10", 12)
    const instancia2 = new AveExotica("Antirrábica", 12)
    const instancia3 = new Roedor("Agenda da manhã", 120)
    expect(instancia0.descricao()).not.toBe(instancia1.descricao())
    expect(instancia1.descricao()).not.toBe(instancia2.descricao())
    expect(instancia2.descricao()).not.toBe(instancia3.descricao())
})

test("PacienteFactory deve criar o tipo correto", () => {
    const instancia0 = PacienteFactory.criar("cachorro", "Bidu", 3)
    const instancia1 = PacienteFactory.criar("gato", "V10", 12)
    const instancia2 = PacienteFactory.criar("ave", "Antirrábica", 12)
    const instancia3 = PacienteFactory.criar("roedor", "Agenda da manhã", 120)
    expect(instancia0).toBeInstanceOf(Cachorro)
    expect(instancia1).toBeInstanceOf(Gato)
    expect(instancia2).toBeInstanceOf(AveExotica)
    expect(instancia3).toBeInstanceOf(Roedor)
})

test("PacienteFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        PacienteFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de paciente inválido")
})

test("Vacina deve armazenar nome e validadeEmMeses", () => {
    const item = new Vacina("V10", 12)

    expect(item.nome).toBe("V10")
    expect(item.validadeEmMeses).toBe(12)
})

test("Agenda deve associar membros e categorias", () => {
    const item = new Vacina("V10", 12)
    const membro = new Cachorro("Bidu", 3)
    const grupo = new Agenda("Agenda da manhã")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Agenda da manhã")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Agenda deve permitir múltiplos membros e categorias", () => {
    const item1 = new Vacina("V10", 12)
    const item2 = new Vacina("Antirrábica", 12)
    const membro1 = new Cachorro("Bidu", 3)
    const membro2 = new Cachorro("Antirrábica", 12)
    const grupo = new Agenda("Agenda da manhã")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Atendimento deve armazenar valor e a categoria vinculada", () => {
    const item = new Vacina("V10", 12)
    const registro = new Atendimento(120, item)

    expect(registro.valor).toBe(120)
    expect(registro.vacina).toBe(item)
})

test("Cachorro deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Vacina("V10", 12)
    const item2 = new Vacina("Antirrábica", 12)
    const membro = new Cachorro("Bidu", 3)

    const registro1 = new Atendimento(120, item1)
    const registro2 = new Atendimento(90, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(120)
    expect(membro.registros[0].vacina).toBe(item1)
    expect(membro.registros[1].valor).toBe(90)
    expect(membro.registros[1].vacina).toBe(item2)
})

test("Roedor deve herdar de Paciente e sobrescrever descricao()", () => {
    const instancia = new Roedor("Agenda da manhã", 120)

    expect(instancia).toBeInstanceOf(Paciente)
    expect(instancia.descricao()).toBe("Consulta de roedor registrada")
})

test("PacienteFactory deve criar um(a) Roedor", () => {
    const instancia = PacienteFactory.criar("roedor", "Agenda da manhã", 120)

    expect(instancia).toBeInstanceOf(Roedor)
})

test("Cachorro não deve aceitar um registro com valor negativo", () => {
    const item = new Vacina("V10", 12)
    const membro = new Cachorro("Bidu", 3)
    const registroInvalido = new Atendimento(-10, item)

    expect(() => {
        membro.adicionarRegistro(registroInvalido)
    }).toThrow("Valor inválido")
})

