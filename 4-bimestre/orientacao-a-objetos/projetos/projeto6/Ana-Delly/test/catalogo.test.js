const request = require("supertest")
const app = require("../index")

test("GET /api/materiais deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/materiais")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Caderno", categoria: "escolar", preco: 22, disponivel: true },
    { id: 2, nome: "Caneta", categoria: "escrita", preco: 4, disponivel: true },
    { id: 3, nome: "Mochila", categoria: "acessorio", preco: 130, disponivel: false }
])
})

test("GET /api/materiais/disponiveis deve devolver so os materiais com disponivel true", async () => {
    const res = await request(app).get("/api/materiais/disponiveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Caderno", categoria: "escolar", preco: 22, disponivel: true },
    { id: 2, nome: "Caneta", categoria: "escrita", preco: 4, disponivel: true }
])
})

test("GET /api/materiais/total deve devolver o total de materiais", async () => {
    const res = await request(app).get("/api/materiais/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/materiais deve responder 201", async () => {
    const res = await request(app).post("/api/materiais")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de material realizado" })
})

test("GET /api/clientes deve responder 200 com os clientes", async () => {
    const res = await request(app).get("/api/clientes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", tipo: "escola" },
    { id: 2, nome: "Bruno", tipo: "avulso" }
])
})

test("GET /api/clientes/total deve devolver o total de clientes", async () => {
    const res = await request(app).get("/api/clientes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/materiais/total")
    const dois = await request(app).get("/api/clientes/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Papelaria" })
})

test("GET /materiais deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/materiais")

    expect(res.status).toBe(404)
})

test("POST /materiais deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/materiais")

    expect(res.status).toBe(404)
})
