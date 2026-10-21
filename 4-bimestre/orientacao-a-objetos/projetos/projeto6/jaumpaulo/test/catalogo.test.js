const request = require("supertest")
const app = require("../index")

test("GET /api/impressos deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/impressos")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Cartao de Visita", acabamento: "verniz", preco: 120, disponivel: true },
    { id: 2, nome: "Banner", acabamento: "lona", preco: 200, disponivel: true },
    { id: 3, nome: "Adesivo", acabamento: "vinil", preco: 80, disponivel: false }
])
})

test("GET /api/impressos/disponiveis deve devolver so os impressos com disponivel true", async () => {
    const res = await request(app).get("/api/impressos/disponiveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Cartao de Visita", acabamento: "verniz", preco: 120, disponivel: true },
    { id: 2, nome: "Banner", acabamento: "lona", preco: 200, disponivel: true }
])
})

test("GET /api/impressos/total deve devolver o total de impressos", async () => {
    const res = await request(app).get("/api/impressos/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/impressos deve responder 201", async () => {
    const res = await request(app).post("/api/impressos")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de impresso realizado" })
})

test("GET /api/clientes deve responder 200 com os clientes", async () => {
    const res = await request(app).get("/api/clientes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", empresa: "Padaria Sol" },
    { id: 2, nome: "Bruno", empresa: "Loja Vista" }
])
})

test("GET /api/clientes/total deve devolver o total de clientes", async () => {
    const res = await request(app).get("/api/clientes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/impressos/total")
    const dois = await request(app).get("/api/clientes/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Grafica" })
})

test("GET /impressos deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/impressos")

    expect(res.status).toBe(404)
})

test("POST /impressos deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/impressos")

    expect(res.status).toBe(404)
})

test("GET /api/promocoes deve responder 200 com as promocoes", async () => {
    const res = await request(app).get("/api/promocoes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Cartao de Visita", desconto: 10 },
    { id: 2, nome: "Banner", desconto: 20 }
])
})

test("GET /api/promocoes/total deve devolver o total de promocoes", async () => {
    const res = await request(app).get("/api/promocoes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})
