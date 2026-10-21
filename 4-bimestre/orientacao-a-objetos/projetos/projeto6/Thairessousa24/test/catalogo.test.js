const request = require("supertest")
const app = require("../index")

test("GET /api/jogos deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/jogos")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, titulo: "Celeste", genero: "plataforma", preco: 40, disponivel: true },
    { id: 2, titulo: "Hollow Knight", genero: "metroidvania", preco: 50, disponivel: true },
    { id: 3, titulo: "Hades", genero: "roguelike", preco: 70, disponivel: false }
])
})

test("GET /api/jogos/disponiveis deve devolver so os jogos com disponivel true", async () => {
    const res = await request(app).get("/api/jogos/disponiveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, titulo: "Celeste", genero: "plataforma", preco: 40, disponivel: true },
    { id: 2, titulo: "Hollow Knight", genero: "metroidvania", preco: 50, disponivel: true }
])
})

test("GET /api/jogos/total deve devolver o total de jogos", async () => {
    const res = await request(app).get("/api/jogos/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/jogos deve responder 201", async () => {
    const res = await request(app).post("/api/jogos")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de jogo realizado" })
})

test("GET /api/assinantes deve responder 200 com os assinantes", async () => {
    const res = await request(app).get("/api/assinantes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", plano: "mensal" },
    { id: 2, nome: "Bruno", plano: "anual" }
])
})

test("GET /api/assinantes/total deve devolver o total de assinantes", async () => {
    const res = await request(app).get("/api/assinantes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/jogos/total")
    const dois = await request(app).get("/api/assinantes/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Locadora" })
})

test("GET /jogos deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/jogos")

    expect(res.status).toBe(404)
})

test("POST /jogos deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/jogos")

    expect(res.status).toBe(404)
})
