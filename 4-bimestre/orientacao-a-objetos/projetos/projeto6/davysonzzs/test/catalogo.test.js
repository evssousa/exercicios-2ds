const request = require("supertest")
const app = require("../index")

test("GET /api/artes deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/artes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Minimalista", estilo: "fineline", preco: 200, disponivel: true },
    { id: 2, nome: "Geometrica", estilo: "blackwork", preco: 450, disponivel: true },
    { id: 3, nome: "Realista", estilo: "realismo", preco: 900, disponivel: false }
])
})

test("GET /api/artes/disponiveis deve devolver so os artes com disponivel true", async () => {
    const res = await request(app).get("/api/artes/disponiveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Minimalista", estilo: "fineline", preco: 200, disponivel: true },
    { id: 2, nome: "Geometrica", estilo: "blackwork", preco: 450, disponivel: true }
])
})

test("GET /api/artes/total deve devolver o total de artes", async () => {
    const res = await request(app).get("/api/artes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/artes deve responder 201", async () => {
    const res = await request(app).post("/api/artes")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de arte realizado" })
})

test("GET /api/clientes deve responder 200 com os clientes", async () => {
    const res = await request(app).get("/api/clientes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", contato: "9999-1212" },
    { id: 2, nome: "Bruno", contato: "9999-1313" }
])
})

test("GET /api/clientes/total deve devolver o total de clientes", async () => {
    const res = await request(app).get("/api/clientes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/artes/total")
    const dois = await request(app).get("/api/clientes/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Estudio" })
})

test("GET /artes deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/artes")

    expect(res.status).toBe(404)
})

test("POST /artes deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/artes")

    expect(res.status).toBe(404)
})

test("GET /api/promocoes deve responder 200 com as promocoes", async () => {
    const res = await request(app).get("/api/promocoes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Minimalista", desconto: 10 },
    { id: 2, nome: "Geometrica", desconto: 20 }
])
})

test("GET /api/promocoes/total deve devolver o total de promocoes", async () => {
    const res = await request(app).get("/api/promocoes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})
