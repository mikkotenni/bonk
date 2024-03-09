import { render, screen, within } from "@testing-library/react";
import App from "./App";

const mainNavigationItems = [
  { id: "1", label: "Diiba", path: "/" },
  { id: "2", label: "Daaba", path: "/daaba" },
];

describe("App", () => {
  test("should render header", () => {
    render(<App mainNavigationItems={mainNavigationItems} />);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
  test("should render main navigation links", () => {
    render(<App mainNavigationItems={mainNavigationItems} />);
    const mainNav = screen.getByRole("navigation");
    const homeLink = within(mainNav).getByText(/diiba/i);
    const gadgetsLink = within(mainNav).getByText(/daaba/i);
    expect(homeLink).toBeInTheDocument();
    expect(gadgetsLink).toBeInTheDocument();
  });
});
