const Caso = require("../class/Caso")
const Civil = require("../class/Civil")
const Trabalhista = require("../class/Trabalhista")
const Criminal = require("../class/Criminal")
const Tributario = require("../class/Tributario")
const Instancia = require("../class/Instancia")
const CarteiraJuridica = require("../class/CarteiraJuridica")
const Audiencia = require("../class/Audiencia")
const CasoFactory = require("../class/CasoFactory")

test("Caso deve armazenar nomeDoCliente e numeroDoProcesso e possuir comportamento genérico", () => {
    const base = new Caso("Carteira Cível Base", 90)

    expect(base.nomeDoCliente).toBe("Carteira Cível Base")
    expect(base.numeroDoProcesso).toBe(90)
    expect(base.resumo()).toBe("Caso registrado no sistema")
})

test("Civil deve herdar de Caso e sobrescrever resumo()", () => {
    const instancia = new Civil("Débora Azevedo", 88213)

    expect(instancia).toBeInstanceOf(Caso)
    expect(instancia.nomeDoCliente).toBe("Débora Azevedo")
    expect(instancia.numeroDoProcesso).toBe(88213)
    expect(instancia.resumo()).toBe("Caso cível em andamento")
})

test("Trabalhista deve herdar de Caso e sobrescrever resumo()", () => {
    const instancia = new Trabalhista("1ª Instância", 30)

    expect(instancia).toBeInstanceOf(Caso)
    expect(instancia.nomeDoCliente).toBe("1ª Instância")
    expect(instancia.numeroDoProcesso).toBe(30)
    expect(instancia.resumo()).toBe("Caso trabalhista em andamento")
})

test("Criminal deve herdar de Caso e sobrescrever resumo()", () => {
    const instancia = new Criminal("2ª Instância", 60)

    expect(instancia).toBeInstanceOf(Caso)
    expect(instancia.nomeDoCliente).toBe("2ª Instância")
    expect(instancia.numeroDoProcesso).toBe(60)
    expect(instancia.resumo()).toBe("Caso criminal em andamento")
})

test("Tributario deve herdar de Caso e sobrescrever resumo()", () => {
    const instancia = new Tributario("Carteira Cível", 60)

    expect(instancia).toBeInstanceOf(Caso)
    expect(instancia.nomeDoCliente).toBe("Carteira Cível")
    expect(instancia.numeroDoProcesso).toBe(60)
    expect(instancia.resumo()).toBe("Caso tributário em andamento")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar resumo()", () => {
    const instancia0 = new Civil("Débora Azevedo", 88213)
    const instancia1 = new Trabalhista("1ª Instância", 30)
    const instancia2 = new Criminal("2ª Instância", 60)
    const instancia3 = new Tributario("Carteira Cível", 60)
    expect(instancia0.resumo()).not.toBe(instancia1.resumo())
    expect(instancia1.resumo()).not.toBe(instancia2.resumo())
    expect(instancia2.resumo()).not.toBe(instancia3.resumo())
})

test("CasoFactory deve criar o tipo correto", () => {
    const instancia0 = CasoFactory.criar("civil", "Débora Azevedo", 88213)
    const instancia1 = CasoFactory.criar("trabalhista", "1ª Instância", 30)
    const instancia2 = CasoFactory.criar("criminal", "2ª Instância", 60)
    const instancia3 = CasoFactory.criar("tributario", "Carteira Cível", 60)
    expect(instancia0).toBeInstanceOf(Civil)
    expect(instancia1).toBeInstanceOf(Trabalhista)
    expect(instancia2).toBeInstanceOf(Criminal)
    expect(instancia3).toBeInstanceOf(Tributario)
})

test("CasoFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        CasoFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de caso inválido")
})

test("Instancia deve armazenar nome e prazoEmDias", () => {
    const item = new Instancia("1ª Instância", 30)

    expect(item.nome).toBe("1ª Instância")
    expect(item.prazoEmDias).toBe(30)
})

test("CarteiraJuridica deve associar membros e categorias", () => {
    const item = new Instancia("1ª Instância", 30)
    const membro = new Civil("Débora Azevedo", 88213)
    const grupo = new CarteiraJuridica("Carteira Cível")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Carteira Cível")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("CarteiraJuridica deve permitir múltiplos membros e categorias", () => {
    const item1 = new Instancia("1ª Instância", 30)
    const item2 = new Instancia("2ª Instância", 60)
    const membro1 = new Civil("Débora Azevedo", 88213)
    const membro2 = new Civil("2ª Instância", 60)
    const grupo = new CarteiraJuridica("Carteira Cível")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Audiencia deve armazenar valor e a categoria vinculada", () => {
    const item = new Instancia("1ª Instância", 30)
    const registro = new Audiencia(60, item)

    expect(registro.valor).toBe(60)
    expect(registro.instancia).toBe(item)
})

test("Civil deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Instancia("1ª Instância", 30)
    const item2 = new Instancia("2ª Instância", 60)
    const membro = new Civil("Débora Azevedo", 88213)

    const registro1 = new Audiencia(60, item1)
    const registro2 = new Audiencia(90, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(60)
    expect(membro.registros[0].instancia).toBe(item1)
    expect(membro.registros[1].valor).toBe(90)
    expect(membro.registros[1].instancia).toBe(item2)
})

test("Tributario deve herdar de Caso e sobrescrever resumo()", () => {
    const instancia = new Tributario("Carteira Cível", 60)

    expect(instancia).toBeInstanceOf(Caso)
    expect(instancia.resumo()).toBe("Caso tributário em andamento")
})

test("CasoFactory deve criar um(a) Tributario", () => {
    const instancia = CasoFactory.criar("tributario", "Carteira Cível", 60)

    expect(instancia).toBeInstanceOf(Tributario)
})

test("Civil não deve aceitar um registro com valor negativo", () => {
    const item = new Instancia("1ª Instância", 30)
    const membro = new Civil("Débora Azevedo", 88213)
    const registroInvalido = new Audiencia(-10, item)

    expect(() => {
        membro.adicionarRegistro(registroInvalido)
    }).toThrow("Valor inválido")
})

