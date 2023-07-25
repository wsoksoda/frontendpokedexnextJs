import { Input } from "@chakra-ui/react";
interface Prop {
  optionChoice: (chosen: string) => void;
}

function Ability({ optionChoice }: Prop) {
  return (
    <Input
      onChange={(e) => {
        optionChoice(e.target.value);
      }}
    />
  );
}

export default Ability;
