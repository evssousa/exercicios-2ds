// Importando ferramentas de teste
import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

// Importando o componente principal
import App from "../App"

describe("App", () => {

  // Testa se a aplicação completa renderiza o Header
  test("renderiza Header no App", () => {
    render(<App />)

    const home = screen.getByText(/home/i)
    expect(home).toBeTruthy()
  })

  // Testa se a aplicação completa renderiza Home
  test("renderiza Home no App", () => {
    render(<App />)

    const boasVindas = screen.getByText(/bem-vindo/i)
    expect(boasVindas).toBeTruthy()
  })

  // Testa se a aplicação completa renderiza Sobre
  test("renderiza Sobre no App", () => {
    render(<App />)

    const sobre = screen.getByText(/sobre/i)
    expect(sobre).toBeTruthy()
  })

  // Testa se a aplicação completa renderiza Contato
  test("renderiza Contato no App", () => {
    render(<App />)

    const contato = screen.getByText(/contato/i)
    expect(contato).toBeTruthy()
  })

  // Testa se a aplicação completa renderiza Footer
  test("renderiza Footer no App", () => {
    render(<App />)

    const footer = screen.getByText(/2026/i)
    expect(footer).toBeTruthy()
  })

})