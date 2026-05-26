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
import FormularioContato from "/src/components/FormularioContato"

describe("FormularioContato", () => {

  // Mock do alert
  window.alert = vi.fn()

  // Testa inputs
  test("renderiza inputs", () => {

    render(<FormularioContato />)

    expect(
      screen.getByPlaceholderText(/seu nome/i)
    ).toBeTruthy()
  })

  // Testa envio
  test("envia formulário", async () => {

    render(<FormularioContato />)

    const nome = screen.getByPlaceholderText(/seu nome/i)

    const mensagem = screen.getByPlaceholderText(/sua mensagem/i)

    const botao = screen.getByText(/enviar/i)

    // Digitando
    await userEvent.type(nome, "Ana")

    await userEvent.type(mensagem, "Olá")

    // Enviando
    await userEvent.click(botao)

    expect(window.alert).toHaveBeenCalled()
  })

})