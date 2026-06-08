import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import {
  describe,
  test,
  expect
} from "vitest"

import App from "../App"

describe("Cadastro de Heróis", () => {

  test("renderiza título", () => {

    render(<App />)

    expect(
      screen.getByText(
        /cadastro de heróis/i
      )
    ).toBeTruthy()

  })

  test("permite cadastrar um herói", async () => {

    render(<App />)

    const input = screen.getByPlaceholderText(
      /nome do herói/i
    )

    const botao = screen.getByText(
      /cadastrar/i
    )

    await userEvent.type(
      input,
      "Arthur"
    )

    await userEvent.click(
      botao
    )

    expect(
      screen.getByText(
        /arthur/i
      )
    ).toBeTruthy()

  })

  test("permite cadastrar mais de um herói", async () => {

    render(<App />)

    const input = screen.getByPlaceholderText(
      /nome do herói/i
    )

    const botao = screen.getByText(
      /cadastrar/i
    )

    await userEvent.type(
      input,
      "Arthur"
    )

    await userEvent.click(
      botao
    )

    await userEvent.type(
      input,
      "Merlin"
    )

    await userEvent.click(
      botao
    )

    expect(
      screen.getByText(
        /arthur/i
      )
    ).toBeTruthy()

    expect(
      screen.getByText(
        /merlin/i
      )
    ).toBeTruthy()

  })

})