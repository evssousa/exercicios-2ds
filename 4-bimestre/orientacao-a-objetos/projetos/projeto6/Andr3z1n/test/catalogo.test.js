const request = require("supertest")
const app = require("../index")

test("GET /api/arranjos deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/arranjos")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Buque Simples", ocasiao: "aniversario", preco: 60, disponivel: true },
    { id: 2, nome: "Cesta Mista", ocasiao: "agradecimento", preco: 95, disponivel: true },
    { id: 3, nome: "Coroa", ocasiao: "homenagem", preco: 250, disponivel: false }
])
})

test("GET /api/arranjos/disponiveis deve devolver so os arranjos com disponivel true", async () => {
    const res = await request(app).get("/api/arranjos/disponiveis")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Buque Simples", ocasiao: "aniversario", preco: 60, disponivel: true },
    { id: 2, nome: "Cesta Mista", ocasiao: "agradecimento", preco: 95, disponivel: true }
])
})

test("GET /api/arranjos/total deve devolver o total de arranjos", async () => {
    const res = await request(app).get("/api/arranjos/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/arranjos deve responder 201", async () => {
    const res = await request(app).post("/api/arranjos")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de arranjo realizado" })
})

test("GET /api/clientes deve responder 200 com os clientes", async () => {
    const res = await request(app).get("/api/clientes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", contato: "9999-7777" },
    { id: 2, nome: "Bruno", contato: "9999-8888" }
])
})

test("GET /api/clientes/total deve devolver o total de clientes", async () => {
    const res = await request(app).get("/api/clientes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/arranjos/total")
    const dois = await request(app).get("/api/clientes/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Floricultura" })
})

test("GET /arranjos deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/arranjos")

    expect(res.status).toBe(404)
})

test("POST /arranjos deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/arranjos")

    expect(res.status).toBe(404)
})
