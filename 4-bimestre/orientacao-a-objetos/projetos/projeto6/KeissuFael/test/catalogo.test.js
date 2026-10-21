const request = require("supertest")
const app = require("../index")

test("GET /api/componentes deve responder 200 com o catalogo completo", async () => {
    const res = await request(app).get("/api/componentes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Resistor", categoria: "passivo", preco: 1, emEstoque: true },
    { id: 2, nome: "Arduino Uno", categoria: "placa", preco: 120, emEstoque: true },
    { id: 3, nome: "Sensor DHT11", categoria: "sensor", preco: 25, emEstoque: false }
])
})

test("GET /api/componentes/em-estoque deve devolver so os componentes com emEstoque true", async () => {
    const res = await request(app).get("/api/componentes/em-estoque")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Resistor", categoria: "passivo", preco: 1, emEstoque: true },
    { id: 2, nome: "Arduino Uno", categoria: "placa", preco: 120, emEstoque: true }
])
})

test("GET /api/componentes/total deve devolver o total de componentes", async () => {
    const res = await request(app).get("/api/componentes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 3 })
})

test("POST /api/componentes deve responder 201", async () => {
    const res = await request(app).post("/api/componentes")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Cadastro de componente realizado" })
})

test("GET /api/clientes deve responder 200 com os clientes", async () => {
    const res = await request(app).get("/api/clientes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Ana", tipo: "estudante" },
    { id: 2, nome: "Bruno", tipo: "profissional" }
])
})

test("GET /api/clientes/total deve devolver o total de clientes", async () => {
    const res = await request(app).get("/api/clientes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("os dois recursos devem ter o proprio /total, sem conflito", async () => {
    const um = await request(app).get("/api/componentes/total")
    const dois = await request(app).get("/api/clientes/total")

    expect(um.body).toEqual({ total: 3 })
    expect(dois.body).toEqual({ total: 2 })
})

test("GET /api deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/api")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Eletronica" })
})

test("GET /componentes deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).get("/componentes")

    expect(res.status).toBe(404)
})

test("POST /componentes deve responder 404 por estar fora do prefixo /api", async () => {
    const res = await request(app).post("/componentes")

    expect(res.status).toBe(404)
})

test("GET /api/promocoes deve responder 200 com as promocoes", async () => {
    const res = await request(app).get("/api/promocoes")

    expect(res.status).toBe(200)
    expect(res.body).toEqual([
    { id: 1, nome: "Resistor", desconto: 10 },
    { id: 2, nome: "Arduino Uno", desconto: 20 }
])
})

test("GET /api/promocoes/total deve devolver o total de promocoes", async () => {
    const res = await request(app).get("/api/promocoes/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})
