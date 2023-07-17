import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { AllTheProviders } from "../../jest.setup";
import mockRouter from "next-router-mock";
import Pokemon from "../../pages/Pokemon";

/**
 * @jest-environment node
 */

// Mock the useRouter hook
jest.mock("next/router", () => require("next-router-mock"));

describe("Pokemon", () => {
  it("renders Bulbasaur", async () => {
    mockRouter.push(
      "/pokemon?id=1&offset=1&firstValue=ED213A&secondValue=93291E"
    );

    render(
      <AllTheProviders>
        <Pokemon />
      </AllTheProviders>
    );

    await waitForElementToBeRemoved(() =>
      screen.queryByText("Loading...")
    ).then(() => {
      const bulbasaur = screen.queryAllByText("Bulbasaur");
      expect(bulbasaur).toHaveLength(2);
    });
  });
  it("renders Bulbasaur id", async () => {
    mockRouter.push(
      "/pokemon?id=1&offset=1&firstValue=ED213A&secondValue=93291E"
    );

    render(
      <AllTheProviders>
        <Pokemon />
      </AllTheProviders>
    );
    const id = screen.queryAllByText("#1");
    expect(id).toBeInTheDocument;
  });
  it("renders buttons", async () => {
    mockRouter.push(
      "/pokemon?id=1&offset=1&firstValue=ED213A&secondValue=93291E"
    );

    render(
      <AllTheProviders>
        <Pokemon />
      </AllTheProviders>
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(4);
  });
  it("renders four links", async () => {
    mockRouter.push(
      "/pokemon?id=1&offset=1&firstValue=ED213A&secondValue=93291E"
    );

    render(
      <AllTheProviders>
        <Pokemon />
      </AllTheProviders>
    );
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
  });
});
