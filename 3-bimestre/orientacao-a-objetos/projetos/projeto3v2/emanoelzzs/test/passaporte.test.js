const Passaporte = require("../Passaporte")
const Factory = require("../Factory")

test("Deve criar comum", () => {
    const obj = Factory.criar("comum", "Voo LA3210")

    expect(obj).toBeInstanceOf(Passaporte)
    expect(obj.emitir()).toBe("Passaporte comum emitido para: Voo LA3210")
})

test("Deve criar diplomatico", () => {
    const obj = Factory.criar("diplomatico", "Voo GL1450")

    expect(obj).toBeInstanceOf(Passaporte)
    expect(obj.emitir()).toBe("Passaporte diplomático emitido para: Voo GL1450")
})

test("Deve criar oficial", () => {
    const obj = Factory.criar("oficial", "Voo AZ7788")

    expect(obj).toBeInstanceOf(Passaporte)
    expect(obj.emitir()).toBe("Passaporte oficial emitido para: Voo AZ7788")
})

test("Deve criar emergencial", () => {
    const obj = Factory.criar("emergencial", "Voo TP9001")

    expect(obj).toBeInstanceOf(Passaporte)
    expect(obj.emitir()).toBe("Passaporte emergencial emitido para: Voo TP9001")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("comum", "Voo LA3210").emitir(), Factory.criar("diplomatico", "Voo LA3210").emitir(), Factory.criar("oficial", "Voo LA3210").emitir(), Factory.criar("emergencial", "Voo LA3210").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(4)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("comum", "Voo LA3210").constructor.name).toBe("Comum")
    expect(Factory.criar("diplomatico", "Voo LA3210").constructor.name).toBe("Diplomatico")
    expect(Factory.criar("oficial", "Voo LA3210").constructor.name).toBe("Oficial")
    expect(Factory.criar("emergencial", "Voo LA3210").constructor.name).toBe("Emergencial")
})

test("Todos os tipos criados devem ser Passaporte", () => {
    for (const tipo of ["comum", "diplomatico", "oficial", "emergencial"]) {
        expect(Factory.criar(tipo, "Voo LA3210")).toBeInstanceOf(Passaporte)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("provisorio-sem-registro", "Voo LA3210")
    }).toThrow("Tipo de passaporte inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("comum", "Voo GL1450")

    expect(obj.cidadao).toBe("Voo GL1450")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("diplomatico", "Voo LA3210")
    const dois = Factory.criar("diplomatico", "Voo AZ7788")

    expect(um.emitir()).toBe("Passaporte diplomático emitido para: Voo LA3210")
    expect(dois.emitir()).toBe("Passaporte diplomático emitido para: Voo AZ7788")
})

test("Deve exigir o dado obrigatório ao criar", () => {
    expect(() => {
        Factory.criar("comum", "")
    }).toThrow("Cidadão é obrigatório")
})
