const Vaga = require("../class/Vaga")
const CarroVaga = require("../class/CarroVaga")
const MotoVaga = require("../class/MotoVaga")
const Preferencial = require("../class/Preferencial")
const TarifaHora = require("../class/TarifaHora")
const SetorEstacionamento = require("../class/SetorEstacionamento")
const Cobranca = require("../class/Cobranca")
const VagaFactory = require("../class/VagaFactory")

test("Vaga deve armazenar identificador e andar e possuir comportamento genérico", () => {
    const base = new Vaga("Setor B Base", 24)

    expect(base.identificador).toBe("Setor B Base")
    expect(base.andar).toBe(24)
    expect(base.descricao()).toBe("Vaga cadastrada no sistema")
})

test("CarroVaga deve herdar de Vaga e sobrescrever descricao()", () => {
    const instancia = new CarroVaga("B12", 2)

    expect(instancia).toBeInstanceOf(Vaga)
    expect(instancia.identificador).toBe("B12")
    expect(instancia.andar).toBe(2)
    expect(instancia.descricao()).toBe("Vaga para carro liberada")
})

test("MotoVaga deve herdar de Vaga e sobrescrever descricao()", () => {
    const instancia = new MotoVaga("Horário comercial", 8)

    expect(instancia).toBeInstanceOf(Vaga)
    expect(instancia.identificador).toBe("Horário comercial")
    expect(instancia.andar).toBe(8)
    expect(instancia.descricao()).toBe("Vaga para moto liberada")
})

test("Preferencial deve herdar de Vaga e sobrescrever descricao()", () => {
    const instancia = new Preferencial("Noturna", 5)

    expect(instancia).toBeInstanceOf(Vaga)
    expect(instancia.identificador).toBe("Noturna")
    expect(instancia.andar).toBe(5)
    expect(instancia.descricao()).toBe("Vaga preferencial liberada")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar descricao()", () => {
    const instancia0 = new CarroVaga("B12", 2)
    const instancia1 = new MotoVaga("Horário comercial", 8)
    const instancia2 = new Preferencial("Noturna", 5)
    expect(instancia0.descricao()).not.toBe(instancia1.descricao())
    expect(instancia1.descricao()).not.toBe(instancia2.descricao())
})

test("VagaFactory deve criar o tipo correto", () => {
    const instancia0 = VagaFactory.criar("carro", "B12", 2)
    const instancia1 = VagaFactory.criar("moto", "Horário comercial", 8)
    const instancia2 = VagaFactory.criar("preferencial", "Noturna", 5)
    expect(instancia0).toBeInstanceOf(CarroVaga)
    expect(instancia1).toBeInstanceOf(MotoVaga)
    expect(instancia2).toBeInstanceOf(Preferencial)
})

test("VagaFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        VagaFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de vaga inválido")
})

test("TarifaHora deve armazenar nome e valorPorHora", () => {
    const item = new TarifaHora("Horário comercial", 8)

    expect(item.nome).toBe("Horário comercial")
    expect(item.valorPorHora).toBe(8)
})

test("SetorEstacionamento deve associar membros e categorias", () => {
    const item = new TarifaHora("Horário comercial", 8)
    const membro = new CarroVaga("B12", 2)
    const grupo = new SetorEstacionamento("Setor B")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Setor B")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("SetorEstacionamento deve permitir múltiplos membros e categorias", () => {
    const item1 = new TarifaHora("Horário comercial", 8)
    const item2 = new TarifaHora("Noturna", 5)
    const membro1 = new CarroVaga("B12", 2)
    const membro2 = new CarroVaga("Noturna", 5)
    const grupo = new SetorEstacionamento("Setor B")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Cobranca deve armazenar valor e a categoria vinculada", () => {
    const item = new TarifaHora("Horário comercial", 8)
    const registro = new Cobranca(16, item)

    expect(registro.valor).toBe(16)
    expect(registro.tarifaHora).toBe(item)
})

test("CarroVaga deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new TarifaHora("Horário comercial", 8)
    const item2 = new TarifaHora("Noturna", 5)
    const membro = new CarroVaga("B12", 2)

    const registro1 = new Cobranca(16, item1)
    const registro2 = new Cobranca(24, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(16)
    expect(membro.registros[0].tarifaHora).toBe(item1)
    expect(membro.registros[1].valor).toBe(24)
    expect(membro.registros[1].tarifaHora).toBe(item2)
})

