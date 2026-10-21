const request = require("supertest")
const app = require("../index")

test("GET /api/sessoes deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/sessoes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, filme: "Duna", formato: "2D", preco: 25, disponivel: true },
    { id: 2, filme: "Interestelar", formato: "3D", preco: 32, disponivel: true },
    { id: 3, filme: "Matrix", formato: "2D", preco: 22, disponivel: false }
])
})

test("GET /api/sessoes/disponiveis deve devolver so os sessoes com disponivel true", async () => {
    const res = await request(app).get("/api/sessoes/disponiveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, filme: "Duna", formato: "2D", preco: 25, disponivel: true },
    { id: 2, filme: "Interestelar", formato: "3D", preco: 32, disponivel: true }
])
})

test("GET /api/sessoes/total deve devolver o total de sessoes", async () => {
    const res = await request(app).get("/api/sessoes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/sessoes deve responder 201", async () => {
    const res = await request(app).post("/api/sessoes")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de sessao realizado" })
})

test("GET /api/clientes deve responder 200 com os clientes", async () => {
    const res = await request(app).get("/api/clientes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", tipo: "meia" },
    { id: 2, nome: "Bruno", tipo: "inteira" }
])
})

test("GET /api/clientes/total deve devolver o total de clientes", async () => {
    const res = await request(app).get("/api/clientes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/sessoes/total")
    const dois = await request(app).get("/api/clientes/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Cinema" })
})

test("GET /sessoes deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/sessoes")

    expect(res.status).toBe(404)
})

test("POST /sessoes deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/sessoes")

    expect(res.status).toBe(404)
})
