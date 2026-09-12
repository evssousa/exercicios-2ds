const CertificadoCurso = require("../CertificadoCurso")
const Factory = require("../Factory")

test("Deve criar presencial", () => {
    const obj = Factory.criar("presencial", "Rebeka Sousa")

    expect(obj).toBeInstanceOf(CertificadoCurso)
    expect(obj.emitir()).toBe("Certificado de curso presencial emitido para: Rebeka Sousa")
})

test("Deve criar online", () => {
    const obj = Factory.criar("online", "Caio Nunes")

    expect(obj).toBeInstanceOf(CertificadoCurso)
    expect(obj.emitir()).toBe("Certificado de curso online emitido para: Caio Nunes")
})

test("Deve criar hibrido", () => {
    const obj = Factory.criar("hibrido", "Vitória Leal")

    expect(obj).toBeInstanceOf(CertificadoCurso)
    expect(obj.emitir()).toBe("Certificado de curso híbrido emitido para: Vitória Leal")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("presencial", "Rebeka Sousa").emitir(), Factory.criar("online", "Rebeka Sousa").emitir(), Factory.criar("hibrido", "Rebeka Sousa").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(3)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("presencial", "Rebeka Sousa").constructor.name).toBe("Presencial")
    expect(Factory.criar("online", "Rebeka Sousa").constructor.name).toBe("Online")
    expect(Factory.criar("hibrido", "Rebeka Sousa").constructor.name).toBe("Hibrido")
})

test("Todos os tipos criados devem ser CertificadoCurso", () => {
    for (const tipo of ["presencial", "online", "hibrido"]) {
        expect(Factory.criar(tipo, "Rebeka Sousa")).toBeInstanceOf(CertificadoCurso)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("intercambio-sem-convenio", "Rebeka Sousa")
    }).toThrow("Tipo de certificado inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("presencial", "Caio Nunes")

    expect(obj.aluno).toBe("Caio Nunes")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("online", "Rebeka Sousa")
    const dois = Factory.criar("online", "Vitória Leal")

    expect(um.emitir()).toBe("Certificado de curso online emitido para: Rebeka Sousa")
    expect(dois.emitir()).toBe("Certificado de curso online emitido para: Vitória Leal")
})
