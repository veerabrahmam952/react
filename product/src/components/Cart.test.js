import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router";
import Cart from "./Cart";

describe("Cart Component", () => {
  it("renders 'No Items in the cart' when cart is empty", () => {
    render(
      <MemoryRouter>
        <Cart items={[]} />
      </MemoryRouter>
    );
    expect(screen.getByText(/No Items in the cart/i)).toBeInTheDocument();
    expect(screen.getByText(/Back/i)).toBeInTheDocument();
    expect(screen.getByText(/Proceed to Payment/i)).toBeInTheDocument();
  });

  it("renders cart items and total price correctly", () => {
    const items = [
      { id: 1, title: "Product A", price: 10, count: 2 },
      { id: 2, title: "Product B", price: 5, count: 1 },
    ];
    render(
      <MemoryRouter>
        <Cart items={items} />
      </MemoryRouter>
    );
    expect(screen.getByText(/Product A - \$10 \(brought 2\)/)).toBeInTheDocument();
    expect(screen.getByText(/Product B - \$5 \(brought 1\)/)).toBeInTheDocument();
    expect(screen.getByText(/Total Price: \$25.00/)).toBeInTheDocument();
  });
});