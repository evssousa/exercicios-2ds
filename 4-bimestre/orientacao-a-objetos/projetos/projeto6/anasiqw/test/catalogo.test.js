const request = require("supertest")
const app = require("../index")

test("GET /api/sabores deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/sabores")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Chocolate", base: "leite", preco: 10, disponivel: true },
    { id: 2, nome: "Morango", base: "leite", preco: 10, disponivel: true },
    { id: 3, nome: "Limao", base: "agua", preco: 8, disponivel: false }
])
})

test("GET /api/sabores/disponiveis deve devolver so os sabores com disponivel true", async () => {
    const res = await request(app).get("/api/sabores/disponiveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Chocolate", base: "leite", preco: 10, disponivel: true },
    { id: 2, nome: "Morango", base: "leite", preco: 10, disponivel: true }
])
})

test("GET /api/sabores/total deve devolver o total de sabores", async () => {
    const res = await request(app).get("/api/sabores/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/sabores deve responder 201", async () => {
    const res = await request(app).post("/api/sabores")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de sabor realizado" })
})

test("GET /api/clientes deve responder 200 com os clientes", async () => {
    const res = await request(app).get("/api/clientes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", contato: "9999-5555" },
    { id: 2, nome: "Bruno", contato: "9999-6666" }
])
})

test("GET /api/clientes/total deve devolver o total de clientes", async () => {
    const res = await request(app).get("/api/clientes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/sabores/total")
    const dois = await request(app).get("/api/clientes/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Sorveteria" })
})

test("GET /sabores deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/sabores")

    expect(res.status).toBe(404)
})

test("POST /sabores deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/sabores")

    expect(res.status).toBe(404)
})
