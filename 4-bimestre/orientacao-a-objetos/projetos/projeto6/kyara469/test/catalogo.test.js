const request = require("supertest")
const app = require("../index")

test("GET /api/exemplares deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/exemplares")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, titulo: "1984", conservacao: "otimo", preco: 30, disponivel: true },
    { id: 2, titulo: "O Hobbit", conservacao: "bom", preco: 25, disponivel: true },
    { id: 3, titulo: "Sapiens", conservacao: "regular", preco: 20, disponivel: false }
])
})

test("GET /api/exemplares/disponiveis deve devolver so os exemplares com disponivel true", async () => {
    const res = await request(app).get("/api/exemplares/disponiveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, titulo: "1984", conservacao: "otimo", preco: 30, disponivel: true },
    { id: 2, titulo: "O Hobbit", conservacao: "bom", preco: 25, disponivel: true }
])
})

test("GET /api/exemplares/total deve devolver o total de exemplares", async () => {
    const res = await request(app).get("/api/exemplares/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/exemplares deve responder 201", async () => {
    const res = await request(app).post("/api/exemplares")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de exemplar realizado" })
})

test("GET /api/clientes deve responder 200 com os clientes", async () => {
    const res = await request(app).get("/api/clientes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", contato: "9999-2222" },
    { id: 2, nome: "Bruno", contato: "9999-2323" }
])
})

test("GET /api/clientes/total deve devolver o total de clientes", async () => {
    const res = await request(app).get("/api/clientes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/exemplares/total")
    const dois = await request(app).get("/api/clientes/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Livraria Usados" })
})

test("GET /exemplares deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/exemplares")

    expect(res.status).toBe(404)
})

test("POST /exemplares deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/exemplares")

    expect(res.status).toBe(404)
})
