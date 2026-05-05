// Importando ferramentas de teste
import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

// Importando a página Sobre
import Sobre from "../pages/Sobre"

describe("Sobre", () => {

  // Testa se o título Sobre aparece
  test("renderiza título Sobre", () => {
    render(<Sobre />)

    const subtitulo = screen.getByText("Sobre")
    expect(subtitulo).toBeTruthy()
  })

  // Testa se existe uma descrição
  test("renderiza texto de descrição", () => {
    render(<Sobre />)

    const textos = screen.getAllByText(/./)
    expect(textos.length).toBeGreaterThan(1)
  })
  
  // Testa o parágrafo obrigatório
  test("renderiza o parágrafo obrigatório", () => {
	  render(<Sobre />)
	  
	  const paragrafo = screen.getByText("Somos uma empresa focada em tecnologia.")
	  expect(paragrafo).toBeTruthy()
  })

})