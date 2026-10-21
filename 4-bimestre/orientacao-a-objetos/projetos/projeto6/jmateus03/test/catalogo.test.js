const request = require("supertest")
const app = require("../index")

test("GET /api/servicos deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/servicos")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Lavagem Simples", tipo: "agua", preco: 25, disponivel: true },
    { id: 2, nome: "Lavagem a Seco", tipo: "seco", preco: 45, disponivel: true },
    { id: 3, nome: "Passadoria", tipo: "vapor", preco: 15, disponivel: false }
])
})

test("GET /api/servicos/disponiveis deve devolver so os servicos com disponivel true", async () => {
    const res = await request(app).get("/api/servicos/disponiveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Lavagem Simples", tipo: "agua", preco: 25, disponivel: true },
    { id: 2, nome: "Lavagem a Seco", tipo: "seco", preco: 45, disponivel: true }
])
})

test("GET /api/servicos/total deve devolver o total de servicos", async () => {
    const res = await request(app).get("/api/servicos/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/servicos deve responder 201", async () => {
    const res = await request(app).post("/api/servicos")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de servico realizado" })
})

test("GET /api/clientes deve responder 200 com os clientes", async () => {
    const res = await request(app).get("/api/clientes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", contato: "9999-1818" },
    { id: 2, nome: "Bruno", contato: "9999-1919" }
])
})

test("GET /api/clientes/total deve devolver o total de clientes", async () => {
    const res = await request(app).get("/api/clientes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/servicos/total")
    const dois = await request(app).get("/api/clientes/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Lavanderia" })
})

test("GET /servicos deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/servicos")

    expect(res.status).toBe(404)
})

test("POST /servicos deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/servicos")

    expect(res.status).toBe(404)
})

test("GET /api/promocoes deve responder 200 com as promocoes", async () => {
    const res = await request(app).get("/api/promocoes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Lavagem Simples", desconto: 10 },
    { id: 2, nome: "Lavagem a Seco", desconto: 20 }
])
})

test("GET /api/promocoes/total deve devolver o total de promocoes", async () => {
    const res = await request(app).get("/api/promocoes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})
