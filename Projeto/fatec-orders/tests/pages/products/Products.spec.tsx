import Products from "@/app/products/page";
import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { setupServer } from "msw/node";
import { env } from "@/config/env";
import { http } from "msw";

jest.mock("next/navigation", () => require("next-router-mock"));

const server = setupServer(
  http.get(`${env.apiBaseUrl}/produto`, () => {
    return Response.json({
      produtos: [
        {
          id: 1,
          descricao: "Bolacha",
          marca: "Tortuguita",
          varlo: 1.99,
          peso_gramas: 100,
          sabor: "morango",
        },
      ],
    });
  })
);

describe("Products list page", () => {
  beforeAll(() => {
    mockRouter.setCurrentUrl("/products");
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it("Should render products list", () => {
    render(<Products />);

    const productName = screen.findByRole("cell", {
      name: /Tortuguita/i,
    });

    console.log(productName);

    screen.logTestingPlaygroundURL();
  });
});
