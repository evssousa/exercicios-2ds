const request = require("supertest")
const app = require("../index")

test("GET /api/aulas deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/aulas")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Spinning", modalidade: "cardio", vagas: 20, ativa: true },
    { id: 2, nome: "Funcional", modalidade: "forca", vagas: 15, ativa: true },
    { id: 3, nome: "Pilates", modalidade: "mobilidade", vagas: 10, ativa: false }
])
})

test("GET /api/aulas/ativas deve devolver so os aulas com ativa true", async () => {
    const res = await request(app).get("/api/aulas/ativas")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Spinning", modalidade: "cardio", vagas: 20, ativa: true },
    { id: 2, nome: "Funcional", modalidade: "forca", vagas: 15, ativa: true }
])
})

test("GET /api/aulas/total deve devolver o total de aulas", async () => {
    const res = await request(app).get("/api/aulas/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/aulas deve responder 201", async () => {
    const res = await request(app).post("/api/aulas")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de aula realizado" })
})

test("GET /api/alunos deve responder 200 com os alunos", async () => {
    const res = await request(app).get("/api/alunos")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", plano: "trimestral" },
    { id: 2, nome: "Bruno", plano: "anual" }
])
})

test("GET /api/alunos/total deve devolver o total de alunos", async () => {
    const res = await request(app).get("/api/alunos/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/aulas/total")
    const dois = await request(app).get("/api/alunos/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Academia" })
})

test("GET /aulas deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/aulas")

    expect(res.status).toBe(404)
})

test("POST /aulas deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/aulas")

    expect(res.status).toBe(404)
})
