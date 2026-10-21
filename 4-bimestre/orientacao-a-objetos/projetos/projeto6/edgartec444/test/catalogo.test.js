const request = require("supertest")
const app = require("../index")

test("GET /api/pacotes deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/pacotes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Simples", porte: "pequeno", preco: 35, disponivel: true },
    { id: 2, nome: "Completo", porte: "medio", preco: 70, disponivel: true },
    { id: 3, nome: "Premium", porte: "grande", preco: 140, disponivel: false }
])
})

test("GET /api/pacotes/disponiveis deve devolver so os pacotes com disponivel true", async () => {
    const res = await request(app).get("/api/pacotes/disponiveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Simples", porte: "pequeno", preco: 35, disponivel: true },
    { id: 2, nome: "Completo", porte: "medio", preco: 70, disponivel: true }
])
})

test("GET /api/pacotes/total deve devolver o total de pacotes", async () => {
    const res = await request(app).get("/api/pacotes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/pacotes deve responder 201", async () => {
    const res = await request(app).post("/api/pacotes")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de pacote realizado" })
})

test("GET /api/motoristas deve responder 200 com os motoristas", async () => {
    const res = await request(app).get("/api/motoristas")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", veiculo: "Fiesta" },
    { id: 2, nome: "Bruno", veiculo: "Strada" }
])
})

test("GET /api/motoristas/total deve devolver o total de motoristas", async () => {
    const res = await request(app).get("/api/motoristas/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/pacotes/total")
    const dois = await request(app).get("/api/motoristas/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Lava Rapido" })
})

test("GET /pacotes deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/pacotes")

    expect(res.status).toBe(404)
})

test("POST /pacotes deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/pacotes")

    expect(res.status).toBe(404)
})
