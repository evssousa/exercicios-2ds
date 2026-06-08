import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

import PainelStatus from "../components/PainelStatus"

describe("PainelStatus", () => {

  test("mostra zero personagens", () => {

    render(
      <PainelStatus
        total={0}
      />
    )

    expect(
      screen.getByText(
        /total de personagens: 0/i
      )
    ).toBeTruthy()

  })

  test("mostra quantidade correta", () => {

    render(
      <PainelStatus
        total={3}
      />
    )

    expect(
      screen.getByText(
        /total de personagens: 3/i
      )
    ).toBeTruthy()

  })

})