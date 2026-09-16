const VeiculoPublico = require("../class/VeiculoPublico")
const Onibus = require("../class/Onibus")
const Metro = require("../class/Metro")
const VanEscolar = require("../class/VanEscolar")
const Linha = require("../class/Linha")
const FrotaMunicipal = require("../class/FrotaMunicipal")
const Viagem = require("../class/Viagem")
const VeiculoPublicoFactory = require("../class/VeiculoPublicoFactory")

test("VeiculoPublico deve armazenar identificador e capacidadeDePassageiros e possuir comportamento genérico", () => {
    const base = new VeiculoPublico("Frota Zona Leste Base", 42)

    expect(base.identificador).toBe("Frota Zona Leste Base")
    expect(base.capacidadeDePassageiros).toBe(42)
    expect(base.descricao()).toBe("Veículo cadastrado na frota")
})

test("Onibus deve herdar de VeiculoPublico e sobrescrever descricao()", () => {
    const instancia = new Onibus("OB-2201", 44)

    expect(instancia).toBeInstanceOf(VeiculoPublico)
    expect(instancia.identificador).toBe("OB-2201")
    expect(instancia.capacidadeDePassageiros).toBe(44)
    expect(instancia.descricao()).toBe("Ônibus liberado para circulação")
})

test("Metro deve herdar de VeiculoPublico e sobrescrever descricao()", () => {
    const instancia = new Metro("Linha 100", 12)

    expect(instancia).toBeInstanceOf(VeiculoPublico)
    expect(instancia.identificador).toBe("Linha 100")
    expect(instancia.capacidadeDePassageiros).toBe(12)
    expect(instancia.descricao()).toBe("Trem de metrô liberado para circulação")
})

test("VanEscolar deve herdar de VeiculoPublico e sobrescrever descricao()", () => {
    const instancia = new VanEscolar("Linha 205", 18)

    expect(instancia).toBeInstanceOf(VeiculoPublico)
    expect(instancia.identificador).toBe("Linha 205")
    expect(instancia.capacidadeDePassageiros).toBe(18)
    expect(instancia.descricao()).toBe("Van liberada para circulação")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar descricao()", () => {
    const instancia0 = new Onibus("OB-2201", 44)
    const instancia1 = new Metro("Linha 100", 12)
    const instancia2 = new VanEscolar("Linha 205", 18)
    expect(instancia0.descricao()).not.toBe(instancia1.descricao())
    expect(instancia1.descricao()).not.toBe(instancia2.descricao())
})

test("VeiculoPublicoFactory deve criar o tipo correto", () => {
    const instancia0 = VeiculoPublicoFactory.criar("onibus", "OB-2201", 44)
    const instancia1 = VeiculoPublicoFactory.criar("metro", "Linha 100", 12)
    const instancia2 = VeiculoPublicoFactory.criar("van", "Linha 205", 18)
    expect(instancia0).toBeInstanceOf(Onibus)
    expect(instancia1).toBeInstanceOf(Metro)
    expect(instancia2).toBeInstanceOf(VanEscolar)
})

test("VeiculoPublicoFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        VeiculoPublicoFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de veículo inválido")
})

test("Linha deve armazenar nome e extensaoEmKm", () => {
    const item = new Linha("Linha 100", 12)

    expect(item.nome).toBe("Linha 100")
    expect(item.extensaoEmKm).toBe(12)
})

test("FrotaMunicipal deve associar membros e categorias", () => {
    const item = new Linha("Linha 100", 12)
    const membro = new Onibus("OB-2201", 44)
    const grupo = new FrotaMunicipal("Frota Zona Leste")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Frota Zona Leste")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("FrotaMunicipal deve permitir múltiplos membros e categorias", () => {
    const item1 = new Linha("Linha 100", 12)
    const item2 = new Linha("Linha 205", 18)
    const membro1 = new Onibus("OB-2201", 44)
    const membro2 = new Onibus("Linha 205", 18)
    const grupo = new FrotaMunicipal("Frota Zona Leste")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Viagem deve armazenar valor e a categoria vinculada", () => {
    const item = new Linha("Linha 100", 12)
    const registro = new Viagem(38, item)

    expect(registro.valor).toBe(38)
    expect(registro.linha).toBe(item)
})

test("Onibus deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Linha("Linha 100", 12)
    const item2 = new Linha("Linha 205", 18)
    const membro = new Onibus("OB-2201", 44)

    const registro1 = new Viagem(38, item1)
    const registro2 = new Viagem(42, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(38)
    expect(membro.registros[0].linha).toBe(item1)
    expect(membro.registros[1].valor).toBe(42)
    expect(membro.registros[1].linha).toBe(item2)
})

