import React from "react";
import { render, screen } from "@testing-library/react";
import Gadgets, { GadgetItem } from "./Gadgets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("GadgetItem", () => {
  test("should render a gadget", () => {
    render(<GadgetItem id="2024-03-09T13:34:11.373Z" name="Diiba" />);
    const gadget = screen.getByTestId("2024-03-09T13:34:11.373Z");
    expect(gadget).toBeInTheDocument();
  });
});

// Mock API functions.
jest.mock("../api/api", () => ({
  fetchGadgets: () =>
    Promise.resolve([{ id: "2024-03-09T13:34:11.373Z", name: "Daaba" }]),
  deleteGadget: (id) => Promise.resolve(),
  addGadget: (gadget) => Promise.resolve(),
}));

const queryClient = new QueryClient();

describe("Gadgets", () => {
  test("should render loading indicator", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Gadgets />
      </QueryClientProvider>
    );
    const gadgets = screen.getByText(/loading/i);
    expect(gadgets).toBeInTheDocument();
  });
  test("should render", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Gadgets />
      </QueryClientProvider>
    );
    const gadget = await screen.findByTestId("2024-03-09T13:34:11.373Z");
    expect(gadget).toBeInTheDocument();
  });
});
