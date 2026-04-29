// Importando ferramentas de teste
import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

// Importando o componente Header
import Header from "../components/Header"

describe("Header", () => {

  // Testa se o nome do site aparece
  test("renderiza o nome do site", () => {
    render(<Header />)

		const nomeSite = screen.getByText("Meu Primeiro Site")
	  expect(nomeSite).toBeTruthy()
  })

  // Testa se o link Home aparece
  test("renderiza link Home", () => {
    render(<Header />)

    const home = screen.getByText("Home")
    expect(home).toBeTruthy()
  })

  // Testa se o link Sobre aparece
  test("renderiza link Sobre", () => {
    render(<Header />)

    const sobre = screen.getByText("Sobre")
    expect(sobre).toBeTruthy()
  })

  // Testa se o link Contato aparece
  test("renderiza link Contato", () => {
    render(<Header />)

    const contato = screen.getByText("Contato")
    expect(contato).toBeTruthy()
  })

})