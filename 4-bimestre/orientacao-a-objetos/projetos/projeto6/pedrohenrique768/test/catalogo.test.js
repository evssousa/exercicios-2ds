const request = require("supertest")
const app = require("../index")

test("GET /api/moveis deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/moveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Banco", madeira: "pinus", preco: 180, disponivel: true },
    { id: 2, nome: "Estante", madeira: "mdf", preco: 450, disponivel: true },
    { id: 3, nome: "Mesa", madeira: "eucalipto", preco: 700, disponivel: false }
])
})

test("GET /api/moveis/total deve devolver o total de moveis", async () => {
    const res = await request(app).get("/api/moveis/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/moveis deve responder 201", async () => {
    const res = await request(app).post("/api/moveis")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de movel realizado" })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Marcenaria" })
})

test("GET /moveis deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/moveis")

    expect(res.status).toBe(404)
})

test("POST /moveis deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/moveis")

    expect(res.status).toBe(404)
})
