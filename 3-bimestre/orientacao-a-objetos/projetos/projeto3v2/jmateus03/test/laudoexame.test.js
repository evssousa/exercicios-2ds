const LaudoExame = require("../LaudoExame")
const Factory = require("../Factory")

test("Deve criar sangue", () => {
    const obj = Factory.criar("sangue", "Mateus Viana")

    expect(obj).toBeInstanceOf(LaudoExame)
    expect(obj.emitir()).toBe("Laudo de exame de sangue emitido para: Mateus Viana")
})

test("Deve criar raiox", () => {
    const obj = Factory.criar("raiox", "Joana Prado")

    expect(obj).toBeInstanceOf(LaudoExame)
    expect(obj.emitir()).toBe("Laudo de raio-x emitido para: Joana Prado")
})

test("Deve criar ultrassom", () => {
    const obj = Factory.criar("ultrassom", "Nilton Cruz")

    expect(obj).toBeInstanceOf(LaudoExame)
    expect(obj.emitir()).toBe("Laudo de ultrassom emitido para: Nilton Cruz")
})

test("Deve criar ressonancia", () => {
    const obj = Factory.criar("ressonancia", "Sérgio Aquino")

    expect(obj).toBeInstanceOf(LaudoExame)
    expect(obj.emitir()).toBe("Laudo de ressonância emitido para: Sérgio Aquino")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("sangue", "Mateus Viana").emitir(), Factory.criar("raiox", "Mateus Viana").emitir(), Factory.criar("ultrassom", "Mateus Viana").emitir(), Factory.criar("ressonancia", "Mateus Viana").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(4)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("sangue", "Mateus Viana").constructor.name).toBe("Sangue")
    expect(Factory.criar("raiox", "Mateus Viana").constructor.name).toBe("RaioX")
    expect(Factory.criar("ultrassom", "Mateus Viana").constructor.name).toBe("Ultrassom")
    expect(Factory.criar("ressonancia", "Mateus Viana").constructor.name).toBe("Ressonancia")
})

test("Todos os tipos criados devem ser LaudoExame", () => {
    for (const tipo of ["sangue", "raiox", "ultrassom", "ressonancia"]) {
        expect(Factory.criar(tipo, "Mateus Viana")).toBeInstanceOf(LaudoExame)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("tomografia-sem-solicitacao", "Mateus Viana")
    }).toThrow("Tipo de laudo inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("sangue", "Joana Prado")

    expect(obj.paciente).toBe("Joana Prado")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("raiox", "Mateus Viana")
    const dois = Factory.criar("raiox", "Nilton Cruz")

    expect(um.emitir()).toBe("Laudo de raio-x emitido para: Mateus Viana")
    expect(dois.emitir()).toBe("Laudo de raio-x emitido para: Nilton Cruz")
})

test("Deve exigir o dado obrigatório ao criar", () => {
    expect(() => {
        Factory.criar("sangue", "")
    }).toThrow("Paciente é obrigatório")
})
