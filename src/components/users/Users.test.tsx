import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import LocationDebug from "~/tests/components/location-debug";
import Users, { type UsersProps } from "./Users";

const users: UsersProps["users"] = [
  {
    id: "1",
    name: "John",
    src: "https://avatars.githubusercontent.com/u/1?v=4",
    alt: "John's avatar",
  },
  {
    id: "2",
    name: "Jane",
    src: "https://avatars.githubusercontent.com/u/2?v=4",
    alt: "Jane's avatar",
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

    expect(screen.getByTestId("location-debug")).toHaveTextContent("/user/1");
  });
});
