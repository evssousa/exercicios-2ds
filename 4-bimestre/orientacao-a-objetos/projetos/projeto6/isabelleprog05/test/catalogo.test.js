const request = require("supertest")
const app = require("../index")

test("GET /api/pecas deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/pecas")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Pneu", grupo: "rodas", preco: 90, emEstoque: true },
    { id: 2, nome: "Corrente", grupo: "transmissao", preco: 65, emEstoque: true },
    { id: 3, nome: "Guidao", grupo: "direcao", preco: 150, emEstoque: false }
])
})

test("GET /api/pecas/em-estoque deve devolver so os pecas com emEstoque true", async () => {
    const res = await request(app).get("/api/pecas/em-estoque")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Pneu", grupo: "rodas", preco: 90, emEstoque: true },
    { id: 2, nome: "Corrente", grupo: "transmissao", preco: 65, emEstoque: true }
])
})

test("GET /api/pecas/total deve devolver o total de pecas", async () => {
    const res = await request(app).get("/api/pecas/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/pecas deve responder 201", async () => {
    const res = await request(app).post("/api/pecas")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de peca realizado" })
})

test("GET /api/ciclistas deve responder 200 com os ciclistas", async () => {
    const res = await request(app).get("/api/ciclistas")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", modelo: "urbana" },
    { id: 2, nome: "Bruno", modelo: "mountain" }
])
})

test("GET /api/ciclistas/total deve devolver o total de ciclistas", async () => {
    const res = await request(app).get("/api/ciclistas/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/pecas/total")
    const dois = await request(app).get("/api/ciclistas/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Bicicletaria" })
})

test("GET /pecas deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/pecas")

    expect(res.status).toBe(404)
})

test("POST /pecas deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/pecas")

    expect(res.status).toBe(404)
})
