import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "../App";

test("renderiza o componente Titulo", () => {
  render(<App />);

  const titulo = screen.getByText(/meu primeiro projeto react com vite/i);
  expect(titulo).toBeTruthy();
});