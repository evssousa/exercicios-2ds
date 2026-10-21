const request = require("supertest")
const app = require("../index")

test("GET /api/lanches deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/lanches")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "X-Burguer", categoria: "tradicional", preco: 25, ativo: true },
    { id: 2, nome: "X-Salada", categoria: "tradicional", preco: 28, ativo: true },
    { id: 3, nome: "X-Tudo", categoria: "especial", preco: 35, ativo: false }
])
})

test("GET /api/lanches/ativos deve devolver so os lanches com ativo true", async () => {
    const res = await request(app).get("/api/lanches/ativos")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "X-Burguer", categoria: "tradicional", preco: 25, ativo: true },
    { id: 2, nome: "X-Salada", categoria: "tradicional", preco: 28, ativo: true }
])
})

test("GET /api/lanches/total deve devolver o total de lanches", async () => {
    const res = await request(app).get("/api/lanches/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/lanches deve responder 201", async () => {
    const res = await request(app).post("/api/lanches")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de lanche realizado" })
})

test("GET /api/clientes deve responder 200 com os clientes", async () => {
    const res = await request(app).get("/api/clientes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", plano: "fidelidade" },
    { id: 2, nome: "Bruno", plano: "avulso" }
])
})

test("GET /api/clientes/total deve devolver o total de clientes", async () => {
    const res = await request(app).get("/api/clientes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/lanches/total")
    const dois = await request(app).get("/api/clientes/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Hamburgueria" })
})

test("GET /lanches deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/lanches")

    expect(res.status).toBe(404)
})

test("POST /lanches deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/lanches")

    expect(res.status).toBe(404)
})
