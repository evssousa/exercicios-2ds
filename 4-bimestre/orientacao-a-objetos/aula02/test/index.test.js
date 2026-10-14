const handler = require("../index")

function criarRes() {
    return {
        statusCode: 0,
        cabecalhos: {},
        corpo: undefined,
        setHeader(nome, valor) {
            this.cabecalhos[nome] = valor
        },
        end(texto) {
            this.corpo = texto
        }
    }
}

afterEach(() => {
    delete process.env.PORT
})

test("A rota / deve responder 200 com a mensagem da API", () => {
    const res = criarRes()
    handler({ url: "/" }, res)

    expect(res.statusCode).toBe(200)
    expect(res.corpo).toBe("API no ar")
})

test("A rota /status deve responder 200", () => {
    const res = criarRes()
    handler({ url: "/status" }, res)

    expect(res.statusCode).toBe(200)
})

test("A rota /status deve definir o Content-Type como application/json", () => {
    const res = criarRes()
    handler({ url: "/status" }, res)

    expect(res.cabecalhos["Content-Type"]).toBe("application/json")
})

test("A rota /status deve devolver o status online e a porta padrao 3000", () => {
    const res = criarRes()
    handler({ url: "/status" }, res)

    expect(JSON.parse(res.corpo)).toEqual({ status: "online", porta: 3000 })
})

test("A porta deve vir do process.env.PORT como numero", () => {
    process.env.PORT = "4000"

    const res = criarRes()
    handler({ url: "/status" }, res)

    expect(JSON.parse(res.corpo).porta).toBe(4000)
})

test("Uma rota inexistente deve responder 404", () => {
    const res = criarRes()
    handler({ url: "/qualquer-coisa" }, res)

    expect(res.statusCode).toBe(404)
    expect(res.corpo).toBe("Rota nao encontrada")
})
