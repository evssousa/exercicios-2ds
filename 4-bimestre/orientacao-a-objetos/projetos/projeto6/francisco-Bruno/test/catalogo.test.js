const request = require("supertest")
const app = require("../index")

test("GET /api/brinquedos deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/brinquedos")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Quebra-Cabeca", faixa: "6-8", preco: 35, disponivel: true },
    { id: 2, nome: "Jogo de Tabuleiro", faixa: "9-12", preco: 80, disponivel: true },
    { id: 3, nome: "Blocos", faixa: "3-5", preco: 60, disponivel: false }
])
})

test("GET /api/brinquedos/disponiveis deve devolver so os brinquedos com disponivel true", async () => {
    const res = await request(app).get("/api/brinquedos/disponiveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Quebra-Cabeca", faixa: "6-8", preco: 35, disponivel: true },
    { id: 2, nome: "Jogo de Tabuleiro", faixa: "9-12", preco: 80, disponivel: true }
])
})

test("GET /api/brinquedos/total deve devolver o total de brinquedos", async () => {
    const res = await request(app).get("/api/brinquedos/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/brinquedos deve responder 201", async () => {
    const res = await request(app).post("/api/brinquedos")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de brinquedo realizado" })
})

test("GET /api/responsaveis deve responder 200 com os responsaveis", async () => {
    const res = await request(app).get("/api/responsaveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", contato: "9999-1616" },
    { id: 2, nome: "Bruno", contato: "9999-1717" }
])
})

test("GET /api/responsaveis/total deve devolver o total de responsaveis", async () => {
    const res = await request(app).get("/api/responsaveis/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/brinquedos/total")
    const dois = await request(app).get("/api/responsaveis/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Brinquedoteca" })
})

test("GET /brinquedos deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/brinquedos")

    expect(res.status).toBe(404)
})

test("POST /brinquedos deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/brinquedos")

    expect(res.status).toBe(404)
})
