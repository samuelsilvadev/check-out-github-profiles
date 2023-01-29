import { render, screen } from "@testing-library/react";
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
    render(<Users users={users} />);

    expect(screen.getByRole("heading", { name: "John" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Jane" })).toBeVisible();
    expect(screen.getByRole("list")).toBeVisible();
  });

  test("does not render anything if list of users is empty", () => {
    render(<Users users={[]} />);

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });
});
