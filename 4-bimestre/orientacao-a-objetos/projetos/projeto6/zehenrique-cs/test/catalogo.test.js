const request = require("supertest")
const app = require("../index")

test("GET /api/cortes deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/cortes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Social", estilo: "classico", preco: 35, ativo: true },
    { id: 2, nome: "Degrade", estilo: "moderno", preco: 45, ativo: true },
    { id: 3, nome: "Navalhado", estilo: "moderno", preco: 55, ativo: false }
])
})

test("GET /api/cortes/ativos deve devolver so os cortes com ativo true", async () => {
    const res = await request(app).get("/api/cortes/ativos")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Social", estilo: "classico", preco: 35, ativo: true },
    { id: 2, nome: "Degrade", estilo: "moderno", preco: 45, ativo: true }
])
})

test("GET /api/cortes/total deve devolver o total de cortes", async () => {
    const res = await request(app).get("/api/cortes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/cortes deve responder 201", async () => {
    const res = await request(app).post("/api/cortes")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de corte realizado" })
})

test("GET /api/clientes deve responder 200 com os clientes", async () => {
    const res = await request(app).get("/api/clientes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", contato: "9999-3333" },
    { id: 2, nome: "Bruno", contato: "9999-4444" }
])
})

test("GET /api/clientes/total deve devolver o total de clientes", async () => {
    const res = await request(app).get("/api/clientes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/cortes/total")
    const dois = await request(app).get("/api/clientes/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Barbearia" })
})

test("GET /cortes deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/cortes")

    expect(res.status).toBe(404)
})

test("POST /cortes deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/cortes")

    expect(res.status).toBe(404)
})

test("GET /api/promocoes deve responder 200 com as promocoes", async () => {
    const res = await request(app).get("/api/promocoes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Social", desconto: 10 },
    { id: 2, nome: "Degrade", desconto: 20 }
])
})

test("GET /api/promocoes/total deve devolver o total de promocoes", async () => {
    const res = await request(app).get("/api/promocoes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})
