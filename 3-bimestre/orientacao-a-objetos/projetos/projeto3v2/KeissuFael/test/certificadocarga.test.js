const CertificadoCarga = require("../CertificadoCarga")
const Factory = require("../Factory")

test("Deve criar cargaSeca", () => {
    const obj = Factory.criar("cargaSeca", "Teresina")

    expect(obj).toBeInstanceOf(CertificadoCarga)
    expect(obj.emitir()).toBe("Certificado de carga seca emitido para: Teresina")
})

test("Deve criar cargaRefrigerada", () => {
    const obj = Factory.criar("cargaRefrigerada", "Fortaleza")

    expect(obj).toBeInstanceOf(CertificadoCarga)
    expect(obj.emitir()).toBe("Certificado de carga refrigerada emitido para: Fortaleza")
})

test("Deve criar cargaPerigosa", () => {
    const obj = Factory.criar("cargaPerigosa", "Recife")

    expect(obj).toBeInstanceOf(CertificadoCarga)
    expect(obj.emitir()).toBe("Certificado de carga perigosa emitido para: Recife")
})

test("Deve criar cargaViva", () => {
    const obj = Factory.criar("cargaViva", "Natal")

    expect(obj).toBeInstanceOf(CertificadoCarga)
    expect(obj.emitir()).toBe("Certificado de carga viva emitido para: Natal")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("cargaSeca", "Teresina").emitir(), Factory.criar("cargaRefrigerada", "Teresina").emitir(), Factory.criar("cargaPerigosa", "Teresina").emitir(), Factory.criar("cargaViva", "Teresina").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(4)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("cargaSeca", "Teresina").constructor.name).toBe("CargaSeca")
    expect(Factory.criar("cargaRefrigerada", "Teresina").constructor.name).toBe("CargaRefrigerada")
    expect(Factory.criar("cargaPerigosa", "Teresina").constructor.name).toBe("CargaPerigosa")
    expect(Factory.criar("cargaViva", "Teresina").constructor.name).toBe("CargaViva")
})

test("Todos os tipos criados devem ser CertificadoCarga", () => {
    for (const tipo of ["cargaSeca", "cargaRefrigerada", "cargaPerigosa", "cargaViva"]) {
        expect(Factory.criar(tipo, "Teresina")).toBeInstanceOf(CertificadoCarga)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("carga-fracionada-sem-inspecao", "Teresina")
    }).toThrow("Tipo de certificado inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("cargaSeca", "Fortaleza")

    expect(obj.responsavel).toBe("Fortaleza")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("cargaRefrigerada", "Teresina")
    const dois = Factory.criar("cargaRefrigerada", "Recife")

    expect(um.emitir()).toBe("Certificado de carga refrigerada emitido para: Teresina")
    expect(dois.emitir()).toBe("Certificado de carga refrigerada emitido para: Recife")
})

test("Deve exigir o dado obrigatório ao criar", () => {
    expect(() => {
        Factory.criar("cargaSeca", "")
    }).toThrow("Responsável é obrigatório")
})
