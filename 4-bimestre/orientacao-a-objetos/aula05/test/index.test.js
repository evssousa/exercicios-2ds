const request = require("supertest")
const app = require("../index")

test("GET / deve responder 200 com a mensagem da API", async () => {
    const res = await request(app).get("/")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ mensagem: "API de Livros" })
})

test("GET /livros deve responder 200 com os dois livros", async () => {
    const res = await request(app).get("/livros")

    expect(res.status).toBe(200)
    expect(res.body.length).toBe(2)
})

test("GET /livros deve devolver o primeiro livro correto", async () => {
    const res = await request(app).get("/livros")

    expect(res.body[0]).toEqual({
        id: 1,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis"
    })
})

test("GET /livros deve devolver o segundo livro correto", async () => {
    const res = await request(app).get("/livros")

    expect(res.body[1]).toEqual({
        id: 2,
        titulo: "O Cortico",
        autor: "Aluisio Azevedo"
    })
})

test("GET /livros/total deve responder 200 com o total", async () => {
    const res = await request(app).get("/livros/total")

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ total: 2 })
})

test("POST /livros deve responder 201", async () => {
    const res = await request(app).post("/livros")

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ mensagem: "Livro criado" })
})
