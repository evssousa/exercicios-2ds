const request = require("supertest")
const app = require("../index")

test("GET /api/exames deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/exames")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Hemograma", area: "laboratorio", preco: 60, disponivel: true },
    { id: 2, nome: "Raio-X", area: "imagem", preco: 150, disponivel: true },
    { id: 3, nome: "Ressonancia", area: "imagem", preco: 800, disponivel: false }
])
})

test("GET /api/exames/disponiveis deve devolver so os exames com disponivel true", async () => {
    const res = await request(app).get("/api/exames/disponiveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Hemograma", area: "laboratorio", preco: 60, disponivel: true },
    { id: 2, nome: "Raio-X", area: "imagem", preco: 150, disponivel: true }
])
})

test("GET /api/exames/total deve devolver o total de exames", async () => {
    const res = await request(app).get("/api/exames/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/exames deve responder 201", async () => {
    const res = await request(app).post("/api/exames")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de exame realizado" })
})

test("GET /api/pacientes deve responder 200 com os pacientes", async () => {
    const res = await request(app).get("/api/pacientes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", convenio: "plano-a" },
    { id: 2, nome: "Bruno", convenio: "particular" }
])
})

test("GET /api/pacientes/total deve devolver o total de pacientes", async () => {
    const res = await request(app).get("/api/pacientes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/exames/total")
    const dois = await request(app).get("/api/pacientes/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Clinica" })
})

test("GET /exames deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/exames")

    expect(res.status).toBe(404)
})

test("POST /exames deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/exames")

    expect(res.status).toBe(404)
})
