import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";

describe("<Avatar />", () => {
  test("renders <Avatar /> correctly", () => {
    render(<Avatar src="http//images/1.png" alt="user image" />);

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("src", "http//images/1.png");
    expect(image).toHaveAttribute("alt", "user image");
  });

  test.each(["lazy", "eager"] as const)(
    "renders an user image correctly regardless of the loading type",
    (loadingType) => {
      render(
        <Avatar
          src="http//images/1.png"
          alt="user image"
          loading={loadingType}
        />
      );

      const image = screen.getByRole("img");

      expect(image).toHaveAttribute("src", "http//images/1.png");
      expect(image).toHaveAttribute("alt", "user image");
      expect(image).toHaveAttribute("loading", loadingType);
    }
  );
});
