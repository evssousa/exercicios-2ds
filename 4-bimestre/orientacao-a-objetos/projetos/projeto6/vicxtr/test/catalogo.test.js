const request = require("supertest")
const app = require("../index")

test("GET /api/produtos deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/produtos")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Dipirona", categoria: "medicamento", preco: 12, emEstoque: true },
    { id: 2, nome: "Protetor Solar", categoria: "cuidado", preco: 48, emEstoque: true },
    { id: 3, nome: "Termometro", categoria: "equipamento", preco: 65, emEstoque: false }
])
})

test("GET /api/produtos/em-estoque deve devolver so os produtos com emEstoque true", async () => {
    const res = await request(app).get("/api/produtos/em-estoque")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Dipirona", categoria: "medicamento", preco: 12, emEstoque: true },
    { id: 2, nome: "Protetor Solar", categoria: "cuidado", preco: 48, emEstoque: true }
])
})

test("GET /api/produtos/total deve devolver o total de produtos", async () => {
    const res = await request(app).get("/api/produtos/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/produtos deve responder 201", async () => {
    const res = await request(app).post("/api/produtos")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de produto realizado" })
})

test("GET /api/clientes deve responder 200 com os clientes", async () => {
    const res = await request(app).get("/api/clientes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", convenio: "popular" },
    { id: 2, nome: "Bruno", convenio: "particular" }
])
})

test("GET /api/clientes/total deve devolver o total de clientes", async () => {
    const res = await request(app).get("/api/clientes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/produtos/total")
    const dois = await request(app).get("/api/clientes/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Farmacia" })
})

test("GET /produtos deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/produtos")

    expect(res.status).toBe(404)
})

test("POST /produtos deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/produtos")

    expect(res.status).toBe(404)
})
