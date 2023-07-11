import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AllTheProviders } from "../../jest.setup";
import DesktopPokemonCard from "@/components/DesktopPokemonCard";

const data = {
  id: 1,
  name: "Bulbasaur",
  type: [
    {
      id: 1,
      type: "Poison",
    },
    {
      id: 2,
      type: "Grass",
    },
  ],
  height: 7.0,
  weight: 69.0,
  ability: [
    {
      id: 1,
      ability: "Chlorophyll",
    },
    {
      id: 2,
      ability: "Overgrow",
    },
  ],
  eggGroup: [
    {
      id: 1,
      eggGroup: "Plant",
    },
    {
      id: 2,
      eggGroup: "Monster",
    },
  ],
  stats: {
    id: 1,
    hp: 45,
    speed: 45,
    attack: 49,
    defense: 49,
    specialAttack: 65,
    specialDefense: 65,
  },
  genus: "Seed Pokémon",
  description:
    "Bulbasaur can be seen napping in bright sunlight.\nThere is a seed on its back. By soaking up the sun’s rays,\nthe seed grows progressively larger.",
};

jest.mock("next/router", () => require("next-router-mock"));

describe("DesktopPokemonCard", () => {
  it("renders a head", async () => {
    render(
      <AllTheProviders>
        <DesktopPokemonCard data={data} />
      </AllTheProviders>
    );
    const bulbasaur = screen.queryAllByText("Bulbasaur");
    expect(bulbasaur).toHaveLength(2);
  });
  it("renders Bulbasaur id", async () => {
    render(
      <AllTheProviders>
        <DesktopPokemonCard data={data} />
      </AllTheProviders>
    );
    const id = screen.queryAllByText("#1");
    expect(id).toBeInTheDocument;
  });
});
