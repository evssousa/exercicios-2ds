import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

import ListaHerois from "../components/ListaHerois"

describe("ListaHerois", () => {

  test("renderiza um herói", () => {

    render(
      <ListaHerois
        herois={[
          "Arthur"
        ]}
      />
    )

    expect(
      screen.getByText(
        /arthur/i
      )
    ).toBeTruthy()

  })

  test("renderiza vários heróis", () => {

    render(
      <ListaHerois
        herois={[
          "Arthur",
          "Merlin",
          "Legolas"
        ]}
      />
    )

    expect(
      screen.getByText(
        /merlin/i
      )
    ).toBeTruthy()

    expect(
      screen.getByText(
        /legolas/i
      )
    ).toBeTruthy()

  })

})