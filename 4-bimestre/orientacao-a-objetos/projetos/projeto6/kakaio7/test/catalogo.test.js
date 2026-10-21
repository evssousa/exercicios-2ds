const request = require("supertest")
const app = require("../index")

test("GET /api/doces deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/doces")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Brigadeiro", categoria: "festa", preco: 3, disponivel: true },
    { id: 2, nome: "Bolo de Pote", categoria: "individual", preco: 15, disponivel: true },
    { id: 3, nome: "Torta", categoria: "encomenda", preco: 90, disponivel: false }
])
})

test("GET /api/doces/disponiveis deve devolver so os doces com disponivel true", async () => {
    const res = await request(app).get("/api/doces/disponiveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Brigadeiro", categoria: "festa", preco: 3, disponivel: true },
    { id: 2, nome: "Bolo de Pote", categoria: "individual", preco: 15, disponivel: true }
])
})

test("GET /api/doces/total deve devolver o total de doces", async () => {
    const res = await request(app).get("/api/doces/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/doces deve responder 201", async () => {
    const res = await request(app).post("/api/doces")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de doce realizado" })
})

test("GET /api/clientes deve responder 200 com os clientes", async () => {
    const res = await request(app).get("/api/clientes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", contato: "9999-2020" },
    { id: 2, nome: "Bruno", contato: "9999-2121" }
])
})

test("GET /api/clientes/total deve devolver o total de clientes", async () => {
    const res = await request(app).get("/api/clientes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/doces/total")
    const dois = await request(app).get("/api/clientes/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Doceria" })
})

test("GET /doces deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/doces")

    expect(res.status).toBe(404)
})

test("POST /doces deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/doces")

    expect(res.status).toBe(404)
})
