import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";

describe("<UserCard />", () => {
  test("renders <UserCard /> correctly", () => {
    render(
      <UserCard
        image={{ src: "http//images/1.png", alt: "user image" }}
        userName="John Doe"
      />
    );

    expect(screen.getByRole("img")).toBeVisible();
    expect(screen.getByRole("heading", { name: "John Doe" })).toBeVisible();
  });
});
