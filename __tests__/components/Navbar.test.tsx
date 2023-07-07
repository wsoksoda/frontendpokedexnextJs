import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AllTheProviders } from "../../jest.setup";
import Navbar from "@/components/Navbar";

jest.mock("next/router", () => require("next-router-mock"));

describe("Navbar", () => {
  it("renders a heading", () => {
    render(
      <AllTheProviders>
        <Navbar />
      </AllTheProviders>
    );
    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(4);
  });
});
