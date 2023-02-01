import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Pagination, { type PaginationProps } from "./Pagination";

const props: PaginationProps = {
  onNextPage: vi.fn(),
  onPreviousPage: vi.fn(),
  currentPage: 1,
  totalPages: 2,
};

describe("<Pagination />", () => {
  test("renders <Pagination /> correctly", () => {
    render(<Pagination {...props} />);

    expect(screen.getByRole("button", { name: "Previous" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Next" })).toBeVisible();
  });

  test("calls `onPreviousPage` when user clicks to navigate to previous page", () => {
    render(<Pagination {...props} currentPage={2} />);

    userEvent.click(screen.getByRole("button", { name: "Previous" }));

    expect(props.onPreviousPage).toHaveBeenCalledTimes(1);
  });

  test("calls `onNextPage` when user clicks to navigate to next page", () => {
    render(<Pagination {...props} />);

    userEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(props.onNextPage).toHaveBeenCalledTimes(1);
  });

  test("disables previous button if there is no previous page", () => {
    render(<Pagination {...props} currentPage={1} totalPages={5} />);

    expect(screen.getByRole("button", { name: "Previous" })).toBeDisabled();
  });

  test("disables next button if user is in last page", () => {
    render(<Pagination {...props} currentPage={5} totalPages={5} />);

    expect(screen.getByRole("button", { name: "Next" })).toBeDisabled();
  });

  test("does not render buttons if current page is invalid", () => {
    render(<Pagination {...props} currentPage={0} />);

    expect(
      screen.queryByRole("button", { name: "Previous" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Next" })
    ).not.toBeInTheDocument();
  });

  test("does not render buttons if total page is invalid", () => {
    render(<Pagination {...props} totalPages={0} />);

    expect(
      screen.queryByRole("button", { name: "Previous" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Next" })
    ).not.toBeInTheDocument();
  });

  test("does not render buttons if current page  and total page are 1", () => {
    render(<Pagination {...props} totalPages={1} currentPage={1} />);

    expect(
      screen.queryByRole("button", { name: "Previous" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Next" })
    ).not.toBeInTheDocument();
  });
});
