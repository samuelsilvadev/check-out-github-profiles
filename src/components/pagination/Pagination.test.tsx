import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Pagination, { type PaginationProps } from "./Pagination";

const props: PaginationProps = {
  onNextPage: vi.fn(),
  onPreviousPage: vi.fn(),
};

describe("<Pagination />", () => {
  test("renders <Pagination /> correctly", () => {
    render(<Pagination {...props} />);

    expect(screen.getByRole("button", { name: "Previous" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Next" })).toBeVisible();
  });

  test("calls `onPreviousPage` when user clicks to navigate to preivous page", () => {
    render(<Pagination {...props} />);

    userEvent.click(screen.getByRole("button", { name: "Previous" }));

    expect(props.onPreviousPage).toHaveBeenCalledTimes(1);
  });

  test("calls `onNextPage` when user clicks to navigate to next page", () => {
    render(<Pagination {...props} />);

    userEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(props.onNextPage).toHaveBeenCalledTimes(1);
  });
});
