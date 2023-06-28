import { Select } from "@chakra-ui/react";
interface Prop {
  optionChoice: (chosen: string) => void;
}

function Type(props: Prop) {
  return (
    <>
      <Select
        aria-label="select type"
        onChange={(e) => {
          props.optionChoice(e.target.value);
        }}
      >
        <option value="none">Please select a Type</option>
        <option value="Poison">Poison</option>
        <option value="Grass">Grass</option>
        <option value="Fire">Fire</option>
        <option value="Flying">Flying</option>
        <option value="Water">Water</option>
        <option value="Bug">Bug</option>
        <option value="Normal">Normal</option>
        <option value="Electric">Electric</option>
        <option value="Ground">Ground</option>
        <option value="Fairy">Fairy</option>
        <option value="Fighting">Fighting</option>
        <option value="Psychic">Psychic</option>
        <option value="Rock">Rock</option>
        <option value="Steel">Steel</option>
        <option value="Ice">Ice</option>
        <option value="Ghost">Ghost</option>
        <option value="Dragon">Dragon</option>
        <option value="Dark">Dark</option>
      </Select>
    </>
  );
}

export default Type;
