const request = require("supertest")
const app = require("../index")

test("GET /api/cursos deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/cursos")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Violao Iniciante", instrumento: "violao", vagas: 12, ativo: true },
    { id: 2, nome: "Teclado Basico", instrumento: "teclado", vagas: 8, ativo: true },
    { id: 3, nome: "Bateria Avancada", instrumento: "bateria", vagas: 5, ativo: false }
])
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Escola Musica" })
})

test("GET /cursos deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/cursos")

    expect(res.status).toBe(404)
})
