import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "../App";

test("renderiza o componente Titulo", () => {
  render(<App />)

  const titulo = screen.getByText(/meu primeiro componente/i)
  expect(titulo).toBeTruthy()
})

test("renderiza o componente Paragrafo", () => {
  render(<App />)

  const texto = screen.getByText(/aprendendo react/i)
  expect(texto).toBeTruthy()
})