import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("<App/>", () => {
  test("renders <App /> on `search users` correctly", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: "Search for github users" })
    ).toBeVisible();
  });

  test("renders <App /> on `user` correctly", () => {
    render(
      <MemoryRouter initialEntries={["/user/1"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "User" })).toBeVisible();
  });
});
