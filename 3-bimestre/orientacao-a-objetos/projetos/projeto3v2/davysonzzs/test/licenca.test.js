const Licenca = require("../Licenca")
const Factory = require("../Factory")

test("Deve criar trial", () => {
    const obj = Factory.criar("trial", "Fábio Teixeira")

    expect(obj).toBeInstanceOf(Licenca)
    expect(obj.emitir()).toBe("Licença trial emitida para: Fábio Teixeira")
})

test("Deve criar mensal", () => {
    const obj = Factory.criar("mensal", "Renata Alves")

    expect(obj).toBeInstanceOf(Licenca)
    expect(obj.emitir()).toBe("Licença mensal emitida para: Renata Alves")
})

test("Deve criar anual", () => {
    const obj = Factory.criar("anual", "Cláudio Matos")

    expect(obj).toBeInstanceOf(Licenca)
    expect(obj.emitir()).toBe("Licença anual emitida para: Cláudio Matos")
})

test("Deve criar vitalicia", () => {
    const obj = Factory.criar("vitalicia", "Empresa Delta")

    expect(obj).toBeInstanceOf(Licenca)
    expect(obj.emitir()).toBe("Licença vitalícia emitida para: Empresa Delta")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("trial", "Fábio Teixeira").emitir(), Factory.criar("mensal", "Fábio Teixeira").emitir(), Factory.criar("anual", "Fábio Teixeira").emitir(), Factory.criar("vitalicia", "Fábio Teixeira").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(4)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("trial", "Fábio Teixeira").constructor.name).toBe("Trial")
    expect(Factory.criar("mensal", "Fábio Teixeira").constructor.name).toBe("Mensal")
    expect(Factory.criar("anual", "Fábio Teixeira").constructor.name).toBe("Anual")
    expect(Factory.criar("vitalicia", "Fábio Teixeira").constructor.name).toBe("Vitalicia")
})

test("Todos os tipos criados devem ser Licenca", () => {
    for (const tipo of ["trial", "mensal", "anual", "vitalicia"]) {
        expect(Factory.criar(tipo, "Fábio Teixeira")).toBeInstanceOf(Licenca)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("pirata", "Fábio Teixeira")
    }).toThrow("Tipo de licença inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("trial", "Renata Alves")

    expect(obj.cliente).toBe("Renata Alves")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("mensal", "Fábio Teixeira")
    const dois = Factory.criar("mensal", "Cláudio Matos")

    expect(um.emitir()).toBe("Licença mensal emitida para: Fábio Teixeira")
    expect(dois.emitir()).toBe("Licença mensal emitida para: Cláudio Matos")
})

test("Deve exigir o dado obrigatório ao criar", () => {
    expect(() => {
        Factory.criar("trial", "")
    }).toThrow("Cliente é obrigatório")
})
