import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AllTheProviders } from "../../jest.setup";
import MobileFooter from "@/components/MobileFooter";

function forward(): void {}

function back(): void {}

describe("MobileFooter", () => {
  it("renders two buttons", () => {
    render(
      <AllTheProviders>
        <MobileFooter goBack={back} goForward={forward} />
      </AllTheProviders>
    );
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(2);
  });
});
