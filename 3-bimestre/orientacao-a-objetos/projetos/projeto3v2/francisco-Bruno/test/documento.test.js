const Documento = require("../Documento")
const Factory = require("../Factory")

test("Deve criar certidaoNascimento", () => {
    const obj = Factory.criar("certidaoNascimento", "Bruno Souza")

    expect(obj).toBeInstanceOf(Documento)
    expect(obj.emitir()).toBe("Certidão de nascimento emitida para: Bruno Souza")
})

test("Deve criar certidaoCasamento", () => {
    const obj = Factory.criar("certidaoCasamento", "Helena Dias")

    expect(obj).toBeInstanceOf(Documento)
    expect(obj.emitir()).toBe("Certidão de casamento emitida para: Helena Dias")
})

test("Deve criar certidaoObito", () => {
    const obj = Factory.criar("certidaoObito", "Otávio Ramos")

    expect(obj).toBeInstanceOf(Documento)
    expect(obj.emitir()).toBe("Certidão de óbito emitida para: Otávio Ramos")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("certidaoNascimento", "Bruno Souza").emitir(), Factory.criar("certidaoCasamento", "Bruno Souza").emitir(), Factory.criar("certidaoObito", "Bruno Souza").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("certidaoNascimento", "Bruno Souza").constructor.name).toBe("CertidaoNascimento")
    expect(Factory.criar("certidaoCasamento", "Bruno Souza").constructor.name).toBe("CertidaoCasamento")
    expect(Factory.criar("certidaoObito", "Bruno Souza").constructor.name).toBe("CertidaoObito")
})

test("Todos os tipos criados devem ser Documento", () => {
    for (const tipo of ["certidaoNascimento", "certidaoCasamento", "certidaoObito"]) {
        expect(Factory.criar(tipo, "Bruno Souza")).toBeInstanceOf(Documento)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("reconhecimento-firma", "Bruno Souza")
    }).toThrow("Tipo de documento inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("certidaoNascimento", "Helena Dias")

    expect(obj.cidadao).toBe("Helena Dias")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("certidaoCasamento", "Bruno Souza")
    const dois = Factory.criar("certidaoCasamento", "Otávio Ramos")

    expect(um.emitir()).toBe("Certidão de casamento emitida para: Bruno Souza")
    expect(dois.emitir()).toBe("Certidão de casamento emitida para: Otávio Ramos")
})
