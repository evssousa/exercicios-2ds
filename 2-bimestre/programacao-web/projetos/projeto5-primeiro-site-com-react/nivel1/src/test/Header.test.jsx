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
})