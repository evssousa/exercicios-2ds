const request = require("supertest")
const app = require("../index")

test("GET /api/servicos deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/servicos")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Troca de Oleo", area: "mecanica", preco: 180, disponivel: true },
    { id: 2, nome: "Alinhamento", area: "suspensao", preco: 120, disponivel: true },
    { id: 3, nome: "Revisao", area: "mecanica", preco: 400, disponivel: false }
])
})

test("GET /api/servicos/disponiveis deve devolver so os servicos com disponivel true", async () => {
    const res = await request(app).get("/api/servicos/disponiveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Troca de Oleo", area: "mecanica", preco: 180, disponivel: true },
    { id: 2, nome: "Alinhamento", area: "suspensao", preco: 120, disponivel: true }
])
})

test("GET /api/servicos/total deve devolver o total de servicos", async () => {
    const res = await request(app).get("/api/servicos/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/servicos deve responder 201", async () => {
    const res = await request(app).post("/api/servicos")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de servico realizado" })
})

test("GET /api/motoristas deve responder 200 com os motoristas", async () => {
    const res = await request(app).get("/api/motoristas")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", veiculo: "Gol" },
    { id: 2, nome: "Bruno", veiculo: "Onix" }
])
})

test("GET /api/motoristas/total deve devolver o total de motoristas", async () => {
    const res = await request(app).get("/api/motoristas/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/servicos/total")
    const dois = await request(app).get("/api/motoristas/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Oficina" })
})

test("GET /servicos deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/servicos")

    expect(res.status).toBe(404)
})

test("POST /servicos deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/servicos")

    expect(res.status).toBe(404)
})
