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
import FormularioMensagem from "../components/FormularioMensagem"

describe("FormularioMensagem", () => {

  // Mock do alert
  window.alert = vi.fn()

  // Testa input nome
  test("renderiza input nome", () => {

    render(<FormularioMensagem />)

    expect(
      screen.getByPlaceholderText(/digite seu nome/i)
    ).toBeTruthy()
  })

  // Testa input mensagem
  test("renderiza input mensagem", () => {

    render(<FormularioMensagem />)

    expect(
      screen.getByPlaceholderText(/digite sua mensagem/i)
    ).toBeTruthy()
  })

  // Testa envio
  test("envia formulário", async () => {

    render(<FormularioMensagem />)

    const nome = screen.getByPlaceholderText(
      /digite seu nome/i
    )

    const mensagem = screen.getByPlaceholderText(
      /digite sua mensagem/i
    )

    const botao = screen.getByText(
      /enviar mensagem/i
    )

    await userEvent.type(nome, "Ana")

    await userEvent.type(
      mensagem,
      "Olá mundo"
    )

    await userEvent.click(botao)

    expect(window.alert).toHaveBeenCalled()
  })

})