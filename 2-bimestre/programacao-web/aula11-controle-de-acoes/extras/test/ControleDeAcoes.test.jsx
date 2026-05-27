// Ferramentas de teste
import {
  render,
  screen
} from "@testing-library/react"

import userEvent from "@testing-library/user-event"

import {
  describe,
  test,
  expect,
  vi
} from "vitest"

// Importando componente
import ControleDeAcoes from "/src/components/ControleDeAcoes"

describe("ControleDeAcoes", () => {

  // Mock do alert
  window.alert = vi.fn()

  // Testa botão atacar
  test("renderiza botão atacar", () => {

    render(<ControleDeAcoes />)

    expect(
      screen.getByText(/atacar/i)
    ).toBeTruthy()
  })

  // Testa clique
  test("executa ação ao clicar", async () => {

    render(<ControleDeAcoes />)

    const botao = screen.getByText(/atacar/i)

    await userEvent.click(botao)

    expect(window.alert).toHaveBeenCalled()
  })

})