import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { MemoryRouter } from "react-router-dom";
import {
  MOCK_ONE_USER_RESPONSE,
  MOCK_USER_BEING_SEARCHED_RESPONSE,
} from "~/tests/mocks/search";
import { buildApiUrl, server } from "~/tests/utils/setupServer";
import SearchUsers, { DEFAULT_SEARCH_TERM } from "./SearchUsers";

describe("<SearchUsers />", () => {
  test("displays loading indicator", async () => {
    server.use(
      rest.get(buildApiUrl("/search/users"), (_, res, ctx) => {
        return res(ctx.delay(1000), ctx.json(MOCK_ONE_USER_RESPONSE));
      })
    );

    render(
      <MemoryRouter>
        <SearchUsers />
      </MemoryRouter>
    );

    expect(screen.getByText("Loading...")).toBeVisible();

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });
  });

  test("displays error indicator", async () => {
    server.use(
      rest.get(buildApiUrl("/search/users"), (_, res, ctx) => {
        return res(ctx.status(400));
      })
    );

    render(
      <MemoryRouter>
        <SearchUsers />
      </MemoryRouter>
    );

    expect(screen.getByText("Loading...")).toBeVisible();

    await waitFor(() => {
      expect(
        screen.getByText("Something went wrong, let's try again")
      ).toBeVisible();
    });

    expect(screen.getByRole("button", { name: "Retry" })).toBeVisible();
  });

  test("loads list of users as soon as enters in page", async () => {
    server.use(
      rest.get(buildApiUrl("/search/users"), (_, res, ctx) => {
        return res(ctx.json(MOCK_ONE_USER_RESPONSE));
      })
    );

    render(
      <MemoryRouter>
        <SearchUsers />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("tg-x")).toBeVisible();
    });
  });

  test("searches users correctly", async () => {
    server.use(
      rest.get(buildApiUrl("/search/users"), (req, res, ctx) => {
        const query = req.url.searchParams.get("q");

        if (query === DEFAULT_SEARCH_TERM) {
          return res(ctx.json(MOCK_ONE_USER_RESPONSE));
        } else {
          return res(ctx.json(MOCK_USER_BEING_SEARCHED_RESPONSE));
        }
      })
    );

    render(
      <MemoryRouter>
        <SearchUsers />
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    const searchInput = screen.getByLabelText("Type a github username");

    userEvent.type(searchInput, "user");

    const submitButton = screen.getByRole("button", { name: "Search" });

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("user 2")).toBeVisible();
    });

    expect(screen.getByText("user 3")).toBeVisible();
  });
});
