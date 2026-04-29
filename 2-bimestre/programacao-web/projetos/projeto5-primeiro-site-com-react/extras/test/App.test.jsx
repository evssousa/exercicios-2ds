// Importando ferramentas de teste
import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

// Importando o componente principal
import App from "../App"

describe("App", () => {

  // Testa se a aplicação completa renderiza o Header
  test("renderiza Header no App", () => {
    render(<App />)

    const home = screen.getByText("<Header />")
    expect(home).toBeTruthy()
  })

  // Testa se a aplicação completa renderiza Home
  test("renderiza Home no App", () => {
    render(<App />)

    const boasVindas = screen.getByText("<Home />")
    expect(boasVindas).toBeTruthy()
  })

  // Testa se a aplicação completa renderiza Sobre
  test("renderiza Sobre no App", () => {
    render(<App />)

    const sobre = screen.getByText("<Sobre />")
    expect(sobre).toBeTruthy()
  })

  // Testa se a aplicação completa renderiza Contato
  test("renderiza Contato no App", () => {
    render(<App />)

    const contato = screen.getByText("<Contato />")
    expect(contato).toBeTruthy()
  })

  // Testa se a aplicação completa renderiza Footer
  test("renderiza Footer no App", () => {
    render(<App />)

    const footer = screen.getByText("<Footer />")
    expect(footer).toBeTruthy()
  })

})