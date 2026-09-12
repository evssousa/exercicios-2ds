const Certificado = require("../Certificado")
const Factory = require("../Factory")

test("Deve criar um certificado de conclusão", () => {
    const certificado = Factory.criar("conclusao", "Marina Alves")

    expect(certificado).toBeInstanceOf(Certificado)
    expect(certificado.emitir()).toBe("Certificado de conclusão emitido para: Marina Alves")
})

test("Deve criar um certificado de participação", () => {
    const certificado = Factory.criar("participacao", "Rodrigo Lima")

    expect(certificado).toBeInstanceOf(Certificado)
    expect(certificado.emitir()).toBe("Certificado de participação emitido para: Rodrigo Lima")
})

test("Deve criar um certificado de premiação", () => {
    const certificado = Factory.criar("premiacao", "Célia Barros")

    expect(certificado).toBeInstanceOf(Certificado)
    expect(certificado.emitir()).toBe("Certificado de premiação emitido para: Célia Barros")
})

test("Diferentes certificados devem possuir comportamentos diferentes", () => {
    const conclusao = Factory.criar("conclusao", "Ana")
    const participacao = Factory.criar("participacao", "Ana")
    const premiacao = Factory.criar("premiacao", "Ana")

    expect(conclusao.emitir()).not.toBe(participacao.emitir())
    expect(participacao.emitir()).not.toBe(premiacao.emitir())
    expect(conclusao.emitir()).not.toBe(premiacao.emitir())
})

test("A Factory deve criar o tipo correto de certificado", () => {
    const conclusao = Factory.criar("conclusao", "Teste")
    const participacao = Factory.criar("participacao", "Teste")
    const premiacao = Factory.criar("premiacao", "Teste")

    expect(conclusao.constructor.name).toBe("Conclusao")
    expect(participacao.constructor.name).toBe("Participacao")
    expect(premiacao.constructor.name).toBe("Premiacao")
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("excelencia", "Teste")
    }).toThrow("Tipo de certificado inválido")
})

test("O nome deve ser armazenado no certificado", () => {
    const certificado = Factory.criar("conclusao", "Nome de teste")

    expect(certificado.nome).toBe("Nome de teste")
})
