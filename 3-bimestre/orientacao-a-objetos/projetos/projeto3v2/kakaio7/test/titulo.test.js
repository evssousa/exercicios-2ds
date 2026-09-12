const Titulo = require("../Titulo")
const Factory = require("../Factory")

test("Deve criar cavaleiro", () => {
    const obj = Factory.criar("cavaleiro", "Thorin")

    expect(obj).toBeInstanceOf(Titulo)
    expect(obj.emitir()).toBe("Título de cavaleiro concedido a: Thorin")
})

test("Deve criar mago", () => {
    const obj = Factory.criar("mago", "Merlin")

    expect(obj).toBeInstanceOf(Titulo)
    expect(obj.emitir()).toBe("Título de mago concedido a: Merlin")
})

test("Deve criar campeao", () => {
    const obj = Factory.criar("campeao", "Sylvas")

    expect(obj).toBeInstanceOf(Titulo)
    expect(obj.emitir()).toBe("Título de campeão concedido a: Sylvas")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("cavaleiro", "Thorin").emitir(), Factory.criar("mago", "Thorin").emitir(), Factory.criar("campeao", "Thorin").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("cavaleiro", "Thorin").constructor.name).toBe("Cavaleiro")
    expect(Factory.criar("mago", "Thorin").constructor.name).toBe("Mago")
    expect(Factory.criar("campeao", "Thorin").constructor.name).toBe("Campeao")
})

test("Todos os tipos criados devem ser Titulo", () => {
    for (const tipo of ["cavaleiro", "mago", "campeao"]) {
        expect(Factory.criar(tipo, "Thorin")).toBeInstanceOf(Titulo)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("aprendiz-sem-treino", "Thorin")
    }).toThrow("Tipo de título inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("cavaleiro", "Merlin")

    expect(obj.personagem).toBe("Merlin")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("mago", "Thorin")
    const dois = Factory.criar("mago", "Sylvas")

    expect(um.emitir()).toBe("Título de mago concedido a: Thorin")
    expect(dois.emitir()).toBe("Título de mago concedido a: Sylvas")
})
