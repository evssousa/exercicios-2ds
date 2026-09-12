const CertificadoDigital = require("../CertificadoDigital")
const Factory = require("../Factory")

test("Deve criar ecpf", () => {
    const obj = Factory.criar("ecpf", "Notebook-TI-01")

    expect(obj).toBeInstanceOf(CertificadoDigital)
    expect(obj.emitir()).toBe("Certificado digital e-CPF emitido para: Notebook-TI-01")
})

test("Deve criar ecnpj", () => {
    const obj = Factory.criar("ecnpj", "Notebook-TI-02")

    expect(obj).toBeInstanceOf(CertificadoDigital)
    expect(obj.emitir()).toBe("Certificado digital e-CNPJ emitido para: Notebook-TI-02")
})

test("Deve criar nfe", () => {
    const obj = Factory.criar("nfe", "Celular-Visitante")

    expect(obj).toBeInstanceOf(CertificadoDigital)
    expect(obj.emitir()).toBe("Certificado digital para NF-e emitido para: Celular-Visitante")
})

test("Deve criar assinatura", () => {
    const obj = Factory.criar("assinatura", "Servidor-Backup")

    expect(obj).toBeInstanceOf(CertificadoDigital)
    expect(obj.emitir()).toBe("Certificado digital de assinatura emitido para: Servidor-Backup")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("ecpf", "Notebook-TI-01").emitir(), Factory.criar("ecnpj", "Notebook-TI-01").emitir(), Factory.criar("nfe", "Notebook-TI-01").emitir(), Factory.criar("assinatura", "Notebook-TI-01").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(4)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("ecpf", "Notebook-TI-01").constructor.name).toBe("ECpf")
    expect(Factory.criar("ecnpj", "Notebook-TI-01").constructor.name).toBe("ECnpj")
    expect(Factory.criar("nfe", "Notebook-TI-01").constructor.name).toBe("Nfe")
    expect(Factory.criar("assinatura", "Notebook-TI-01").constructor.name).toBe("Assinatura")
})

test("Todos os tipos criados devem ser CertificadoDigital", () => {
    for (const tipo of ["ecpf", "ecnpj", "nfe", "assinatura"]) {
        expect(Factory.criar(tipo, "Notebook-TI-01")).toBeInstanceOf(CertificadoDigital)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("certificado-autoassinado", "Notebook-TI-01")
    }).toThrow("Tipo de certificado inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("ecpf", "Notebook-TI-02")

    expect(obj.titular).toBe("Notebook-TI-02")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("ecnpj", "Notebook-TI-01")
    const dois = Factory.criar("ecnpj", "Celular-Visitante")

    expect(um.emitir()).toBe("Certificado digital e-CNPJ emitido para: Notebook-TI-01")
    expect(dois.emitir()).toBe("Certificado digital e-CNPJ emitido para: Celular-Visitante")
})

test("Deve exigir o dado obrigatório ao criar", () => {
    expect(() => {
        Factory.criar("ecpf", "")
    }).toThrow("Titular é obrigatório")
})
