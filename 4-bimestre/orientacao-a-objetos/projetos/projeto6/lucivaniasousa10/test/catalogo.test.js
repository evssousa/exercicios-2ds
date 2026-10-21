const request = require("supertest")
const app = require("../index")

test("GET /api/horarios deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/horarios")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, faixa: "18h", modalidade: "futsal", preco: 80, disponivel: true },
    { id: 2, faixa: "19h", modalidade: "volei", preco: 80, disponivel: true },
    { id: 3, faixa: "20h", modalidade: "basquete", preco: 90, disponivel: false }
])
})

test("GET /api/horarios/disponiveis deve devolver so os horarios com disponivel true", async () => {
    const res = await request(app).get("/api/horarios/disponiveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, faixa: "18h", modalidade: "futsal", preco: 80, disponivel: true },
    { id: 2, faixa: "19h", modalidade: "volei", preco: 80, disponivel: true }
])
})

test("GET /api/horarios/total deve devolver o total de horarios", async () => {
    const res = await request(app).get("/api/horarios/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/horarios deve responder 201", async () => {
    const res = await request(app).post("/api/horarios")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de horario realizado" })
})

test("GET /api/responsaveis deve responder 200 com os responsaveis", async () => {
    const res = await request(app).get("/api/responsaveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", time: "Unidos FC" },
    { id: 2, nome: "Bruno", time: "Vila Volei" }
])
})

test("GET /api/responsaveis/total deve devolver o total de responsaveis", async () => {
    const res = await request(app).get("/api/responsaveis/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/horarios/total")
    const dois = await request(app).get("/api/responsaveis/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Quadra" })
})

test("GET /horarios deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/horarios")

    expect(res.status).toBe(404)
})

test("POST /horarios deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/horarios")

    expect(res.status).toBe(404)
})
