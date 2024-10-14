import Products from "@/app/products/page";
import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";

jest.mock("next/navigation", () => require("next-router-mock"));

describe("Products list page", () => {
  beforeAll(() => {
    mockRouter.setCurrentUrl("/products");
  });

  it("Should render products list", () => {
    render(<Products />);

    screen.findByRole("cell", {
      name: /dolly/i,
    });

    screen.logTestingPlaygroundURL();
  });
});
