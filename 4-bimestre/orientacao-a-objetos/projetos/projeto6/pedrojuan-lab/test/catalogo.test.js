const request = require("supertest")
const app = require("../index")

test("GET /api/livros deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/livros")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, titulo: "Dom Casmurro", genero: "romance", preco: 42, disponivel: true },
    { id: 2, titulo: "O Cortico", genero: "realismo", preco: 38, disponivel: true },
    { id: 3, titulo: "Memorias Postumas", genero: "romance", preco: 55, disponivel: false }
])
})

test("GET /api/livros/disponiveis deve devolver so os livros com disponivel true", async () => {
    const res = await request(app).get("/api/livros/disponiveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, titulo: "Dom Casmurro", genero: "romance", preco: 42, disponivel: true },
    { id: 2, titulo: "O Cortico", genero: "realismo", preco: 38, disponivel: true }
])
})

test("GET /api/livros/total deve devolver o total de livros", async () => {
    const res = await request(app).get("/api/livros/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/livros deve responder 201", async () => {
    const res = await request(app).post("/api/livros")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de livro realizado" })
})

test("GET /api/leitores deve responder 200 com os leitores", async () => {
    const res = await request(app).get("/api/leitores")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", plano: "mensal" },
    { id: 2, nome: "Bruno", plano: "anual" }
])
})

test("GET /api/leitores/total deve devolver o total de leitores", async () => {
    const res = await request(app).get("/api/leitores/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/livros/total")
    const dois = await request(app).get("/api/leitores/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Biblioteca" })
})

test("GET /livros deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/livros")

    expect(res.status).toBe(404)
})

test("POST /livros deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/livros")

    expect(res.status).toBe(404)
})
