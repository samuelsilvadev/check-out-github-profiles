import { render, screen } from "@testing-library/react";
import Repositories, { type RepositoriesProps } from "./Repositories";

const repositories: RepositoriesProps["repositories"] = [
  {
    id: "1",
    name: "repository-1",
    description: "description-1",
    href: "http://github.com",
  },
  {
    id: "2",
    name: "repository-2",
    description: "description-2",
    href: "http://github.com",
  },
];

describe("<Repositories />", () => {
  test("renders <Repositories /> correctly", () => {
    render(<Repositories repositories={repositories} />);

    expect(screen.getByRole("heading", { name: "repository-1" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "repository-2" })).toBeVisible();
    expect(screen.getByText("description-1")).toBeVisible();
    expect(screen.getByText("description-2")).toBeVisible();
    expect(screen.getByRole("list")).toBeVisible();
  });

  test("does not render anything if list of repositories is empty", () => {
    render(<Repositories repositories={[]} />);

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });
});
