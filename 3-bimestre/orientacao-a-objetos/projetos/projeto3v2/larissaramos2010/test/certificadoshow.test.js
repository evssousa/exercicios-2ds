const CertificadoShow = require("../CertificadoShow")
const Factory = require("../Factory")

test("Deve criar abertura", () => {
    const obj = Factory.criar("abertura", "Tempo Perdido")

    expect(obj).toBeInstanceOf(CertificadoShow)
    expect(obj.emitir()).toBe("Certificado de show de abertura emitido para: Tempo Perdido")
})

test("Deve criar principal", () => {
    const obj = Factory.criar("principal", "Evidências")

    expect(obj).toBeInstanceOf(CertificadoShow)
    expect(obj.emitir()).toBe("Certificado de show principal emitido para: Evidências")
})

test("Deve criar encerramento", () => {
    const obj = Factory.criar("encerramento", "Aquarela")

    expect(obj).toBeInstanceOf(CertificadoShow)
    expect(obj.emitir()).toBe("Certificado de show de encerramento emitido para: Aquarela")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("abertura", "Tempo Perdido").emitir(), Factory.criar("principal", "Tempo Perdido").emitir(), Factory.criar("encerramento", "Tempo Perdido").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("abertura", "Tempo Perdido").constructor.name).toBe("Abertura")
    expect(Factory.criar("principal", "Tempo Perdido").constructor.name).toBe("Principal")
    expect(Factory.criar("encerramento", "Tempo Perdido").constructor.name).toBe("Encerramento")
})

test("Todos os tipos criados devem ser CertificadoShow", () => {
    for (const tipo of ["abertura", "principal", "encerramento"]) {
        expect(Factory.criar(tipo, "Tempo Perdido")).toBeInstanceOf(CertificadoShow)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("participacao-especial-nao-confirmada", "Tempo Perdido")
    }).toThrow("Tipo de certificado inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("abertura", "Evidências")

    expect(obj.artista).toBe("Evidências")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("principal", "Tempo Perdido")
    const dois = Factory.criar("principal", "Aquarela")

    expect(um.emitir()).toBe("Certificado de show principal emitido para: Tempo Perdido")
    expect(dois.emitir()).toBe("Certificado de show principal emitido para: Aquarela")
})
