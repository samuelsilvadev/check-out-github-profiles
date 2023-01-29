import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import SearchUsersForm, { type SearchUsersFormProps } from "./SearchUsersForm";

const props: SearchUsersFormProps = {
  onSearch: vi.fn(),
};

describe("<SearchUsersForm/>", () => {
  test("renders <SearchUsersForm /> correctly", () => {
    render(<SearchUsersForm {...props} />);

    expect(screen.getByLabelText("Type a github username")).toBeVisible();
    expect(screen.getByRole("button", { name: "Search" })).toBeVisible();
  });

  test("updates search input when user types on it", () => {
    render(<SearchUsersForm {...props} />);

    const searchInput = screen.getByLabelText("Type a github username");

    userEvent.type(searchInput, "something");

    expect(searchInput).toHaveValue("something");
  });

  test("calls `onSearch` when form is submitted", () => {
    render(<SearchUsersForm {...props} />);

    const searchInput = screen.getByLabelText("Type a github username");
    const submitButton = screen.getByRole("button", { name: "Search" });

    userEvent.type(searchInput, "anything");
    userEvent.click(submitButton);

    expect(props.onSearch).toHaveBeenCalledTimes(1);
    expect(props.onSearch).toHaveBeenCalledWith({ searchTerm: "anything" });
  });
});
