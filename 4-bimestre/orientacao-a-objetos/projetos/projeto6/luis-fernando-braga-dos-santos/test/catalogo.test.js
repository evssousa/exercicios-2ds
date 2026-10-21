const request = require("supertest")
const app = require("../index")

test("GET /api/pecas deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/pecas")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, titulo: "A Visita", genero: "drama", preco: 40, emCartaz: true },
    { id: 2, titulo: "O Noviço", genero: "comedia", preco: 35, emCartaz: true },
    { id: 3, titulo: "Hamlet", genero: "tragedia", preco: 60, emCartaz: false }
])
})

test("GET /api/pecas/em-cartaz deve devolver so os pecas com emCartaz true", async () => {
    const res = await request(app).get("/api/pecas/em-cartaz")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, titulo: "A Visita", genero: "drama", preco: 40, emCartaz: true },
    { id: 2, titulo: "O Noviço", genero: "comedia", preco: 35, emCartaz: true }
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

test("GET /api/espectadores deve responder 200 com os espectadores", async () => {
    const res = await request(app).get("/api/espectadores")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", tipo: "meia" },
    { id: 2, nome: "Bruno", tipo: "inteira" }
])
})

test("GET /api/espectadores/total deve devolver o total de espectadores", async () => {
    const res = await request(app).get("/api/espectadores/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/pecas/total")
    const dois = await request(app).get("/api/espectadores/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Teatro" })
})

test("GET /pecas deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/pecas")

    expect(res.status).toBe(404)
})

test("POST /pecas deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/pecas")

    expect(res.status).toBe(404)
})
