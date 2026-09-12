const CertificadoConquista = require("../CertificadoConquista")
const Factory = require("../Factory")

test("Deve criar bronze", () => {
    const obj = Factory.criar("bronze", "foto.png")

    expect(obj).toBeInstanceOf(CertificadoConquista)
    expect(obj.emitir()).toBe("Certificado de conquista bronze emitido para: foto.png")
})

test("Deve criar prata", () => {
    const obj = Factory.criar("prata", "aula.mp4")

    expect(obj).toBeInstanceOf(CertificadoConquista)
    expect(obj.emitir()).toBe("Certificado de conquista prata emitido para: aula.mp4")
})

test("Deve criar ouro", () => {
    const obj = Factory.criar("ouro", "podcast.mp3")

    expect(obj).toBeInstanceOf(CertificadoConquista)
    expect(obj.emitir()).toBe("Certificado de conquista ouro emitido para: podcast.mp3")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("bronze", "foto.png").emitir(), Factory.criar("prata", "foto.png").emitir(), Factory.criar("ouro", "foto.png").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("bronze", "foto.png").constructor.name).toBe("Bronze")
    expect(Factory.criar("prata", "foto.png").constructor.name).toBe("Prata")
    expect(Factory.criar("ouro", "foto.png").constructor.name).toBe("Ouro")
})

test("Todos os tipos criados devem ser CertificadoConquista", () => {
    for (const tipo of ["bronze", "prata", "ouro"]) {
        expect(Factory.criar(tipo, "foto.png")).toBeInstanceOf(CertificadoConquista)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("diamante-nao-liberado", "foto.png")
    }).toThrow("Tipo de certificado inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("bronze", "aula.mp4")

    expect(obj.jogador).toBe("aula.mp4")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("prata", "foto.png")
    const dois = Factory.criar("prata", "podcast.mp3")

    expect(um.emitir()).toBe("Certificado de conquista prata emitido para: foto.png")
    expect(dois.emitir()).toBe("Certificado de conquista prata emitido para: podcast.mp3")
})
