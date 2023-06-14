import { Input } from "@chakra-ui/react";
interface Prop {
  optionChoice: (chosen: string) => void;
}

function Search(props: Prop) {
  return (
    <Input
      onChange={(e) => {
        props.optionChoice(e.target.value);
      }}
    />
  );
}

export default Search;
