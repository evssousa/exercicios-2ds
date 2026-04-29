// Importando ferramentas de teste
import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

// Importando a página Home
import Home from "../pages/Home"

describe("Home", () => {

  // Testa se o título Home aparece
  test("renderiza título Home", () => {
    render(<Home />)

    const subtitulo = screen.getByText("Home")
    expect(subtitulo).toBeTruthy()
  })

  // Testa se existe texto de boas-vindas
  test("renderiza texto de boas-vindas", () => {
    render(<Home />)

    const texto = screen.getByText("Bem-vindo ao nosso site!")
    expect(texto).toBeTruthy()
  })

})