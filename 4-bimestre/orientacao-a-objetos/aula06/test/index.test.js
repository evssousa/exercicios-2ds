const request = require("supertest")
const app = require("../index")

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API da Escola" })
})

test("GET /api/alunos deve responder 200 com os dois alunos", async () => {
    const res = await request(app).get("/api/alunos")

    expect(res.status).toBe(200)
    expect(res.body.length).toBe(2)
})

test("GET /api/alunos deve devolver os alunos corretos", async () => {
    const res = await request(app).get("/api/alunos")

    expect(res.body).toEqual([
        { id: 1, nome: "Ana", nota: 8 },
        { id: 2, nome: "Bruno", nota: 6 }
    ])
})

test("GET /api/alunos/aprovados deve responder 200", async () => {
    const res = await request(app).get("/api/alunos/aprovados")

    expect(res.status).toBe(200)
})

test("GET /api/alunos/aprovados deve devolver so quem tem nota maior ou igual a 7", async () => {
    const res = await request(app).get("/api/alunos/aprovados")

    expect(res.body).toEqual([{ id: 1, nome: "Ana", nota: 8 }])
})

test("O router de alunos deve estar montado sob o prefixo, e nao na raiz", async () => {
    const res = await request(app).get("/alunos")

    expect(res.status).toBe(404)
})
