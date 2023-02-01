import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { rest } from "msw";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { MOCK_REPOSITORIES_BY_USER_RESPONSE } from "~/tests/mocks/repositories";
import { MOCK_USER_RESPONSE } from "~/tests/mocks/user";
import { buildApiUrl, server } from "~/tests/utils/setupServer";
import User from "./User";

const renderUserPage = () => {
  return render(
    <MemoryRouter initialEntries={["/user/randomuser"]}>
      <Routes>
        <Route path="/user/:userName" element={<User />} />
      </Routes>
    </MemoryRouter>
  );
};

describe("<User />", () => {
  test("displays loading indicator", async () => {
    server.use(
      rest.get(buildApiUrl("/users/:user"), (_, res, ctx) => {
        return res(ctx.delay(1000), ctx.json(MOCK_USER_RESPONSE));
      }),
      rest.get(buildApiUrl("/users/:user/repos"), (_, res, ctx) => {
        return res(ctx.json(MOCK_REPOSITORIES_BY_USER_RESPONSE));
      })
    );

    renderUserPage();

    expect(screen.getByText("Loading...")).toBeVisible();

    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."), {
      timeout: 5000,
    });
  });

  test("displays error indicator if user fails to load", async () => {
    server.use(
      rest.get(buildApiUrl("/users/:user"), (_, res, ctx) => {
        return res(ctx.status(400));
      }),
      rest.get(buildApiUrl("/users/:user/repos"), (_, res, ctx) => {
        return res(ctx.json(MOCK_REPOSITORIES_BY_USER_RESPONSE));
      })
    );

    renderUserPage();

    expect(screen.getByText("Loading...")).toBeVisible();

    await waitFor(() => {
      expect(
        screen.getByText("Something went wrong, let's try again")
      ).toBeVisible();
    });

    expect(screen.getByRole("button", { name: "Retry" })).toBeVisible();
  });

  test("displays error indicator if repositories fails to load", async () => {
    server.use(
      rest.get(buildApiUrl("/users/:user"), (_, res, ctx) => {
        return res(ctx.json(MOCK_USER_RESPONSE));
      }),
      rest.get(buildApiUrl("/users/:user/repos"), (_, res, ctx) => {
        return res(ctx.status(400));
      })
    );

    renderUserPage();

    expect(screen.getByText("Loading...")).toBeVisible();

    await waitFor(() => {
      expect(
        screen.getByText("Something went wrong, let's try again")
      ).toBeVisible();
    });

    expect(screen.getByRole("button", { name: "Retry" })).toBeVisible();
  });

  test("displays user and repositories", async () => {
    server.use(
      rest.get(buildApiUrl("/users/:user"), (_, res, ctx) => {
        return res(ctx.json(MOCK_USER_RESPONSE));
      }),
      rest.get(buildApiUrl("/users/:user/repos"), (_, res, ctx) => {
        return res(ctx.json(MOCK_REPOSITORIES_BY_USER_RESPONSE));
      })
    );

    renderUserPage();

    await waitFor(() => {
      expect(screen.getByText("tg-x")).toBeVisible();
    });

    expect(screen.getByText("random user")).toBeVisible();

    MOCK_REPOSITORIES_BY_USER_RESPONSE.forEach(({ description, name }) => {
      expect(screen.getByText(name)).toBeVisible();
      expect(screen.getByText(description as string)).toBeVisible();
    });
  });
});
