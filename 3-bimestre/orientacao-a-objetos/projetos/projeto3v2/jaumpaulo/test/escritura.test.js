const Escritura = require("../Escritura")
const Factory = require("../Factory")

test("Deve criar compraVenda", () => {
    const obj = Factory.criar("compraVenda", "ABC1D23")

    expect(obj).toBeInstanceOf(Escritura)
    expect(obj.emitir()).toBe("Escritura de compra e venda emitida para: ABC1D23")
})

test("Deve criar doacao", () => {
    const obj = Factory.criar("doacao", "XYZ9K88")

    expect(obj).toBeInstanceOf(Escritura)
    expect(obj.emitir()).toBe("Escritura de doação emitida para: XYZ9K88")
})

test("Deve criar usufruto", () => {
    const obj = Factory.criar("usufruto", "PIA4T50")

    expect(obj).toBeInstanceOf(Escritura)
    expect(obj.emitir()).toBe("Escritura de usufruto emitida para: PIA4T50")
})

test("Deve criar permuta", () => {
    const obj = Factory.criar("permuta", "QRS2W11")

    expect(obj).toBeInstanceOf(Escritura)
    expect(obj.emitir()).toBe("Escritura de permuta emitida para: QRS2W11")
})

test("Cada tipo deve possuir um comportamento diferente", () => {
    const resultados = [Factory.criar("compraVenda", "ABC1D23").emitir(), Factory.criar("doacao", "ABC1D23").emitir(), Factory.criar("usufruto", "ABC1D23").emitir(), Factory.criar("permuta", "ABC1D23").emitir()]
    const unicos = new Set(resultados)

    expect(unicos.size).toBe(4)
})

test("A Factory deve criar a classe correta para cada tipo", () => {
    expect(Factory.criar("compraVenda", "ABC1D23").constructor.name).toBe("CompraVenda")
    expect(Factory.criar("doacao", "ABC1D23").constructor.name).toBe("Doacao")
    expect(Factory.criar("usufruto", "ABC1D23").constructor.name).toBe("Usufruto")
    expect(Factory.criar("permuta", "ABC1D23").constructor.name).toBe("Permuta")
})

test("Todos os tipos criados devem ser Escritura", () => {
    for (const tipo of ["compraVenda", "doacao", "usufruto", "permuta"]) {
        expect(Factory.criar(tipo, "ABC1D23")).toBeInstanceOf(Escritura)
    }
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("inventario-informal", "ABC1D23")
    }).toThrow("Tipo de escritura inválido")
})

test("O dado informado deve ser armazenado no objeto criado", () => {
    const obj = Factory.criar("compraVenda", "XYZ9K88")

    expect(obj.proprietario).toBe("XYZ9K88")
})

test("Objetos do mesmo tipo devem trabalhar com dados diferentes", () => {
    const um = Factory.criar("doacao", "ABC1D23")
    const dois = Factory.criar("doacao", "PIA4T50")

    expect(um.emitir()).toBe("Escritura de doação emitida para: ABC1D23")
    expect(dois.emitir()).toBe("Escritura de doação emitida para: PIA4T50")
})

test("Deve exigir o dado obrigatório ao criar", () => {
    expect(() => {
        Factory.criar("compraVenda", "")
    }).toThrow("Proprietário é obrigatório")
})
