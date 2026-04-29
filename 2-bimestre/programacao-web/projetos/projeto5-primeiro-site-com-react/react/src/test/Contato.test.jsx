// Importando ferramentas de teste
import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

// Importando a página Contato
import Contato from "../pages/Contato"

describe("Contato", () => {

  // Testa se o título Contato aparece
  test("renderiza título Contato", () => {
    render(<Contato />)

    const subtitulo = screen.getByText("Contato")
    expect(subtitulo).toBeTruthy()
  })

  // Testa se existe um e-mail na página
  test("renderiza email de contato", () => {
    render(<Contato />)

    const email = screen.getByText("contato@site.com")
    expect(email).toBeTruthy()
  })
  
  // Testa se existe um telefone na página
  test("renderiza telefone de contato", () => {
    render(<Contato />)

    const telefone = screen.getByText(/(85)/i)
    expect(telefone).toBeTruthy()
  })

})