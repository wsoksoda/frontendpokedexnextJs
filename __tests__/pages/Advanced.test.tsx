import { render, screen } from "@testing-library/react";
import { AllTheProviders } from "../../jest.setup";
import mockRouter from "next-router-mock";
import Advanced from "../../pages/Advanced";

// Mock the useRouter hook
jest.mock("next/router", () => require("next-router-mock"));

describe("Advanced", () => {
  it("renders first search component", () => {
    mockRouter.push("");

    render(
      <AllTheProviders>
        <Advanced />
      </AllTheProviders>
    );

    const search1 = screen.getByRole("combobox");
    expect(search1).toBeInTheDocument;
  });
  it("renders a search component", () => {
    mockRouter.push("");

    render(
      <AllTheProviders>
        <Advanced />
      </AllTheProviders>
    );

    const search2 = screen.getAllByRole("option");
    expect(search2).toHaveLength(4);
  });
});
