import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Pokemon from "../pages/Pokemon";
import { AllTheProviders } from "../jest.setup";
import mockRouter from "next-router-mock";

// Mock the useRouter hook
jest.mock("next/router", () => require("next-router-mock"));

describe("Index", () => {
  it("renders a heading", async () => {
    mockRouter.push("/pokemon?id=1");

    render(
      <AllTheProviders>
        <Pokemon />
      </AllTheProviders>
    );

    await waitForElementToBeRemoved(() => screen.getByText("Loading...")).then(
      () => {
        const heading = screen.getByText("Bulbasaur");
        expect(heading).toBeInTheDocument();
      }
    );
  });
});
