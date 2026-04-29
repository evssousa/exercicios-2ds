// Importando ferramentas de teste
import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

// Importando o componente principal
import App from "../App"

describe("App", () => {

  // Testa se a aplicação completa renderiza o Header
  test("renderiza Header no App", () => {
    render(<App />)

    const Home = screen.getByText(/Home/i)
    expect(Home).toBeTruthy()
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

    const Sobre = screen.getByText(/Sobre/i)
    expect(Sobre).toBeTruthy()
  })

  // Testa se a aplicação completa renderiza Contato
  test("renderiza Contato no App", () => {
    render(<App />)

    const Contato = screen.getByText(/Contato/i)
    expect(Contato).toBeTruthy()
  })

  // Testa se a aplicação completa renderiza Footer
  test("renderiza Footer no App", () => {
    render(<App />)

    const Footer = screen.getByText(/2026/i)
    expect(Footer).toBeTruthy()
  })

})