import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import LocationDebug from "~/tests/components/location-debug";
import type { User } from "~/types/user";
import Users from "./Users";

const users: User[] = [
  {
    id: 1,
    login: "John",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
  },
  {
    id: 2,
    login: "Jane",
    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
  },
];

describe("<Users />", () => {
  test("renders <Users /> correctly", () => {
    render(
      <MemoryRouter>
        <Users users={users} />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "John" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Jane" })).toBeVisible();
    expect(screen.getByRole("list")).toBeVisible();
  });

  test("does not render anything if list of users is empty", () => {
    render(<Users users={[]} />);

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  test("navigates to user", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Users users={users} />
        <LocationDebug />
      </MemoryRouter>
    );

    expect(screen.getByTestId("location-debug")).toHaveTextContent("/");

    const [firstUser] = screen.getAllByRole("link");

    userEvent.click(firstUser);

    expect(screen.getByTestId("location-debug")).toHaveTextContent(
      "/user/John"
    );
  });
});
