import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("antd/lib/_util/responsiveObserve.js");
global.matchMedia = jest.fn();

test("renders username label", () => {
  const screen = render(<App />);
  screen.debug();
  const userNameLabel = screen.getByText(/Username/i);
  expect(userNameLabel).toBeInTheDocument();
});
