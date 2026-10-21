const request = require("supertest")
const app = require("../index")

test("GET /api/exposicoes deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/exposicoes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Fosseis", area: "ciencias", preco: 15, aberta: true },
    { id: 2, nome: "Arte Moderna", area: "artes", preco: 20, aberta: true },
    { id: 3, nome: "Cidade Antiga", area: "historia", preco: 10, aberta: false }
])
})

test("GET /api/exposicoes/abertas deve devolver so os exposicoes com aberta true", async () => {
    const res = await request(app).get("/api/exposicoes/abertas")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Fosseis", area: "ciencias", preco: 15, aberta: true },
    { id: 2, nome: "Arte Moderna", area: "artes", preco: 20, aberta: true }
])
})

test("GET /api/exposicoes/total deve devolver o total de exposicoes", async () => {
    const res = await request(app).get("/api/exposicoes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/exposicoes deve responder 201", async () => {
    const res = await request(app).post("/api/exposicoes")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de exposicao realizado" })
})

test("GET /api/visitantes deve responder 200 com os visitantes", async () => {
    const res = await request(app).get("/api/visitantes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", tipo: "estudante" },
    { id: 2, nome: "Bruno", tipo: "comum" }
])
})

test("GET /api/visitantes/total deve devolver o total de visitantes", async () => {
    const res = await request(app).get("/api/visitantes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/exposicoes/total")
    const dois = await request(app).get("/api/visitantes/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Museu" })
})

test("GET /exposicoes deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/exposicoes")

    expect(res.status).toBe(404)
})

test("POST /exposicoes deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/exposicoes")

    expect(res.status).toBe(404)
})

test("GET /api/promocoes deve responder 200 com as promocoes", async () => {
    const res = await request(app).get("/api/promocoes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Fosseis", desconto: 10 },
    { id: 2, nome: "Arte Moderna", desconto: 20 }
])
})

test("GET /api/promocoes/total deve devolver o total de promocoes", async () => {
    const res = await request(app).get("/api/promocoes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})
