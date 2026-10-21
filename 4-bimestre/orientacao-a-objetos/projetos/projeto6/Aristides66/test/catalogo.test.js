const request = require("supertest")
const app = require("../index")

test("GET /api/itens deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/itens")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Parafuso", setor: "fixacao", preco: 2, emEstoque: true },
    { id: 2, nome: "Martelo", setor: "ferramenta", preco: 45, emEstoque: true },
    { id: 3, nome: "Furadeira", setor: "ferramenta", preco: 320, emEstoque: false }
])
})

test("GET /api/itens/em-estoque deve devolver so os itens com emEstoque true", async () => {
    const res = await request(app).get("/api/itens/em-estoque")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Parafuso", setor: "fixacao", preco: 2, emEstoque: true },
    { id: 2, nome: "Martelo", setor: "ferramenta", preco: 45, emEstoque: true }
])
})

test("GET /api/itens/total deve devolver o total de itens", async () => {
    const res = await request(app).get("/api/itens/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/itens deve responder 201", async () => {
    const res = await request(app).post("/api/itens")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de item realizado" })
})

test("GET /api/clientes deve responder 200 com os clientes", async () => {
    const res = await request(app).get("/api/clientes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", tipo: "obra" },
    { id: 2, nome: "Bruno", tipo: "varejo" }
])
})

test("GET /api/clientes/total deve devolver o total de clientes", async () => {
    const res = await request(app).get("/api/clientes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/itens/total")
    const dois = await request(app).get("/api/clientes/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Ferragem" })
})

test("GET /itens deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/itens")

    expect(res.status).toBe(404)
})

test("POST /itens deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/itens")

    expect(res.status).toBe(404)
})
