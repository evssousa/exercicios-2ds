import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

import ListaPersonagens from "../components/ListaPersonagens"

describe("ListaPersonagens", () => {

  test("mostra mensagem quando lista vazia", () => {

    render(
      <ListaPersonagens personagens={[]} />
    )

    expect(
      screen.getByText(
        /nenhum personagem cadastrado/i
      )
    ).toBeTruthy()

  })

  test("renderiza personagem guerreiro", () => {

    render(
      <ListaPersonagens
        personagens={[
          {
            nome: "Arthur",
            classe: "Guerreiro"
          }
        ]}
      />
    )

    expect(
      screen.getByText(
        /arthur - guerreiro/i
      )
    ).toBeTruthy()

  })

  test("renderiza múltiplos personagens", () => {

    render(
      <ListaPersonagens
        personagens={[
          {
            nome: "Arthur",
            classe: "Guerreiro"
          },
          {
            nome: "Merlin",
            classe: "Mago"
          }
        ]}
      />
    )

    expect(
      screen.getByText(
        /merlin - mago/i
      )
    ).toBeTruthy()

  })

})