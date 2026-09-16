const Veiculo = require("../class/Veiculo")
const Carro = require("../class/Carro")
const Moto = require("../class/Moto")
const Caminhao = require("../class/Caminhao")
const Versao = require("../class/Versao")
const Frota = require("../class/Frota")
const Manutencao = require("../class/Manutencao")
const VeiculoFactory = require("../class/VeiculoFactory")

test("Veiculo deve armazenar modelo e anoDeFabricacao e possuir comportamento genérico", () => {
    const base = new Veiculo("Frota Centro Base", 430)

    expect(base.modelo).toBe("Frota Centro Base")
    expect(base.anoDeFabricacao).toBe(430)
    expect(base.detalhes()).toBe("Veículo cadastrado no sistema")
})

test("Carro deve herdar de Veiculo e sobrescrever detalhes()", () => {
    const instancia = new Carro("Civic", 2022)

    expect(instancia).toBeInstanceOf(Veiculo)
    expect(instancia.modelo).toBe("Civic")
    expect(instancia.anoDeFabricacao).toBe(2022)
    expect(instancia.detalhes()).toBe("Carro disponível para retirada")
})

test("Moto deve herdar de Veiculo e sobrescrever detalhes()", () => {
    const instancia = new Moto("Turbo", 180)

    expect(instancia).toBeInstanceOf(Veiculo)
    expect(instancia.modelo).toBe("Turbo")
    expect(instancia.anoDeFabricacao).toBe(180)
    expect(instancia.detalhes()).toBe("Moto disponível para retirada")
})

test("Caminhao deve herdar de Veiculo e sobrescrever detalhes()", () => {
    const instancia = new Caminhao("Aspirada", 120)

    expect(instancia).toBeInstanceOf(Veiculo)
    expect(instancia.modelo).toBe("Aspirada")
    expect(instancia.anoDeFabricacao).toBe(120)
    expect(instancia.detalhes()).toBe("Caminhão disponível para retirada")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar detalhes()", () => {
    const instancia0 = new Carro("Civic", 2022)
    const instancia1 = new Moto("Turbo", 180)
    const instancia2 = new Caminhao("Aspirada", 120)
    expect(instancia0.detalhes()).not.toBe(instancia1.detalhes())
    expect(instancia1.detalhes()).not.toBe(instancia2.detalhes())
})

test("VeiculoFactory deve criar o tipo correto", () => {
    const instancia0 = VeiculoFactory.criar("carro", "Civic", 2022)
    const instancia1 = VeiculoFactory.criar("moto", "Turbo", 180)
    const instancia2 = VeiculoFactory.criar("caminhao", "Aspirada", 120)
    expect(instancia0).toBeInstanceOf(Carro)
    expect(instancia1).toBeInstanceOf(Moto)
    expect(instancia2).toBeInstanceOf(Caminhao)
})

test("VeiculoFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        VeiculoFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de veículo inválido")
})

test("Versao deve armazenar nome e potencia", () => {
    const item = new Versao("Turbo", 180)

    expect(item.nome).toBe("Turbo")
    expect(item.potencia).toBe(180)
})

test("Frota deve associar membros e categorias", () => {
    const item = new Versao("Turbo", 180)
    const membro = new Carro("Civic", 2022)
    const grupo = new Frota("Frota Centro")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Frota Centro")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Frota deve permitir múltiplos membros e categorias", () => {
    const item1 = new Versao("Turbo", 180)
    const item2 = new Versao("Aspirada", 120)
    const membro1 = new Carro("Civic", 2022)
    const membro2 = new Carro("Aspirada", 120)
    const grupo = new Frota("Frota Centro")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Manutencao deve armazenar valor e a categoria vinculada", () => {
    const item = new Versao("Turbo", 180)
    const registro = new Manutencao(850, item)

    expect(registro.valor).toBe(850)
    expect(registro.versao).toBe(item)
})

test("Carro deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Versao("Turbo", 180)
    const item2 = new Versao("Aspirada", 120)
    const membro = new Carro("Civic", 2022)

    const registro1 = new Manutencao(850, item1)
    const registro2 = new Manutencao(430, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(850)
    expect(membro.registros[0].versao).toBe(item1)
    expect(membro.registros[1].valor).toBe(430)
    expect(membro.registros[1].versao).toBe(item2)
})

