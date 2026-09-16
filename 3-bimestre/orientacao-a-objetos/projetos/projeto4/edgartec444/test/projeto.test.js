const Plano = require("../class/Plano")
const Mensal = require("../class/Mensal")
const Trimestral = require("../class/Trimestral")
const Anual = require("../class/Anual")
const Modalidade = require("../class/Modalidade")
const Turma = require("../class/Turma")
const Frequencia = require("../class/Frequencia")
const PlanoFactory = require("../class/PlanoFactory")

test("Plano deve armazenar nomeDoTitular e duracaoEmMeses e possuir comportamento genérico", () => {
    const base = new Plano("Turma da manhã Base", 2)

    expect(base.nomeDoTitular).toBe("Turma da manhã Base")
    expect(base.duracaoEmMeses).toBe(2)
    expect(base.resumo()).toBe("Plano registrado no sistema")
})

test("Mensal deve herdar de Plano e sobrescrever resumo()", () => {
    const instancia = new Mensal("Marcos Vinícius", 12)

    expect(instancia).toBeInstanceOf(Plano)
    expect(instancia.nomeDoTitular).toBe("Marcos Vinícius")
    expect(instancia.duracaoEmMeses).toBe(12)
    expect(instancia.resumo()).toBe("Plano mensal ativado")
})

test("Trimestral deve herdar de Plano e sobrescrever resumo()", () => {
    const instancia = new Trimestral("Musculação", 3)

    expect(instancia).toBeInstanceOf(Plano)
    expect(instancia.nomeDoTitular).toBe("Musculação")
    expect(instancia.duracaoEmMeses).toBe(3)
    expect(instancia.resumo()).toBe("Plano trimestral ativado")
})

test("Anual deve herdar de Plano e sobrescrever resumo()", () => {
    const instancia = new Anual("Funcional", 5)

    expect(instancia).toBeInstanceOf(Plano)
    expect(instancia.nomeDoTitular).toBe("Funcional")
    expect(instancia.duracaoEmMeses).toBe(5)
    expect(instancia.resumo()).toBe("Plano anual ativado")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar resumo()", () => {
    const instancia0 = new Mensal("Marcos Vinícius", 12)
    const instancia1 = new Trimestral("Musculação", 3)
    const instancia2 = new Anual("Funcional", 5)
    expect(instancia0.resumo()).not.toBe(instancia1.resumo())
    expect(instancia1.resumo()).not.toBe(instancia2.resumo())
})

test("PlanoFactory deve criar o tipo correto", () => {
    const instancia0 = PlanoFactory.criar("mensal", "Marcos Vinícius", 12)
    const instancia1 = PlanoFactory.criar("trimestral", "Musculação", 3)
    const instancia2 = PlanoFactory.criar("anual", "Funcional", 5)
    expect(instancia0).toBeInstanceOf(Mensal)
    expect(instancia1).toBeInstanceOf(Trimestral)
    expect(instancia2).toBeInstanceOf(Anual)
})

test("PlanoFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        PlanoFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de plano inválido")
})

test("Modalidade deve armazenar nome e intensidade", () => {
    const item = new Modalidade("Musculação", 3)

    expect(item.nome).toBe("Musculação")
    expect(item.intensidade).toBe(3)
})

test("Turma deve associar membros e categorias", () => {
    const item = new Modalidade("Musculação", 3)
    const membro = new Mensal("Marcos Vinícius", 12)
    const grupo = new Turma("Turma da manhã")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Turma da manhã")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Turma deve permitir múltiplos membros e categorias", () => {
    const item1 = new Modalidade("Musculação", 3)
    const item2 = new Modalidade("Funcional", 5)
    const membro1 = new Mensal("Marcos Vinícius", 12)
    const membro2 = new Mensal("Funcional", 5)
    const grupo = new Turma("Turma da manhã")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Frequencia deve armazenar valor e a categoria vinculada", () => {
    const item = new Modalidade("Musculação", 3)
    const registro = new Frequencia(4, item)

    expect(registro.valor).toBe(4)
    expect(registro.modalidade).toBe(item)
})

test("Mensal deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Modalidade("Musculação", 3)
    const item2 = new Modalidade("Funcional", 5)
    const membro = new Mensal("Marcos Vinícius", 12)

    const registro1 = new Frequencia(4, item1)
    const registro2 = new Frequencia(2, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(4)
    expect(membro.registros[0].modalidade).toBe(item1)
    expect(membro.registros[1].valor).toBe(2)
    expect(membro.registros[1].modalidade).toBe(item2)
})

