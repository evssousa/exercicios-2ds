const handler = require("../index")
const { carregarConfig } = require("../config")
const pacote = require("../package.json")

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

function limparAmbiente() {
    delete process.env.SERVICO
    delete process.env.PORT
}

beforeEach(limparAmbiente)
afterAll(limparAmbiente)

// RF - scripts
test("o package.json deve ter o script start", () => {
    expect(pacote.scripts.start).toBe("node servidor.js")
})

test("o package.json deve ter o script dev em modo watch com env-file", () => {
    expect(pacote.scripts.dev).toBe("node --watch --env-file=.env servidor.js")
})

test("o package.json deve continuar com o script test", () => {
    expect(pacote.scripts.test).toBe("jest")
})

// RF - configuracao
test("carregarConfig deve usar os valores padrao sem variaveis definidas", () => {
    expect(carregarConfig()).toEqual({ servico: "doceria", porta: 3000 })
})

test("carregarConfig deve ler as variaveis de ambiente", () => {
    process.env.SERVICO = "doceria-producao"
    process.env.PORT = "4000"

    expect(carregarConfig()).toEqual({ servico: "doceria-producao", porta: 4000 })
})

test("a porta deve ser um numero, nao um texto", () => {
    process.env.PORT = "8080"

    expect(typeof carregarConfig().porta).toBe("number")
})

// RF - rotas de identificacao
test("a rota / deve responder 200 com o nome do servico", () => {
    process.env.SERVICO = "doceria-producao"

    const res = criarRes()
    handler({ url: "/" }, res)

    expect(res.statusCode).toBe(200)
    expect(res.corpo).toBe("Status do servico: doceria-producao")
})

test("a rota / deve usar o nome padrao quando SERVICO nao existe", () => {
    const res = criarRes()
    handler({ url: "/" }, res)

    expect(res.corpo).toBe("Status do servico: doceria")
})

// RF - status e rota inexistente
test("a rota /status deve responder 200", () => {
    const res = criarRes()
    handler({ url: "/status" }, res)

    expect(res.statusCode).toBe(200)
})

test("a rota /status deve definir o Content-Type como application/json", () => {
    const res = criarRes()
    handler({ url: "/status" }, res)

    expect(res.cabecalhos["Content-Type"]).toBe("application/json")
})

test("a rota /status deve devolver a configuracao e o campo online", () => {
    process.env.SERVICO = "doceria-producao"
    process.env.PORT = "4000"

    const res = criarRes()
    handler({ url: "/status" }, res)

    expect(JSON.parse(res.corpo)).toEqual({ online: true, servico: "doceria-producao", porta: 4000 })
})

test("a rota /status deve devolver os valores padrao sem variaveis", () => {
    const res = criarRes()
    handler({ url: "/status" }, res)

    expect(JSON.parse(res.corpo)).toEqual({ online: true, servico: "doceria", porta: 3000 })
})

test("um caminho inexistente deve responder 404", () => {
    const res = criarRes()
    handler({ url: "/nao-existe" }, res)

    expect(res.statusCode).toBe(404)
    expect(res.corpo).toBe("Rota nao encontrada")
})
