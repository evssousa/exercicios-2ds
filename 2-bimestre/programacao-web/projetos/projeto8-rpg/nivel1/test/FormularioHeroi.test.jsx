import { render, screen } from "@testing-library/react"
import { describe, test, expect, vi } from "vitest"

import FormularioHeroi from "../components/FormularioHeroi"

describe("FormularioHeroi", () => {

  test("renderiza input do nome", () => {

    render(
      <FormularioHeroi
        adicionarHeroi={vi.fn()}
      />
    )

    expect(
      screen.getByPlaceholderText(
        /nome do herói/i
      )
    ).toBeTruthy()

  })

  test("renderiza botão cadastrar", () => {

    render(
      <FormularioHeroi
        adicionarHeroi={vi.fn()}
      />
    )

    expect(
      screen.getByText(
        /cadastrar/i
      )
    ).toBeTruthy()

  })

})