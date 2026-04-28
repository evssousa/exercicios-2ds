import { render, screen } from "@testing-library/react"
import { test, expect } from "vitest"
import App from "../App"

test("renderiza um título h1", () => {
    render(<App />)

    const titulo = screen.getByRole("heading")
    expect(titulo).toBeTruthy()
})

test("exibe matéria favorita", () => {
    render(<App />)

    const texto = screen.getByText(/matéria favorita/i)
    expect(texto).toBeTruthy()
})

test("exibe filme favorito", () => {
    render(<App />)

    const filme = screen.getByText(/filme favorito/i)
    expect(filme).toBeTruthy()
})