import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import {
  describe,
  test,
  expect,
  vi
} from "vitest"

import App from "../App"

describe("Projeto 8", () => {

  test("renderiza título", () => {

    render(<App />)

    expect(
      screen.getByText(
        /gerenciador de personagens rpg/i
      )
    ).toBeTruthy()

  })

  test("cadastra personagem", async () => {

    render(<App />)

    const nome = screen.getByPlaceholderText(
      /nome do personagem/i
    )

    const classe = screen.getByPlaceholderText(
      /classe do personagem/i
    )

    const botao = screen.getByText(
      /cadastrar personagem/i
    )

    await userEvent.type(
      nome,
      "Arthur"
    )

    await userEvent.type(
      classe,
      "Guerreiro"
    )

    await userEvent.click(
      botao
    )

    expect(
      screen.getByText(
        /arthur - guerreiro/i
      )
    ).toBeTruthy()

  })

  test("atualiza contador", async () => {

    render(<App />)

    const nome = screen.getByPlaceholderText(
      /nome do personagem/i
    )

    const classe = screen.getByPlaceholderText(
      /classe do personagem/i
    )

    const botao = screen.getByText(
      /cadastrar personagem/i
    )

    await userEvent.type(
      nome,
      "Merlin"
    )

    await userEvent.type(
      classe,
      "Mago"
    )

    await userEvent.click(
      botao
    )

    expect(
      screen.getByText(
        /total de personagens: 1/i
      )
    ).toBeTruthy()

  })

  test("remove mensagem de lista vazia após cadastro", async () => {

    render(<App />)

    const nome = screen.getByPlaceholderText(
      /nome do personagem/i
    )

    const classe = screen.getByPlaceholderText(
      /classe do personagem/i
    )

    const botao = screen.getByText(
      /cadastrar personagem/i
    )

    await userEvent.type(
      nome,
      "Legolas"
    )

    await userEvent.type(
      classe,
      "Arqueiro"
    )

    await userEvent.click(
      botao
    )

    expect(
      screen.queryByText(
        /nenhum personagem cadastrado/i
      )
    ).toBeNull()

  })

  test("executa console.log quando lista é atualizada", async () => {

    const consoleSpy =
      vi.spyOn(console, "log")

    render(<App />)

    const nome = screen.getByPlaceholderText(
      /nome do personagem/i
    )

    const classe = screen.getByPlaceholderText(
      /classe do personagem/i
    )

    const botao = screen.getByText(
      /cadastrar personagem/i
    )

    await userEvent.type(
      nome,
      "Gandalf"
    )

    await userEvent.type(
      classe,
      "Mago"
    )

    await userEvent.click(
      botao
    )

    expect(
      consoleSpy
    ).toHaveBeenCalled()

    consoleSpy.mockRestore()

  })

})