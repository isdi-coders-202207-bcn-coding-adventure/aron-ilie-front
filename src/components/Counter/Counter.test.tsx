import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Counter from "./Counter";

describe("Given a Counter component", () => {
  describe("When it is renderized", () => {
    test("Then it should show the countdown titles", () => {
      render(
        <Provider store={store}>
          <Counter />
        </Provider>
      );

      const days = screen.getByText("days");
      const hours = screen.getByText("hours");
      const minutes = screen.getByText("minutes");
      const seconds = screen.getByText("seconds");

      expect(days).toBeInTheDocument();
      expect(hours).toBeInTheDocument();
      expect(minutes).toBeInTheDocument();
      expect(seconds).toBeInTheDocument();
    });
  });
});
