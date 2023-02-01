import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { MemoryRouter } from "react-router-dom";
import { MOCK_REPOSITORIES_BY_USER_RESPONSE } from "~/tests/mocks/repositories";
import { MOCK_ONE_USER_RESPONSE } from "~/tests/mocks/search";
import { MOCK_USER_RESPONSE } from "~/tests/mocks/user";
import { buildApiUrl, server } from "~/tests/utils/setupServer";
import App from "./App";

describe("<App/>", () => {
  test("renders <App /> on `search users` correctly", () => {
    server.use(
      rest.get(buildApiUrl("/search/users"), (_, res, ctx) => {
        return res(ctx.json(MOCK_ONE_USER_RESPONSE));
      })
    );

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
    server.use(
      rest.get(buildApiUrl("/users/:user"), (_, res, ctx) => {
        return res(ctx.json(MOCK_USER_RESPONSE));
      }),
      rest.get(buildApiUrl("/users/:user/repos"), (_, res, ctx) => {
        return res(ctx.json(MOCK_REPOSITORIES_BY_USER_RESPONSE));
      })
    );

    render(
      <MemoryRouter initialEntries={["/user/randomuser"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "User Page" })).toBeVisible();
  });

  test("renders <App /> on `not found` correctly", () => {
    render(
      <MemoryRouter initialEntries={["/not-found"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: "The content you are looking for was not found",
      })
    ).toBeVisible();
    expect(screen.getByText("Let's return to the main page")).toBeVisible();
    expect(screen.getByRole("link", { name: "Home" })).toBeVisible();
  });
});
