const request = require("supertest")
const app = require("../index")

test("GET /api/bebidas deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/bebidas")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Espresso", tipo: "cafe", preco: 8, disponivel: true },
    { id: 2, nome: "Cappuccino", tipo: "cafe", preco: 14, disponivel: true },
    { id: 3, nome: "Cha Verde", tipo: "cha", preco: 10, disponivel: false }
])
})

test("GET /api/bebidas/disponiveis deve devolver so os bebidas com disponivel true", async () => {
    const res = await request(app).get("/api/bebidas/disponiveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Espresso", tipo: "cafe", preco: 8, disponivel: true },
    { id: 2, nome: "Cappuccino", tipo: "cafe", preco: 14, disponivel: true }
])
})

test("GET /api/bebidas/total deve devolver o total de bebidas", async () => {
    const res = await request(app).get("/api/bebidas/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/bebidas deve responder 201", async () => {
    const res = await request(app).post("/api/bebidas")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de bebida realizado" })
})

test("GET /api/clientes deve responder 200 com os clientes", async () => {
    const res = await request(app).get("/api/clientes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", contato: "9999-1414" },
    { id: 2, nome: "Bruno", contato: "9999-1515" }
])
})

test("GET /api/clientes/total deve devolver o total de clientes", async () => {
    const res = await request(app).get("/api/clientes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/bebidas/total")
    const dois = await request(app).get("/api/clientes/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Cafeteria" })
})

test("GET /bebidas deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/bebidas")

    expect(res.status).toBe(404)
})

test("POST /bebidas deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/bebidas")

    expect(res.status).toBe(404)
})
