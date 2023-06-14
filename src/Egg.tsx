import { Select } from "@chakra-ui/react";

interface Prop {
  optionChoice: (chosen: string) => void;
}

function Egg(props: Prop) {
  return (
    <Select
      aria-label="select type"
      onChange={(e) => {
        props.optionChoice(e.target.value);
      }}
    >
      <option value="Plant">Plant</option>
      <option value="Monster">Monster</option>
      <option value="Dragon">Dragon</option>
      <option value="Water1">Water1</option>
      <option value="Bug">Bug</option>
      <option value="Flying">Flying</option>
      <option value="Ground">Ground</option>
      <option value="Fairy">Fairy</option>
      <option value="No-Eggs">No-Eggs</option>
      <option value="Humanshape">Humanshape</option>
      <option value="Water2">Water2</option>
      <option value="Mineral">Mineral</option>
      <option value="Indeterminate">Indeterminate</option>
      <option value="Water3">Water3</option>
      <option value="Ditto">Ditto</option>
    </Select>
  );
}

export default Egg;
