const Contrato = require("../Contrato")
const Factory = require("../Factory")

test("Deve criar diaria", () => {
    const obj = Factory.criar("diaria", "ABC1D23")

    expect(obj).toBeInstanceOf(Contrato)
    expect(obj.emitir()).toBe("Contrato de locação diária emitido para: ABC1D23")
})

test("Deve criar semanal", () => {
    const obj = Factory.criar("semanal", "XYZ9K88")

    expect(obj).toBeInstanceOf(Contrato)
    expect(obj.emitir()).toBe("Contrato de locação semanal emitido para: XYZ9K88")
})

test("Deve criar mensal", () => {
    const obj = Factory.criar("mensal", "PIA4T50")

    expect(obj).toBeInstanceOf(Contrato)
    expect(obj.emitir()).toBe("Contrato de locação mensal emitido para: PIA4T50")
})

test("Deve criar anual", () => {
    const obj = Factory.criar("anual", "QRS2W11")

    expect(obj).toBeInstanceOf(Contrato)
    expect(obj.emitir()).toBe("Contrato de locação anual emitido para: QRS2W11")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("diaria", "ABC1D23").emitir(), Factory.criar("semanal", "ABC1D23").emitir(), Factory.criar("mensal", "ABC1D23").emitir(), Factory.criar("anual", "ABC1D23").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(4)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("diaria", "ABC1D23").constructor.name).toBe("Diaria")
    expect(Factory.criar("semanal", "ABC1D23").constructor.name).toBe("Semanal")
    expect(Factory.criar("mensal", "ABC1D23").constructor.name).toBe("Mensal")
    expect(Factory.criar("anual", "ABC1D23").constructor.name).toBe("Anual")
})

test("Todos os tipos criados devem ser Contrato", () => {
    for (const tipo of ["diaria", "semanal", "mensal", "anual"]) {
        expect(Factory.criar(tipo, "ABC1D23")).toBeInstanceOf(Contrato)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("locacao-com-opcao-compra", "ABC1D23")
    }).toThrow("Tipo de contrato inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("diaria", "XYZ9K88")

    expect(obj.cliente).toBe("XYZ9K88")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("semanal", "ABC1D23")
    const dois = Factory.criar("semanal", "PIA4T50")

    expect(um.emitir()).toBe("Contrato de locação semanal emitido para: ABC1D23")
    expect(dois.emitir()).toBe("Contrato de locação semanal emitido para: PIA4T50")
})

test("Deve exigir o dado obrigatório ao criar", () => {
    expect(() => {
        Factory.criar("diaria", "")
    }).toThrow("Cliente é obrigatório")
})
