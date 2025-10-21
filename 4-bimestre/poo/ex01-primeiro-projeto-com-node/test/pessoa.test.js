const apresentarPessoa = require("../pessoa")

describe("Função apresentarPessoa", () => {
  test("Deve retornar a frase com nome e idade corretos", () => {
    expect(apresentarPessoa("Maria", 25)).toBe("Meu nome é Maria e tenho 25 anos.")
  })

  test("Deve funcionar com outros valores", () => {
    expect(apresentarPessoa("João", 40)).toBe("Meu nome é João e tenho 40 anos.")
  })
})