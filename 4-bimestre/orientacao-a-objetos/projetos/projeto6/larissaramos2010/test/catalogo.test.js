const request = require("supertest")
const app = require("../index")

test("GET /api/cultivos deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/cultivos")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Alface", tipo: "folha", canteiros: 4, ativo: true },
    { id: 2, nome: "Tomate", tipo: "fruto", canteiros: 2, ativo: true },
    { id: 3, nome: "Cenoura", tipo: "raiz", canteiros: 3, ativo: false }
])
})

test("GET /api/cultivos/ativos deve devolver so os cultivos com ativo true", async () => {
    const res = await request(app).get("/api/cultivos/ativos")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Alface", tipo: "folha", canteiros: 4, ativo: true },
    { id: 2, nome: "Tomate", tipo: "fruto", canteiros: 2, ativo: true }
])
})

test("GET /api/cultivos/total deve devolver o total de cultivos", async () => {
    const res = await request(app).get("/api/cultivos/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/cultivos deve responder 201", async () => {
    const res = await request(app).post("/api/cultivos")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de cultivo realizado" })
})

test("GET /api/voluntarios deve responder 200 com os voluntarios", async () => {
    const res = await request(app).get("/api/voluntarios")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", turno: "manha" },
    { id: 2, nome: "Bruno", turno: "tarde" }
])
})

test("GET /api/voluntarios/total deve devolver o total de voluntarios", async () => {
    const res = await request(app).get("/api/voluntarios/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/cultivos/total")
    const dois = await request(app).get("/api/voluntarios/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Horta" })
})

test("GET /cultivos deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/cultivos")

    expect(res.status).toBe(404)
})

test("POST /cultivos deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/cultivos")

    expect(res.status).toBe(404)
})
