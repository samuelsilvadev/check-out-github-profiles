import { render, screen } from "@testing-library/react";
import RepositoryCard, { type RepositoryCardProps } from "./RepositoryCard";

const props: RepositoryCardProps = {
  href: "http://github.com",
  name: "repository-1",
  description: "description-1",
};

describe("<RepositoryCard />", () => {
  test("renders <RepositoryCard /> correctly", () => {
    render(<RepositoryCard {...props} />);

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "http://github.com"
    );
    expect(screen.getByRole("heading", { name: "repository-1" })).toBeVisible();
    expect(screen.getByText("description-1")).toBeVisible();
  });
});
