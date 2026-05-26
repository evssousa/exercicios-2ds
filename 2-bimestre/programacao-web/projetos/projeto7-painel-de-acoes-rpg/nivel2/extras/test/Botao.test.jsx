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
import Botao from "../components/Botao"

describe("Botao", () => {

  // Testa texto
  test("renderiza texto", () => {

    render(
      <Botao texto="Atacar" />
    )

    expect(
      screen.getByText(/atacar/i)
    ).toBeTruthy()
  })

  // Testa clique
  test("executa clique", async () => {

    const clique = vi.fn()

    render(
      <Botao
        texto="Atacar"
        onClick={clique}
      />
    )

    const botao = screen.getByText(/atacar/i)

    await userEvent.click(botao)

    expect(clique).toHaveBeenCalled()
  })

})