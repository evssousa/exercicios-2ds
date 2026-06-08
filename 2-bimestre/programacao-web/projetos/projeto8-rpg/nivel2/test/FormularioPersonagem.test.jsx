import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, test, expect, vi } from "vitest"

import FormularioPersonagem from "../components/FormularioPersonagem"

describe("FormularioPersonagem", () => {

  test("renderiza campo nome", () => {

    render(
      <FormularioPersonagem
        adicionarPersonagem={vi.fn()}
      />
    )

    expect(
      screen.getByPlaceholderText(/nome do personagem/i)
    ).toBeTruthy()

  })

  test("renderiza campo classe", () => {

    render(
      <FormularioPersonagem
        adicionarPersonagem={vi.fn()}
      />
    )

    expect(
      screen.getByPlaceholderText(/classe do personagem/i)
    ).toBeTruthy()

  })

  test("renderiza botão cadastrar", () => {

    render(
      <FormularioPersonagem
        adicionarPersonagem={vi.fn()}
      />
    )

    expect(
      screen.getByText(/cadastrar personagem/i)
    ).toBeTruthy()

  })

  test("envia dados corretamente", async () => {

    const adicionarPersonagem = vi.fn()

    render(
      <FormularioPersonagem
        adicionarPersonagem={adicionarPersonagem}
      />
    )

    const nome = screen.getByPlaceholderText(
      /nome do personagem/i
    )

    const classe = screen.getByPlaceholderText(
      /classe do personagem/i
    )

    const botao = screen.getByText(
      /cadastrar personagem/i
    )

    await userEvent.type(nome, "Arthur")
    await userEvent.type(classe, "Guerreiro")

    await userEvent.click(botao)

    expect(
      adicionarPersonagem
    ).toHaveBeenCalled()

  })

})