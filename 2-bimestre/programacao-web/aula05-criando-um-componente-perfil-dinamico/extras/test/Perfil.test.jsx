import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

import Perfil from "../components/Perfil"

describe("Perfil", () => {

  test("renderiza nome", () => {
    render(<Perfil />)
    expect(screen.getByText(/nome/i)).toBeTruthy()
  })

  test("renderiza idade", () => {
    render(<Perfil />)
    expect(screen.getByText(/idade/i)).toBeTruthy()
  })

  test("renderiza profissão", () => {
    render(<Perfil />)
    expect(screen.getByText(/profissão/i)).toBeTruthy()
  })

  test("renderiza mensagem de idade", () => {
    render(<Perfil />)
    expect(screen.getByText(/idade/i)).toBeTruthy()
  })

})